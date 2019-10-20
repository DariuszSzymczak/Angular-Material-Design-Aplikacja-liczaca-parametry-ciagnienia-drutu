import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
const materialComponents = [
  MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatCardModule, MatStepperModule, MatFormFieldModule,
  MatInputModule, MatProgressBarModule
]

@NgModule({
  exports: [materialComponents],
  imports: [materialComponents]
})
export class MaterialModule { }
