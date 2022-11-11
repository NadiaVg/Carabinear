import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuComponent } from '../../components/menu/menu.component';
import { HomeCardComponent } from 'src/app/components/home-card/home-card.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ContactComponent } from 'src/app/components/contact/contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [
    HomePage,
    MenuComponent,
    HomeCardComponent,
    ContactComponent
]
})
export class HomePageModule {}