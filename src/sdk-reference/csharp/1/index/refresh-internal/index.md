---
layout: sdk.html.hbs
title: refreshInternal
description: Force refresh of Kuzzle internal index
---

# refreshInternal

When writing or deleting security and internal documents (users, roles, profiles, configuration, etc.) in Kuzzle, the update needs to be indexed before being reflected in the search index.

The `refreshInternal` action forces a [refresh]({{ ../site_base_path }}/sdk-reference/index/refresh), on the internal index, making the documents available to search immediately.

<div class="alert alert-info">
  A refresh operation comes with some performance costs.

  From [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-refresh.html):
  "While a refresh is much lighter than a commit, it still has a performance cost. A manual refresh can be useful when writing tests, but don’t do a manual refresh every time you index a document in production; it will hurt your performance. Instead, your application needs to be aware of the near real-time nature of Elasticsearch and make allowances for it."
</div>

## Signature

```csharp
public void refreshInternal();
public void refreshInternal(QueryOptions options);
```

## Arguments

| Arguments | Type          | Description       |
| --------- | ------------- | ------------------|
| `index`   | <pre>string</pre>   | Index name     |
| `options` | <pre>Kuzzleio::QueryOptions\*</pre> | Query options |

### options

Additional query options

| Option     | Type<br/>(default)   | Description  |   
| ---------- | ------- | --------------------------------- | 
| `queuable` | <pre>bool</pre><br/>(`true`) | If true, queues the request during downtime, until connected to Kuzzle again |

## Exceptions

Throws a `Kuzzleio::KuzzleException` if there is an error. See how to [handle error]({{ site_base_path }}sdk-reference/csharp/1/error-handling).

## Usage

[snippet=refreshInternal]