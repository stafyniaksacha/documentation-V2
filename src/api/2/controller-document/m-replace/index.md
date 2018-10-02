---
layout: full.html.hbs
algolia: true
title: mReplace
---

# mReplace

{{{since "1.0.0"}}}

Replace multiple documents.

Return a [partial error]({{ site_base_path }}api/2/errors/#partialerror) if one or more documents cannot be replaced.

---

## Arguments

* `collection`: data collection
* `index`: data index

**Options:**

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the replacements are indexed

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_mReplace[?refresh=wait_for]
Method: PUT  
Body:
```

```json
{
  "documents": [
    {
      "_id": "<documentId>", 
      "body": {
        "document": "body",
        ...
      }
    },
    {
      "_id": "<anotherDocumentId>",
      "body": {
        "document": "body",
        ...
      }
    },
    ...
  ]
}
```

### Other protocols


```json
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "mReplace",
  "refresh": "wait_for",
  "body": {
    "documents": [
      {
        "_id": "<documentId>",
        "body": {
          "document": "body",
        }
      },
      {
        "_id": "<anotherDocumentId>",
        "body": {
          "document": "body",
        }
      },
    ]
  }
}
```

---

## Response

```json
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "action": "mReplace",
  "controller": "document",
  "requestId": "<unique request identifier>",
  "result": {
    "hits": [
      {
        "_id": "<documentId>",
        "_index": "<index>",
        "_shards": {
          "failed": 0,
          "successful": 1,
          "total": 2
        },
        "_source": {
          "document": "body"
        },
        "_type": "<collection>",
        "_version": 2,
        "created": false,
        "result": "updated"
      },
      {
        "_id": "<anotherDocumentId>",
        "_index": "<index>",
        "_shards": {
          "failed": 0,
          "successful": 1,
          "total": 2
        },
        "_source": {
          "document": "body"
        },
        "_type": "<collection>",
        "_version": 2,
        "created": false,
        "result": "updated"
      }
    ],
    "total": "<number of replaced documents>"
  }
}
```
