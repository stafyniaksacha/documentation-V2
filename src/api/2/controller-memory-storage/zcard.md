---
layout: full.html.hbs
algolia: true

title: zcard
---

# zcard

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zcard/<key>
Method: GET
```


### Other protocols


```json
{
  "controller": "ms",
  "action": "zcard",
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
  "action": "zcard",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<number of elements in the set>"
}
```

Returns the number of elements held by a sorted set.

[[_Redis documentation_]](https://redis.io/commands/zcard)
