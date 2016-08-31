import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES,
FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';


@Component({
 selector: 'KorisniciPage',
 templateUrl: 'app/korisnici/korisnici.html',
 directives: [FORM_DIRECTIVES],
 viewBindings: [FORM_BINDINGS],
 
})

export class KorisniciComponent {


  http: Http;
  router: Router;
  postResponse: String;

   	spisak: Object[];

	constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
	var headers = new Headers();

	http.get('http://localhost/PHP/spisakKorisnika.php',{headers:headers})
		.map(res => res.json())
		.subscribe(spisak => {
			this.spisak = spisak.spisak;
			setInterval(function(){
				$('table').DataTable();
			},200);
		},
		err => {
			 this.router.parent.navigate(['./MainPage']);
		}
	);
  }

  public remove(item: Number) {
      console.log("Remove: ", item);
	  var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

	  this.http.get('http://localhost/PHP/obrisiKorisnika.php?korisnici_ID='+ item,{headers:headers})  .subscribe( data => this.postResponse = data);
	 location.reload();
   }

}