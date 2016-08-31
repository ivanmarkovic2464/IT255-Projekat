import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'



@Component({
  selector: 'ProizvodiPage',
  templateUrl: 'app/proizvodi/proizvodi.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS],
})

export class ProizvodiComponent {
	
	http: Http;
	router: Router;
	postResponse: String;

   	servisi: Object[];

	constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
	var headers = new Headers();
	

	http.get('http://localhost/PHP/getproizvod.php',{headers:headers})
		.map(res => res.json())
		.subscribe(servisi => {
			this.servisi = servisi.servisi;
			setInterval(function(){
				$('table').DataTable();
			},200);
		},
		err => {
			 this.router.parent.navigate(['./MainPage']);
		}
	);
	}
	
   public detalji(item: any){
       	this.router.parent.navigate(['./NarucivanjePage',{proizvodi_ID: item.proizvodi_ID}])
       }

}
