---
layout: full.html.hbs
algolia: true
title: count
---

# count

{{{since "1.0.0"}}}

Count documents matching the provided query.

Uses the [ElasticSearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl.html) syntax.

---

## Arguments

* `collection`: data collection
* `index`: data index

**Options:**

* `includeTrash`: include documents from the [trashcan]({{ site_base_path }}guide/2/essentials/document-metadata/)

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_count[?includeTrash=<boolean>]
Method: POST  
Body:
```

```js
{
  // Search query/filter following Elasticsearch's syntax
}
```

### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "count",
  "body": {
    // Search query/filter following Elasticsearch's syntax
  },
  "includeTrash": false
}
```

---

## Response

Return an object with the `count` property, an integer showing the number of documents matching the provided search query:

```js
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "count",
  "requestId": "<unique request identifier>",
  "result": {
    "count": 42
  }
}
```
