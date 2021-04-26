import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCustomizeComponent } from './components/product-customize/product-customize.component';
import { ImperialOneComponent } from './e-cards-templates/imperial-one/imperial-one.component';
import { PunjabisComponent } from './e-cards-templates/punjabis/punjabis.component';
import { RelatedCardsComponent } from './components/related-cards/related-cards.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductCustomizeComponent,
    ImperialOneComponent,
    PunjabisComponent,
    RelatedCardsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
