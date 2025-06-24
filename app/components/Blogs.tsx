import React from "react";
import { query } from "../lib/hashnode";

interface Post {
  coverImage: {
    url: string;
  };
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
}

type BlogsProps = {
  count: number;
};

const Blogs = async ({ count }: BlogsProps) => {
  const res = await query({
    query: `
      query($host: String!, $count: Int!) {
        publication(host: $host) {
          posts(first: $count) {
            edges {
              node {
                coverImage {
                  url
                }
                id
                publishedAt
                slug
                title
              }
            }
          }
        }
      }
    `,
    variables: {
      host: "gauravvala.hashnode.dev",
      count: 50,
    },
  });

  const publication = res?.data?.publication;
  if (!publication) {
    throw new Error("Publication data not found. Check API response.");
  }

  const posts: Post[] = publication.posts.edges.map(
    (edge: { node: Post }) => edge.node
  );

  return (
    <section className="mt-4">
      <ul>
        {posts.map((post) => (
          <li className="py-1 border-b border-neutral-300" key={post.slug}>
            {/* Uncomment below if you want to display the cover image */}
            {/* {post.coverImage?.url && (
              <img className="rounded-xl" src={post.coverImage.url} alt={post.title} />
            )} */}
            <a
              className="block font-serif text-base font-semibold text-neutral-700"
              href={`/posts/${post.slug}`}
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
