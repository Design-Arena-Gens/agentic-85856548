import {
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  NgModule
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";
import { ExperienceCardComponent } from "./widgets/experience-card.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [ExperienceCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    if (!customElements.get("angular-experience-card")) {
      const element = createCustomElement(ExperienceCardComponent, {
        injector: appRef.injector
      });
      customElements.define("angular-experience-card", element);
    }
  }
}
