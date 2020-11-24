const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
      const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
      }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const templatePage = path.resolve('./src/templates/template_1.js')
    const res = await graphql(`
    query {
        allMarkdownRemark {
            edges {
            node {
                fields {
                slug
                }
            }
            }
        }
    }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: templatePage,
            path: `/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }

        })
    })

}
