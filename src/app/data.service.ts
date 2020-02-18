import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dice = [
    2, 4, 6, 8, 10, 12, 20, 100
  ];
  diceRolls = [];
  retval;

  constructor() { }

  public rollDice(diceTimes, diceSides) {
    this.retval = 0

  for(let i = 0; i < diceTimes; i++) {
    this.retval += Math.floor(Math.random() * diceSides + 1);
  }  
    return this.retval;
  };

public getDice(diceTimes, diceSides) {
  this.diceRolls.length = 0;
  
  if(diceTimes > 10000) {
    diceTimes = 10000;
  };
  for(let i = 0; i < diceTimes; i++) {
    this.diceRolls.push( Math.floor(Math.random() * diceSides + 1));
  };
  return this.diceRolls;

}

  public getDiceSides() {
    return this.dice;
  }

}
