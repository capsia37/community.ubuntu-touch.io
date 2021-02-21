// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.onCreateNode(options => {
    if (options.internal.typeName === "Pages") {
      let pagePath = options.path;
      pagePath = pagePath.split("/");
      pagePath.shift();
      pagePath.pop();
      options.category = pagePath.length != 0 ? pagePath.pop() : "root";
      if (options.category != "root") {
        options.subcategory = pagePath.length != 0 ? pagePath.pop() : "root";
      }
    }
  });

  api.createManagedPages(async ({ graphql, createPage, removePageByPath }) => {
    const { data } = await graphql(
      "{ allPages { edges { node { id category subcategory path } } } }"
    );


    data.allPages.edges.forEach(({ node }) => {
      console.log(node);
      removePageByPath(node.path);
      createPage({
        path: node.path,
        component: "./src/templates/Pages.vue",
        context: {
          id: node.id,
          category: node.category,
          subcategory: node.subcategory
        }
      });
    });
  });
};
