---
layout: full.html.hbs
algolia: true
title: rpoplpush
---

# rpoplpush

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_rpoplpush
Method: POST  
Body:
```


```js
{
  "source": "<key>",
  "destination": "<key>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "rpoplpush",
  "body": {
    "source": "<key>",
    "destination": "<key>"
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
  "action": "rpoplpush",
  "collection": null,
  "index": null,
  "result": "<popped/pushed element>"
}
```

Removes the last element of the list at `source` and pushes it back at the start of the list at `destination`.

[[_Redis documentation_]](https://redis.io/commands/rpoplpush)
