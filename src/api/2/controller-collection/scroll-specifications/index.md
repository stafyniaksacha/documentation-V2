---
layout: full.html.hbs
algolia: true
title: scrollSpecifications
---

# scrollSpecifications

{{{since "1.0.0"}}}

This method moves a result set cursor forward, created by the [`searchSpecifications` request]({{ site_base_path }}api/2/controller-collection/search-specifications/) when the `scroll` argument is provided.

The response may contain a *different* cursor identifier, pointing to the next page of the results.

The results that are returned from a `scrollSpecifications` request reflect the state of the index at the time that the initial search request was made, like a snapshot in time.  
Subsequent changes to documents (index, update or delete) will only affect later search requests.

---

## Arguments

* `collection`: data collection
* `index`: data index
* `scrollId`: cursor identifier, obtained with ({{ site_base_path }}api/2/controller-collection/search-specifications)

**Options:**

* `scroll`: reset the cursor TTL to the provided duration, using the [time to live](https://www.elastic.co/guide/en/elasticsearch/reference/5.4/common-options.html#time-units) format.


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/validations/_scroll/<scrollId>[?scroll=<time to live>]
Method: GET
```

### Other protocols


```json
{
  "controller": "collections",
  "action": "scrollSpecifications",
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
  "action": "scrollSpecifications",
  "controller": "collection",
  "requestId": "<unique request identifier>",
  "result": {
    // scroll requests may return a new scroll identifier
    // only the most recent scrollId should be used
    "scrollId": "<new scroll id>",

    // An array of objects containing your retrieved documents
    "hits": [
      {
        "_id": "myIndex#myCollection",
        "_index": "%kuzzle",
        "_score": 1,
        "_source": {
          "collection": "myCollection",
          "index": "myIndex",
          "validation": {
            "fields": {
              "fieldName": {
                "defaultValue": "a default value",
                "mandatory": true,
                "multivalued": {
                  "maxCount": 5,
                  "minCount": 1,
                  "value": true
                },
                "type": "string",
                "typeOptions": {
                  "length": {
                    "max": 12,
                    "min": 2
                  }
                }
              }
            },
            "strict": true
          }
        },
        "_type": "validations"
      },
      {
        ...
      }
    ],
    "total": <number of found specifications>
  }
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
- [NotFoundError]({{ site_base_path }}api/2/errors/#notfounderror)
