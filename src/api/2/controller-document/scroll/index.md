---
layout: full.html.hbs
algolia: true
title: scroll
---

# scroll

{{{since "1.0.0"}}}

This method moves a result set cursor forward, created by a [`search` query]({{ site_base_path }}api/2/controller-document/search/) with the `scroll` argument provided.

The response may contain a *different* cursor identifier, pointing to the next page of results.

The results that are returned from a `scroll` request reflect the state of the index at the time that the initial search request was made, like a snapshot in time. Subsequent changes
to documents (index, update or delete) will only affect later search requests.

---

## Arguments

* `collection`: data collection
* `index`: data index
* `scrollId`: cursor unique identifier, created by either a search or a scroll query

**Options:**

* `scroll`: refresh the cursor duration, using the [time to live](https://www.elastic.co/guide/en/elasticsearch/reference/5.4/common-options.html#time-units) syntax.


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_scroll/<scrollId>[?scroll=<time to live>]
Method: GET
```

### Other protocols

```js
{
  "controller": "document",
  "action": "scroll",
  "scrollId": "<scrollId>",
  "scroll": "<time to live>"
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "action": "scroll",
  "controller": "document",
  "requestId": "<unique request identifier>",
  "result": {
    // scroll requests may return a new scroll identifier
    // only the most recent scrollId should be used
    "scrollId": "<new scroll id>",

    // An array of objects containing your retrieved documents
    "hits": [
      {
        "_id": "<document unique identifier>",
        "_score": 0,          // Document search relevance score
        "_source": { .. }     // Document content
      },
      {
        // Another document... and so on
      }
    ],
    // Total number of found documents (not the number of 
    // returned documents in this single response page)
    "total": 42
  }
}
```
