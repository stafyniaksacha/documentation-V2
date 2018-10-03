---
layout: full.html.hbs
algolia: true

title: hkeys
---

# hkeys

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hkeys/<key>
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "hkeys",
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
  "action": "hkeys",
  "collection": null,
  "index": null,
  "result": [
    "field1",
    "field2",
    "..."
  ]
}
```

Returns all field names contained in a hash.

[[_Redis documentation_]](https://redis.io/commands/hkeys)
