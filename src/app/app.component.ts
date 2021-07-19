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

}
