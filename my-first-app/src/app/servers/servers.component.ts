import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!";
  serverName: string;
  serverCreated: boolean = false;
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "New server created with name : "+this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
