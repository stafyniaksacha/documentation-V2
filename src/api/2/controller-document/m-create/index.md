---
layout: full.html.hbs
algolia: true
title: mCreate
---

# mCreate

{{{since "1.0.0"}}}

Create multiple documents. 

If a document identifier already exists, the creation fails for that document.

Return a [partial error]({{ site_base_path }}api/2/errors/#partialerror) if one or more document creations fail.

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
        // document content
      }
    },
    {
      // Optional. If not provided, will be generated automatically.
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
  "action": "mCreate",
  "body": {
    "documents": [
      {
        // Optional. If not provided, will be generated automatically.
        "_id": "<documentId>",
        "body": {
          "document": "body"
        }
      },
      {
        // Optional. If not provided, will be generated automatically.
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

Return a `hits` array, containing the list of created documents, in the same order than the one provided in the query.

Each created document is an object with the following properties:

* `_id`: created document unique identifier
* `_source`: document content
* `_version`: version of the created document (should be `1`)
* `created`: a boolean telling whether a document is created (should be `true`)

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
        "_source": {
          // document content
        },
        "_version": 1,
        "created": true
      },
      {
        "_id": "<anotherDocumentId>",
        "_source": {
          "// document content
        "_version": 1,
        "created": true
      }
    ],
    "total": 2
  }
}
```
