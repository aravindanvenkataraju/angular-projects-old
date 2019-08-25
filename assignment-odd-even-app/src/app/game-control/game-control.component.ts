import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output("gameControlEvent") gameControlEvent = new EventEmitter<{eventType:string}>();
  constructor() { }

  ngOnInit() {
  }

  clickStart(){
    console.log("starting game..");
    this.gameControlEvent.emit({eventType:"start"});
  }

  clickStop(){
    console.log("stopping game..");
    this.gameControlEvent.emit({eventType:"stop"});
  }

}
