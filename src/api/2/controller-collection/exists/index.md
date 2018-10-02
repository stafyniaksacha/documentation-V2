---
layout: full.html.hbs
algolia: true
title: exists
---

# exists

{{{since "1.0.0"}}}

Checks if a collection exists in Kuzzle.

---

## Arguments

* `collection`: data collection
* `index`: data index

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_exists
Method: GET
```

### Other protocols


```json
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "exists"
}
```

---

## Response

```json
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "exists",
  "requestId": "<unique request identifier>",
  "result": true
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
