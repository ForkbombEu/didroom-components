/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Size } from "./components/types";
import { Shape } from "./components/avatar/avatar";
export { Size } from "./components/types";
export { Shape } from "./components/avatar/avatar";
export namespace Components {
    interface DidroomAvatar {
        /**
          * Specifies the name to be shown.
         */
        "name"?: string;
        "shape"?: Shape;
        "size"?: Size;
        /**
          * Specifies the `src` to an image to load.
         */
        "src"?: string;
    }
}
declare global {
    interface HTMLDidroomAvatarElement extends Components.DidroomAvatar, HTMLStencilElement {
    }
    var HTMLDidroomAvatarElement: {
        prototype: HTMLDidroomAvatarElement;
        new (): HTMLDidroomAvatarElement;
    };
    interface HTMLElementTagNameMap {
        "didroom-avatar": HTMLDidroomAvatarElement;
    }
}
declare namespace LocalJSX {
    interface DidroomAvatar {
        /**
          * Specifies the name to be shown.
         */
        "name"?: string;
        "shape"?: Shape;
        "size"?: Size;
        /**
          * Specifies the `src` to an image to load.
         */
        "src"?: string;
    }
    interface IntrinsicElements {
        "didroom-avatar": DidroomAvatar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "didroom-avatar": LocalJSX.DidroomAvatar & JSXBase.HTMLAttributes<HTMLDidroomAvatarElement>;
        }
    }
}
