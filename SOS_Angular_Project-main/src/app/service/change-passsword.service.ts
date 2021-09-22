import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangePassswordService {


  // RestEndpoint
  endpoint = "http://127.0.0.1:8000/ORSAPI/Changepassword/";

  constructor(private http: HttpClient) { }


save(form, compCB){
  let url = this.endpoint + "save";
  this.http.post(url, form).subscribe(
    (data) => {
      compCB(data);
    },
  (data) => {
    compCB(data, true)
  });
}
}
