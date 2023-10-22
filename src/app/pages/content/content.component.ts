import { Component } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  title = "ngNasaApi";
  
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
