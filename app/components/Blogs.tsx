"use client";

import React, { useEffect, useState } from "react";
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

const Blogs = async () => {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first: 10) {
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
    },
  });

  const posts: Array<Post> = publication.posts.edges.map(
    ({ node }: { node: Post }) => node
  );

  return (
    <div className="mt-4">
      <ul>
        {posts.map((post) => (
          <li className="py-1 border-b border-neutral-300" key={post.slug}>
            {/* {post.coverImage && post.coverImage.url ? (
                <img className="rounded-xl" src={post.coverImage.url} alt="" />
              ) : (
                ""
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
    </div>
  );
};

export default Blogs;