import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingedient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) itemName: ElementRef;
  @ViewChild('amountInput', {static:false}) itemAmount: ElementRef;
  @Output('onAddItem') onAddItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addItem(){
    const newItem:Ingredient = {name:this.itemName.nativeElement.value,
                              amount:this.itemAmount.nativeElement.value};
    this.onAddItem.emit(newItem);
  }
}
