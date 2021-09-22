import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from "@angular/router";
import { ForgetpasswordServiceservice } from '../service/forgetpassword-service.service';

/**
 * College controller
 *
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd*
*/

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  //Forgetpassoword Form
  form = {
    "login_id" : "",
  };

  // Inputerror
  inputError = {
    "login_id" : "",
  };
//Server success/fail message
 message = "";


 //Server error
  success: boolean = true;
/**
   * Injects services
   *
   * @param aroute
   * @param router
   * @param service
   */

  constructor(private aroute: ActivatedRoute, private router: Router, private service: ForgetpasswordServiceservice) { }

  ngOnInit() {
  }
  save() {
    var _self = this;
    this.service.save(this.form, function (res, error) {
      if (res.data.error) {
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError=res.data.inputError;
        console.log(_self.inputError,"kgsadhgcsaf")
        return;
      }
      _self.success = res.data.message;
      if(_self.success){
        _self.message = res.data.message;
        _self.inputError = {
          "login_id" : ""
        };
      }else{
        _self.message = "Data Error";
       // _self.inputError = res.inputerror
      }
    });
  }
  // save(){
  //   this.service.save(this.form, function(res, error){
  //     let error1 = res.data.error
  //   //  var a= res.data.inputError
  //     // this.message = res.data['message']
  //     this.inputError = res.data.inputError
  //     console.log(">>>>>---->",this.inputError)
  //   // var _self = this;
  //   // if(res.data.error){
  //   //   console.log(">>>>>-->", error1)
  //   //   this.form.message = res.data.inputError
  //   //   console.log(">>>>>>>>>>>>>", this.form.message)
  //   //   return;
  //   //   }
  //     // this.success = res.data.message;
  //     // console.log("success", this.success)
  //     // if (this.success){
  //     //   this.message = "Password send on mail";
  //     //   this.inputError = {
  //     //     "login_id" : "",
  //     //   };
  //     //  else{
  //     //    this.message = "Data error"
  //     // }
  //   });
  // }
}
