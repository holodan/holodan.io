// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import project from "./project";
import blog from "./blog";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([project, blog, blockContent]),
});
