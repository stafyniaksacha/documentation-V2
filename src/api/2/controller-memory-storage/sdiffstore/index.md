---
layout: full.html.hbs
algolia: true
title: sdiffstore
---

# sdiffstore

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_sdiffstore/<_id>
Method: POST  
Body:
```


```js
{
  "destination": "<key>",
  "keys": ["key1", "key2", "..."]
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "sdiffstore",
  "_id": "<key>",
  "body": {
    "destination": "<key>",
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
  "action": "sdiffstore",
  "collection": null,
  "index": null,
  "result": "<number of elements stored in the resulting set>"
}
```

Computes the difference between the set of unique values stored at `key` and the other provided sets, and stores the result in the key stored at `destination`.

If the destination key already exists, it is overwritten.

[[_Redis documentation_]](https://redis.io/commands/sdiffstore)
