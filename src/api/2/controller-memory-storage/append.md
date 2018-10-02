---
layout: full.html.hbs
algolia: true

title: append
---

# append

{{{since "1.0.0"}}}

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_append/<key>
Method: POST  
Body:
```


```js
{
  "value": "value to be appended to the key"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "append",
  "_id": "<key>",
  "body": {
    "value": "value to be appended to the key"
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
  "action": "append",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<new value length after the append operation>"
}
```

Appends a value to a key. If the key does not exist, it is created.

[[_Redis documentation_]](https://redis.io/commands/append)
