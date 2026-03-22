import { ChillSharpClient } from "chill-sharp-ts-client";

const client = new ChillSharpClient("http://localhost:5000/api/chill", {
  cultureName: "en-GB"
});

const created = await client.create({
  ChillType: "Model.Post",
  Guid: crypto.randomUUID(),
  Properties: {
    Title: "Hello from the web app",
    Author: "Ada Lovelace"
  }
});

const schema = await client.getSchema("Model.Post", "default");
const posts = await client.query({
  ChillType: "Query.PostQuery",
  ResultProperties: [{ Name: "Guid" }, { Name: "Title" }, { Name: "Author" }]
});
