---
layout: full.html.hbs
algolia: true

title: sunion
---

# sunion

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_sunion?keys=key1,key2,...
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "sunion",
  "keys": ["key1", "key2", "..."]
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
  "action": "sunion",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [
    "value1",
    "value2",
    "..."
  ]
}
```

Returns the union of sets of unique values.

[[_Redis documentation_]](https://redis.io/commands/sunion)
