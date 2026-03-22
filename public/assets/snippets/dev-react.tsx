import { ChillSharpProvider, useSchema } from "chill-sharp-react-client";

function BlogSchemaName() {
  const { data, isLoading, error } = useSchema("Model.Blog", "default");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load schema.</p>;

  return <h1>{String(data?.DisplayName ?? "")}</h1>;
}

export function App() {
  return (
    <ChillSharpProvider
      baseUrl="http://localhost:5000/api/chill"
      options={{ cultureName: "it-IT" }}
    >
      <BlogSchemaName />
    </ChillSharpProvider>
  );
}
