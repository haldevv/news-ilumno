import { AbstractControl } from '@angular/forms';

export class SyncValidators {
  static validateEmail(control: AbstractControl) {
    const value = control.value
    const regExp = new RegExp(/(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2}(?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
    if(value) {
      if (!regExp.test(value)) {
        return { email: true }
      }
    }
    return null
  }

  static validateName(control: AbstractControl ){
    const value = control.value
    if (value) {
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\d\-_\s]+$/.test(value) ){
        return { format: true }
      }
    }
    return null
  }

  static validateNumber(control: AbstractControl ){
    const value = control.value
    if (value) {
      if (!/^[0-9\d\-_\s]+$/.test(value) ){
        return { format: true }
      }
    }
    return null
  }
}
