import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideChillSharpClient } from "chill-sharp-ng-client";

bootstrapApplication(AppComponent, {
  providers: [
    ...provideChillSharpClient({
      baseUrl: "http://localhost:5000/api/chill",
      options: { cultureName: "it-IT" }
    })
  ]
});
