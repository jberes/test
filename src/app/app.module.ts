import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxIconModule, IgxAvatarModule, IgxButtonModule, IgxListModule, IgxInputGroupModule, IgxSelectModule, IgxGridModule, IgxActionStripModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MyInfoComponent } from './my-info/my-info.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { ReportsComponent } from './reports/reports.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyInfoComponent,
    AnotherPageComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxListModule,
    FormsModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxGridModule,
    IgxActionStripModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
