---
layout: full.html.hbs
algolia: true

title: incrby
---

# incrby

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_incrby/<key>
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
  "action": "incrby",
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
  "action": "incrby",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<updated key value>"
}
```

Increments the number stored at `key` by the provided integer value. If the key does not exist, it is set to 0 before performing the operation.

[[_Redis documentation_]](https://redis.io/commands/incrby)
