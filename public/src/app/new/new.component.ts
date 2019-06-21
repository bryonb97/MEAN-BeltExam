import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{

  newPet;
  message;
  errors = [];


  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit()
  {
    this.newPet = { name: "", pettype: "", description: "", skill1: "", skill2: "", skill3: "" }
  }

  createPet()
  {
    this.errors = [];
    this._httpService.addPet(this.newPet)
      .subscribe(data => {
        console.log("Got data from post back", data);
        console.log("========");
        if (data['message'] === "Error"){
          this.errors.push(data['error']['errors']);
        }
        else
        {
          this._router.navigate(['/pets']);
        }
        this.newPet = { name: "", pettype: "", description: "", skill1: "", skill2: "", skill3: "" }
        // console.log(this.newPet);
      })
  }

}
