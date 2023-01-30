import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {

  // Crear atributo de tipo FormBuilder
  constructor(private formBuilder : FormBuilder){ }
  ngOnInit(): void {}
  // Estructura del formulario reactivo
  registroForm = this.formBuilder.group({
    nombres: ['', Validators.required],
    telefono:[ '', { validators: [Validators.required, Validators.pattern('[0-9]{9}')]}],
    email: ['', Validators.required],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required],
  });

  // Generar un metodo get para cada campo del formularior reactivo
  get nombres(){ return this.registroForm.get('nombres'); }
  get email(){ return this.registroForm.get('email'); }
  get telefono(){ return this.registroForm.get('telefono'); }
  get asunto(){ return this.registroForm.get('asunto'); }
  get mensaje(){ return this.registroForm.get('mensaje'); }

  isCorrect: boolean = false;

  send() {
    if (this.registroForm.valid) {
      this.isCorrect = true;
    }
    console.log(this.registroForm.value);
  }
}
