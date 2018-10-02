---
layout: full.html.hbs
algolia: true
title: mCreate
---

# mCreate

{{{since "1.0.0"}}}

Create multiple documents. 

If a document ID already exists, the creation fails for that document.

Return a [partial error]({{ site_base_path }}api/2/errors/#partialerror) if one or more documents creations fail.

---

## Arguments

* `collection`: data collection
* `index`: data index

**Options:**

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the newly created documents are indexed

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_mCreate[?refresh=wait_for]
Method: POST  
Body:
```

```js
{
  "documents": [
    {
      // Optional. If not provided, will be generated automatically.
      "_id": "<documentId>", 
      "body": {
        "document": "body",
        ...
      }
    },
    {
      // Optional. If not provided, will be generated automatically.
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
  "action": "mCreate",
  "refresh": "wait_for",
  "body": {
    "documents": [
      {
        "_id": "<documentId>",
        "body": {
          "document": "body"
        }
      },
      {
        "_id": "<anotherDocumentId>",
        "body": {
          "document": "body"
        }
      }
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
  "action": "mCreate",
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
        "_version": 1,
        "created": true,
        "result": "created"
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
        "_version": 1,
        "created": true,
        "result": "created"
      },
      {
        // Other created documents
      }
    ],
    "total": "<number of created documents>"
  }
}
```
