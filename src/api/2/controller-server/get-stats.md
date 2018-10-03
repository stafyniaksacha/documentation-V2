---
layout: full.html.hbs
algolia: true

title: getStats
---

# getStats

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_getStats[?startTime=123456789][&stopTime=234567890]
Method: GET
```

### Other protocols


```js
{
  "controller": "server",
  "action": "getStats",

  "startTime": "<timestamp>",
  "stopTime": "<timestamp>"
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "action": "getStats",
  "controller": "server",
  "requestId": "<unique request identifier>",
  "result": {
    "total": 25,
    "hits": [
      {
        "completedRequests": {
          "websocket": 148,
          "http": 24,
          "mqtt": 78
        },
        "failedRequests": {
          "websocket": 3
        },
        "ongoingRequests": {
          "mqtt": 8,
          "http": 2
        }
        "connections": {
          "websocket": 13
        },
        "timestamp": "1453110641308"
      },
      {
        "etc...": "etc ..."
      }
    ]
  }
}
```

Returns statistics for snapshots made after a given timestamp (utc, in milliseconds).

These statistics include:

* the number of connected users per protocol (not available for all protocols)
* the number of ongoing requests
* the number of completed requests since the last frame
* the number of failed requests since the last frame

Statistics are returned as a JSON-object where each key is set to the snapshot's timestamp (utc, in milliseconds).
