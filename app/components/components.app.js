/// <reference path="./../../node_modules/angular2/typings/browser.d.ts" />
System.register(['angular2/core', './components.home', './components.about', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, components_home_1, components_about_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (components_home_1_1) {
                components_home_1 = components_home_1_1;
            },
            function (components_about_1_1) {
                components_about_1 = components_about_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // Router Configuration
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            name: 'Home',
                            path: '/',
                            component: components_home_1.Home
                        },
                        {
                            name: 'About',
                            path: '/about',
                            component: components_about_1.About
                        }
                    ]),
                    core_1.Component({
                        selector: 'acro',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <nav class=\"navbar gradient color-white\">\n      <div class=\"container\">\n        <a class=\"pointer logo\" [routerLink]=\"['Home']\">Acro</a>\n        <a class=\"pointer float-right\" [routerLink]=\"['About']\">Sign In</a>\n        <a class=\"pointer float-right\" [routerLink]=\"['About']\">How to play</a>\n      </div>\n    </nav>\n    <router-outlet></router-outlet>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=components.app.js.map