---
layout: full.html.hbs
algolia: true
title: lrem
---


# lrem

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_lrem/<_id>
Method: DELETE  
Body:
```


```js
{
  "count": "<count>",
  "value": "<value to remove>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "lrem",
  "_id": "<key>",
  "body": {
    "count": "<count>",
    "value": "<value to remove>"
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
  "action": "lrem",
  "collection": null,
  "index": null,
  "result": "<number of removed elements>"
}
```

Removes the first `count` occurences of elements equal to `value` from a list.

[[_Redis documentation_]](https://redis.io/commands/lrem)
