import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  role = ""
  ngOnInit() {
  }

  constructor(private router:Router,private location:Location) {
    if(this.isLogout()){

    }
   }
  isLogout() {
    let loginId = localStorage.getItem('loginId');
     if ((loginId == "null" || loginId == null)&& (this.location.path()!="" &&this.location.path() != "/login" && this.location.path() != "/sessionOut"&& this.router.url != "/logout"
     )) {
       
      this.router.navigateByUrl("/sessionOut");
    return true;
    } else {
    return false;
    }
    }
    
  isLogin(){
    let check=localStorage.getItem('loginId');
    this.role = localStorage.getItem('roleName');
    if(check!="null" &&check!=null ){
      return true
    }else{
      return false
    }
  }

isAdmin(){
  let check = localStorage.getItem('roleName');
  if (check == "Admin"){
    return true
  }
  else{
    return false
  }
}

isStudent(){
  let check = localStorage.getItem('roleName');
  
  if (check == "Student"){
    return true
  }
  else{
    return false
  }
}
isFaculty(){
  let check = localStorage.getItem('roleName');
  if (check == 'Faculty'){
    return true
  }
else{
  return false
}
}
isKiosk(){
  let check = localStorage.getItem('roleName');
  if (check == 'Kiosk'){
    return true
  }
else{
  return false
}
}
}
