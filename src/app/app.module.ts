import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { OutputmdComponent } from './outputmd/outputmd.component';
import { NavComponent } from './nav/nav.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PipesComponent } from './pipes/pipes.component';
import { WithoutallfileComponent } from './withoutallfile.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BindingDemoComponent,
    DirectiveComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    OutputmdComponent,
    NavComponent,
    ContactusComponent,
    PipesComponent,
    WithoutallfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
