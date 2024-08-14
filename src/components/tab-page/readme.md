# d-tab-page



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type      | Default     |
| ---------------- | ------------------ | ----------- | --------- | ----------- |
| `scanButtonHref` | `scan-button-href` |             | `string`  | `undefined` |
| `scanButtonText` | `scan-button-text` |             | `string`  | `undefined` |
| `settings`       | `settings`         |             | `boolean` | `false`     |
| `tab`            | `tab`              |             | `string`  | `undefined` |
| `title`          | `title`            |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [d-header](../header)
- ion-content
- [d-scan-button](../scan-button)

### Graph
```mermaid
graph TD;
  d-tab-page --> d-header
  d-tab-page --> ion-content
  d-tab-page --> d-scan-button
  d-header --> ion-header
  d-header --> ion-toolbar
  d-header --> ion-buttons
  d-header --> ion-button
  d-header --> d-icon
  d-header --> ion-title
  d-header --> ion-menu-toggle
  d-header --> ion-menu
  d-header --> ion-content
  ion-button --> ion-ripple-effect
  ion-menu --> ion-backdrop
  d-scan-button --> d-button
  style d-tab-page fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
