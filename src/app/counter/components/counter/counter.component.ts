import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
        <h3>
            Counter {{ counter}}
        </h3>
        <div>
            <button (click)="increaseBy(1)">+1</button>
            <button (click)="reset()">Reset</button>
            <button (click)="decreaseBy(1)">-1</button>
        </div>
    
    
    `
})
export class CounterComponent{
    public counter: number = 10;

    public increaseBy(value: number): void{
      this.counter+=value;
    }
  
    public decreaseBy(value: number): void{
      console.log(value);
      this.counter-=value;
    }
  
    public reset():void{
      this.counter=10;
    }
}