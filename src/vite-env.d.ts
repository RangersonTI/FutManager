/// <reference types="vite/client" />

declare module "*.webp";

declare module "*.png";

declare module "*.jpg";
declare module "*.svg" {
    // import * as React from "react";

    // export const ReactComponent: React.FunctionComponent<
    //     React.SVGProps<SVGSVGElement>
    // >;

    const svg: string;
    export default svg;
};