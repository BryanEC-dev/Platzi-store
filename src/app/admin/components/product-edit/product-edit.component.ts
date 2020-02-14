import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../products/services/products.service';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { myValidators } from '../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id : any;

  constructor(
                private formBuilder: FormBuilder, 
                private productsService: ProductsService, 
                private router: Router,
                private activedRoute: ActivatedRoute
              ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activedRoute.params.subscribe((params : Params) => {
       this.id = params.id;

      this.productsService.getProduct(this.id).subscribe((product) => {
        this.form.patchValue(product);
        console.log(product);
      })
    })
  }

  editProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
        const Product = this.form.value;
      this.productsService.updateProduct(this.id,Product).subscribe( (NewProduct) => {
        console.log(NewProduct);
        });
      this.router.navigate(['./admin/index']);
    }

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['1', Validators.required],
      title: ['', Validators.required],
      price: [0, [Validators.required, myValidators.isPriceValid]],
      image: '',
      description: ['', Validators.required]
    })
  }

  get priceField(){
    return this.form.get('price');
  }
}
