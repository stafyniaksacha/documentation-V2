---
layout: full.html.hbs
algolia: true

title: hincrby
---

# hincrby

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hincrby/<key>
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


```json
{
  "controller": "ms",
  "action": "hincrby",
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
  "action": "hincrby",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<new field value>"
}
```

Increments the number stored in a hash field by the provided integer value.

[[_Redis documentation_]](https://redis.io/commands/hincrby)
