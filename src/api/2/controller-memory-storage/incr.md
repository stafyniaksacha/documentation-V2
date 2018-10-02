---
layout: full.html.hbs
algolia: true

title: incr
---

# incr

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_incr/<key>
Method: POST
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "incr",
  "_id": "<key>"
}
```

---

## Response

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "incr",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<updated key value>"
}
```

Increments the number stored at `key` by 1. If the key does not exist, it is set to 0 before performing the operation.

[[_Redis documentation_]](https://redis.io/commands/incr)
