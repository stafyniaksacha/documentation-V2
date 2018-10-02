---
layout: full.html.hbs
algolia: true

title: zrem
---

# zrem

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zrem/<key>
Method: DELETE  
Body:
```


```js
{
  "members": ["member1", "member2", "..."]
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "zrem",
  "_id": "<key>",
  "body": {
    "members": ["member1", "member2", "..."]
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
  "action": "zrem",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<number of removed members>"
}
```

Removes members from a sorted set.

[[_Redis documentation_]](https://redis.io/commands/zrem)
