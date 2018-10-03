---
layout: full.html.hbs
algolia: true

title: decr
---

# decr

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_decr/<key>
Method: POST  
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "decr",
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
  "action": "decr",
  "collection": null,
  "index": null,
  "result": "<updated key value>"
}
```

Decrements the number stored at `key` by 1. If the key does not exist, it is set to 0 before performing the operation.

[[_Redis documentation_]](https://redis.io/commands/decr)
