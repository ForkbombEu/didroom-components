# d-header



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default      |
| --------------- | ---------------- | ----------- | --------- | ------------ |
| `backButton`    | `back-button`    |             | `boolean` | `false`      |
| `settings`      | `settings`       |             | `boolean` | `false`      |
| `settingsTitle` | `settings-title` |             | `string`  | `'Settings'` |


## Events

| Event             | Description | Type                |
| ----------------- | ----------- | ------------------- |
| `backButtonClick` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [d-tab-page](../tab-page)

### Depends on

- ion-header
- ion-toolbar
- ion-buttons
- ion-button
- [d-icon](../icon)
- ion-title
- ion-menu-toggle
- ion-menu
- ion-content

### Graph
```mermaid
graph TD;
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
  d-tab-page --> d-header
  style d-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
