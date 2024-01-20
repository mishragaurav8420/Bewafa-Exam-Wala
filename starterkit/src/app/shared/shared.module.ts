import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from "./components/loader/loader.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ContentLayoutComponent } from "./components/layout/content-layout/content-layout.component";
import { FullLayoutComponent } from "./components/layout/full-layout/full-layout.component";
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { BookmarkComponent } from "./components/bookmark/bookmark.component";
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// services
import { NavService } from "./services/nav.service";
import { CustomizerService } from "./services/customizer.service";
// Directives
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [LoaderComponent, HeaderComponent, FooterComponent, SidebarComponent, BookmarkComponent, ContentLayoutComponent, FullLayoutComponent, FeatherIconsComponent, BreadcrumbComponent],
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule, NgbModule],
  exports: [LoaderComponent, FeatherIconsComponent, TranslateModule],
  providers: [NavService, CustomizerService],
})
export class SharedModule {}
