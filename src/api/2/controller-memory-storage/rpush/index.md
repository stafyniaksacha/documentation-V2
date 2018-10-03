---
layout: full.html.hbs
algolia: true
title: rpush
---

# rpush

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_rpush/<_id>
Method: POST  
Body:
```


```js
{
  "values": ["value1", "value2", "..."]
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "rpush",
  "_id": "<key>",
  "body": {
    "values": ["value1", "value2", "..."]
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
  "action": "rpush",
  "collection": null,
  "index": null,
  "result": <updated number of elements in the list>
}
```

Appends the specified values at the end of a list. If the key does not exist, it is created holding an empty list before performing the operation.

[[_Redis documentation_]](https://redis.io/commands/rpush)
