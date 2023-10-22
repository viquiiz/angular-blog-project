import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {  

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