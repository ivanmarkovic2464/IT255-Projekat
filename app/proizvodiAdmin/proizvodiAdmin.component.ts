import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'



@Component({
  selector: 'ProizvodiAdminPage',
  templateUrl: 'app/proizvodiAdmin/proizvodiAdmin.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS],

})

export class ProizvodiAdminComponent {
	
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

  public removeProizvod(item: Number) {
      console.log("Remove: ", item);
	  var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		headers.append('token', localStorage.getItem('token'));
	  this.http.get('http://localhost/PHP/deleteproizvod.php?id='+item,{headers:headers})  
	  .map(res => res)
		.subscribe( data => this.postResponse = data,
		err => alert(JSON.stringify(err)),
		() => {
			if(this.postResponse._body.indexOf("error") === -1){
			var obj = JSON.parse(this.postResponse._body);
			localStorage.setItem('token', obj.token);
			this.router.parent.navigate(['./MainPage']);
		}
		else{
		var obj = JSON.parse(this.postResponse._body);
		document.getElementsByClassName("alert")[0].style.display = "block";
		document.getElementsByClassName("alert")[0].innerHTML =
		obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
		}
		});
	 location.reload();
   }

   public detalji(item: any){
       	this.router.parent.navigate(['./NarucivanjeAdminPage',{proizvodi_ID: item.proizvodi_ID}])
       }

}
