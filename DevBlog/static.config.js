import path from 'path';
import { request } from 'graphql-request';

const GRAPHCMS_ENDPOINT = 'https://api-apeast.graphcms.com/v1/cjw3nge0j1pip01etmht5upab/master';

const QUERY = `
{
  posts{
    title
    id
    image{
      handle
    }
    content
    tags
    author{
      name
      id
    }
  }
  
  authors{
    id
    name
    avatar{
      handle
    }
    bio
  }
}
`

export default {
  getRoutes: async () => {
   const { posts, authors } =  await request(GRAPHCMS_ENDPOINT, QUERY)

    return [
      {
        //this is the index route on pages directory
        path: '/',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/pages/post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path:'/about',
        template: 'src/pages/about',
        getData: () => ({
          authors
        }),
      }
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
