import { Component, OnInit } from '@angular/core'; // changed this line
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = "Pet Shelter";
    
  constructor(private _httpService: HttpService) { } // added this line

  ngOnInit(){ } // added this line, may not be used depending on your app structure
}
