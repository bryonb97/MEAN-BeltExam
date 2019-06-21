import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  allPets;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit()
  {
    this.getPets();
  }

  getPets()
  {
    console.log("Getting pets!");
    this._httpService.getAllPets()
      .subscribe(data => {
        this.allPets = data['result'];
        console.log("Subscribing to pets!");
        console.log(data);
      })
  }

  onDelete(pet_id)
  {
    this._httpService.destroyPet(pet_id)
      .subscribe(data =>
      {
      })
      this.getPets();
  }

}