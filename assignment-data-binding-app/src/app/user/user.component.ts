import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string;
  clearUserDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleClearUserName(){
    if (this.userName == null ||
        this.userName == ""){
          this.clearUserDisabled = true;
    }else{
      this.clearUserDisabled = false;
    }
  }

  onClearUserName(){
    this.userName = "";
    this.toggleClearUserName();
  }
}
