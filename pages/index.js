import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>pocketprojects.io</title>
      </Head>

      <header>
        <h1>pocketprojects.io</h1>
      </header>

      <section>
        <p>
          My name's Dan, I'm a developer and music production artist from the
          UK. I started this website to document the journey in putting my ideas
          into action. I'll be listing these projects on the site alongside a
          weekly update on my journey.
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
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
