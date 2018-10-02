---
layout: full.html.hbs
algolia: true

title: pttl
---

# pttl

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_pttl/<key>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "pttl",
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
  "action": "pttl",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<remaining time to live, in milliseconds>"
}
```

Returns the remaining time to live of a key, in milliseconds.

[[_Redis documentation_]](https://redis.io/commands/pttl)
