import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule, PageService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-grids';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    CheckBoxModule,
    AppRoutingModule
  ],
  providers: [PageService, SelectionService, RowDDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
