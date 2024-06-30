const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const cityTemplate = path.resolve('./src/templates/city-template.js')
  const cityServiceTemplate = path.resolve('./src/templates/city-service-template.js')

  const result = await graphql(
    `
      {
        allContentfulBlog {
          nodes {
            title
            path
          }
        }
        allContentfulCityServices {
          nodes {
            cityName
            slug
            country
          }
        }
        allContentfulServices {
          nodes {
            serviceName
            slug
            order
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
    posts.forEach((post) => {
      createPage({
        path: `/blog/${post.path}/`,
        component: blogPost,
        context: {
          slug: post.path
        },
      })
    })
  }

  const cities = result.data.allContentfulCityServices.nodes
  const services = result.data.allContentfulServices.nodes

  // Create city pages

  cities.forEach((city) => {
    createPage({
      path: `/${city.slug}/`,
      component: cityTemplate,
      context: {
        slug: city.slug,
      },
    })
    services.forEach((service) => {
      createPage({
        path: `/${city.slug + '-' + service.slug}/`,
        component: cityServiceTemplate,
        context: {
          slug: city.slug,
          serviceSlug: service.slug,
          serviceSlugOrder: service.order
        },
      })
    })
  })
}

const fetch = (...args) =>
  import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const resultEn = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GATSBY_GOOGLE_PLACE_ID}&fields=rating,reviews,user_ratings_total&key=${process.env.GATSBY_GOGGLE_API_KEY}&language=en`)
  const resultEs = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GATSBY_GOOGLE_PLACE_ID}&fields=rating,reviews,user_ratings_total&key=${process.env.GATSBY_GOGGLE_API_KEY}&language=es`)
  const resultDataEn = await resultEn.json()
  const resultDataEs = await resultEs.json()
  // create node for build time data example in the docs
  createNode({
    rating: resultDataEn.result.rating,
    reviewsEn: resultDataEn.result.reviews,
    reviewsEs: resultDataEs.result.reviews,
    userRating: resultDataEn.result.user_ratings_total,
    id: `reviews`,
    parent: null,
    children: [],
    internal: {
      type: `Reviews`,
      contentDigest: createContentDigest(resultDataEn),
    },
  })
}
