declare module "react-pageflip" {
  import { ComponentType, CSSProperties, ReactNode } from "react";

  export interface HTMLFlipBookProps {
    width?: number;
    height?: number;
    size?: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    usePortrait?: boolean;
    autoSize?: boolean;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    swipeDistance?: number;
    showPageCorners?: boolean;
    disableFlipByClick?: boolean;
    className?: string;
    style?: CSSProperties;
    flippingTime?: number;
    startZIndex?: number;
    startPage?: number;
    onFlip?: (e: { data: number }) => void;
    children?: ReactNode;
  }

  const HTMLFlipBook: ComponentType<HTMLFlipBookProps>;

  export default HTMLFlipBook;
}
