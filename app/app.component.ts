import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Pipe} from 'angular2/core';
import {MainPageComponent} from 'app/mainpage/mainpage.component';
import {LoginComponent} from 'app/login/login.component';
import {RegisterComponent} from './register/register.component';
import {AboutUsComponent} from './aboutus/aboutus.component';
import {ProizvodiAdminComponent} from './proizvodiAdmin/proizvodiAdmin.component';
import {ProizvodiComponent} from './proizvodi/proizvodi.component';
import {NarucivanjeComponent} from './narucivanje/narucivanje.component';
import {NarucivanjeAdminComponent} from './narucivanjeAdmin/narucivanjeAdmin.component';
import {KorisniciComponent} from './korisnici/korisnici.component';
import {KorpeComponent} from './korpe/korpe.component';
import {DodajComponent} from './dodaj/dodaj.component';


@Component({
 selector: 'moja-aplikacija',
templateUrl: 'app/router.html',
directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
 {path:'/', name: 'MainPage', component: MainPageComponent, useAsDefault: true},
 {path:'/register', name:'RegisterPage', component: RegisterComponent},
 {path:'/login', name:'LoginPage', component: LoginComponent},
 {path:'/aboutus', name:'AboutUsPage', component: AboutUsComponent},
 {path:'/proizvodiadmin', name:'ProizvodiAdminPage', component: ProizvodiAdminComponent},
 {path:'/proizvodi', name:'ProizvodiPage', component: ProizvodiComponent},
 {path:'/narucivanje/:proizvodi_ID', name: 'NarucivanjePage', component: NarucivanjeComponent},
 {path:'/narucivanjeAdmin/:proizvodi_ID', name: 'NarucivanjeAdminPage', component: NarucivanjeAdminComponent},
 {path:'/korisnici', name:'KorisniciPage', component: KorisniciComponent},
 {path:'/korpe', name: 'KorpePage', component: KorpeComponent},
 {path:'/dodaj', name:'DodajPage', component: DodajComponent},
 ])


export class AppComponent {
	 router: Router;
  isAuth: String;
  isAuth2: String;

  constructor(router: Router) {
  this.router = router;
   router.subscribe((val) => {

   if(localStorage.getItem('token2') !== null){
    this.isAuth2 = "yes";
     }
      if(localStorage.getItem('token2') == null){
     this.isAuth2 = "no";
      }
      if(localStorage.getItem('token') !== null){
       this.isAuth = "yes";
        }
         if(localStorage.getItem('token') == null){
        this.isAuth = "no";
         }
   });
  }
  
  onLogout(): void {

  localStorage.removeItem("token2");
  localStorage.removeItem("token");
  this.router.navigate(['./MainPage']);

  if(localStorage.getItem('token') !== null){
  		this.isAuth = "yes";
  	}
    if(localStorage.getItem('token') == null){
    		this.isAuth = "no";
    	}
   if(localStorage.getItem('token2') !== null){
     this.isAuth2 = "yes";
  	}
    if(localStorage.getItem('token2') == null){
     this.isAuth2 = "no";
  }
}

}