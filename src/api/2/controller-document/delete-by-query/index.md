---
layout: full.html.hbs
algolia: true
title: deleteByQuery
---

# deleteByQuery

{{{since "1.0.0"}}}

Delete documents matching the provided search query, using the [ElasticSearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl.html) syntax.

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
  "query": {
    // ...
  }
}
```

### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "deleteByQuery",
  "body": {
    "query": {
      // ...
    }
  }
}
```

---

## Response

Return a `hits` array containing the list of deleted document identifiers.

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
    "hits": [
      "id 1", 
      "id 2", 
      "id ...", 
      "id n"
    ]
  }
}
```
