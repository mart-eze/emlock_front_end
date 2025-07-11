import { Routes } from "@angular/router";

import { LoginComponent } from "./auth/login/login.component";
import { AdminGuard } from "./guard/admin.guard";
import { content } from "./routes/content.routes";
import { full } from "./routes/full.routes";
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { FullComponent } from "./components/layout/full/full.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
  {
    path: "user-profile",
    component: UserProfileComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "auth/login",
    component: LoginComponent,
  },
  {
    path: "",
    component: ContentComponent,
    canActivate: [AdminGuard],
    children: content,
  },
  {
    path: "",
    component: FullComponent,
    canActivate: [AdminGuard],
    children: full,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
