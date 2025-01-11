import Link from "next/link";
import { query } from "../../lib/hashnode";

import "../../styles.css";
import { ChevronLeft } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
        href="/posts"
        className="flex items-center gap-0 mb-4 text-sm tracking-tight text-neutral-600"
      >
        <ChevronLeft /> Back to blogs
      </Link>
      <article>
        <img src={post.coverImage.url} alt="" />
        <h1 className="my-2 text-4xl font-black text-neutral-700">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 mt-4">
          <img
            className="rounded-full size-12"
            src={post.author.profilePicture}
            alt="Author photo"
          />
          <div>
            <p className="font-serif text-xl">
              {post.author.name} -{" "}
              <a
                className="text-base text-red-500"
                href={post.author.socialMediaLinks.twitter}
              >
                Twitter
              </a>
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-400">
              {` `}
              {new Date(post.publishedAt).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div
          className="max-w-full mt-6 prose-sm prose prose-red prose-hr:my-4"
          dangerouslySetInnerHTML={{
            __html: post.content.html,
          }}
        />
      </article>
      <Footer />
    </>
  );
}
