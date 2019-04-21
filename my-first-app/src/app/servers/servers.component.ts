import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-servers]',
  // selector:'.app-servers',
  templateUrl: './servers.component.html',
  //template:`<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServersCreation = false;
  serverCreated = "No Server was created!";
  serverName = 'This is initial Name';
  isServerCreated = false;
  servers = ["Test 1","Test 2"]

  constructor() { 

    setTimeout(() => {
      this.allowServersCreation = true;
    },2000)

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreated = "Server was created. Server Name is : " + this.serverName;
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
