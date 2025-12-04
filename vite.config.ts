import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkAlert from 'remark-github-blockquote-alert';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm, remarkAlert],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "plastic",
            // theme: "material-theme",
            transformers: [
              transformerCopyButton({
                visibility: "hover",
                jsx: true,
                feedbackDuration: 3_500,
              }),
            ],
          },
        ],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            properties: {
              className: ["anchor-link"],
              title: "Copy this section link",
            },
            content() {
              return {
                type: "text",
                value: "#",
              };
            },
          },
        ],
        [
          rehypeExternalLinks,
          {
            target: "_blank",
            rel: ["noopener", "noreferrer"],
          },
        ],
      ],
    }),
    react(),
  ],
});
