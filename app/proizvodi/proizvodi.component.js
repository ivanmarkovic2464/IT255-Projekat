System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1;
    var ProizvodiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProizvodiComponent = (function () {
                function ProizvodiComponent(builder, http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    var headers = new http_1.Headers();
                    http.get('http://localhost/PHP/getproizvod.php', { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (servisi) {
                        _this.servisi = servisi.servisi;
                        setInterval(function () {
                            $('table').DataTable();
                        }, 200);
                    }, function (err) {
                        _this.router.parent.navigate(['./MainPage']);
                    });
                }
                ProizvodiComponent.prototype.detalji = function (item) {
                    this.router.parent.navigate(['./NarucivanjePage', { proizvodi_ID: item.proizvodi_ID }]);
                };
                ProizvodiComponent = __decorate([
                    core_1.Component({
                        selector: 'ProizvodiPage',
                        templateUrl: 'app/proizvodi/proizvodi.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS],
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], ProizvodiComponent);
                return ProizvodiComponent;
            }());
            exports_1("ProizvodiComponent", ProizvodiComponent);
        }
    }
});
//# sourceMappingURL=proizvodi.component.js.map