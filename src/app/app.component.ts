import { Component } from '@angular/core';
import { MyDet } from './shared/models/det.model';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sensors';

  dets: MyDet[] = new Array(); 
  i = 0


  constructor(){
    this.dets = this.generateDets(this.dets)
  }

  addDet(){
    //this.dets.push({'id': this.dets.length, 'name': `det №${this.dets.length}`, 'show': true, })
    this.dets[this.dets.length] = new MyDet(this.dets.length, `det №${this.dets.length}`)
    console.log(this.dets)
  }
   
  generateDets(n){
    console.log(n.length)
    for(let i=0;i<10;i++){
      //n[i].push({ 'id': 1, 'name':`det №${i}`})
      n[i] = new MyDet(i,`det №${i+1}`) 
      console.log(n[i])
    }
    return n;
  }

}
