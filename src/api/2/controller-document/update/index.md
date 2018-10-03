---
layout: full.html.hbs
algolia: true
title: update
---

# update

{{{since "1.0.0"}}}

Update a document content.

---

## Arguments

* `collection`: data collection
* `documentId`: unique identifier of the document to update
* `index`: data index

**Options:**

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the update is indexed
* `retryOnConflict`: conflicts may occur if the same document gets updated multiple times within a short timespan, in a database cluster. You can set the `retryOnConflict` optional argument (with a retry count), to tell Kuzzle to retry the failing updates the specified amount of times before rejecting the request with an error.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/<documentId>/_update[?refresh=wait_for][&retryOnConflict=<int>]
Method: PUT  
Body:
```

```js
{
  "field_to_update1": "new value",
  "field_to_update2": "new value",
  ...
}
```

### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "update",
  "refresh": "wait_for",
  "retryOnConflict": "<number of retries>",
  "_id": "<documentId>",

  "body": {
    "field_to_update1": "new value",
    "field_to_update2": "new value",
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
  "controller": "document",
  "action": "update",
  "requestId": "<unique request identifier>",
  "result": {
    "_id": "<documentId>",
    "_version": <number>, // The new version number of this document
    "created": false
  }
}
```
