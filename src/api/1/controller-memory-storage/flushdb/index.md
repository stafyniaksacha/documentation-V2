---
layout: full.html.hbs
algolia: true
title: flushdb
---

# flushdb

{{{since "1.0.0"}}}

Empties the database dedicated to client applications (the reserved space for Kuzzle is unaffected).

[[_Redis documentation_]](https://redis.io/commands/flushdb)

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_flushdb
Method: POST
```

### Other protocols

```js
{
  "controller": "ms",
  "action": "flushdb"
}
```

---

## Response

Return `1`.

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "flushdb",
  "collection": null,
  "index": null,
  "result": 1
}
```