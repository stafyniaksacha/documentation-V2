---
layout: full.html.hbs
algolia: true
title: deleteByQuery
---

# deleteByQuery

{{{since "1.0.0"}}}

Delete documents matching the provided search query, using the [ElasticSearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/5.4/query-dsl.html) syntax.

---

## Arguments

* `collection`: data collection
* `index`: data index

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_query
Method: DELETE  
Body:
```

```js
{
  // A set of filters or queries matching documents you are looking for.
  // Use "query" instead of "filter" if you want to perform a query instead.
  "query": {
    ...
  }
}
```

### Other protocols

```json
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "deleteByQuery",

  "body": {
    "query": {}
  }
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "deleteByQuery",
  "requestId": "<unique request identifier>",
  "result": {
    // Array of strings listing the IDs of removed documents
    "hits": ["id1", "id2", ..., "idn"]
  }
}
```
