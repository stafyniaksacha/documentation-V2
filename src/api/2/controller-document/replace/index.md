---
layout: full.html.hbs
algolia: true
title: replace
---

# replace

{{{since "1.0.0"}}}

Replace the content of an existing document.

---

## Arguments

* `collection`: data collection
* `documentId`: unique ID of the document to replace
* `index`: data index

**Options:**

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the new document content is indexed

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/<documentId>/_replace[?refresh=wait_for]
Method: PUT  
Body:
```

```js
{
  // new document content
}
```

### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "replace",
  "refresh": "wait_for",
  "body": {}
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
  "action": "replace",
  "requestId": "<unique request identifier>",
  "result": {
    "_id": "<documentId>",
    "_source": { 
      // The resulting document
    },
    "_version": "<number>", // The new version number of this document
    "created": false
  }
}
```
