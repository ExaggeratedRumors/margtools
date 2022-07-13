import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {
  FormGroup, FormControl, Validators
} from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-item-calc',
  templateUrl: './item-calc.component.html',
  styleUrls: ['./item-calc.component.css']
})
export class ItemCalcComponent implements OnInit {
  attributes_counter = new FormControl();

  userForm = new FormGroup({
    physic_damage: new FormControl(),
    ac: new FormControl(),
    act: new FormControl(),
    resfire: new FormControl(),
    resfrost: new FormControl(),
    reslight: new FormControl(),
    fire_damage: new FormControl(),
    frost_damage: new FormControl(),
    light_damage: new FormControl(),
    poison_damage: new FormControl(),
    frost_slow: new FormControl(),
    poison_slow: new FormControl(),
    absdest: new FormControl(),
    abs: new FormControl(),
    absm: new FormControl(),
    acdmg: new FormControl(),
    block: new FormControl(),
    contra: new FormControl(),
    crit: new FormControl(),
    critval: new FormControl(),
    critval_mag: new FormControl(),
    da: new FormControl(),
    di: new FormControl(),
    ds: new FormControl(),
    dz: new FormControl(),
    endest: new FormControl(),
    energy: new FormControl(),
    evade: new FormControl(),
    heal: new FormControl(),
    hp: new FormControl(),
    lowcrit: new FormControl(),
    lowevade: new FormControl(),
    mana: new FormControl(),
    manadest: new FormControl(),
    pierce: new FormControl(),
    pierceb: new FormControl(),
    acmdmg: new FormControl(),
    sa: new FormControl(),
    slow: new FormControl(),
    wound_damage: new FormControl()
  })

  attributes = new Map<string, string>([
    ["physic_damage", "0"],
    ["ac", "0"],
    ["act", "0"],
    ["resfire", "0"],
    ["resfrost", "0"],
    ["reslight", "0"],
    ["fire_damage", "0"],
    ["frost_damage", "0"],
    ["light_damage", "0"],
    ["poison_damage", "0"],
    ["frost_slow", "0"],
    ["poison_slow", "0"],
    ["absdest", "0"],
    ["abs", "0"],
    ["absm", "0"],
    ["acdmg", "0"],
    ["block", "0"],
    ["crit", "0"],
    ["critval", "0"],
    ["critval_mag", "0"],
    ["da", "0"],
    ["di", "0"],
    ["ds", "0"],
    ["dz", "0"],
    ["endest", "0"],
    ["energy", "0"],
    ["evade", "0"],
    ["heal", "0"],
    ["hp", "0"],
    ["lowcrit", "0"],
    ["lowevade", "0"],
    ["mana", "0"],
    ["manadest", "0"],
    ["pierce", "0"],
    ["pierceb", "0"],
    ["acmdmg", "0"],
    ["sa", "0"],
    ["slow", "0"],
    ["wound_damage", "0"],
  ]);

  rarity: string = 'common';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
    this.init_attributes();
  }

  init_attributes(): void {
    Object.keys(this.userForm.controls).forEach((key) => {
      this.userForm.get(key)?.setValue(0)
    });
  }

  count_attributes(): number {
    let counter = 0;
    Object.keys(this.userForm.controls).forEach((key) => {
      counter += this.userForm.get(key)?.value;
    });
    return counter;
  }

  create_attr_list(): string[] {
    let output : string[] = [];
    Object.keys(this.userForm.controls).forEach((key) => {
      if(this.userForm.get(key)?.value != 0)
        output.push(key + " " + this.userForm.get(key)?.value);
    });
    return output;
  }


  ngOnInit(): void {
    const r = localStorage.getItem('rarity');
    if(r != null) {
      this.rarity = r;
      document.body.className = r;
    }
    this.init();
  }

  init = (): void => this.renderer.addClass(this.document.body, this.rarity);

  saveQuality(rarity: string) {
    localStorage.setItem('rarity', rarity);
  }

  toggle_mode() {
    this.document.body.classList.replace(
      this.rarity,
      this.rarity === 'dark-mode' ? (this.rarity = 'light-mode') : (this.rarity = 'dark-mode')
    );
    this.saveQuality(this.rarity);
  }

}
