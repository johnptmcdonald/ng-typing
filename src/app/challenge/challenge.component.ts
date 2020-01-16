import { Component, OnInit } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-challenge",
  templateUrl: "./challenge.component.html",
  styleUrls: ["./challenge.component.css"]
})
export class ChallengeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  randomText = lorem.sentence();
  enteredText = "";

  onInput(value: string) {
    console.log(value);
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return "pending";
    }

    return randomLetter === enteredLetter ? "correct" : "incorrect";
  }
}
