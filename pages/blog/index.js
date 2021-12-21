import Link from "next/link";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllBlog } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";

export default function Blog({ allPosts, preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>pocketprojects.io</title>
      </Head>

      {allPosts.map((post) => (
        <ul>
          <li>
            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
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
  const allPosts = await getAllBlog(preview);

  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
