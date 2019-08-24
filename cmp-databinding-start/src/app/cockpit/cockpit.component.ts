import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  //newServerContent = '';
  @Output('serverCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  @ViewChild('serverContentInput',{static:false}) serverContentInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    //console.log(nameInput);
    //console.log(nameInput.value);
    //this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
    //console.log(this.serverContentInput);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    //console.log(nameInput);
    //console.log(nameInput.value);
    //this.blueprintCreated.emit({blueprintName: nameInput.value, blueprintContent: this.newServerContent});
    this.blueprintCreated.emit({blueprintName: nameInput.value, blueprintContent: this.serverContentInput.nativeElement.value})
  }

}
