---
layout: full.html.hbs
algolia: true

title: srem
---

# srem

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_srem/<key>
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
  "action": "srem",
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
  "action": "srem",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<number of removed members>"
}
```

Removes members from a set of unique values.

[[_Redis documentation_]](https://redis.io/commands/srem)
