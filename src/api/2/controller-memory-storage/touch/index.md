---
layout: full.html.hbs
algolia: true
title: touch
---

# touch

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_touch
Method: POST  
Body:
```


```js
{
  "keys": ["key1", "key2", "..."]
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "touch",
  "body": {
    "keys": ["key1", "key2", "..."]
  }
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
  "action": "touch",
  "collection": null,
  "index": null,
  "result": "<number of touched keys>"
}
```

Alters the last access time of one or multiple keys. A key is ignored if it does not exist.

[[_Redis documentation_]](https://redis.io/commands/touch)
