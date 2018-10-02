---
layout: full.html.hbs
algolia: true

title: linsert
---

# linsert

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_linsert/<key>
Method: POST  
Body:
```


```js
{
  "position": "[before|after]",
  "pivot": "<pivot value>",
  "value": "<value to insert>"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "linsert",
  "_id": "<key>",
  "body": {
    "position": "[before|after]",
    "pivot": "<pivot value>",
    "value": "<value to insert>"
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
  "action": "linsert",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<updated number of items in the list>"
}
```

Inserts a value in a list, either before or after the reference pivot value.

[[_Redis documentation_]](https://redis.io/commands/linsert)
