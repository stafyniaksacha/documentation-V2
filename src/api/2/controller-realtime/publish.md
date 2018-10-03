---
layout: full.html.hbs
algolia: true
title: publish
---


# publish

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_publish
Method: POST  
Body:
```


```js
{
  "hello": 'world'
}
```



### Other protocols


```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "realtime",
  "action": "publish",
  "volatile": {},
  "body": {
    "hello": "world"
  }
}
```

---

## Response

```javascript
{
  "error": null,
  "status": 200,
  "index": "<index>",
  "collection": "<collection>",
  "controller": "realtime",
  "action": "publish",
  "volatile": {},
  "requestId": "<unique request identifier>",
  "result": {
    "hello": "world",
    "_kuzzle_info": {
      "createdAt": 1534775616139
      "author": "-1"
    }
  }
}
```

Sends a real-time message to Kuzzle. The message will be dispatched to all the clients
who have subscribed using filters that match the message content.

The following metadata will be added to the message inside the `_kuzzle_info` property:
  - `createdAt`
  - `author`

<aside class="warning">
  The message is **not** persisted in the database.
</aside>
