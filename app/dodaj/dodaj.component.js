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
    var DodajComponent;
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
            DodajComponent = (function () {
                function DodajComponent(builder, http, router) {
                    var _this = this;
                    this.select = 1;
                    this.http = http;
                    this.router = router;
                    this.addForm = builder.group({
                        model: ["", common_1.Validators.none],
                        cena: ["", common_1.Validators.none],
                        garancija: ["", common_1.Validators.none],
                        boja: ["", common_1.Validators.none],
                        tezina: ["", common_1.Validators.none],
                        proizvodjac: ["", common_1.Validators.none],
                        tip_id: [this.select, common_1.Validators.none]
                    });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    http.get('http://localhost/PHP/getTipovi.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (tipovi) {
                        _this.tipovi = tipovi.tipovi;
                    }, function (err) {
                        _this.router.parent.navigate(['./MainPage']);
                    });
                }
                DodajComponent.prototype.onAdd = function () {
                    var _this = this;
                    var data = "model=" + this.addForm.value.model +
                        "&cena=" + this.addForm.value.cena +
                        "&garancija=" + this.addForm.value.garancija +
                        "&boja=" + this.addForm.value.boja +
                        "&tezina=" + this.addForm.value.tezina +
                        "&proizvodjac=" + this.addForm.value.proizvodjac +
                        "&tip_id=" + this.select;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/PHP/addProizvod.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) {
                        var obj = JSON.parse(err._body);
                        document.getElementsByClassName("alert")[0].style.display = "block";
                        document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
                    }, function () {
                        alert("Uspesno dodat proizvod!");
                        _this.router.parent.navigate(['./ProizvodiAdminPage']);
                    });
                };
                DodajComponent = __decorate([
                    core_1.Component({
                        selector: 'DodajPage',
                        templateUrl: 'app/dodaj/dodaj.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], DodajComponent);
                return DodajComponent;
            }());
            exports_1("DodajComponent", DodajComponent);
        }
    }
});
//# sourceMappingURL=dodaj.component.js.map