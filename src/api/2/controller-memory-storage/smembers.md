---
layout: full.html.hbs
algolia: true

title: smembers
---

# smembers

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_smembers/<key>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "smembers",
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
  "action": "smembers",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [
    "member1",
    "member2",
    "..."
  ]
}
```

Returns the members of a set of unique values.

[[_Redis documentation_]](https://redis.io/commands/smembers)
