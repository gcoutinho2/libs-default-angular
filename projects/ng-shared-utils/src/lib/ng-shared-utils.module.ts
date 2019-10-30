import { NgModule } from '@angular/core';
import { NgSharedUtilsComponent } from './ng-shared-utils.component';
import { OutroComponent } from './outro/outro.component';
import { CheckRoleDirective } from './directives/check-role.directive';



@NgModule({
  declarations: [
    NgSharedUtilsComponent,
    OutroComponent,
    CheckRoleDirective
  ],
  imports: [
  ],
  exports: [
    NgSharedUtilsComponent,
    OutroComponent,
    CheckRoleDirective
  ]
})
export class NgSharedUtilsModule { }
