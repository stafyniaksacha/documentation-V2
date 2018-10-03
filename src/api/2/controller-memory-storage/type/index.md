---
layout: full.html.hbs
algolia: true

title: type
---

# type

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_type/<key>
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "type",
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
  "action": "type",
  "collection": null,
  "index": null,
  "result": "[hash|list|string|set|zset]"
}
```

Returns the type of the value held by a key.

[[_Redis documentation_]](https://redis.io/commands/type)
