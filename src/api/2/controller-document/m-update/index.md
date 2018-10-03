---
layout: full.html.hbs
algolia: true
title: mUpdate
---

# mUpdate

{{{since "1.0.0"}}}

Update multiple documents.

Return a partial error (with status 206) if one or more documents cannot be updated.

---

## Arguments

* `collection`: data collection
* `index`: data index

**Options:**

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the updates are indexed
* `retryOnConflict`: conflicts may occur if the same document gets updated multiple times within a short timespan in a database cluster. You can set the `retryOnConflict` optional argument (with a retry count), to tell Kuzzle to retry the failing updates the specified amount of times before rejecting the request with an error.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_mUpdate[?refresh=wait_for][&retryOnConflict=<retries>]
Method: PUT  
Body:  
```

```js
{
  "documents": [
    {
      "_id": "<documentId>",
      "body": {
        "partial": "body",
        ...
      }
    },
    {
      "_id": "<anotherDocumentId>",
      "body": {
        "partial": "body",
        ...
      }
    },
    ...
  ]
}
```

### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "mUpdate",
  "body": {
    "documents": [
      {
        "_id": "<documentId>",
        "body": {
          "partial": "body",
        }
      },
      {
        "_id": "<anotherDocumentId>",
        "body": {
          "partial": "body",
        }
      },
    ]
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
  "action": "mUpdate",
  "refresh": "wait_for",
  "retryOnConflict": "<number of retries>",
  "controller": "document",
  "requestId": "<unique request identifier>",
  "result": {
    "hits": [
      {
        "_id": "<documentId>",
        "_index": "<index>",
        "_shards": {
          "failed": 0,
          "successful": 1,
          "total": 2
        },
        "_type": "<collection>",
        "_version": 2,
        "result": "updated"
      },
      {
        "_id": "<anotherDocumentId>",
        "_index": "<index>",
        "_shards": {
          "failed": 0,
          "successful": 1,
          "total": 2
        },
        "_type": "<collection>",
        "_version": 2,
        "result": "updated"
      }
    ],
    "total": "<number of updated documents>"
  }
}
```
