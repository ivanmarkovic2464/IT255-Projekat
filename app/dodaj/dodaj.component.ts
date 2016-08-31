import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
  selector: 'DodajPage',
  templateUrl: 'app/dodaj/dodaj.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class DodajComponent {

  addForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
   select: Int = 1;

  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
    this.addForm = builder.group({
     model: ["", Validators.none],
     cena: ["", Validators.none],
	 garancija: ["", Validators.none],
	 boja: ["", Validators.none],
	 tezina: ["", Validators.none],	 
	 proizvodjac: ["", Validators.none],
	 tip_id: [this.select, Validators.none]
   });
   var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');

   	http.get('http://localhost/PHP/getTipovi.php',{headers:headers})
		.map(res => res.json()).share()
		.subscribe(tipovi => {
			this.tipovi = tipovi.tipovi;
		},
		err => {
			 this.router.parent.navigate(['./MainPage']);
		}
	);
  }

  onAdd(): void {
	var data = "model="+this.addForm.value.model+
			   "&cena="+this.addForm.value.cena+
			   "&garancija="+this.addForm.value.garancija+
			   "&boja="+this.addForm.value.boja+
			   "&tezina="+this.addForm.value.tezina+
			   "&proizvodjac="+this.addForm.value.proizvodjac+
			   "&tip_id="+this.select;
			   
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');

	this.http.post('http://localhost/PHP/addProizvod.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => {
		var obj = JSON.parse(err._body);
		document.getElementsByClassName("alert")[0].style.display = "block";
		document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
	},
	() => {
		alert ("Uspesno dodat proizvod!");
	    this.router.parent.navigate(['./ProizvodiAdminPage']);
	 }
	);
  }
}