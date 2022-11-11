import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsPageRoutingModule } from './questions-routing.module';

import { QuestionsPage } from './questions.page';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { QuestionsCardComponent } from 'src/app/components/questions-card/questions-card.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { LogoFooterComponent } from 'src/app/components/logo-footer/logo-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsPageRoutingModule
  ],
  declarations: [
    QuestionsPage,
    ContactComponent,
    QuestionsCardComponent,
    ButtonComponent,
    LogoFooterComponent
  ]
})
export class QuestionsPageModule {}
