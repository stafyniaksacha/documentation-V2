---
layout: full.html.hbs
algolia: true

title: lset
---

# lset

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_lset/<key>
Method: POST  
Body:
```


```js
{
  "index": "<index>",
  "value": "<value>"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "lset",
  "_id": "<key>",
  "body": {
    "index": "<index>",
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
  "action": "lset",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "OK"
}
```

Sets the list element at `index` with the provided value.

[[_Redis documentation_]](https://redis.io/commands/lset)
