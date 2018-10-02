---
layout: full.html.hbs
algolia: true

title: get
---

# get

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/<key>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "get",
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
  "action": "get",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "value"
}
```

Returns the value of a key, or `null` if the key doesn't exist.

[[_Redis documentation_]](https://redis.io/commands/get)
