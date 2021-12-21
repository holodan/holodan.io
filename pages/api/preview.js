import { getPreviewBySlug } from "../../lib/api";

export default async function preview(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug ||
    !req.query.page
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  let { page, slug } = req.query;

  if (req.query.page === "project") page = "projects";

  // Fetch the headless CMS to check if the provided `slug` exists
  const post = await getPreviewBySlug(page, slug);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/${page}/${slug}` });
  res.end();
}
