import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({

  selector: 'MainPage',
  templateUrl: 'app/mainpage/mainpage.html',
  directives: [ROUTER_DIRECTIVES]
 })
 
 export class MainPageComponent{}
