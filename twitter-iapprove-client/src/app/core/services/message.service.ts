import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  success(message, title = "Sucesso!") {
    return Swal.fire(title, message, 'success');
  }

  error(message, title = "Ocorreu um erro com a sua solicitação") {
    return Swal.fire(title, message, 'error');
  }

  custom(...args: any[]) {
    return Swal.fire(...args);
  }
}
