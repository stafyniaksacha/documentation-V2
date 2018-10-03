---
layout: full.html.hbs
algolia: true

title: hmget
---

# hmget

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hmget/<key>?fields=field1,field2,...
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "hmget",
  "_id": "<key>",
  "fields": ["field1", "field2", "..."]
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
  "action": "hmget",
  "collection": null,
  "index": null,
  "result": [
    "field1's value",
    "field2's value",
    "...'s value"
  ]
}
```

Returns the values of the specified hash's fields.

[[_Redis documentation_]](https://redis.io/commands/hmget)
