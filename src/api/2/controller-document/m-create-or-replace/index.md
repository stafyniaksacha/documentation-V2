---
layout: full.html.hbs
algolia: true
title: mCreateOrReplace
---

# mCreateOrReplace

{{{since "1.0.0"}}}

Create or replace multiple documents.

Return a [partial error]({{ site_base_path }}api/2/errors/#partialerror) if one or more documents cannot be created or replaced.

---

## Arguments

* `collection`: data collection
* `index`: data index

**Options:**

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the created/replaced documents are indexed

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_mCreateOrReplace[?refresh=wait_for]
Method: PUT  
Body:
```

```js
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
  "action": "mCreateOrReplace",
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
  "action": "mCreateOrReplace",
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
      },
      {
       // Other created or replaced documents
      }
    ],
    "total": "<number of created or replaced documents>"
  }
}
```
