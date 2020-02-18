import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  diceSides;
  sides = 20;
  diceTimes = 1;
  diceResult = 0;
  diceList = [ 0 ];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.diceSides = this.dataService.getDiceSides();
  }

  public rollDice(times, sides) {
    
    if(times > 10000) {
      this.diceTimes = 10000;
      times = 10000;
    };
    this.diceList.length = 0;
    this.diceResult = 0;

    const element = document.querySelector('.dice-roll');
    element.classList.add('animated', 'flip');
    element.addEventListener('animationend', function() {
      element.classList.remove('animated', 'flipinY');
    });


    this.diceList = this.dataService.getDice(times, sides);
    for(let i = 0; i < this.diceList.length; i++) {
      this.diceResult += this.diceList[i];
    }
  }

}
