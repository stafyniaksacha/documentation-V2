---
layout: full.html.hbs
algolia: true
title: rpushx
---

# rpushx

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_rpushx/<_id>
Method: POST  
Body:
```


```js
{
  "value": "<value>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "rpushx",
  "_id": "<key>",
  "body": {
    "value": "<value>"
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
  "action": "rpushx",
  "collection": null,
  "index": null,
  "result": "<updated number of elements in the list>"
}
```

Appends the specified value at the end of a list, only if the key already exists and if it holds a list.

[[_Redis documentation_]](https://redis.io/commands/rpushx)
