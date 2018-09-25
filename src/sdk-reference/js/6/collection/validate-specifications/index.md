---
layout: sdk.html
algolia: true
title: validateSpecifications
description: Validate specifications format
order: 200
---

# validateSpecifications

The validateSpecifications method checks if a validation specification is well formatted. It does not store nor modify the existing specification.  

When the validation specification is not formatted correctly, a detailed error message is returned to help you to debug.

## Signature

```javascript
/**
 * @param {object} specifications
 * @param {object} [options]
 * @returns {Promise.<object>}
 */
validateSpecifications(specifications, options = {})
```

## Arguments

| Arguments    | Type    | Description | Required
|--------------|---------|-------------|----------
| ``specifications`` | Object | Specifications to validate  | yes  |
| ``options`` | Object | An object containing query options    | no  |

### **specifications**

An object representing the specifications.  

This object must follow the [Specification Structure]({{ site_base_path }}validation-reference/schema):

```js
{
  myindex: {
    mycollection: {
      strict: <true|false>,
      fields: {
        // ... specification for each field
      }
    }
  }
}
```

### **options**

Additional query options

| Property   | Type    | Description                       | Default |
| ---------- | ------- | --------------------------------- | ------- |
| `queuable` | boolean | Make this request queuable or not | `true`  |

## Resolve

Resolve to an object with the following properties:

| Property    | Type    | Description |
|--------------|---------|-------------|
| ``valid`` | Boolean | Specifications validity   |
| ``details`` | Array.<String> | Specifications errors    |
| ``description`` | String | Global description of errors    |

## Usage

[snippet=validate-specifications]