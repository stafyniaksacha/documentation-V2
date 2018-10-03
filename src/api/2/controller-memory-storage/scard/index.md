---
layout: full.html.hbs
algolia: true

title: scard
---

# scard

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_scard/<key>
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "scard",
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
  "action": "scard",
  "collection": null,
  "index": null,
  "result": "<number of members of the set>"
}
```

Returns the number of members stored in a set of unique values.

[[_Redis documentation_]](https://redis.io/commands/scard)
