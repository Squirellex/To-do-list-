import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core'

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.css']
})

export class ItemManagerComponent implements OnInit {
    item:string;
    id:number;
    items = []
  

    ngOnInit() {
    }

    onClick(){
      this.items.push({name: this.item, id: this.id});
      this.item = '';
    }
}