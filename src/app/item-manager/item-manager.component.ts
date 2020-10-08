import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.css']
})
export class ItemManagerComponent implements OnInit {
  @Output() submit: EventEmitter<any> = new EventEmitter();
  
    item:string;
    items=[];


    ngOnInit() {
    }

    onClick(){
      this.items.push({name: this.item});
      this.item = '';
      this.submit.emit(this.items);
    }

}
