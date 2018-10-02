---
layout: full.html.hbs
algolia: true

title: ttl
---

# ttl

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_ttl/<key>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "ttl",
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
  "action": "ttl",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<remaining time to live, in seconds>"
}
```

Returns the remaining time to live of a key, in seconds, or a negative value if the key does not exist or if it is persistent.

[[_Redis documentation_]](https://redis.io/commands/ttl)
