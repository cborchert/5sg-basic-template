export default {
  siteMeta: {
    name: "",
    short_name: "",
    description: "",
    icons: [
      {
        src: "/static/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/static/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  },
  layouts: { _: `src/layouts/Page.svelte` },
};
