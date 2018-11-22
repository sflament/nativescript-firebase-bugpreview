import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import * as firebase from "nativescript-plugin-firebase";


@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {

        firebase.init({
            //persist should be set to false as otherwise numbers aren't returned during livesync
            persist: false,
            storageBucket: 'gs://scorching-fire-9218.appspot.com',
            onAuthStateChanged: (data: any) => {
              console.log(JSON.stringify(data))
            }
          }).then(
            function (instance) {
              console.log("firebase.init done");
            },
            function (error) {
              console.log("firebase.init error: " + error);
            }
            );

        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: 'toto@toto.fr',
                password: 'toto'
            }
            }).then((result: any) => {
                return JSON.stringify(result);
                }, (errorMessage: any) => {
                    alert(errorMessage);
                });

        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
