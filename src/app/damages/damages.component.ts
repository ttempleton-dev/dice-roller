import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-damages',
  templateUrl: './damages.component.html',
  styleUrls: ['./damages.component.css']
})
export class DamagesComponent implements OnInit {

  fallDamageResult = 0;
  spikedPitDamageResult = 0;
  poisonNeedleDamageResult = 0;
  fireballDamageResult = 0;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  public fallDamage() {
    this.fallDamageResult = 0;
    this.fallDamageResult = this.dataService.rollDice(1, 6);
  }

  public spikedPitDamage() {
    this.spikedPitDamageResult = 0;
    this.spikedPitDamageResult = this.dataService.rollDice(2, 10);
  }

  public poisonNeedleDamage() {
    this.poisonNeedleDamageResult= 0;
    this.poisonNeedleDamageResult = this.dataService.rollDice(2, 10) + 1;
  }

  public fireballDamage() {
    this.fireballDamageResult = 0;
    this.fireballDamageResult = this.dataService.rollDice(8, 6);
  }

}
