---
layout: full.html.hbs
algolia: true
title: ltrim
---

# ltrim

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_ltrim/<_id>
Method: POST  
Body:
```


```js
{
  "start": "<start>",
  "stop": "<stop>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "ltrim",
  "_id": "<key>",
  "body": {
    "start": "<start>",
    "stop": "<stop>"
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
  "action": "ltrim",
  "collection": null,
  "index": null,
  "result": "OK"
}
```

Trims an existing list so that it will contain only the specified range of elements specified.

[[_Redis documentation_]](https://redis.io/commands/ltrim)
