import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameEvent: ReturnType<typeof setInterval>;
  gameNumbers:number[] = [];

  onGameControlEvent(gameControlEvent : {eventType:string}){
    console.log("gameEvent raised by Control : "+gameControlEvent.eventType);
    if (gameControlEvent.eventType == "start"){
      this.startGame();
    }else if(gameControlEvent.eventType == "stop"){
      this.stopGame();
    }else{
      throw new Error("Invalid game control event");
    }
  }

  startGame(){
    console.log(this);
    console.log("Main Application starts the game..");
    this.gameNumbers = [];  //test comment - 1
    this.gameEvent = setInterval(() => this.generateNumber(), 1000);
  }

  stopGame(){
    console.log("Main Application stops the game..");
    clearInterval(this.gameEvent);
  }
  generateNumber(){
    let newNumber: number = Math.round(Math.random()*100);
    console.log("generated new number : "+newNumber);
    this.gameNumbers.push(newNumber);
  }
}
