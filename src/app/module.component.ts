import { Component,OnInit} from '@angular/core';
import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';

import{ModuleServiceComponent} from './modulePage.service';
import{ProjectDetailServiceComponent} from './pDetail.service';
import {Post} from './post'
@Component({
    selector: 'app-module',
 
  templateUrl:'./html/modulePage.component.html',


   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class ModuleComponent implements OnInit   {
 
    moduleName:string;
  moduleIdincrement:number=0;
  incModuleId:string; 
showInc:Post[];
    constructor(public http:Http,private sendModuleName:ModuleServiceComponent,private inc:ProjectDetailServiceComponent) {
  
  
 
    }
      ngOnInit(){
        

this.sendModuleName.idDetails()
.subscribe(moduleData =>{this.showInc=moduleData;this.idInc(this.showInc) });




      }
 
 

   saveModuleName(){
//alert(this.moduleName)
//alert(this.moduleIdincrement++)
if(this.moduleName==undefined){
alert("please Fill ModuleName")
}
else{
//this.sendModuleName.moduleServiceDetails(this.moduleName)
//alert("kk")
console.log(this.moduleName+"mm")
console.log(this.incModuleId+"mm")
  let urlSearchParams = new URLSearchParams();
urlSearchParams.append('moduleName', this.moduleName);
urlSearchParams.append('moduleId', this.incModuleId);

    return this.http.post('/postModuleName', urlSearchParams)
      .subscribe(data => {
      console.log(data);
    });

}



   }

idInc(incId){
	// console.log(hh[0].moduleId)
	// console.log(hh.length)
if(incId.length==0){

alert("make responce o")
}
else{
	var collMId=parseInt(incId[0].moduleId)
	//alert(ch)
	 var iCollMId=collMId+1;
	 this.incModuleId=iCollMId.toString();
	//alert(this.incModuleId+"string")
}


}

}
