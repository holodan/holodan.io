const previewSecret =
  "sk6ovrS5HpgfNAZD8UN1gCqTbFSPyvvKKI8Oyqe4NtqO1JdolRLEc8sSgLKbALRLFFsSVhKzHPTIF25AOQaGb7G0vKlV7X7NLZnb7ERdyIa61h7avtVc0y2vqpDcsimCWXgGbtZFm39tDFXE9gjV5etdgus73RlTMpyFayQhbbVJhSe4RQ0J"; // Copy the string you used for SANITY_PREVIEW_SECRET

export default function resolveProductionUrl(document) {
  let page = document._type;
  let slug = document?.slug?.current || "null";

  return `https://holodan.io/api/preview?secret=${previewSecret}&page=${page}&slug=${slug}`;
}
