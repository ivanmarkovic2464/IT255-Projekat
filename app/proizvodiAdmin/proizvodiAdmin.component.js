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
    var ProizvodiAdminComponent;
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
            ProizvodiAdminComponent = (function () {
                function ProizvodiAdminComponent(builder, http, router) {
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
                ProizvodiAdminComponent.prototype.removeProizvod = function (item) {
                    var _this = this;
                    console.log("Remove: ", item);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('token', localStorage.getItem('token'));
                    this.http.get('http://localhost/PHP/deleteproizvod.php?id=' + item, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            var obj = JSON.parse(_this.postResponse._body);
                            localStorage.setItem('token', obj.token);
                            _this.router.parent.navigate(['./MainPage']);
                        }
                        else {
                            var obj = JSON.parse(_this.postResponse._body);
                            document.getElementsByClassName("alert")[0].style.display = "block";
                            document.getElementsByClassName("alert")[0].innerHTML =
                                obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
                        }
                    });
                    location.reload();
                };
                ProizvodiAdminComponent.prototype.detalji = function (item) {
                    this.router.parent.navigate(['./NarucivanjeAdminPage', { proizvodi_ID: item.proizvodi_ID }]);
                };
                ProizvodiAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'ProizvodiAdminPage',
                        templateUrl: 'app/proizvodiAdmin/proizvodiAdmin.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS],
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], ProizvodiAdminComponent);
                return ProizvodiAdminComponent;
            }());
            exports_1("ProizvodiAdminComponent", ProizvodiAdminComponent);
        }
    }
});
//# sourceMappingURL=proizvodiAdmin.component.js.map