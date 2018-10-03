---
layout: full.html.hbs
algolia: true
title: sinterstore
---

# sinterstore

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_sinterstore
Method: POST  
Body:
```


```js
{
  "destination": "<destination key>",
  "keys": ["key1", "key2", "..."]
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "sinterstore",
  "body": {
    "destination": "<destination key>",
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
  "action": "sinterstore",
  "collection": null,
  "index": null,
  "result": "<number of elements in the resulting set>"
}
```

Computes the intersection of the provided sets of unique values and stores the result in the `destination` key.

If the destination key already exists, it is overwritten.

[[_Redis documentation_]](https://redis.io/commands/sinterstore)
