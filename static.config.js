import { request } from "graphql-request";

const GRAPHCMS_ENDPOINT =
  "https://api-apeast.graphcms.com/v1/cjw3nge0j1pip01etmht5upab/master";

const query = `
{
  posts {
    id
    title
    image {
      handle
    }
    content
    tags
    author {
      id
      name
    }
  }
  
  authors {
    id
    name
    avatar {
      handle
    }
    bio
  }
}

`;

export default {
  getSiteData: () => ({
    title: "DevBlog"
  }),
  getRoutes: async () => {
    const { posts, authors } = await request(GRAPHCMS_ENDPOINT, query);

    return [
      {
        path: "/",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/pages/post",
          getData: () => ({
            post
          })
        }))
      },
      {
        path: "/about",
        component: "src/pages/about",
        getData: () => ({
          authors
        })
      }
    ];
  }
};
