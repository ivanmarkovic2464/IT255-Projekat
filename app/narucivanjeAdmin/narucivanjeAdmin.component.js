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
    var NarucivanjeAdminComponent;
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
            NarucivanjeAdminComponent = (function () {
                function NarucivanjeAdminComponent(builder, http, router, params) {
                    var _this = this;
                    this.itemId = +params.get('proizvodi_ID');
                    this.token2 = localStorage.getItem('token2');
                    this.http = http;
                    this.router = router;
                    this.narucivanjeForm = builder.group({
                        proizvodi_ID: ["", common_1.Validators.none],
                        model: ["", common_1.Validators.none],
                        cena: ["", common_1.Validators.none],
                        garancija: ["", common_1.Validators.none],
                        boja: ["", common_1.Validators.none],
                        tezina: ["", common_1.Validators.none],
                        proizvodjac: ["", common_1.Validators.none],
                        tip_id: [this.select, common_1.Validators.none],
                    });
                    this.adminForm = builder.group({
                        username: ["", common_1.Validators.none]
                    });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.get('http://localhost/PHP/getProizvodiById.php?proizvodi_ID=' + this.itemId, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.narucivanjeForm.controls['proizvodi_ID'].updateValue(data.proizvodi.proizvodi_ID);
                        _this.narucivanjeForm.controls['tip_id'].updateValue(data.proizvodi.tip_id);
                        _this.narucivanjeForm.controls['model'].updateValue(data.proizvodi.model);
                        _this.narucivanjeForm.controls['cena'].updateValue(data.proizvodi.cena);
                        _this.narucivanjeForm.controls['garancija'].updateValue(data.proizvodi.garancija);
                        _this.narucivanjeForm.controls['boja'].updateValue(data.proizvodi.boja);
                        _this.narucivanjeForm.controls['tezina'].updateValue(data.proizvodi.tezina);
                        _this.narucivanjeForm.controls['proizvodjac'].updateValue(data.proizvodi.proizvodjac);
                    }, function (err) { return console.log(JSON.stringify(err)); });
                    http.get('http://localhost/PHP/getTipovi.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (tipovi) {
                        _this.tipovi = tipovi.tipovi;
                    }, function (err) {
                        _this.router.parent.navigate(['./MainPage']);
                    });
                    this.http.get('http://localhost/PHP/getAdminByToken.php?token2=' + this.token2, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.adminForm.controls['username'].updateValue(data.username.username);
                    }, function (err) { return console.log(JSON.stringify(err)); });
                }
                NarucivanjeAdminComponent.prototype.izmeni = function () {
                    var _this = this;
                    var data = "proizvodi_ID=" + this.narucivanjeForm.value.proizvodi_ID +
                        "&model=" + this.narucivanjeForm.value.model +
                        "&cena=" + this.narucivanjeForm.value.cena +
                        "&garancija=" + this.narucivanjeForm.value.garancija +
                        "&boja=" + this.narucivanjeForm.value.boja +
                        "&tezina=" + this.narucivanjeForm.value.tezina +
                        "&proizvodjac=" + this.narucivanjeForm.value.proizvodjac +
                        "&tip_id=" + this.select;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/PHP/updateProizvod.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) {
                        var obj = JSON.parse(err._body);
                        document.getElementsByClassName("alert")[0].style.display = "block";
                        document.getElementsByClassName("alert")[0].innerHTML =
                            obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
                    }, function () {
                        _this.router.parent.navigate(['./ProizvodiAdminPage']);
                        alert("Uspesan update!");
                    });
                };
                NarucivanjeAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'NarucivanjeAdminPage',
                        templateUrl: 'app/narucivanjeAdmin/narucivanjeAdmin.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router, router_1.RouteParams])
                ], NarucivanjeAdminComponent);
                return NarucivanjeAdminComponent;
            }());
            exports_1("NarucivanjeAdminComponent", NarucivanjeAdminComponent);
        }
    }
});
//# sourceMappingURL=narucivanjeAdmin.component.js.map