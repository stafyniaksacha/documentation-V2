---
layout: full.html.hbs
algolia: true
title: createOrReplace
---

# createOrReplace

{{{since "1.0.0"}}}

Creates a new document in the persistent data storage, or replace it if it already exists.


---

## Arguments

* `collection`: data collection
* `documentId`: unique identifier of the document to create or replace
* `index`: data index

**Options:**

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the created/replaced document is indexed

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/<documentId>[?refresh=wait_for]
Method: PUT  
Body:
```

```js
{
  // Document content
}
```

### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "createOrReplace",
  "refresh": "wait_for",
  "_id": "<documentId>",    
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
  "action": "createOrReplace",
  "requestId": "<unique request identifier>",
  "result": {
    "_id": "<documentId>",
    "_source": { // Document content
      ...
    },
    "_version": <number>,// The new version number of this document
    "created": <boolean> // if false, an existing document has been replaced
  }
}
```
