---
layout: full.html.hbs
algolia: true
title: zincrby
---

# zincrby

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zincrby/<_id>
Method: POST  
Body:
```


```js
{
  "member": "<member>",
  "value": "<increment>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "zincrby",
  "_id": "<key>",
  "body": {
    "member": "<member>",
    "value": "<increment>"
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
  "action": "zincrby",
  "collection": null,
  "index": null,
  "result": <new score value>
}
```

Increments the score of a `member` in a sorted set by the provided `value`.

[[_Redis documentation_]](https://redis.io/commands/zincrby)
