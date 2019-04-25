import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Test Server',content:'tsrt server'}];

  onServerAdded(serverData) {
    this.serverElements.push({
      type :'server',
      name : serverData.name,
      content: serverData.content
    })
  }

  onBlueprintAdded(serverData) {
    this.serverElements.push({
      type :'blueprint',
      name : serverData.name,
      content: serverData.content
    })
  }
}
