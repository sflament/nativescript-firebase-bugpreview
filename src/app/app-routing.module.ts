import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/gui/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/gui/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/gui/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/gui/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/gui/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
