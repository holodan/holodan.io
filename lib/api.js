import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
`;

const blogFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
`;

const getClient = (preview) => (preview ? previewClient : client);

// Preview

export async function getPreviewBySlug(page, slug) {
  const data = await getClient(true).fetch(
    `*[_type == $page && slug.current == $slug] | order(publishedAt desc) [0] {
      ${postFields}
      body
    }`,
    { page, slug }
  );

  return data;
}

// Projects

export async function getAllProjects(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "project"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getProject(slug, preview) {
  const data = await getClient(preview).fetch(
    `*[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
        ${postFields}
        body,
      }`,
    { slug }
  );
  return data;
}

export async function getAllProjectsWithSlug() {
  const data = await client.fetch(
    `*[_type == "project"]{ 'slug': slug.current }`
  );
  return data;
}

// Blog

export async function getAllBlog(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "blog"] | order(publishedAt desc) {
      ${blogFields}
    }`);
  return getUniquePosts(results);
}

export async function getBlog(slug, preview) {
  const data = await getClient(preview).fetch(
    `*[_type == "blog" && slug.current == $slug] | order(_updatedAt desc) [0] {
        ${postFields}
        body,
      }`,
    { slug }
  );
  return data;
}

export async function getAllBlogWithSlug() {
  const data = await client.fetch(`*[_type == "blog"]{ 'slug': slug.current }`);
  return data;
}
