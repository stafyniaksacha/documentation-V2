---
layout: full.html.hbs
algolia: true

title: getset
---

# getset

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_getset/<key>
Method: POST  
Body:
```


```js
{
  "value": "new key value"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "getset",
  "_id": "<key>",
  "body": {
    "value": "new key value"
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
  "action": "getset",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "key's previous value"
}
```

Sets a new value for a key and returns the previous stored value.

[[_Redis documentation_]](https://redis.io/commands/getset)
