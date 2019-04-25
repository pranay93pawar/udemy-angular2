import { 
  Component, 
  OnInit,
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None,Shodow Dom
})
export class ServerElementComponent implements OnInit,OnChanges {

  @Input('serverElement') element : {name:string,content:string,type:string}

  constructor() { 
    console.log("constructor called!");
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called!")
  }

}
