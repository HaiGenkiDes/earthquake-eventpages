import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../event';

@Component({
  selector: 'executive-shakemap-pin',
  templateUrl: './shakemap-pin.component.html',
  styleUrls: ['./shakemap-pin.component.scss']
})
export class ShakemapPinComponent implements OnInit {

  public link = '../shakemap';
  public mmiDescription = {
    0: {shaking: 'Not felt', damage: 'none'},
    1: {shaking: 'Not felt', damage: 'none'},
    2: {shaking: 'Weak', damage: 'none'},
    3: {shaking: 'Weak', damage: 'none'},
    4: {shaking: 'Light', damage: 'none'},
    5: {shaking: 'Moderate', damage: 'Very light'},
    6: {shaking: 'Strong', damage: 'Light'},
    7: {shaking: 'Very strong', damage: 'Moderate'},
    8: {shaking: 'Severe', damage: 'Moderate/Heavy'},
    9: {shaking: 'Violent', damage: 'Heavy'},
    10: {shaking: 'Extreme', damage: 'Very Heavy'},
    11: {shaking: 'Extreme', damage: 'Very Heavy'},
    12: {shaking: 'Extreme', damage: 'Very Heavy'}
  };
  public round = Math.round;
  public title = 'ShakeMap';

  @Input() product: any;

  constructor () { }

  ngOnInit () { }

}
