---
layout: full.html.hbs
algolia: true

title: create
---

# create

{{{since "1.0.0"}}}

Create a new document in the persistent data storage.

Return an error if the document already exists.

---

## Arguments

* `collection`: data collection
* `index`: data index

**Options:**

* `documentId`: set the document unique ID to the provided value, instead of auto-generating a random ID
* `refresh`: if set to `wait_for`, Kuzzle will not respond until the newly created document is indexed

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_create[?refresh=wait_for]
Alternative URL: http://kuzzle:7512/<index>/<collection>/<documentId>/_create[?refresh=wait_for]
Method: POST  
Body:
```

```js
{
  // document content
}
```


### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "create",
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
  "action": "create",
  "requestId": "<unique request identifier>",
  "result": {
    "_id": "<documentId>",  // The generated or provided document id
    "_version": 1 // The version of the document in the persistent data storage
    "_source": { // The created document
      ...
    },
  }
}
```
