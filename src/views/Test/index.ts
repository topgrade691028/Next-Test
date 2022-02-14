import dynamic from "next/dynamic";
export const TestView = dynamic(() => import("./Test"), { ssr: false });
