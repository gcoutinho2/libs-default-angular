import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Directive({
  selector: '[nsuCheckRole]'
})
export class CheckRoleDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('checkRole') roles: string;

  constructor(el: ElementRef, renderer: Renderer2) {
    const user: any = StorageService.getSession('user');

    setTimeout(() => {
      if (user !== null && this.roles.indexOf(user.role.sigla) === -1) {
        renderer.setStyle(el.nativeElement, 'display', 'none');
      }
    }, 100);
  }

}
