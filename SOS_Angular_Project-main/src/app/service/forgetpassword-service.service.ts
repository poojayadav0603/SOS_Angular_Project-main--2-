import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

// Provide functionality for ForgetPassword

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordServiceservice {

  // Rest EndPoint
  endpoint = "http://127.0.0.1:8000/ORSAPI/Forgetpassword/";

  /**
   * Constructor injects HTTP service
   * 
   * @param http 
   */

  constructor(private http: HttpClient) { }

  // Save methods for ForgetPassword
  // @param form -- ForgetPassword
  save(form, compCB){
    let url= this.endpoint + "submit";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }
}
