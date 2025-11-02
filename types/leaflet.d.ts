// types/react-leaflet-fix.d.ts
import type { CSSProperties, ReactNode } from "react";

declare module "react-leaflet/MapContainer" {
  interface MapContainerProps {
    center?: [number, number];
    zoom?: number;
    style?: CSSProperties;
    children?: ReactNode;
  }
}

declare module "react-leaflet/TileLayer" {
  interface TileLayerProps {
    attribution?: string;
    url?: string;
    children?: ReactNode;
  }
}
