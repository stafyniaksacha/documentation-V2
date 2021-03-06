---
layout: full.html.hbs
title: refresh
---

# refresh

{{{since "1.0.0"}}}

Forces an immediate [reindexation](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/docs-refresh.html) of the provided index.

When writing or deleting documents in Kuzzle, the changes need to be indexed before being reflected in the search results.  
By default, this operation can take up to 1 second.

**Note:** forcing immediate refreshes comes with performance costs, and should only performed when absolutely necessary.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/_refresh
Method: POST
```

### Other protocols


```js
{
  "index": "<index>",
  "controller": "index",
  "action": "refresh"
}
```

---

## Arguments

* `index`: data index to refresh

---

## Response

Returns an object detailing the status of the forced refresh.

```javascript
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "controller": "index",
  "action": "refresh",
  "requestId": "<unique request identifier>",
  "result": {
    "_shards": {
        "failed": 0,
        "succressful": 5,
        "total": 10
    }
  }
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/1/essentials/errors/#common-errors)
- [NotFoundError]({{ site_base_path }}api/1/essentials/errors/#notfounderror)
