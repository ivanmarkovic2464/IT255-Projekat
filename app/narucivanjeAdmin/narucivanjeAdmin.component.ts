import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS, RouteParams} from 'angular2/router'

@Component({
  selector: 'NarucivanjeAdminPage',
  templateUrl: 'app/narucivanjeAdmin/narucivanjeAdmin.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})
export class NarucivanjeAdminComponent {

  narucivanjeForm: ControlGroup;
  adminForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  itemId: Number;
  data: Object[];
  token2: String;
  constructor(builder: FormBuilder, http: Http,  router: Router, params: RouteParams) {
      this.itemId = +params.get('proizvodi_ID');
      this.token2= localStorage.getItem('token2');
    this.http = http;
	this.router = router;
    this.narucivanjeForm = builder.group({
	 proizvodi_ID: ["", Validators.none],	
     model: ["", Validators.none],
     cena: ["", Validators.none],
	 garancija: ["", Validators.none],
	 boja: ["", Validators.none],
	 tezina: ["", Validators.none],	 
	 proizvodjac: ["", Validators.none],
	 tip_id: [this.select, Validators.none],
   });
   this.adminForm = builder.group({
	   username: ["", Validators.none]
	    });
   var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.get('http://localhost/PHP/getProizvodiById.php?proizvodi_ID=' + this.itemId , { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
		(<Control>this.narucivanjeForm.controls['proizvodi_ID']).updateValue(data.proizvodi.proizvodi_ID);
        (<Control>this.narucivanjeForm.controls['tip_id']).updateValue(data.proizvodi.tip_id);
        (<Control>this.narucivanjeForm.controls['model']).updateValue(data.proizvodi.model);		
        (<Control>this.narucivanjeForm.controls['cena']).updateValue(data.proizvodi.cena);
		(<Control>this.narucivanjeForm.controls['garancija']).updateValue(data.proizvodi.garancija);
		(<Control>this.narucivanjeForm.controls['boja']).updateValue(data.proizvodi.boja);
		(<Control>this.narucivanjeForm.controls['tezina']).updateValue(data.proizvodi.tezina);
		(<Control>this.narucivanjeForm.controls['proizvodjac']).updateValue(data.proizvodi.proizvodjac);
      },

     err => console.log(JSON.stringify(err)))
	 
	 	http.get('http://localhost/PHP/getTipovi.php',{headers:headers})
		.map(res => res.json()).share()
		.subscribe(tipovi => {
			this.tipovi = tipovi.tipovi;
		},
		err => {
			 this.router.parent.navigate(['./MainPage']);
		}
	);

	       this.http.get('http://localhost/PHP/getAdminByToken.php?token2=' + this.token2, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          (<Control>this.adminForm.controls['username']).updateValue(data.username.username);

        },

        err => console.log(JSON.stringify(err)))
  }
 
izmeni(): void {

  var data = "proizvodi_ID="+this.narucivanjeForm.value.proizvodi_ID+
			   "&model="+this.narucivanjeForm.value.model+
			   "&cena="+this.narucivanjeForm.value.cena+
			   "&garancija="+this.narucivanjeForm.value.garancija+
			   "&boja="+this.narucivanjeForm.value.boja+
			   "&tezina="+this.narucivanjeForm.value.tezina+
			   "&proizvodjac="+this.narucivanjeForm.value.proizvodjac+
			   "&tip_id="+this.select;
			 
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  this.http.post('http://localhost/PHP/updateProizvod.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
  err => {
    var obj = JSON.parse(err._body);
    document.getElementsByClassName("alert")[0].style.display = "block";
    document.getElementsByClassName("alert")[0].innerHTML = 
	obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
  },
  () => {
      this.router.parent.navigate(['./ProizvodiAdminPage']);
      alert ("Uspesan update!");
   }
  );
  }


}
