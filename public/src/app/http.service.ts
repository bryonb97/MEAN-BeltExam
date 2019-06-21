import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService
{

  constructor(private _http: HttpClient) { }

  getAllPets()
  {
    console.log("HTTP GET PETS");
    return this._http.get('/allpets');
  }

  getOnePet(id)
  {
    return this._http.get(`/pets/${id}`);
  }

  addPet(newPet)
  {
    return this._http.post('/pets', newPet);
  }

  updatePet(updatePet)
  {
    return this._http.put(`/pets/${updatePet._id}`, updatePet);
  }

  destroyPet(id)
  {
    return this._http.delete(`/pets/${id}`);
  }

  addOneLike(selectedPet, thispet)
  {
    console.log("Added one like to this pet", thispet.name);
    console.log("This pet has: ", thispet.like_count + " likes");
    return this._http.put('/petlike/'+ selectedPet, thispet);
  }
}


