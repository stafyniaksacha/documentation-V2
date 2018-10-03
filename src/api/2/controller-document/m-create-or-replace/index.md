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
        // document content
      }
    },
    {
      "_id": "<anotherDocumentId>",
      "body": {
        // document content
      }
    }
  ]
}
```

### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "mCreateOrReplace",
  "body": {
    "documents": [
      {
        "_id": "<documentId>",
        "body": {
          // document content
        }
      },
      {
        "_id": "<anotherDocumentId>",
        "body": {
          // document content
        }
      }
    ]
  }
}
```

---

## Response

Return a `hits` array, containing the list of created documents, in the same order than the one provided in the query.

Each created document is an object with the following properties:

* `_id`: created document unique identifier
* `_source`: document content
* `_version`: version number of the document 
* `created`: a boolean telling whether a document is created 

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
        "_source": {
          // document content
        },
        "_version": 2,
        "created": false
      },
      {
        "_id": "<anotherDocumentId>",
        "_source": {
          // document content
        },
        "_version": 1,
        "created": true
      }
    ],
    "total": 2
  }
}
```
