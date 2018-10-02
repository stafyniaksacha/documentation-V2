---
layout: full.html.hbs
algolia: true

title: sismember
---

# sismember

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_sismember/<key>/<member>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "sismember",
  "_id": "<key>",
  "member": "<member>"
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
  "action": "sismember",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [0|1]
}
```

Checks if `member` is a member of the set of unique values stored at `key`.

[[_Redis documentation_]](https://redis.io/commands/sismember)
