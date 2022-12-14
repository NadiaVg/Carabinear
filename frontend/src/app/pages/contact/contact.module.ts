import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ContactCardComponent } from 'src/app/components/contact-card/contact-card.component';
import { LoginCardComponent } from 'src/app/components/login-card/login-card.component';
import { LogoFooterComponent } from 'src/app/components/logo-footer/logo-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule
  ],
  declarations: [
    ContactPage,
    ButtonComponent,
    ContactCardComponent,
    LogoFooterComponent
  ]
})
export class ContactPageModule {}
