---
layout: full.html.hbs
algolia: true

title: sadd
---

# sadd

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_sadd/<key>
Method: POST  
Body:
```


```js
{
  "members": ["member1", "member2", "..."]
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "sadd",
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
  "action": "sadd",
  "collection": null,
  "index": null,
  "result": "<number of elements added to the set>"
}
```

Adds members to a set of unique values stored at `key`. If the `key` does not exist, it is created beforehand.

[[_Redis documentation_]](https://redis.io/commands/sadd)
