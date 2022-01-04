import Date from "../components/date";
import CoverImage from "../components/cover-image";
import { imageBuilder } from "../lib/sanity";
export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      {coverImage && (
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      )}

      <Date dateString={date} />
      <h1>{title}</h1>
    </>
  );
}
