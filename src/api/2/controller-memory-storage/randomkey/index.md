---
layout: full.html.hbs
algolia: true

title: randomkey
---

# randomkey

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_randomkey
Method: GET  
Body:
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "randomkey"
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
  "action": "randomkey",
  "collection": null,
  "index": null,
  "result": "<one of the database's key, at random>"
}
```

Returns a random key from the memory storage.

[[_Redis documentation_]](https://redis.io/commands/randomkey)
