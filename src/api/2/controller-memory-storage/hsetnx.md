---
layout: full.html.hbs
algolia: true

title: hsetnx
---

# hsetnx

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hsetnx/<key>
Method: POST  
Body:
```


```js
{
  "field": "<field name>",
  "value": "<field value>"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "hsetnx",
  "_id": "<key>",
  "body": {
    "field": "<field name>",
    "value": "<field value>"
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
  "action": "hsetnx",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [0|1]
}
```

Sets a field and its value in a hash, only if the field does not already exist.

[[_Redis documentation_]](https://redis.io/commands/hsetnx)
