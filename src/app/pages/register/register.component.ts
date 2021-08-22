import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProgrammes } from 'src/app/models/programmes.model';
import { IStoreResponseError } from 'src/app/models/store.model';
import { registerUser } from 'src/app/store/actions/register.actions';
import { allProgrammesSelector } from 'src/app/store/selectors/programmes.selector';
import { STORE_ACTIONS } from 'src/app/store/store.actions';
import { SyncValidators } from 'src/app/utils/sync-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  isLoadingProgrammes = false
  error: IStoreResponseError | undefined
  programmes: Array<IProgrammes> = []
  onDestroySubject: Subject<void> = new Subject()

  form: FormGroup

  constructor(private store: Store, private fb: FormBuilder) {
    this.form = this.buildForm()
  }

  /**
   * Ciclo de vida del componente
   */
  ngOnInit(): void {
    this.listenChangesInProgrammesEvents()
    this.store.dispatch({type: STORE_ACTIONS.PROGRAMMES.LOAD})
  }

  /**
   * Ciclo de vida del componente
   */
  ngOnDestroy() {
    this.onDestroySubject.next()
    this.onDestroySubject.complete()
  }

  /**
   * Escucha los cambios en el store de programmes
   */
  private listenChangesInProgrammesEvents() {
    this.store.pipe(select(allProgrammesSelector)).pipe(
      takeUntil(this.onDestroySubject.asObservable()),
    ).subscribe(({isLoading, data, error}) => {
      this.isLoadingProgrammes = isLoading
      this.programmes = data
      this.error = error
    })
  }

  /**
   * Construye el formulario
   * @returns
   */
  private buildForm(): FormGroup {
    return this.fb.group({
      name: new FormControl('', {validators: [Validators.required, SyncValidators.validateName]}),
      family_name: new FormControl('', {validators: [Validators.required, SyncValidators.validateName]}),
      email: new FormControl('', {validators: [SyncValidators.validateEmail]}),
      phone: new FormControl('', {validators: [Validators.maxLength(10), SyncValidators.validateNumber]}),
      program: new FormControl(null, {validators: []}),
      comment: new FormControl('', {validators: []}),
    })
  }

  /**
   * Registra la persona en el sistema
   */
  register(): void {
    const data = this.form.getRawValue()
    this.store.dispatch({type: STORE_ACTIONS.REGISTER.SAVE, data})
    this.form.reset()
  }

}
