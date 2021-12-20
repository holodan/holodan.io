// import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>

        <p>
          My name's Dan, I'm a developer and music production artist from the
          UK. I started this website to document the journey in putting my ideas
          into action. I'll be listing these projects on the site alongside a
          weekly update on my journey.
        </p>

        {morePosts.map((post) => (
          <>
            <h2>{post.title}</h2>
            <p>{post.slug}</p>
          </>
        ))}
        {
          // <Container>
          //   <Intro />
          // {heroPost && (
          //   <HeroPost
          //     title={heroPost.title}
          //     coverImage={heroPost.coverImage}
          //     date={heroPost.date}
          //     author={heroPost.author}
          //     slug={heroPost.slug}
          //     excerpt={heroPost.excerpt}
          //   />
          // )}
          // {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          // </Container>
        }
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
