---
layout: full.html.hbs
algolia: true

title: mDelete
---

# mDelete

{{{since "1.0.0"}}}

Delete multiple documents.

Return a [partial error]({{ site_base_path }}api/2/errors/#partialerror) if one or more document cannot be deleted.

---

## Arguments

* `collection`: data collection
* `index`: data index

**Options:**

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the deletions are indexed

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_mDelete[?refresh=wait_for]
Method: DELETE  
Body:
```

```js
{
  "ids": ["<documentId>", "<anotherDocumentId>", ...]
}
```


### Other protocols


```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "mDelete",
  "body": {
    "ids": ["<documentId>", "<anotherDocumentId>"]
  }
}
```

---

## Response

```js
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "action": "mDelete",
  ["refresh": "wait_for",]
  "controller": "document",
  "requestId": "<unique request identifier>",
  "result": [
    "<documentId>",
    "<anotherDocumentId>",
    ...
  ]
}
```
