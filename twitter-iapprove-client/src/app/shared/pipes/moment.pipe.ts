import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: string | Date): string {
    moment.locale('pt');
    return moment(value).format("DD MMM, yyyy");
  }

}
