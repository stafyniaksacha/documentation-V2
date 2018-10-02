---
layout: full.html.hbs
algolia: true

title: searchProfiles
---


# searchProfiles

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/profiles/_search[?from=0][&size=42][&scroll=<time to live>]
Method: POST  
Body:
```

```js
{
  // optional: search only for profiles referring the listed roles
  "roles": [
    "someRole",
    "admin"
  ]
}
```

### Other protocols

```json
{
  "controller": "security",
  "action": "searchProfiles",
  "body": {
    "roles": [
      "someRole",
      "admin"
    ]
  },
  // optional: result pagination configuration
  "from": 0,
  "size": 42,
  "scroll": "<ttl>"
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "result":
  {
    "hits": [
      {
        "_id": "firstProfileId",
        "_source": {
          // Full profile definition
        }
      },
      {
        "_id": "secondProfileId",
        "_source": {
          // Full profile definition
        }
      }
    ],
    "total": 2
  },
  "action": "searchProfiles",
  "controller": "security",
  "requestId": "<unique request identifier>"
}
```

Search for security profiles, optionally returning only those linked to the provided list of security roles.


Optional arguments:

* `body.roles` contains an array of role identifiers used to filter the search results
* `size` controls the maximum number of documents returned in one response page
* `from` is usually used with the `size` argument, and defines the offset from the first result you want to fetch
* `scroll` is used to fetch large result sets, and it must be set with a [time duration](https://www.elastic.co/guide/en/elasticsearch/reference/5.4/common-options.html#time-units). If set, a forward-only cursor will be created (and automatically destroyed at the end of the set duration), and its identifier will be returned in the `scrollId` property, along with the first page of the results. This cursor can then be moved forward using the [`scrollProfiles` API action]({{ site_base_path }}api/2/controller-security/scroll-profiles)
