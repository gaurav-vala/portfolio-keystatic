import Link from "next/link";
import Header from "../../components/Header";
import { query } from "../../lib/hashnode";

import "../../styles.css";
import { ChevronLeft } from "lucide-react";

interface PostParams {
  params: { pageSlug: string };
}

interface Post {
  author: {
    name: string;
    profilePicture: string;
    socialMediaLinks: {
      twitter: string;
    };
  };
  content: {
    html: string;
  };
  coverImage: {
    url: string;
  };
  id: string;
  publishedAt: string;
  title: string;
}

export default async function Post({ params }: PostParams) {
  const {
    data: { publication },
  } = await query({
    query: `
            query($host: String!, $slug: String!) {
              publication(host: $host) {
                post(slug: $slug) {
                  author {
                    name
                    profilePicture
                    socialMediaLinks {
                      twitter
                    }
                  }
                  content {
                    html
                  }
                  coverImage {
                    url
                  }
                  id
                  publishedAt
                  title
                }
              }
            }
          `,
    variables: {
      host: "gauravvala.hashnode.dev",
      slug: params.pageSlug,
    },
  });

  const post = publication?.post as Post;

  return (
    <>
      <Header />
      <Link
        href="/"
        className="flex items-center gap-0 mb-4 text-sm tracking-tight text-neutral-600"
      >
        <ChevronLeft /> Back to home
      </Link>
      <article>
        <img src={post.coverImage.url} alt="" />
        <h1 className="my-2 text-4xl font-black">{post.title}</h1>
        <div className="flex items-center gap-2 mt-4">
          <img
            className="rounded-full size-12"
            src={post.author.profilePicture}
            alt="Author photo"
          />
          <div>
            <p className="font-serif text-xl">{post.author.name}</p>
            <ul className="mt-0">
              <li className="mt-2 text-xs border-b border-neutral-300 dark:border-neutral-700 w-fit">
                <a href={post.author.socialMediaLinks.twitter}>Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400">
          Published on
          {` `}
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <div
          className="mt-6 prose dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: post.content.html,
          }}
        />
      </article>
    </>
  );
}
