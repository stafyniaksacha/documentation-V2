---
layout: sdk.html
algolia: true
title: refresh
description: Force Elasticsearch search index update
order: 700
---

# refresh(index, [options])

When writing or deleting documents in Kuzzle, the update needs to be indexed before being available in search results.

<div class="alert alert-info">
A refresh operation comes with some performance costs.

From [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-refresh.html):
"While a refresh is much lighter than a commit, it still has a performance cost. A manual refresh can be useful when writing tests, but don’t do a manual refresh every time you index a document in production; it will hurt your performance. Instead, your application needs to be aware of the near real-time nature of Elasticsearch and make allowances for it."
</div>

## Usage

[code-example=refresh]

## Options

Query options.

| Option | Type | Description | Default
|--------|------|-------------|---------
| queuable | boolean | Make this request queuable or not  | true

---

## Response

[section=refreshResponse]