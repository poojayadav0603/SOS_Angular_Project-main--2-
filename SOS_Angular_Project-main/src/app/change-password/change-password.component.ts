import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ChangePassswordService } from "../service/change-passsword.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form = {
    "id": 0,
    "login_id" : localStorage.getItem("loginId"),
    "oldPassword": "",
    "newPassword": "",
    "confirmPassword": ""
  };
  inputError = {

    "oldPassword": "",
    "newPassword": "",
    "confirmPassword": ""
  };

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


  constructor(private aroute: ActivatedRoute, private router: Router, private service: ChangePassswordService) { }

  ngOnInit() {
  }
/**
   * Save a record
   */
save() {
    var _self = this;
    this.service.save(this.form, function (res, error) {
      if (res.form.error) {
        _self.success = false;
        _self.message = res.form.message;
        _self.inputError=res.form.inputError;
        console.log(_self.inputError,"kgsadhgcsaf")
        return;
      }
      _self.success = res.form.message;
      if(_self.success){
        _self.message = res.form.message;
        _self.inputError = {
          "oldPassword" : "",
          "newPassword" : "",
          "confirmPassword" : ""
        };
      }else{
        _self.message = "Data Error";
       // _self.inputError = res.inputerror
      }
    });
  }}