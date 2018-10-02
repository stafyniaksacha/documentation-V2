---
layout: full.html.hbs
algolia: true

title: searchUsers
---


# searchUsers

{{{since "1.0.0"}}}

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/users/_search[?from=0][&size=42][&scroll=<time to live>]
Method: POST  
Body:
```

```js
{
  "bool": {
    "must": [
      {
        "terms": {
          "profileIds": ["anonymous", "default"]
        }
      },
      {
        "geo_distance": {
          "distance": "10km",
          "pos": {
            "lat": 48.8566140,
            "lon": 2.352222
          }
        }
      }
    ]
  }
}
```

### Other protocols

```json
{
  "controller": "security",
  "action": "searchUsers",
  "body": {
    "bool": {
      "must": [
        {
          "in": {
            "profileIds": ["anonymous", "default"]
          }
        },
        {
          "geo_distance": {
            "distance": "10km",
            "pos": {
              "lat": "48.8566140",
              "lon": "2.352222"
            }
          }
        }
      ]
    }
  },
  "from": 0,
  "size": 10,
  "scroll": "<time to live>"
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "action": "searchUsers",
  "controller": "security",
  "requestId": "<unique request identifier>",
  "result": {
    "total": <total number of users matching the filter>,
    // An array of user objects
    "hits": [
      {
        "_id": "<kuid>",
        "_source": {
          // User content
        }
      },
      {
        "_id": "<another kuid>",
        "_source" {
          // Another user content
        }
      }
    ]
  }
}
```

Return users matching the given filter.  
The filter syntax follows [Elasticsearch's Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/5.4/query-filter-context.html)

Optional arguments:

* `size` controls the maximum number of documents returned in the response
* `from` is usually used with the `size` argument, and defines the offset from the first result you want to fetch
* `scroll` is used to fetch large result sets, and it must be set with a [time duration](https://www.elastic.co/guide/en/elasticsearch/reference/5.4/common-options.html#time-units). If set, a forward-only cursor will be created (and automatically destroyed at the end of the set duration), and its identifier will be returned in the `scrollId` property, along with the first page of the results. This cursor can then be moved forward using the [`scrollUsers` API action]({{ site_base_path }}api/2/controller-security/scroll-users)
