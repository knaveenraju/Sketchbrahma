import { Component,OnInit } from '@angular/core';
import { APIService } from './api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sketchbrahma';
  breweriesList : any;
  constructor(private dataFromService:APIService) {   }

  ngOnInit():void {
  this.dataFromService.getBreweries().subscribe(data => this.breweriesList=data );


}
SearchBrewery(data1:NgForm){
  console.log(data1.value.info);
   this.dataFromService.SearchBrewery(data1.value.info).subscribe(data=> this.breweriesList=data)
   console.log(this.breweriesList);
   data1.reset();  
  }

GetByCity(data:NgForm){
console.log(data.value.info);
 this.dataFromService.getDetailsByCity(data.value.info).subscribe(data=> this.breweriesList=data)
 data.reset();  
}

GetByState(data:NgForm){
  console.log(data.value.info);
  this.dataFromService.getDetailsByState(data.value.info).subscribe(data=> this.breweriesList=data)
  data.reset();   
}

  GetByType(data:NgForm){
    console.log(data.value.info);
    this.dataFromService.getDetailsByBreweryType(data.value.info).subscribe(data=> this.breweriesList=data)
  
    data.reset();  
  }

  GetByPostal(data:NgForm){
    console.log(data.value.info);
    this.dataFromService.getDetailsByPostal(data.value.info).subscribe(data=> this.breweriesList=data)
   
    data.reset();  
  }

  GetBrewery(data:NgForm){
    console.log(data.value.info);
    this.dataFromService.getByBrewery(data.value.info).subscribe(data => {
      let a=[];
      a.push(data);
      this.breweriesList=a;

    })
    
  
    data.reset();  
  }


  
}
