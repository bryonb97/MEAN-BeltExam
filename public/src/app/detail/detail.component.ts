import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id;
  selectedPet;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit()
  {
    this._route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
      });
    this.getPet();
    this.getPetLikes(this.id);
  }

  getPet()
  {
    console.log("getting pet!");
    this._httpService.getOnePet(this.id)
      .subscribe(data => {
        console.log("Got our One pet", data);
        this.selectedPet = data['result']
      })
  }

  getPetLikes(id)
  {
    console.log("Getting pet's likes");
    this._httpService.getOnePet(this.id)
      .subscribe(data => {
        console.log("Got our One pet", data);
        this.selectedPet = data['result']
        this.selectedPet.showLike = true;
      })
  }

  onDelete(pet_id)
  {
    this._httpService.destroyPet(pet_id)
      .subscribe(data =>
      {
        //go back home here
        this.router.navigate(['']);
      })
  }

  onLike(selectedPet){
    console.log("in On Like");
    selectedPet.showLike = false;
    this._httpService.addOneLike(selectedPet._id, selectedPet)
      .subscribe(data => {
        console.log("Added one like");
        console.log("Got data from post back", data);
        this.getPet();
      })
  }
}