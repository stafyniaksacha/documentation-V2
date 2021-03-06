---
layout: full.html.hbs
title: validateSpecifications
---

# validateSpecifications

{{{since "1.0.0"}}}

You can specify validation specifications in order to enforce your own rules over documents and real-time messages.
Whenever a document is stored or updated, or a message is published, Kuzzle applies these specifications to check if the new data complies to the defined rules. If not, the document or message will be rejected and the request will return an error message.

The validateSpecifications method checks if a validation specification is well formatted. It does not store nor modify the existing specification.

When the validation specification is not formatted correctly, a detailed error message is returned to help you to debug.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_validateSpecifications
Method: POST  
Body:
```

```js
{
  "myindex": {
    "mycollection": {
      "strict": <boolean>,
      "fields": {
        // specification
      }
    }
  }
}
```

### Other protocols

```js
{
  "controller": "collection",
  "action": "validateSpecifications",

  "body": {
    "myindex": {
      "mycollection": {
        "strict": <boolean>,
        "fields": {
          // ...
        }
      }
    }
  }

}
```

---

## Body properties

The provided body must have the following structure:

```json
{
  "<data index>": {
    "<data collection>": {
      "strict": <boolean>,
      "fields": {
        // field validation rules
      }
    }
  }
}
```

---

## Response

Returns an object with the following properties:

* `valid`: a boolean telling whether the provided specifications are valid
* `details`: the exhaustive list of rejections and their reasons. Only present if the document is invalid
* `description`: global error description. Only present if the document is invalid

Example:

```javascript
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "action": "validateSpecifications",
  "controller": "collection",
  "state": "done",
  "requestId": "<unique request identifier>",
  "result": {
    "valid": true
  }
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/1/essentials/errors/#common-errors)
