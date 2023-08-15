import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizadName(): string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`

  }

  public changeHero(): void{
    this.name = this.name==='spiderman'? 'ironman': 'spiderman'

    // if(this.name==='Spiderman'){
    //   this.name = 'Ironman'
    // }
    // else{
    //   this.name = 'Spiderman'
    // }
  }

  public changeAge():void{
    this.age = this.age===45 ? 20 : 45;
    // this.age = 20;
  }

  public resetForm(): void{
    this.age=45;
    this.name = 'ironman';
  }

}
