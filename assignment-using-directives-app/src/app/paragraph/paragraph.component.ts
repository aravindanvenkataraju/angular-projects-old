import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  toggleParagraphVisibility: boolean = false;
  logArray: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  getButtonLabel(){
    return this.toggleParagraphVisibility ? "Hide Paragraph": "Show Paragraph";
  }

  toggleParaVisibility(){
    let currentDate: Date = new Date();
    this.toggleParagraphVisibility = !this.toggleParagraphVisibility;
    this.logArray.push (this.toggleParagraphVisibility?"paragraph shown at :"+currentDate : "paragraph hidden at :"+currentDate);
  }
  
  getLatestMessage(){
    return this.logArray[this.logArray.length-1];
  }
}
