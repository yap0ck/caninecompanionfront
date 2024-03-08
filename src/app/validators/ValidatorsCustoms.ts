import {AbstractControl, FormGroup, ValidatorFn} from "@angular/forms";

export function inThePast(): ValidatorFn{
  return (control: AbstractControl)=>{
    const dateInput = new Date(control.value);
    const dateToday = new Date();

    if (dateInput <= dateToday) return null;

    return {notInPast: "la date n'est pas dans le passé"}
  }
}

export function inTheFuture(): ValidatorFn{
  return (control: AbstractControl)=>{
    const dateInput = new Date(control.value);
    const dateToday = new Date();

    if (dateInput > dateToday) return null;

    return {notInFuture: "la date n'est pas dans le futur"}
  }
}

export function mustMatch(controlName: string, matchingControlName: string){
  return(formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];



    if (control.value !== matchingControl.value) {
      return { misMatch: "Les mots de passe ne sont pas identiques"};
    } else {
      return null;
    }
  }
}
