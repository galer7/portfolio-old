import { defineDocumentType, makeSource } from "contentlayer/source-files";
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    cover: { type: "string", required: true },
    coverAlt: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/data",
  documentTypes: [Post],
  disableImportAliasWarning: true,
});
