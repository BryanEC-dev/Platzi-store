import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../products/services/products.service';
import {  Router } from '@angular/router';
import { myValidators } from '../../../utils/validators';




@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder , private productsService : ProductsService, private router : Router) {
    this.buildForm();
    
   }

  ngOnInit() {
  }

  saveProduct(event : Event){
    event.preventDefault();
    if(this.form.valid){
      /*   const Product = this.form.value;
      this.productsService.createProduct(Product).subscribe( (NewProduct) => {
        console.log(NewProduct);
        }); */
      this.router.navigate(['./admin/index']);
    }

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id : ['1', Validators.required],
      title: ['', Validators.required],
      price: [0, [Validators.required, myValidators.isPriceValid]],
      image: '',
      description: ['', Validators.required]
    })
  }


}
