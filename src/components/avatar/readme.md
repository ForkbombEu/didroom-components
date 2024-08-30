# didroom-avatar



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                         | Default     |
| -------- | --------- | ----------- | -------------------------------------------- | ----------- |
| `name`   | `name`    |             | `string`                                     | `undefined` |
| `shape`  | `shape`   |             | `string`                                     | `'round'`   |
| `size`   | `size`    |             | `"2xl" \| "l" \| "m" \| "s" \| "xl" \| "xs"` | `'m'`       |
| `src`    | `src`     |             | `string`                                     | `undefined` |


## Dependencies

### Used by

 - [d-activity-card](../activity-card)
 - [d-credential-card](../credential-card)
 - [d-credential-service](../credential-service)

### Depends on

- [d-icon](../icon)

### Graph
```mermaid
graph TD;
  d-avatar --> d-icon
  d-activity-card --> d-avatar
  d-credential-card --> d-avatar
  d-credential-service --> d-avatar
  style d-avatar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
