---
layout: full.html.hbs
algolia: true

title: sdiff
---

# sdiff

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_sdiff/<key>?keys=key1,key2,...
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "sdiff",
  "_id": "<key>",
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
  "action": "sdiff",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [
    "diff value1",
    "diff value2",
    "..."
  ]
}
```

Returns the difference between the set of unique values stored at `key` and the other provided sets.

[[_Redis documentation_]](https://redis.io/commands/sdiff)
