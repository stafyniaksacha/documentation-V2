---
layout: full.html.hbs
algolia: true

title: hincrbyfloat
---

# hincrbyfloat

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hincrbyfloat/<key>
Method: POST  
Body:
```


```js
{
  "field": "field name",
  "value": "<increment value>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "hincrbyfloat",
  "_id": "<key>",
  "body": {
    "field": "field name",
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
  "action": "hincrbyfloat",
  "collection": null,
  "index": null,
  "result": "<new field value>"
}
```

Increments the number stored in a hash field by the provided float value.

[[_Redis documentation_]](https://redis.io/commands/hincrbyfloat)
