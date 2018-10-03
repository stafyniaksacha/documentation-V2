---
layout: full.html.hbs
algolia: true

title: mDeleteProfiles
---


# mDeleteProfiles

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/profiles/_mDelete[?refresh=wait_for]
Method: POST  
Body:
```


```js
{
  // ids must be an array of profile ids
  "ids": ["myFirstProfile", "mySecondProfile"]
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "mDeleteProfiles",
  "refresh": "wait_for",
  "body": {
    "ids": ["myFirstProfile", "mySecondProfile"]
  }
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "action": "mDeleteProfiles",
  "controller": "security",
  "requestId": "<unique request identifier>",
  "result": [
    "myFirstProfile",
    "mySecondProfile"
  ]
}
```

Deletes a list of security `profile` objects from Kuzzle given a list of profile ids.

The optional parameter `refresh` can be used
with the value `wait_for` in order to wait for the profiles' deletion to be indexed (indexed profiles are available for `search`).
