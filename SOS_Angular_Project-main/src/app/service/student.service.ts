



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Provides REST CRUD operations of student functionality
 * Each method of this class receives response-callback method.
 * Response callback method is called by Observable and passed data and error.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //Rest endpoint
  endpoint = "http://localhost:8000/ORSAPI/Student/";

  /**
   * Constructor injects HTTP service
   *
   * @param http
   */
  constructor(private http: HttpClient) { }


  /**
 * Gets College
 *
 * @param id
 * @param response
 */
  get(id: number, compCB) {
    let url = this.endpoint + "get/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data) {
        compCB(data);
      }, function fail(data) {
        compCB(data, true)
      });
  }

  preload(compCB) {
    let url = this.endpoint + "preload";
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data) {
        console.log("student preload data from Service",data),
        compCB(data);
        
      }, function fail(data) {
        compCB(data, true)
      });
  }

  /**
   * Delets a College
   *
   * @param id
   * @param response
   */
  delete(id: number, compCB) {
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }


  /**
   * Searches college
   *
   * @param response
   */
  search(form, compCB) {
    let url = this.endpoint + "search";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }


  /**
   * Add/Update college
   * @param form Adds or updates a record
   * @param response
   */
  save(form, compCB) {

    let url = this.endpoint + "save";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }

}
