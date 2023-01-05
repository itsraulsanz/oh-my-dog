const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const result = await graphql(
    `
      {
        allContentfulBlog {
          nodes {
            title
            path
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlog.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostPath = index === 0 ? null : posts[index - 1].path
      const nextPostPath =
        index === posts.length - 1 ? null : posts[index + 1].path

      createPage({
        path: `/blog/${post.path}/`,
        component: blogPost,
        context: {
          slug: post.path,
          previousPostPath,
          nextPostPath,
        },
      })
    })
  }
}