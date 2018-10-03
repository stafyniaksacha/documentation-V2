---
layout: full.html.hbs
algolia: true

title: searchRoles
---


# searchRoles

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/roles/_search[?from=0][&size=42]
Method: POST  
Body:
```


```js
{
  // optional: retrieve only roles giving access to the
  // provided controller names
  "controllers": ["document", "security"]
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "searchRoles",
  "body": {
    // optional: search for roles allowing access to the provided
    // list of controllers
    "controllers": ["document", "security"]
  },
  // optional: result pagination configuration
  "from": 0,
  "size": 42
}
```

---

## Response

```javascript
{
  "action": "searchRoles",
  "controller": "security",
  "error": null,
  "requestId": "<unique request identifier>",
  "result": 
  {
    "total": 1,
    "hits": [
      {
        "_id": "<roleId>",
        "_source": {
          "controllers": {
            // Rights for each controllers and actions can be found here
            "*": {
                "actions": {
                    "*": true
                }
          }
        }
      }
    ]
  }
  "status": 200
}
```

Search for security roles, optionally returning only those allowing access to the provided controller names.

Returned roles documents follow the format described in our [Kuzzle Security Guide](https://docs.kuzzle.io/guide/essentials/security/#defining-roles)

Optional arguments:
* `body.controllers`: an array of controller names. Used to retrieve only security roles giving access to those controllers
* `from`: result starting offset (default: `0`)
* `size`: number of roles per result page (default: `10`)
