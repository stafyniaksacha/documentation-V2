---
layout: full.html.hbs
algolia: true

title: shutdown
---

# shutdown

{{{since "1.4.0"}}}


Let you stop a Kuzzle instance after any remaining requests are processed.

In a cluster environment, the shutdown action will be propagated across all nodes.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/admin/_shutdown
Method: POST
```

### Other protocols


```json
{
  "controller": "admin",
  "action": "shutdown"
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
  "action": "shutdown",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": { "acknowledge": true }
}
```
