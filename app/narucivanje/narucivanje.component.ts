import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS, RouteParams} from 'angular2/router'

@Component({
  selector: 'NarucivanjePage',
  templateUrl: 'app/narucivanje/narucivanje.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})
export class NarucivanjeComponent {

  narucivanjeForm: ControlGroup;
  userForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  itemId: Number;
  data: Object[];
  token: String;
  constructor(builder: FormBuilder, http: Http,  router: Router, params: RouteParams) {
      this.itemId = +params.get('proizvodi_ID');
      this.token= localStorage.getItem('token');
    this.http = http;
	this.router = router;
    this.narucivanjeForm = builder.group({
	 proizvodi_ID: ["", Validators.none],	
     NAZIV: ["", Validators.none],
     model: ["", Validators.none],
     cena: ["", Validators.none],
	 garancija: ["", Validators.none],
	 boja: ["", Validators.none],
	 tezina: ["", Validators.none],	 
	 proizvodjac: ["", Validators.none],
   });
   this.userForm = builder.group({
	   username: ["", Validators.none]
	    });
   var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.get('http://localhost/PHP/getProizvodiById.php?proizvodi_ID=' + this.itemId , { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
		(<Control>this.narucivanjeForm.controls['proizvodi_ID']).updateValue(data.proizvodi.proizvodi_ID);
        (<Control>this.narucivanjeForm.controls['NAZIV']).updateValue(data.proizvodi.NAZIV);
        (<Control>this.narucivanjeForm.controls['model']).updateValue(data.proizvodi.model);		
        (<Control>this.narucivanjeForm.controls['cena']).updateValue(data.proizvodi.cena);
		(<Control>this.narucivanjeForm.controls['garancija']).updateValue(data.proizvodi.garancija);
		(<Control>this.narucivanjeForm.controls['boja']).updateValue(data.proizvodi.boja);
		(<Control>this.narucivanjeForm.controls['tezina']).updateValue(data.proizvodi.tezina);
		(<Control>this.narucivanjeForm.controls['proizvodjac']).updateValue(data.proizvodi.proizvodjac);
      },

     err => console.log(JSON.stringify(err)))


      this.http.get('http://localhost/PHP/getUserByToken.php?token=' + this.token, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          (<Control>this.userForm.controls['username']).updateValue(data.username.username);

        },

        err => console.log(JSON.stringify(err)))
  }
 
send(): void {

  var data = "&proizvodi_ID="+this.narucivanjeForm.value.proizvodi_ID+
			 "&username="+this.userForm.value.username+
			 "&NAZIV="+this.narucivanjeForm.value.NAZIV+
			 "&model="+this.narucivanjeForm.value.model+
			 "&cena="+this.narucivanjeForm.value.cena+
			 "&garancija="+this.narucivanjeForm.value.garancija;
			 
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  this.http.post('http://localhost/PHP/narudzbina.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
  err => {
    var obj = JSON.parse(err._body);
    document.getElementsByClassName("alert")[0].style.display = "block";
    document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
  },
  () => {
      this.router.parent.navigate(['./ProizvodiPage']);
      alert ("Uspesna kupovina!");
   }
  );
  }


}
