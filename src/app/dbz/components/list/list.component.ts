import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteByIdEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 5000
  }]

  onDeleteById(id?:string):void{
    console.log(id);

    if(id) {
      this.onDeleteByIdEvent.emit(id);
    }

  }
}
