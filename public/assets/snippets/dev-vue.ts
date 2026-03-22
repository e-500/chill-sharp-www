import { createApp, defineComponent } from "vue";
import { createChillSharpPlugin, useSchema } from "chill-sharp-vue-client";

const BlogSchemaName = defineComponent({
  setup() {
    const { data, isLoading, error } = useSchema("Model.Blog", "default");
    return { data, isLoading, error };
  },
  template: `
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="error">Failed to load schema.</p>
    <h1 v-else>{{ String(data?.DisplayName ?? "") }}</h1>
  `
});

const app = createApp(BlogSchemaName);

app.use(createChillSharpPlugin({
  baseUrl: "http://localhost:5000/api/chill",
  options: { cultureName: "it-IT" }
}));

app.mount("#app");
