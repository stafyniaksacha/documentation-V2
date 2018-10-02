---
layout: full.html.hbs
algolia: true

title: sinter
---

# sinter

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_sinter?keys=key1,key2,...
Method: GET
```


### Other protocols


```json
{
  "controller": "ms",
  "action": "sinter",
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
  "action": "sinter",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [
    "intersection value1",
    "intersection value2",
    "..."
  ]
}
```

Returns the intersection of the provided sets of unique values.

[[_Redis documentation_]](https://redis.io/commands/sinter)
