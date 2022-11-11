import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login1PageRoutingModule } from './login1-routing.module';

import { Login1Page } from './login1.page';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { LoginCardComponent } from 'src/app/components/login-card/login-card.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { LogoFooterComponent } from 'src/app/components/logo-footer/logo-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Login1PageRoutingModule,
    HttpClientModule
  ],
  declarations: [
    Login1Page,
    LoginCardComponent,
    ButtonComponent,
    ContactComponent,
    LogoFooterComponent
  ]
})
export class Login1PageModule {}
