import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/layout";
import { getAllProjects } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>pocketprojects.io</title>
      </Head>

      <section>
        <p>🙋‍♂️🙋‍♂️🙋‍♂️</p>

        <p>
          Hi, my name is Dan. I'm a developer, artist, and business owner from
          Manchester, UK. For the past few years I've been slowly gaining
          momentum with these ventures, but like many people, I feel as though I
          could be pushing my skills further. I've always been facinated by
          creating & building new things, but I've found where I fall short is
          keeping up momentum and following through on new ideas.
        </p>

        <p>
          I like the idea of creating small, managble projects that I can
          continously grow along side my main hussles. Whether it's starting a
          brand, learning a new skill, reading a new book, this website will
          serve as a home for these concepts & ideas, and I'll be actively
          documenting my journey in growing these from the ground up.
        </p>

        <p>
          I recently read Steven Pressfield's <em>The War Of Art</em> in which
          he outlines our everyday battle with resistance. If you're looking for
          a kick up the #@!$, then I highly reccomend checking it out.
        </p>
      </section>

      <p>
        <strong>Projects:</strong>
      </p>

      {allPosts.map((post) => (
        <ul>
          <li>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <h3>
                <a aria-label={post.title}>{post.title}</a>
              </h3>
            </Link>

            <Date dateString={post.date} />
          </li>
        </ul>
      ))}
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
