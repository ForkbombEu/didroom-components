/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color, Shape, Size } from "./components/types";
import { Tab } from "./components/tab-button/d-tab-button";
export { Color, Shape, Size } from "./components/types";
export { Tab } from "./components/tab-button/d-tab-button";
export namespace Components {
    interface DActivityCard {
        "date": string;
        "description": string;
        "logo": string;
        "message": string;
        "name": string;
        "read": boolean;
    }
    interface DAppDetails {
        "developedBy": string;
        "version": string;
    }
    interface DAvatar {
        "name"?: string;
        "shape"?: Shape;
        "size"?: Size;
        "src"?: string;
    }
    interface DBackgroundIllustration {
        "background": string;
    }
    interface DBadge {
    }
    interface DButton {
        "buttonType": string;
        "clear"?: boolean;
        "color"?: Color | 'outline';
        "disabled": boolean;
        "expand"?: boolean;
        "form"?: string | HTMLFormElement;
        "href": string | undefined;
        "size"?: 'small' | 'default' | 'large';
        "type": 'submit' | 'reset' | 'button';
    }
    interface DButtonsGroup {
    }
    interface DCheckbox {
        "checked": boolean;
    }
    interface DCredentialCard {
        "expirationDate"?: string;
        "expirationLabel": string;
        "issuedByLabel": string;
        "issuer": string;
        "logoSrc"?: string;
        "name": string;
        "verified"?: boolean;
    }
    interface DCredentialDetail {
        "description": string;
        "issuer": string;
        "longDescription"?: string;
        "name": string;
    }
    interface DCredentialService {
        "description"?: string;
        "href"?: string;
        "issuer": string;
        "logoSrc"?: string;
        "name": string;
        "organization"?: string;
    }
    interface DDefinition {
        "definition": string;
        "hidable": boolean;
        "title": string;
    }
    interface DDidBox {
        "did": string;
    }
    interface DEmptyState {
        "buttonText": string | undefined;
        "heading": string;
        "href": string | undefined;
        "text": string;
    }
    interface DFeedback {
        "feedback": string;
        "message": string | undefined;
        "type": 'success' | 'error';
    }
    interface DHeader {
        "backButton": boolean;
        "backFunction": () => void;
        "settings": boolean;
        "settingsTitle": string;
    }
    interface DHeading {
        "color": Color;
        "size": Size;
    }
    interface DHorizontalStack {
        "gap": 2 | 4 | 8;
    }
    interface DIcon {
        "icon": string;
        "outline": boolean;
        "size": number;
    }
    interface DIllustration {
        "height": number;
        "illustration": string;
        "width": number;
    }
    interface DInfoLed {
        "type": 'success' | 'warning' | 'error';
    }
    interface DInput {
        "autoFocus": boolean;
        "clearButton": boolean;
        "errorText": string;
        "helperText": string;
        "hidable": boolean;
        "label": string;
        "name": string;
        "personIcon": boolean;
        "placeholder": string;
        "type": 'text' | 'password' | 'email' | 'number';
        "value": string;
    }
    interface DLoading {
        "loading": boolean;
        "message": string;
    }
    interface DLogo {
    }
    interface DOrganizations {
        "empty": boolean;
        "heading": string;
    }
    interface DPageDescription {
        "description"?: string;
        "title": string;
    }
    interface DScanButton {
        "href": string;
    }
    interface DSessionCard {
        "date": string;
        "sid": string;
        "success": boolean;
    }
    interface DSettingsMenu {
        "accountSettings": string;
        "developedBy": string;
        "gotoLanguageSettings": () => void;
        "languages": string;
        "logOut": string;
        "logoutCB": () => void;
        "notificationsSettings": string;
        "openAppSettings": () => void;
        "privacyPolicy": string;
        "securityAndAuthentication": string;
        "support": string;
        "version": string;
    }
    interface DSwipablePage {
        "background": string;
        "description": string;
        "subtitle"?: string;
        "title": string;
    }
    interface DTabButton {
        "active": boolean;
        "hasAlert": boolean;
        "tab": Tab;
    }
    interface DTabPage {
        "scanButtonHref": string | undefined;
        "scanButtonText": string | undefined;
        "settings": boolean;
        "tab": string;
        "title": string;
    }
    interface DText {
        "color": Color;
        "size": Size;
    }
    interface DVerticalStack {
        "gap": 2 | 4 | 8;
    }
    interface DidroomLogo {
    }
}
export interface DButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDButtonElement;
}
export interface DCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDCheckboxElement;
}
export interface DEmptyStateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDEmptyStateElement;
}
export interface DFeedbackCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDFeedbackElement;
}
export interface DInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDInputElement;
}
declare global {
    interface HTMLDActivityCardElement extends Components.DActivityCard, HTMLStencilElement {
    }
    var HTMLDActivityCardElement: {
        prototype: HTMLDActivityCardElement;
        new (): HTMLDActivityCardElement;
    };
    interface HTMLDAppDetailsElement extends Components.DAppDetails, HTMLStencilElement {
    }
    var HTMLDAppDetailsElement: {
        prototype: HTMLDAppDetailsElement;
        new (): HTMLDAppDetailsElement;
    };
    interface HTMLDAvatarElement extends Components.DAvatar, HTMLStencilElement {
    }
    var HTMLDAvatarElement: {
        prototype: HTMLDAvatarElement;
        new (): HTMLDAvatarElement;
    };
    interface HTMLDBackgroundIllustrationElement extends Components.DBackgroundIllustration, HTMLStencilElement {
    }
    var HTMLDBackgroundIllustrationElement: {
        prototype: HTMLDBackgroundIllustrationElement;
        new (): HTMLDBackgroundIllustrationElement;
    };
    interface HTMLDBadgeElement extends Components.DBadge, HTMLStencilElement {
    }
    var HTMLDBadgeElement: {
        prototype: HTMLDBadgeElement;
        new (): HTMLDBadgeElement;
    };
    interface HTMLDButtonElementEventMap {
        "dFocus": void;
        "dBlur": void;
    }
    interface HTMLDButtonElement extends Components.DButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDButtonElementEventMap>(type: K, listener: (this: HTMLDButtonElement, ev: DButtonCustomEvent<HTMLDButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDButtonElementEventMap>(type: K, listener: (this: HTMLDButtonElement, ev: DButtonCustomEvent<HTMLDButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDButtonElement: {
        prototype: HTMLDButtonElement;
        new (): HTMLDButtonElement;
    };
    interface HTMLDButtonsGroupElement extends Components.DButtonsGroup, HTMLStencilElement {
    }
    var HTMLDButtonsGroupElement: {
        prototype: HTMLDButtonsGroupElement;
        new (): HTMLDButtonsGroupElement;
    };
    interface HTMLDCheckboxElementEventMap {
        "dChange": boolean;
    }
    interface HTMLDCheckboxElement extends Components.DCheckbox, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDCheckboxElementEventMap>(type: K, listener: (this: HTMLDCheckboxElement, ev: DCheckboxCustomEvent<HTMLDCheckboxElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDCheckboxElementEventMap>(type: K, listener: (this: HTMLDCheckboxElement, ev: DCheckboxCustomEvent<HTMLDCheckboxElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDCheckboxElement: {
        prototype: HTMLDCheckboxElement;
        new (): HTMLDCheckboxElement;
    };
    interface HTMLDCredentialCardElement extends Components.DCredentialCard, HTMLStencilElement {
    }
    var HTMLDCredentialCardElement: {
        prototype: HTMLDCredentialCardElement;
        new (): HTMLDCredentialCardElement;
    };
    interface HTMLDCredentialDetailElement extends Components.DCredentialDetail, HTMLStencilElement {
    }
    var HTMLDCredentialDetailElement: {
        prototype: HTMLDCredentialDetailElement;
        new (): HTMLDCredentialDetailElement;
    };
    interface HTMLDCredentialServiceElement extends Components.DCredentialService, HTMLStencilElement {
    }
    var HTMLDCredentialServiceElement: {
        prototype: HTMLDCredentialServiceElement;
        new (): HTMLDCredentialServiceElement;
    };
    interface HTMLDDefinitionElement extends Components.DDefinition, HTMLStencilElement {
    }
    var HTMLDDefinitionElement: {
        prototype: HTMLDDefinitionElement;
        new (): HTMLDDefinitionElement;
    };
    interface HTMLDDidBoxElement extends Components.DDidBox, HTMLStencilElement {
    }
    var HTMLDDidBoxElement: {
        prototype: HTMLDDidBoxElement;
        new (): HTMLDDidBoxElement;
    };
    interface HTMLDEmptyStateElementEventMap {
        "buttonClick": void;
    }
    interface HTMLDEmptyStateElement extends Components.DEmptyState, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDEmptyStateElementEventMap>(type: K, listener: (this: HTMLDEmptyStateElement, ev: DEmptyStateCustomEvent<HTMLDEmptyStateElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDEmptyStateElementEventMap>(type: K, listener: (this: HTMLDEmptyStateElement, ev: DEmptyStateCustomEvent<HTMLDEmptyStateElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDEmptyStateElement: {
        prototype: HTMLDEmptyStateElement;
        new (): HTMLDEmptyStateElement;
    };
    interface HTMLDFeedbackElementEventMap {
        "dClose": void;
    }
    interface HTMLDFeedbackElement extends Components.DFeedback, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDFeedbackElementEventMap>(type: K, listener: (this: HTMLDFeedbackElement, ev: DFeedbackCustomEvent<HTMLDFeedbackElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDFeedbackElementEventMap>(type: K, listener: (this: HTMLDFeedbackElement, ev: DFeedbackCustomEvent<HTMLDFeedbackElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDFeedbackElement: {
        prototype: HTMLDFeedbackElement;
        new (): HTMLDFeedbackElement;
    };
    interface HTMLDHeaderElement extends Components.DHeader, HTMLStencilElement {
    }
    var HTMLDHeaderElement: {
        prototype: HTMLDHeaderElement;
        new (): HTMLDHeaderElement;
    };
    interface HTMLDHeadingElement extends Components.DHeading, HTMLStencilElement {
    }
    var HTMLDHeadingElement: {
        prototype: HTMLDHeadingElement;
        new (): HTMLDHeadingElement;
    };
    interface HTMLDHorizontalStackElement extends Components.DHorizontalStack, HTMLStencilElement {
    }
    var HTMLDHorizontalStackElement: {
        prototype: HTMLDHorizontalStackElement;
        new (): HTMLDHorizontalStackElement;
    };
    interface HTMLDIconElement extends Components.DIcon, HTMLStencilElement {
    }
    var HTMLDIconElement: {
        prototype: HTMLDIconElement;
        new (): HTMLDIconElement;
    };
    interface HTMLDIllustrationElement extends Components.DIllustration, HTMLStencilElement {
    }
    var HTMLDIllustrationElement: {
        prototype: HTMLDIllustrationElement;
        new (): HTMLDIllustrationElement;
    };
    interface HTMLDInfoLedElement extends Components.DInfoLed, HTMLStencilElement {
    }
    var HTMLDInfoLedElement: {
        prototype: HTMLDInfoLedElement;
        new (): HTMLDInfoLedElement;
    };
    interface HTMLDInputElementEventMap {
        "dInput": string;
        "dChange": string;
    }
    interface HTMLDInputElement extends Components.DInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDInputElementEventMap>(type: K, listener: (this: HTMLDInputElement, ev: DInputCustomEvent<HTMLDInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDInputElementEventMap>(type: K, listener: (this: HTMLDInputElement, ev: DInputCustomEvent<HTMLDInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDInputElement: {
        prototype: HTMLDInputElement;
        new (): HTMLDInputElement;
    };
    interface HTMLDLoadingElement extends Components.DLoading, HTMLStencilElement {
    }
    var HTMLDLoadingElement: {
        prototype: HTMLDLoadingElement;
        new (): HTMLDLoadingElement;
    };
    interface HTMLDLogoElement extends Components.DLogo, HTMLStencilElement {
    }
    var HTMLDLogoElement: {
        prototype: HTMLDLogoElement;
        new (): HTMLDLogoElement;
    };
    interface HTMLDOrganizationsElement extends Components.DOrganizations, HTMLStencilElement {
    }
    var HTMLDOrganizationsElement: {
        prototype: HTMLDOrganizationsElement;
        new (): HTMLDOrganizationsElement;
    };
    interface HTMLDPageDescriptionElement extends Components.DPageDescription, HTMLStencilElement {
    }
    var HTMLDPageDescriptionElement: {
        prototype: HTMLDPageDescriptionElement;
        new (): HTMLDPageDescriptionElement;
    };
    interface HTMLDScanButtonElement extends Components.DScanButton, HTMLStencilElement {
    }
    var HTMLDScanButtonElement: {
        prototype: HTMLDScanButtonElement;
        new (): HTMLDScanButtonElement;
    };
    interface HTMLDSessionCardElement extends Components.DSessionCard, HTMLStencilElement {
    }
    var HTMLDSessionCardElement: {
        prototype: HTMLDSessionCardElement;
        new (): HTMLDSessionCardElement;
    };
    interface HTMLDSettingsMenuElement extends Components.DSettingsMenu, HTMLStencilElement {
    }
    var HTMLDSettingsMenuElement: {
        prototype: HTMLDSettingsMenuElement;
        new (): HTMLDSettingsMenuElement;
    };
    interface HTMLDSwipablePageElement extends Components.DSwipablePage, HTMLStencilElement {
    }
    var HTMLDSwipablePageElement: {
        prototype: HTMLDSwipablePageElement;
        new (): HTMLDSwipablePageElement;
    };
    interface HTMLDTabButtonElement extends Components.DTabButton, HTMLStencilElement {
    }
    var HTMLDTabButtonElement: {
        prototype: HTMLDTabButtonElement;
        new (): HTMLDTabButtonElement;
    };
    interface HTMLDTabPageElement extends Components.DTabPage, HTMLStencilElement {
    }
    var HTMLDTabPageElement: {
        prototype: HTMLDTabPageElement;
        new (): HTMLDTabPageElement;
    };
    interface HTMLDTextElement extends Components.DText, HTMLStencilElement {
    }
    var HTMLDTextElement: {
        prototype: HTMLDTextElement;
        new (): HTMLDTextElement;
    };
    interface HTMLDVerticalStackElement extends Components.DVerticalStack, HTMLStencilElement {
    }
    var HTMLDVerticalStackElement: {
        prototype: HTMLDVerticalStackElement;
        new (): HTMLDVerticalStackElement;
    };
    interface HTMLDidroomLogoElement extends Components.DidroomLogo, HTMLStencilElement {
    }
    var HTMLDidroomLogoElement: {
        prototype: HTMLDidroomLogoElement;
        new (): HTMLDidroomLogoElement;
    };
    interface HTMLElementTagNameMap {
        "d-activity-card": HTMLDActivityCardElement;
        "d-app-details": HTMLDAppDetailsElement;
        "d-avatar": HTMLDAvatarElement;
        "d-background-illustration": HTMLDBackgroundIllustrationElement;
        "d-badge": HTMLDBadgeElement;
        "d-button": HTMLDButtonElement;
        "d-buttons-group": HTMLDButtonsGroupElement;
        "d-checkbox": HTMLDCheckboxElement;
        "d-credential-card": HTMLDCredentialCardElement;
        "d-credential-detail": HTMLDCredentialDetailElement;
        "d-credential-service": HTMLDCredentialServiceElement;
        "d-definition": HTMLDDefinitionElement;
        "d-did-box": HTMLDDidBoxElement;
        "d-empty-state": HTMLDEmptyStateElement;
        "d-feedback": HTMLDFeedbackElement;
        "d-header": HTMLDHeaderElement;
        "d-heading": HTMLDHeadingElement;
        "d-horizontal-stack": HTMLDHorizontalStackElement;
        "d-icon": HTMLDIconElement;
        "d-illustration": HTMLDIllustrationElement;
        "d-info-led": HTMLDInfoLedElement;
        "d-input": HTMLDInputElement;
        "d-loading": HTMLDLoadingElement;
        "d-logo": HTMLDLogoElement;
        "d-organizations": HTMLDOrganizationsElement;
        "d-page-description": HTMLDPageDescriptionElement;
        "d-scan-button": HTMLDScanButtonElement;
        "d-session-card": HTMLDSessionCardElement;
        "d-settings-menu": HTMLDSettingsMenuElement;
        "d-swipable-page": HTMLDSwipablePageElement;
        "d-tab-button": HTMLDTabButtonElement;
        "d-tab-page": HTMLDTabPageElement;
        "d-text": HTMLDTextElement;
        "d-vertical-stack": HTMLDVerticalStackElement;
        "didroom-logo": HTMLDidroomLogoElement;
    }
}
declare namespace LocalJSX {
    interface DActivityCard {
        "date"?: string;
        "description"?: string;
        "logo"?: string;
        "message"?: string;
        "name"?: string;
        "read"?: boolean;
    }
    interface DAppDetails {
        "developedBy"?: string;
        "version"?: string;
    }
    interface DAvatar {
        "name"?: string;
        "shape"?: Shape;
        "size"?: Size;
        "src"?: string;
    }
    interface DBackgroundIllustration {
        "background"?: string;
    }
    interface DBadge {
    }
    interface DButton {
        "buttonType"?: string;
        "clear"?: boolean;
        "color"?: Color | 'outline';
        "disabled"?: boolean;
        "expand"?: boolean;
        "form"?: string | HTMLFormElement;
        "href"?: string | undefined;
        "onDBlur"?: (event: DButtonCustomEvent<void>) => void;
        "onDFocus"?: (event: DButtonCustomEvent<void>) => void;
        "size"?: 'small' | 'default' | 'large';
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface DButtonsGroup {
    }
    interface DCheckbox {
        "checked"?: boolean;
        "onDChange"?: (event: DCheckboxCustomEvent<boolean>) => void;
    }
    interface DCredentialCard {
        "expirationDate"?: string;
        "expirationLabel"?: string;
        "issuedByLabel"?: string;
        "issuer"?: string;
        "logoSrc"?: string;
        "name"?: string;
        "verified"?: boolean;
    }
    interface DCredentialDetail {
        "description"?: string;
        "issuer"?: string;
        "longDescription"?: string;
        "name"?: string;
    }
    interface DCredentialService {
        "description"?: string;
        "href"?: string;
        "issuer"?: string;
        "logoSrc"?: string;
        "name"?: string;
        "organization"?: string;
    }
    interface DDefinition {
        "definition"?: string;
        "hidable"?: boolean;
        "title"?: string;
    }
    interface DDidBox {
        "did"?: string;
    }
    interface DEmptyState {
        "buttonText"?: string | undefined;
        "heading"?: string;
        "href"?: string | undefined;
        "onButtonClick"?: (event: DEmptyStateCustomEvent<void>) => void;
        "text"?: string;
    }
    interface DFeedback {
        "feedback"?: string;
        "message"?: string | undefined;
        "onDClose"?: (event: DFeedbackCustomEvent<void>) => void;
        "type"?: 'success' | 'error';
    }
    interface DHeader {
        "backButton"?: boolean;
        "backFunction"?: () => void;
        "settings"?: boolean;
        "settingsTitle"?: string;
    }
    interface DHeading {
        "color"?: Color;
        "size"?: Size;
    }
    interface DHorizontalStack {
        "gap"?: 2 | 4 | 8;
    }
    interface DIcon {
        "icon"?: string;
        "outline"?: boolean;
        "size"?: number;
    }
    interface DIllustration {
        "height"?: number;
        "illustration"?: string;
        "width"?: number;
    }
    interface DInfoLed {
        "type"?: 'success' | 'warning' | 'error';
    }
    interface DInput {
        "autoFocus"?: boolean;
        "clearButton"?: boolean;
        "errorText"?: string;
        "helperText"?: string;
        "hidable"?: boolean;
        "label"?: string;
        "name"?: string;
        "onDChange"?: (event: DInputCustomEvent<string>) => void;
        "onDInput"?: (event: DInputCustomEvent<string>) => void;
        "personIcon"?: boolean;
        "placeholder"?: string;
        "type"?: 'text' | 'password' | 'email' | 'number';
        "value"?: string;
    }
    interface DLoading {
        "loading"?: boolean;
        "message"?: string;
    }
    interface DLogo {
    }
    interface DOrganizations {
        "empty"?: boolean;
        "heading"?: string;
    }
    interface DPageDescription {
        "description"?: string;
        "title"?: string;
    }
    interface DScanButton {
        "href"?: string;
    }
    interface DSessionCard {
        "date"?: string;
        "sid"?: string;
        "success"?: boolean;
    }
    interface DSettingsMenu {
        "accountSettings"?: string;
        "developedBy"?: string;
        "gotoLanguageSettings"?: () => void;
        "languages"?: string;
        "logOut"?: string;
        "logoutCB"?: () => void;
        "notificationsSettings"?: string;
        "openAppSettings"?: () => void;
        "privacyPolicy"?: string;
        "securityAndAuthentication"?: string;
        "support"?: string;
        "version"?: string;
    }
    interface DSwipablePage {
        "background"?: string;
        "description"?: string;
        "subtitle"?: string;
        "title"?: string;
    }
    interface DTabButton {
        "active"?: boolean;
        "hasAlert"?: boolean;
        "tab"?: Tab;
    }
    interface DTabPage {
        "scanButtonHref"?: string | undefined;
        "scanButtonText"?: string | undefined;
        "settings"?: boolean;
        "tab"?: string;
        "title"?: string;
    }
    interface DText {
        "color"?: Color;
        "size"?: Size;
    }
    interface DVerticalStack {
        "gap"?: 2 | 4 | 8;
    }
    interface DidroomLogo {
    }
    interface IntrinsicElements {
        "d-activity-card": DActivityCard;
        "d-app-details": DAppDetails;
        "d-avatar": DAvatar;
        "d-background-illustration": DBackgroundIllustration;
        "d-badge": DBadge;
        "d-button": DButton;
        "d-buttons-group": DButtonsGroup;
        "d-checkbox": DCheckbox;
        "d-credential-card": DCredentialCard;
        "d-credential-detail": DCredentialDetail;
        "d-credential-service": DCredentialService;
        "d-definition": DDefinition;
        "d-did-box": DDidBox;
        "d-empty-state": DEmptyState;
        "d-feedback": DFeedback;
        "d-header": DHeader;
        "d-heading": DHeading;
        "d-horizontal-stack": DHorizontalStack;
        "d-icon": DIcon;
        "d-illustration": DIllustration;
        "d-info-led": DInfoLed;
        "d-input": DInput;
        "d-loading": DLoading;
        "d-logo": DLogo;
        "d-organizations": DOrganizations;
        "d-page-description": DPageDescription;
        "d-scan-button": DScanButton;
        "d-session-card": DSessionCard;
        "d-settings-menu": DSettingsMenu;
        "d-swipable-page": DSwipablePage;
        "d-tab-button": DTabButton;
        "d-tab-page": DTabPage;
        "d-text": DText;
        "d-vertical-stack": DVerticalStack;
        "didroom-logo": DidroomLogo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "d-activity-card": LocalJSX.DActivityCard & JSXBase.HTMLAttributes<HTMLDActivityCardElement>;
            "d-app-details": LocalJSX.DAppDetails & JSXBase.HTMLAttributes<HTMLDAppDetailsElement>;
            "d-avatar": LocalJSX.DAvatar & JSXBase.HTMLAttributes<HTMLDAvatarElement>;
            "d-background-illustration": LocalJSX.DBackgroundIllustration & JSXBase.HTMLAttributes<HTMLDBackgroundIllustrationElement>;
            "d-badge": LocalJSX.DBadge & JSXBase.HTMLAttributes<HTMLDBadgeElement>;
            "d-button": LocalJSX.DButton & JSXBase.HTMLAttributes<HTMLDButtonElement>;
            "d-buttons-group": LocalJSX.DButtonsGroup & JSXBase.HTMLAttributes<HTMLDButtonsGroupElement>;
            "d-checkbox": LocalJSX.DCheckbox & JSXBase.HTMLAttributes<HTMLDCheckboxElement>;
            "d-credential-card": LocalJSX.DCredentialCard & JSXBase.HTMLAttributes<HTMLDCredentialCardElement>;
            "d-credential-detail": LocalJSX.DCredentialDetail & JSXBase.HTMLAttributes<HTMLDCredentialDetailElement>;
            "d-credential-service": LocalJSX.DCredentialService & JSXBase.HTMLAttributes<HTMLDCredentialServiceElement>;
            "d-definition": LocalJSX.DDefinition & JSXBase.HTMLAttributes<HTMLDDefinitionElement>;
            "d-did-box": LocalJSX.DDidBox & JSXBase.HTMLAttributes<HTMLDDidBoxElement>;
            "d-empty-state": LocalJSX.DEmptyState & JSXBase.HTMLAttributes<HTMLDEmptyStateElement>;
            "d-feedback": LocalJSX.DFeedback & JSXBase.HTMLAttributes<HTMLDFeedbackElement>;
            "d-header": LocalJSX.DHeader & JSXBase.HTMLAttributes<HTMLDHeaderElement>;
            "d-heading": LocalJSX.DHeading & JSXBase.HTMLAttributes<HTMLDHeadingElement>;
            "d-horizontal-stack": LocalJSX.DHorizontalStack & JSXBase.HTMLAttributes<HTMLDHorizontalStackElement>;
            "d-icon": LocalJSX.DIcon & JSXBase.HTMLAttributes<HTMLDIconElement>;
            "d-illustration": LocalJSX.DIllustration & JSXBase.HTMLAttributes<HTMLDIllustrationElement>;
            "d-info-led": LocalJSX.DInfoLed & JSXBase.HTMLAttributes<HTMLDInfoLedElement>;
            "d-input": LocalJSX.DInput & JSXBase.HTMLAttributes<HTMLDInputElement>;
            "d-loading": LocalJSX.DLoading & JSXBase.HTMLAttributes<HTMLDLoadingElement>;
            "d-logo": LocalJSX.DLogo & JSXBase.HTMLAttributes<HTMLDLogoElement>;
            "d-organizations": LocalJSX.DOrganizations & JSXBase.HTMLAttributes<HTMLDOrganizationsElement>;
            "d-page-description": LocalJSX.DPageDescription & JSXBase.HTMLAttributes<HTMLDPageDescriptionElement>;
            "d-scan-button": LocalJSX.DScanButton & JSXBase.HTMLAttributes<HTMLDScanButtonElement>;
            "d-session-card": LocalJSX.DSessionCard & JSXBase.HTMLAttributes<HTMLDSessionCardElement>;
            "d-settings-menu": LocalJSX.DSettingsMenu & JSXBase.HTMLAttributes<HTMLDSettingsMenuElement>;
            "d-swipable-page": LocalJSX.DSwipablePage & JSXBase.HTMLAttributes<HTMLDSwipablePageElement>;
            "d-tab-button": LocalJSX.DTabButton & JSXBase.HTMLAttributes<HTMLDTabButtonElement>;
            "d-tab-page": LocalJSX.DTabPage & JSXBase.HTMLAttributes<HTMLDTabPageElement>;
            "d-text": LocalJSX.DText & JSXBase.HTMLAttributes<HTMLDTextElement>;
            "d-vertical-stack": LocalJSX.DVerticalStack & JSXBase.HTMLAttributes<HTMLDVerticalStackElement>;
            "didroom-logo": LocalJSX.DidroomLogo & JSXBase.HTMLAttributes<HTMLDidroomLogoElement>;
        }
    }
}
