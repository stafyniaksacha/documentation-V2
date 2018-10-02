---
layout: full.html.hbs
algolia: true
title: get
---

# get

{{{since "1.0.0"}}}

Get a document using its provided unique ID.

---

## Arguments

* `collection`: data collection
* `documentId`: document unique identifier
* `index`: data index

**Options:**

* `includeTrash`: if true, documents in the [trashcan]({{ site_base_path }}guide/2/essentials/document-metadata/) can be returned

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/<documentId>[?includeTrash=<true|false>]
Method: GET
```

### Other protocols


```json
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "get",
  "_id": "<documentId>",

  "includeTrash": false
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
  "controller": "document",
  "action": "get",
  "requestId": "<unique request identifier>",
  "result": {
    "_id": "<documentId>",
    "_index": "<index>",
    "_type": "<collection>",
    "_version": 1,
    "_source": {
      "name": {
        "first": "Steve",
        "last": "Wozniak"
      },
      "hobby": "Segway polo",
      // Kuzzle metadata
      "_kuzzle_info": {
        "author": "Bob",
        "createdAt": 1481816934209,
        "updatedAt": null,
        "updater": null,
        "active": true,
        "deletedAt": null
      }
      ...
    }
  }
}
```
