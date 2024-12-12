# didroom-avatar



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                         | Default     |
| -------- | --------- | ----------- | -------------------------------------------- | ----------- |
| `name`   | `name`    |             | `string`                                     | `undefined` |
| `shape`  | `shape`   |             | `"round" \| "square"`                        | `'round'`   |
| `size`   | `size`    |             | `"2xl" \| "l" \| "m" \| "s" \| "xl" \| "xs"` | `'m'`       |
| `src`    | `src`     |             | `string`                                     | `undefined` |


## Dependencies

### Used by

 - [d-credential-card](../credential-card)
 - [d-list-item](../d-list-item)
 - [d-verification-card](../verification-card)

### Depends on

- [d-icon](../icon)

### Graph
```mermaid
graph TD;
  d-avatar --> d-icon
  d-credential-card --> d-avatar
  d-list-item --> d-avatar
  d-verification-card --> d-avatar
  style d-avatar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
