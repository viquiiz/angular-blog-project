import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  public nasaImgObj: Apod;
  constructor(private nasaApi: NasaService) { 
    this.nasaImgObj = {
      copyright:"",
      date:"",
      explanation:"",
      title:"",
      url:""
    }
   }

  ngOnInit(): void {
      this.nasaApi.getNasaImage().subscribe((response: Apod) => {
        this.nasaImgObj = response;
      });
  }
}