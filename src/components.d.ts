/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color, Shape, Size } from "./components/types";
export { Color, Shape, Size } from "./components/types";
export namespace Components {
    interface DActivityCard {
    }
    interface DAvatar {
        "name"?: string;
        "shape"?: Shape;
        "size"?: Size;
        "src"?: string;
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
    interface DCredentialCard {
        "description"?: string;
        "expirationDate"?: string;
        "issuer": string;
        "logoSrc"?: string;
        "name": string;
        "verified"?: boolean;
    }
    interface DCredentialDetail {
        "description": string;
        "issuer": string;
        "logoSrc"?: string;
        "longDescription"?: string;
        "name": string;
    }
    interface DCredentialService {
        "description"?: string;
        "href"?: string;
        "issuer": string;
        "logoSrc"?: string;
        "name": string;
    }
    interface DDefinition {
        "definition": string;
        "hidable": boolean;
        "title": string;
    }
    interface DFeedback {
        "feedback": string;
        "message": string | undefined;
        "type": 'success' | 'error';
    }
    interface DHeader {
        "backButton": boolean;
        "settings": boolean;
    }
    interface DHeading {
        "color": Color;
        "size": Size;
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
    interface DLogo {
    }
    interface DSessionCard {
        "date": string;
        "sid": string;
        "success": boolean;
    }
    interface DTabButton {
        "active": boolean;
        "tab": 'home' | 'profile' | 'activity' | 'wallet';
    }
    interface DText {
        "color": Color;
        "size": Size;
    }
    interface DidroomLogo {
    }
}
export interface DButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDButtonElement;
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
    interface HTMLDAvatarElement extends Components.DAvatar, HTMLStencilElement {
    }
    var HTMLDAvatarElement: {
        prototype: HTMLDAvatarElement;
        new (): HTMLDAvatarElement;
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
    interface HTMLDLogoElement extends Components.DLogo, HTMLStencilElement {
    }
    var HTMLDLogoElement: {
        prototype: HTMLDLogoElement;
        new (): HTMLDLogoElement;
    };
    interface HTMLDSessionCardElement extends Components.DSessionCard, HTMLStencilElement {
    }
    var HTMLDSessionCardElement: {
        prototype: HTMLDSessionCardElement;
        new (): HTMLDSessionCardElement;
    };
    interface HTMLDTabButtonElement extends Components.DTabButton, HTMLStencilElement {
    }
    var HTMLDTabButtonElement: {
        prototype: HTMLDTabButtonElement;
        new (): HTMLDTabButtonElement;
    };
    interface HTMLDTextElement extends Components.DText, HTMLStencilElement {
    }
    var HTMLDTextElement: {
        prototype: HTMLDTextElement;
        new (): HTMLDTextElement;
    };
    interface HTMLDidroomLogoElement extends Components.DidroomLogo, HTMLStencilElement {
    }
    var HTMLDidroomLogoElement: {
        prototype: HTMLDidroomLogoElement;
        new (): HTMLDidroomLogoElement;
    };
    interface HTMLElementTagNameMap {
        "d-activity-card": HTMLDActivityCardElement;
        "d-avatar": HTMLDAvatarElement;
        "d-button": HTMLDButtonElement;
        "d-buttons-group": HTMLDButtonsGroupElement;
        "d-credential-card": HTMLDCredentialCardElement;
        "d-credential-detail": HTMLDCredentialDetailElement;
        "d-credential-service": HTMLDCredentialServiceElement;
        "d-definition": HTMLDDefinitionElement;
        "d-feedback": HTMLDFeedbackElement;
        "d-header": HTMLDHeaderElement;
        "d-heading": HTMLDHeadingElement;
        "d-info-led": HTMLDInfoLedElement;
        "d-input": HTMLDInputElement;
        "d-logo": HTMLDLogoElement;
        "d-session-card": HTMLDSessionCardElement;
        "d-tab-button": HTMLDTabButtonElement;
        "d-text": HTMLDTextElement;
        "didroom-logo": HTMLDidroomLogoElement;
    }
}
declare namespace LocalJSX {
    interface DActivityCard {
    }
    interface DAvatar {
        "name"?: string;
        "shape"?: Shape;
        "size"?: Size;
        "src"?: string;
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
    interface DCredentialCard {
        "description"?: string;
        "expirationDate"?: string;
        "issuer"?: string;
        "logoSrc"?: string;
        "name"?: string;
        "verified"?: boolean;
    }
    interface DCredentialDetail {
        "description"?: string;
        "issuer"?: string;
        "logoSrc"?: string;
        "longDescription"?: string;
        "name"?: string;
    }
    interface DCredentialService {
        "description"?: string;
        "href"?: string;
        "issuer"?: string;
        "logoSrc"?: string;
        "name"?: string;
    }
    interface DDefinition {
        "definition"?: string;
        "hidable"?: boolean;
        "title"?: string;
    }
    interface DFeedback {
        "feedback"?: string;
        "message"?: string | undefined;
        "onDClose"?: (event: DFeedbackCustomEvent<void>) => void;
        "type"?: 'success' | 'error';
    }
    interface DHeader {
        "backButton"?: boolean;
        "settings"?: boolean;
    }
    interface DHeading {
        "color"?: Color;
        "size"?: Size;
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
    interface DLogo {
    }
    interface DSessionCard {
        "date"?: string;
        "sid"?: string;
        "success"?: boolean;
    }
    interface DTabButton {
        "active"?: boolean;
        "tab"?: 'home' | 'profile' | 'activity' | 'wallet';
    }
    interface DText {
        "color"?: Color;
        "size"?: Size;
    }
    interface DidroomLogo {
    }
    interface IntrinsicElements {
        "d-activity-card": DActivityCard;
        "d-avatar": DAvatar;
        "d-button": DButton;
        "d-buttons-group": DButtonsGroup;
        "d-credential-card": DCredentialCard;
        "d-credential-detail": DCredentialDetail;
        "d-credential-service": DCredentialService;
        "d-definition": DDefinition;
        "d-feedback": DFeedback;
        "d-header": DHeader;
        "d-heading": DHeading;
        "d-info-led": DInfoLed;
        "d-input": DInput;
        "d-logo": DLogo;
        "d-session-card": DSessionCard;
        "d-tab-button": DTabButton;
        "d-text": DText;
        "didroom-logo": DidroomLogo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "d-activity-card": LocalJSX.DActivityCard & JSXBase.HTMLAttributes<HTMLDActivityCardElement>;
            "d-avatar": LocalJSX.DAvatar & JSXBase.HTMLAttributes<HTMLDAvatarElement>;
            "d-button": LocalJSX.DButton & JSXBase.HTMLAttributes<HTMLDButtonElement>;
            "d-buttons-group": LocalJSX.DButtonsGroup & JSXBase.HTMLAttributes<HTMLDButtonsGroupElement>;
            "d-credential-card": LocalJSX.DCredentialCard & JSXBase.HTMLAttributes<HTMLDCredentialCardElement>;
            "d-credential-detail": LocalJSX.DCredentialDetail & JSXBase.HTMLAttributes<HTMLDCredentialDetailElement>;
            "d-credential-service": LocalJSX.DCredentialService & JSXBase.HTMLAttributes<HTMLDCredentialServiceElement>;
            "d-definition": LocalJSX.DDefinition & JSXBase.HTMLAttributes<HTMLDDefinitionElement>;
            "d-feedback": LocalJSX.DFeedback & JSXBase.HTMLAttributes<HTMLDFeedbackElement>;
            "d-header": LocalJSX.DHeader & JSXBase.HTMLAttributes<HTMLDHeaderElement>;
            "d-heading": LocalJSX.DHeading & JSXBase.HTMLAttributes<HTMLDHeadingElement>;
            "d-info-led": LocalJSX.DInfoLed & JSXBase.HTMLAttributes<HTMLDInfoLedElement>;
            "d-input": LocalJSX.DInput & JSXBase.HTMLAttributes<HTMLDInputElement>;
            "d-logo": LocalJSX.DLogo & JSXBase.HTMLAttributes<HTMLDLogoElement>;
            "d-session-card": LocalJSX.DSessionCard & JSXBase.HTMLAttributes<HTMLDSessionCardElement>;
            "d-tab-button": LocalJSX.DTabButton & JSXBase.HTMLAttributes<HTMLDTabButtonElement>;
            "d-text": LocalJSX.DText & JSXBase.HTMLAttributes<HTMLDTextElement>;
            "didroom-logo": LocalJSX.DidroomLogo & JSXBase.HTMLAttributes<HTMLDidroomLogoElement>;
        }
    }
}
