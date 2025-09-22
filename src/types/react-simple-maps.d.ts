// src/types/react-simple-maps.d.ts
declare module "react-simple-maps" {
  import { Feature, GeoJsonProperties, Geometry } from "geojson";
    import * as React from "react";

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotate?: [number, number, number];
    };
    width?: number;
    height?: number;
    className?: string;
    children?: React.ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: Feature<Geometry, GeoJsonProperties>[] }) => React.ReactNode;
    onError?: () => void;
  }

  export interface GeographyProps {
    geography: Feature<Geometry, GeoJsonProperties>;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    [key: string]: unknown; // avoid `any`
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
}
