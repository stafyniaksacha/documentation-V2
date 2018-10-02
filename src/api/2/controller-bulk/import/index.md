---
layout: full.html.hbs
algolia: true

title: import
---

# import

{{{since "1.0.0"}}}

A bulk import allows your application to perform multiple write operations in a single request.

This is especially useful if you want to create a large number of documents. A bulk import request will execute faster than calls to [document:mCreate]({{ site_base_path }}api/2/controller-document/m-create)

The syntax for bulk imports closely resembles the
[ElasticSearch Bulk API](https://www.elastic.co/guide/en/elasticsearch/reference/5.x/docs-bulk.html).

Bulk imports do not emit document events in Kuzzle, meaning that you <strong>won't receive any real-time notfications</strong> on your document subcriptions
even if some of the documents in the import match your subscription filters.

If a subset of the documents fail to save, the client will receive a [PartialError]({{ site_base_path }}api/2/documentation/errors/#partialerror) error.

---

## Arguments

* `collection`: data collection
* `index`: data index

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_bulk
Method: POST  
Body:
```

```js
{
  // Data mapping using ElasticSearch bulk syntax.
  "bulkData": [
    {"create": {}},
    {"a": "document", "with": "any", "number": "of fields"},
    {"create": {}},
    {"another": "document"},
    {"create": {}},
    {"and": {"another": "one"}},
    {"...": "..."}
  ]
}
```

### Other protocols

```json
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "bulk",
  "action": "import",

  "body": {
    "bulkData": [
      {"create": {}},
      {"a": "document", "with": "any", "number": "of fields"},
      {"create": {}},
      {"another": "document"},
      {"create": {}},
      {"and": {"another": "one"}},
      {"...": "..."}
    ]
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
  "controller": "bulk",
  "action": "import",
  "requestId": "<unique request identifier>",
  "result": {
    // The list of executed queries, with their status
    "hits": [
      {
        "create": {
          "_id": "<documentId>",
          "status": "<HTTP status code>"
        }
      },
      {
        "create": {
          "_id": "<documentId>",
          "status": "<HTTP status code>"
        }
      },
      {
        "create": {
          "_id": "<documentId>",
          "status": "<HTTP status code>"
        }
      }
    ]
  }
}
```

