---
layout: sdk.html.hbs
title: query
description: Base method to send API query to Kuzzle
---

# query

Base method used to send queries to Kuzzle, following the [API Documentation]({{ site_base_path }}api/1).

<div class="alert alert-warning">
This is a low-level method, exposed to allow advanced SDK users to bypass high-level methods.
</div>

## Signature

```cpp
kuzzleio::kuzzle_response* query(const kuzzleio::kuzzle_request& request);

kuzzleio::kuzzle_response* query(
    const kuzzleio::kuzzle_request& request, 
    const kuzzleio::query_options& options);
```

## Arguments

| Argument  | Type             | Description              |
| --------- | ---------------- | ------------------------ |
| `request` | <pre>kuzzle_request\*</pre> | API request parameters |
| `options` | <pre>kuzzleio::query_options\*</pre>  | Query options |

### request

Properties required for the Kuzzle API can be set in the [kuzzle_request]({{ site_base_path }}sdk-reference/cpp/1/kuzzle-request) struct.
The following properties are the most common.

| Property     | Type         | Description                                                        | Required |
| ------------ | ------------ | ------------------------------------------------------------------ | -------- |
| `controller` | <pre>const char\*</pre> | Controller name                                         | yes      |
| `action`     | <pre>const char\*</pre> | Action name                                             | yes      |
| `body`       | <pre>const char\*</pre> | JSON string representing body for this action           | no       |
| `index`      | <pre>const char\*</pre> | Index name for this action                              | no       |
| `collection` | <pre>const char\*</pre> | Collection name for this action                         | no       |
| `id`         | <pre>const char\*</pre> | ID for this action                                      | no       |
| `volatiles`  | <pre>const char\*</pre> | JSON string representing additional information to send to Kuzzle | no       |

### options

Additional query options

| Option     | Type<br/>(default)   | Description  |   
| ---------- | ------- | --------------------------------- | 
| `queuable` | <pre>bool</pre><br/>(`true`) | If true, queues the request during downtime, until connected to Kuzzle again |

## Return

A [kuzzle_response]({{ site_base_path }}sdk-reference/cpp/1/kuzzle-response) containing the Kuzzle API response. See the [API Documentation]({{ site_base_path }}api/1/essentials/kuzzle-response).
The following properties are the most common.

| Property     | Type   | Description                         |
| ------------ | ------ | ----------------------------------- |
| `request_id` | <pre>char\*</pre> | Request unique ID                   |
| `result`     | <pre>char\*</pre> | JSON string representing Kuzzle API result |
| `error`      | <pre>char\*</pre> | Error message                       |
| `status`     | <pre>int</pre>    | Request status (eg: 200, 403, etc.) |

## Exceptions

Throws a `kuzzleio::KuzzleException` if there is an error. See how to [handle error]({{ site_base_path }}sdk-reference/cpp/1/error-handling).

## Usage

[snippet=query]
