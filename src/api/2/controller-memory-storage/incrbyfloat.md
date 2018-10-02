---
layout: full.html.hbs
algolia: true

title: incrbyfloat
---

# incrbyfloat

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_incrbyfloat/<key>
Method: POST  
Body:
```


```js
{
  "value": "<increment value>"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "incrbyfloat",
  "_id": "<key>",
  "body": {
    "value": "<increment value>"
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
  "action": "incrbyfloat",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<updated key value>"
}
```

Increments the number stored at `key` by the provided float value. If the key does not exist, it is set to 0 before performing the operation.

[[_Redis documentation_]](https://redis.io/commands/incrbyfloat)
