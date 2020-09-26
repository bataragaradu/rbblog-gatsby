module.exports = {
  siteMetadata: {
    title: `Blog by passion`,
    name: `Bataraga Radu, TECH INNOVATIVE SOLUTIONS`,
    siteUrl: `https://blog.rbinnovative.info`,
    description: `This is blog is created for teaching purposes. This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Start building the future. Don't think about it, do it.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/bataragaradu`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/radu-bataragă-21ab17128`,
      },
      {
        name: 'website presentation',
        url: `https://www.rbinnovative.info`,
      },
      {
        name: 'bitbucket',
        url: `https://bitbucket.org/radubataraga/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
