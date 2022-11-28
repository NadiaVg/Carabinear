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
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Login1PageRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  declarations: [
    Login1Page
  ]
})
export class Login1PageModule {}
