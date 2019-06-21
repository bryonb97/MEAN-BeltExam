import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit
{
  editPet;
  selectedPet;
  id;
  message;
  errors = [];

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit()
  {
    this._route.params
      .subscribe((params: Params) =>
      {
        console.log(params['id'])
        this.id = params['id'];
      });

    this.getPet();
  }
  getPet()
  {
    this._httpService.getOnePet(this.id)
      .subscribe(data =>
      {
        console.log("Got our One pet", data);
        this.selectedPet = data['result']
      })
  }

  onEdit(selectedPet){
    this.errors = [];
    this._httpService.updatePet(selectedPet)
      .subscribe(data =>
      {
        console.log("Edited Pet", data)
        if (data['message'] === "Error"){
          this.errors.push(data['error']['errors']);
        }
        else
        {
          this.router.navigate(['/pets']);
        }
      })
  }
}