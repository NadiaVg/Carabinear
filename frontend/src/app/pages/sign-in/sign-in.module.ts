import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import { SignInCardComponent } from 'src/app/components/sign-in-card/sign-in-card.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { LogoFooterComponent } from 'src/app/components/logo-footer/logo-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule
  ],
  declarations: [
    SignInPage,
    SignInCardComponent,
    ButtonComponent,
    ContactComponent,
    LogoFooterComponent
  ]
})
export class SignInPageModule {}
