import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/layout";
import SubscribeForm from "../components/subscribe-form";
import { getAllProjects } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, preview }) {
  return (
    <Layout preview={preview} type="main">
      <section>
        <p>🙋‍♂️🙋‍♂️🙋‍♂️</p>

        <p>
          My name's Dan, and I make things. I've always been facinated by
          creating & building new things, but like many people, I've found
          difficulty in keeping up momentum and following through on new ideas.
          This project serves to address this, existing as a repository of my
          ongoing projects, learnings, and explorations:
        </p>

        {
          // <p>
          //   Hi, my name is Dan. I'm a developer, artist, and business owner from
          //   Manchester, UK. For the past few years, I've been having fun trying
          //   out new dev projects, working on music, and building a magazine. I've
          //   always been facinated by creating & building new things, but like many
          //   people, I've found difficulty in keeping up momentum and following
          //   through on new ideas.
          // </p>
          //
          // <p>
          //   Frankly, I'd like to push my skillset further. I like the idea of
          //   creating small, managable projects that I can continously grow along
          //   side my main hussles. Whether it's starting a new business, learning a
          //   new skill, reading a new book, this website will serve as a home for
          //   these concepts & ideas, I'll be actively documenting my journey in
          //   doing that from the ground up.
          // </p>
        }

        {
          // <p>
          //   I'll list these in the{" "}
          //   <Link as={`/projects`} href="/projects">
          //     <a>Projects</a>
          //   </Link>{" "}
          //   page and routinely update{" "}
          //   <Link as={`/blog`} href="/blog">
          //     <a>Weekly Blog</a>
          //   </Link>{" "}
          //   to talk about my progress.
          // </p>
        }
      </section>

      {allPosts.map((post) => (
        <ul>
          <li>
            <Link as={`/projects/${post.slug}`} href="/projects/[slug]">
              <h2>
                <a aria-label={post.title}>{post.title}</a>
              </h2>
            </Link>

            <Date dateString={post.date} />
          </li>
        </ul>
      ))}

      <SubscribeForm />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllProjects(preview);

  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
