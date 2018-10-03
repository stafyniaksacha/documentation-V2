---
layout: full.html.hbs
algolia: true
title: mGet
---

# mGet

{{{since "1.0.0"}}}

Get multiple documents.

Return a [partial error]({{ site_base_path }}api/2/errors/#partialerror) if one or more documents cannot be retrieved.

---

## Arguments

* `collection`: data collection
* `index`: data index

**Options:**

* `includeTrash`: if set, documents in the [trashcan]({{ site_base_path }}guide/2/essentials/document-metadata/) can be returned.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_mGet[?includeTrash=<true|false>]
Method: POST  
Body:
```

```js
{
  "ids": ["<documentId>", "<anotherDocumentId>"]
}
```


### Other protocols


```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "mGet",
  "body": {
    "ids": ["<documentId>", "<anotherDocumentId>"]
  },
  "includeTrash": false
}
```

---

## Response

Return a `hits` array with the list of retrieved documents.

Each document is an object with the following properties:

* `_id`: document unique identifier
* `_source`: document content
* `_version`: version number of the document


```js
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "action": "mGet",
  "controller": "document",
  "requestId": "<unique request identifier>",
  "result": {
    "hits": [
      {
        "_id": "<documentId>",
        "_source": {
          // document content
        },
        "_version": 4
      },
      {
        "_id": "<anotherDocumentId>",
        "_source": {
          // document content
        },
        "_version": 2
      }
    ]
    "total": 2
  }
}
```
