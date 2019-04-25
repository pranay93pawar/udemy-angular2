import { Component, OnInit, EventEmitter, Output,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name:string, content:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name:string,content:string}>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInputElement') serverContentInputElementVar:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameElement:HTMLInputElement) {
    this.serverCreated.emit({
      name: serverNameElement.value,
      content: this.serverContentInputElementVar.nativeElement.value
    });
  }

  onAddBlueprint(serverNameElement:HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverNameElement.value,
      content: this.serverContentInputElementVar.nativeElement.value
    });
  }

  changeSomething() {
    
  }
}
