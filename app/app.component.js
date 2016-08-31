System.register(['angular2/core', 'angular2/router', 'app/mainpage/mainpage.component', 'app/login/login.component', './register/register.component', './aboutus/aboutus.component', './proizvodiAdmin/proizvodiAdmin.component', './proizvodi/proizvodi.component', './narucivanje/narucivanje.component', './narucivanjeAdmin/narucivanjeAdmin.component', './korisnici/korisnici.component', './korpe/korpe.component', './dodaj/dodaj.component'], function(exports_1, context_1) {
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
    var core_1, router_1, mainpage_component_1, login_component_1, register_component_1, aboutus_component_1, proizvodiAdmin_component_1, proizvodi_component_1, narucivanje_component_1, narucivanjeAdmin_component_1, korisnici_component_1, korpe_component_1, dodaj_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mainpage_component_1_1) {
                mainpage_component_1 = mainpage_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (aboutus_component_1_1) {
                aboutus_component_1 = aboutus_component_1_1;
            },
            function (proizvodiAdmin_component_1_1) {
                proizvodiAdmin_component_1 = proizvodiAdmin_component_1_1;
            },
            function (proizvodi_component_1_1) {
                proizvodi_component_1 = proizvodi_component_1_1;
            },
            function (narucivanje_component_1_1) {
                narucivanje_component_1 = narucivanje_component_1_1;
            },
            function (narucivanjeAdmin_component_1_1) {
                narucivanjeAdmin_component_1 = narucivanjeAdmin_component_1_1;
            },
            function (korisnici_component_1_1) {
                korisnici_component_1 = korisnici_component_1_1;
            },
            function (korpe_component_1_1) {
                korpe_component_1 = korpe_component_1_1;
            },
            function (dodaj_component_1_1) {
                dodaj_component_1 = dodaj_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    var _this = this;
                    this.router = router;
                    router.subscribe(function (val) {
                        if (localStorage.getItem('token2') !== null) {
                            _this.isAuth2 = "yes";
                        }
                        if (localStorage.getItem('token2') == null) {
                            _this.isAuth2 = "no";
                        }
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = "yes";
                        }
                        if (localStorage.getItem('token') == null) {
                            _this.isAuth = "no";
                        }
                    });
                }
                AppComponent.prototype.onLogout = function () {
                    localStorage.removeItem("token2");
                    localStorage.removeItem("token");
                    this.router.navigate(['./MainPage']);
                    if (localStorage.getItem('token') !== null) {
                        this.isAuth = "yes";
                    }
                    if (localStorage.getItem('token') == null) {
                        this.isAuth = "no";
                    }
                    if (localStorage.getItem('token2') !== null) {
                        this.isAuth2 = "yes";
                    }
                    if (localStorage.getItem('token2') == null) {
                        this.isAuth2 = "no";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'moja-aplikacija',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'MainPage', component: mainpage_component_1.MainPageComponent, useAsDefault: true },
                        { path: '/register', name: 'RegisterPage', component: register_component_1.RegisterComponent },
                        { path: '/login', name: 'LoginPage', component: login_component_1.LoginComponent },
                        { path: '/aboutus', name: 'AboutUsPage', component: aboutus_component_1.AboutUsComponent },
                        { path: '/proizvodiadmin', name: 'ProizvodiAdminPage', component: proizvodiAdmin_component_1.ProizvodiAdminComponent },
                        { path: '/proizvodi', name: 'ProizvodiPage', component: proizvodi_component_1.ProizvodiComponent },
                        { path: '/narucivanje/:proizvodi_ID', name: 'NarucivanjePage', component: narucivanje_component_1.NarucivanjeComponent },
                        { path: '/narucivanjeAdmin/:proizvodi_ID', name: 'NarucivanjeAdminPage', component: narucivanjeAdmin_component_1.NarucivanjeAdminComponent },
                        { path: '/korisnici', name: 'KorisniciPage', component: korisnici_component_1.KorisniciComponent },
                        { path: '/korpe', name: 'KorpePage', component: korpe_component_1.KorpeComponent },
                        { path: '/dodaj', name: 'DodajPage', component: dodaj_component_1.DodajComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map