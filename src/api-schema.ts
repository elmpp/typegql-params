import { compileSchema, SchemaRoot, Query } from "typegql";

@SchemaRoot()
class SuperSchema {
  @Query({type: String})
  hello(name: string): string {
    return `Hello, ${name}!`;
  }
}

export default compileSchema({ roots: [SuperSchema] });
