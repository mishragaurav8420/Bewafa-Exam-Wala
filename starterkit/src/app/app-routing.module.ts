import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { ContentLayoutComponent } from "./shared/components/layout/content-layout/content-layout.component";
import { FullLayoutComponent } from "./shared/components/layout/full-layout/full-layout.component";
import { content } from "./shared/routes/content-routes";
import { full } from "./shared/routes/full.routes";

const routes: Routes = [
  {
    path: "",
    redirectTo: "sample-page/sample-page1",
    pathMatch: "full",
  },
  {
    path: "",
    component: ContentLayoutComponent,
    children: content,
  },
  {
    path: "",
    component: FullLayoutComponent,
    children: full,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
