import { DefineFunction, Manifest, Schema } from "deno-slack-sdk/mod.ts";

export default Manifest({
  name: "__APP_NAME__",
  description: "__REPO_URL__",
  icon: "assets/icon.png",
  functions: [],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
