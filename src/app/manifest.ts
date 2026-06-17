import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Patricia Gea Portfolio",
    short_name: "Patricia Gea",
    description: "Frontend and Fullstack Developer portfolio built with Next.js and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#B9124F",
    lang: "en",
  };
}
