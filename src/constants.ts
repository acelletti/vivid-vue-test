import {PropType} from "vue";

export type AriaLivePropType = PropType<"polite" | "assertive">;
export type ConnotationPropType = PropType<"primary" | "cta" | "success" | "alert" | "warning" | "info" | "announcement">;
export type ConnotationDecorativePropType = PropType<"pacific">;
export type IconSizePropType = PropType<"small" | "medium" | "large">;
export type LayoutPropType = PropType<"text" | "filled" | "outlined" | "soft" | "ghost">;
export type PositionPropType = PropType<"TOP" | "BOTTOM" | "START" | "CENTER" | "END">;
export type RolePropType = PropType<"status" | "alert">;
export type ShapePropType = PropType<"rounded" | "pill" | "circled">;
export type SizePropType = PropType<"xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl">;