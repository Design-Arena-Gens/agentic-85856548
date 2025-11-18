import "zone.js";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./module";

if (typeof window !== "undefined" && !window.location.hostname.includes("localhost")) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error("Angular bootstrap failed", err));
