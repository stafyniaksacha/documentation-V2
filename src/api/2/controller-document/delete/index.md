---
layout: full.html.hbs
algolia: true
title: delete
---

# delete

{{{since "1.0.0"}}}


Delete the document identified by the provided unique ID.

---

## Arguments

* `collection`: data collection
* `documentId`: unique ID of the document to delete
* `index`: data index

**Options:**

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the deletion has been indexed

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/<documentId>[?refresh=wait_for]
Method: DELETE
```

### Other protocols


```json
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "delete",
  "refresh": "wait_for",

  "_id": "<documentId>"
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
  "action": "delete",
  "requestId": "<unique request identifier>",
  "result": {
    "_id": "<documentId>" // The deleted document identifier
  }
}
```
