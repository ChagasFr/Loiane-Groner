import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormModule } from './template-form/template-form.module';
import { FormDebugComponent } from './shared/form-debug/form-debug.component';

@NgModule({
  declarations: [AppComponent, DataFormComponent, FormDebugComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TemplateFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
