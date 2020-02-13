import { AbstractControl } from '@angular/forms';
export class myValidators {

    static isPriceValid( control : AbstractControl){
        const value = control.value;

        if (value > 1000) {
            return {
                price_invalid : true
            }
        }

        return null;
    }

}