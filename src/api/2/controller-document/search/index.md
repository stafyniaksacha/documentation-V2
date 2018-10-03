---
layout: full.html.hbs
algolia: true
title: search
---

# search

{{{since "1.0.0"}}}

Search documents.

There is a limit to how many documents can be returned with a single search query. 

That limit is by default set at 10000 documents, and you can't get over it even with the `from` and `size` pagination options.

To handle larger result sets, you have to either create a cursor by using the `scroll` option, or, if you sort the results, the Elasticsearch's [search_after command](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/search-request-search-after.html).

---

## Body properties

All of the following body properties are optional: 

* `query`: the search query itself, using the [ElasticSearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl.html) syntax.
* `aggregations`: control how the search result should be [aggregated](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/search-aggregations.html)
* `sort`: contains a list of fields, used to [sort search results](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/search-request-sort.html), in order of importance

An empty body matches all documents in the queried collection.

---

## Arguments

* `collection`: data collection
* `index`: data index

**Options:**

* `from`: paginates search results by defining the offset from the first result you want to fetch. Usually used with the `size` argument
* `includeTrash`: if true, include documents in the [trashcan]({{ site_base_path }}guide/essentials/document-metadata/)
* `scroll`: create a new forward-only result cursor. This option must be set with a [time duration](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/common-options.html#time-units), at the end of which the cursor is destroyed. If set, a cursor identifier named `scrollId` will be returned in the results. This cursor can then be moved forward using the [`scroll` API action]({{ site_base_path }}api/2/controller-document/scroll)
* `size`: set the maximum number of documents returned per result page

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_search[?from=<int>][&size=<int>][&scroll=<time to live>][&includeTrash=<boolean>]
Method: POST  
Body:
```

```js
{
  "query": {
    // ...
  },
  "aggregations": {
    // ...
  },
  "sort": [
    // ...
  ]
}
```


### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "search",

  "body": {
    "query": {
      // ...
    },
    "aggregations": {
      // ...
    },
    "sort": [
      // ...
    ]
  },

  "from": 0,
  "size": 42,
  "scroll": "1m",
  "includeTrash": false
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "action": "search",
  "controller": "document",
  "requestId": "<unique request identifier>",
  "result": {
    // Present only if a "scroll" value has been provided
    // The initial search request and each subsequent scroll request returns 
    // a new "scrollId" value
    // Only the most recent "scrollId" value should be used.
    "scrollId": "<scroll id>",

    // An array of objects containing your retrieved documents
    "hits": [
      {
        "_id": "<document unique identifier>",
        "_score": 0,          // Document search relevance score
        "_source": { ... }    // Document content
      },
      {
        // Another document... and so on
      }
    ],
    // Present only if aggregation parameters have been set
    "aggregations": {
      "aggs_name": {

      }
    },
    // Total number of found documents (not the number of 
    // returned documents in this single response page)
    "total": 42
  }
}
```
