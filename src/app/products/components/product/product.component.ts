import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  
  @Input('product') product: any;
  @Output() addCart: EventEmitter<any> = new EventEmitter(); // se coloca el tipo de dato que se desea emitir 
  
  constructor( private cartService : CartService) { }

  ngOnInit() {
  }

  addProduct():void{
    console.log('Añadiendo...');
    // emitimos la salida y le pasamos un parametro 
    this.addCart.emit(this.product.id);
    this.cartService.addCart(this.product);
  } 

}
