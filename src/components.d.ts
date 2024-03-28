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
    interface DHeading {
        "color": Color;
        "size": Size;
    }
    interface DInput {
        "autoFocus": boolean;
        "clearButton": boolean;
        "errorText": string;
        "helperText": string;
        "label": string;
        "name": string;
        "personIcon": boolean;
        "placeholder": string;
        "type": 'text' | 'password' | 'email' | 'number';
        "value": string;
    }
    interface DLogo {
    }
    interface DText {
        "color": Color;
        "size": Size;
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
        "close": void;
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
    interface HTMLDHeadingElement extends Components.DHeading, HTMLStencilElement {
    }
    var HTMLDHeadingElement: {
        prototype: HTMLDHeadingElement;
        new (): HTMLDHeadingElement;
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
    interface HTMLDTextElement extends Components.DText, HTMLStencilElement {
    }
    var HTMLDTextElement: {
        prototype: HTMLDTextElement;
        new (): HTMLDTextElement;
    };
    interface HTMLElementTagNameMap {
        "d-avatar": HTMLDAvatarElement;
        "d-button": HTMLDButtonElement;
        "d-credential-card": HTMLDCredentialCardElement;
        "d-credential-detail": HTMLDCredentialDetailElement;
        "d-credential-service": HTMLDCredentialServiceElement;
        "d-definition": HTMLDDefinitionElement;
        "d-feedback": HTMLDFeedbackElement;
        "d-heading": HTMLDHeadingElement;
        "d-input": HTMLDInputElement;
        "d-logo": HTMLDLogoElement;
        "d-text": HTMLDTextElement;
    }
}
declare namespace LocalJSX {
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
        "onClose"?: (event: DFeedbackCustomEvent<void>) => void;
        "type"?: 'success' | 'error';
    }
    interface DHeading {
        "color"?: Color;
        "size"?: Size;
    }
    interface DInput {
        "autoFocus"?: boolean;
        "clearButton"?: boolean;
        "errorText"?: string;
        "helperText"?: string;
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
    interface DText {
        "color"?: Color;
        "size"?: Size;
    }
    interface IntrinsicElements {
        "d-avatar": DAvatar;
        "d-button": DButton;
        "d-credential-card": DCredentialCard;
        "d-credential-detail": DCredentialDetail;
        "d-credential-service": DCredentialService;
        "d-definition": DDefinition;
        "d-feedback": DFeedback;
        "d-heading": DHeading;
        "d-input": DInput;
        "d-logo": DLogo;
        "d-text": DText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "d-avatar": LocalJSX.DAvatar & JSXBase.HTMLAttributes<HTMLDAvatarElement>;
            "d-button": LocalJSX.DButton & JSXBase.HTMLAttributes<HTMLDButtonElement>;
            "d-credential-card": LocalJSX.DCredentialCard & JSXBase.HTMLAttributes<HTMLDCredentialCardElement>;
            "d-credential-detail": LocalJSX.DCredentialDetail & JSXBase.HTMLAttributes<HTMLDCredentialDetailElement>;
            "d-credential-service": LocalJSX.DCredentialService & JSXBase.HTMLAttributes<HTMLDCredentialServiceElement>;
            "d-definition": LocalJSX.DDefinition & JSXBase.HTMLAttributes<HTMLDDefinitionElement>;
            "d-feedback": LocalJSX.DFeedback & JSXBase.HTMLAttributes<HTMLDFeedbackElement>;
            "d-heading": LocalJSX.DHeading & JSXBase.HTMLAttributes<HTMLDHeadingElement>;
            "d-input": LocalJSX.DInput & JSXBase.HTMLAttributes<HTMLDInputElement>;
            "d-logo": LocalJSX.DLogo & JSXBase.HTMLAttributes<HTMLDLogoElement>;
            "d-text": LocalJSX.DText & JSXBase.HTMLAttributes<HTMLDTextElement>;
        }
    }
}
