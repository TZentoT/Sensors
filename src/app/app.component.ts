import { Component } from '@angular/core';
import { myDet } from './shared/models/det.model';
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

  dets: myDet[] = new Array(); 
  i = 0


  constructor(){
    this.dets = generateDets(this.dets)
  }

  addDet(){
    //this.dets.push({'id': this.dets.length, 'name': `det №${this.dets.length}`, 'show': true, })
    this.dets[this.dets.length] = new myDet(this.dets.length, `det №${this.dets.length}`)
    console.log(this.dets)
  }
   
  // constructor(@Inject(DOCUMENT) document){
  //   let dets = new Array(10); 
  //   dets = generateDets(dets)
  //   console.log(document)
  //   console.log(dets)

  //   let root2 = document.getElementById('root')
  //   console.log(root2)

  //   //let rpp = element(document.querySelector('body'))
   

  //   for(let item of dets){
  //     let elementItem = document.createElement('div')
  //     elementItem.setAttribute('class', 'card col-12')
  //     elementItem.setAttribute('id', `${item.id}`)
  //     elementItem.setAttribute('style', 'width: 18rem;')
  //     root2.append(elementItem)
   
  //     let bodyItem = document.createElement('div')
  //     bodyItem.setAttribute('class', 'card-body')
  //     bodyItem.setAttribute('id', `b${item.id}`)
  //     elementItem.append(bodyItem)
 
  //     let headerItem = document.createElement('h5')
  //     headerItem.setAttribute("class", 'card-title')
  //     headerItem.innerHTML = `h${item.id}`
  //     bodyItem.append(headerItem)
  //   }
  // }

}

function generateDets(n){
  console.log(n.length)
  for(let i=0;i<10;i++){
    //n[i].push({ 'id': 1, 'name':`det №${i}`})
    n[i] = new myDet(i,`det №${i+1}`) 
    console.log(n[i])
  }
  return n;
}

