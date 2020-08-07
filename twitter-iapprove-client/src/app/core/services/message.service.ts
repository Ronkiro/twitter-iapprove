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

  warn(message, title = "Cuidado!", confirmButton=null, cancelButton=null) {
    const showCancel = cancelButton? true : false;
    const confirmText = confirmButton || "";
    cancelButton = cancelButton || "";

    return Swal.fire({
      title,
      text: message,
      icon: 'warning',
      showCancelButton: showCancel,
      confirmButtonText: confirmText,
      cancelButtonText: cancelButton,
    });
  }

  custom(...args: any[]) {
    return Swal.fire(...args);
  }
}
