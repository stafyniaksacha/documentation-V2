---
layout: full.html.hbs
algolia: true
title: count
---

# count

{{{since "1.0.0"}}}


Given some filters, gets the number of matching documents from Kuzzle.

Kuzzle uses the [ElasticSearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/5.x/query-dsl.html) syntax.

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
  // A set of filters or queries matching documents you are looking for.
  // Use "query" instead of "filter" if you want to perform a query instead.
  "filter": {
    ...
  }
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
    "filter": {}
  },

  "includeTrash": false
}
```

---

## Response

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
    "count": "<number of found documents>"
  }
}
```
