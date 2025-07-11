import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from "@angular/router";
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { FooterComponent } from "../../footer/footer.component";
import { LayoutService } from "../../../services/layout.service";
import { BreadcrumbsComponent } from "../../breadcrumbs/breadcrumbs.component";

@Component({
  selector: "app-content",
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbsComponent
],
  templateUrl: "./content.component.html",
  styleUrl: "./content.component.scss",
})
export class ContentComponent {
  public layout: string;

  constructor(
    public layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 800);
      }
    });

    this.layout = this.layoutService.config.settings.layout;

    this.route.queryParams.subscribe((params) => {
      this.layout = params["layout"];

      if (this.layout) {
        localStorage.setItem("layout", this.layout);
        this.layoutService.config.settings.layout = this.layout;
        this.layoutService.applyLayout(this.layout);
      }
    });

    if (window.innerWidth < 1200) {
      this.layoutService.closeSidebar = true;
    } else {
      this.layoutService.closeSidebar = false;
    }

    if (window.innerWidth <= 992) {
      this.layoutService.config.settings.sidebar_type = "compact-wrapper";
    } else {
      if (this.layout) {
        this.layoutService.applyLayout(this.layout);
      } else {
        this.layoutService.config.settings.sidebar_type =
          this.layoutService.config.settings.sidebar_type;
      }
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    if (window.innerWidth < 1200) {
      this.layoutService.closeSidebar = true;
    } else {
      this.layoutService.closeSidebar = false;
    }
    if (window.innerWidth <= 992) {
      this.layoutService.config.settings.sidebar_type = "compact-wrapper";
    } else {
      if (this.layout) {
        this.layoutService.applyLayout(this.layout);
      } else {
        this.layoutService.config.settings.sidebar_type =
          this.layoutService.config.settings.sidebar_type;
      }
    }
  }
}
