import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StepperComponent} from './components/stepper/stepper.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ModalTableComponent } from './components/modal-table/modal-table.component';
import { TableDialogComponent } from './components/modal-table/table-dialog/table-dialog.component';
import { TableDataComponent } from './components/modal-table/table-data/table-data.component';
import { GestureConfig } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    ModalTableComponent,
    TableDialogComponent,
    TableDataComponent
  ],
  entryComponents: [
    TableDialogComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
