import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceLetters',
  standalone: true // Verifica que esté configurado como standalone si es necesario
})
export class ReplaceLettersPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/[aoAO]/g, 'X');
  }
}
