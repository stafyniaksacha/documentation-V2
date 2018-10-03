---
layout: full.html.hbs
algolia: true
title: sunionstore
---

# sunionstore

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_sunionstore
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
  "action": "sunionstore",
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
  "action": "sunionstore",
  "collection": null,
  "index": null,
  "result": "<number of members in the new set>"
}
```

Computes the union of multiple sets of unique values and stores it in a new set at `destination key`.

If the destination key already exists, it is overwritten.

[[_Redis documentation_]](https://redis.io/commands/sunionstore)
