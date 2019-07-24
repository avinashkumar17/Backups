import { Directive,Input } from '@angular/core';
import { MustMatch} from '../app/utility/utility';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
@Directive({
  selector: '[appCustomValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true }]
})
export class CustomValidatorDirective implements Validator{

  @Input('mustMatch') mustMatch: string[] = [];
  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors {
    return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
}
}
