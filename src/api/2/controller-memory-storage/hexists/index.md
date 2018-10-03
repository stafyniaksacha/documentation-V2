---
layout: full.html.hbs
algolia: true

title: hexists
---

# hexists

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hexists/<key>/<field>
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "hexists",
  "_id": "<key>",
  "field": "field name"
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
  "action": "hexists",
  "collection": null,
  "index": null,
  "result": [0|1]
}
```

Checks if a field exists in a hash.

[[_Redis documentation_]](https://redis.io/commands/hexists)
