---
layout: full.html.hbs
algolia: true
title: resetDatabase
---

# resetDatabase

{{{since "1.4.0"}}}

Asynchronously delete indexes created by users. This does not include Kuzzle's internal index.

This action has no impact on Kuzzle's internal index and Plugin indexes.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/admin/_resetDatabase
Method: POST
```

### Other protocols


```json
{
  "controller": "admin",
  "action": "resetDatabase"
}
```

---

## Response

```json
{
  "requestId": "d16d5e8c-464a-4589-938f-fd84f46080b9",
  "status": 200,
  "error": null,
  "controller": "admin",
  "action": "resetDatabase",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": { "acknowledge": true }
}
```
