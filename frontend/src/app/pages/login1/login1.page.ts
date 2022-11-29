import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {

  constructor(private router: Router, 
    private authService: AuthService, 
    private alertController: AlertController) { }

  ngOnInit() {
  }

  login(form){
    let user: User = {
      id: null,
      email: form.value.email,
      password: form.value.password,
      CP:form.value.CP,
      name: null,
      admin: null
    };
    this.authService.login(user).subscribe((res)=>{
      if(!res.access_token) {
        this.errorAlert("Credenciales inválidas");
        return;
      }
      this.router.navigateByUrl('/profile');
      form.reset();
    }, err => {
      this.errorAlert("Error");
    });
  }

  async errorAlert(message: string) {
    const alert = await this.alertController.create({
      header: message,
      cssClass: 'customOkAlert',
      subHeader: 'Vuelve a intentarlo',
      buttons: [{
        text: 'OK',
        cssClass: 'alertButton',
        handler: () => {
          window.location.reload();
        },
      }],
    });

    await alert.present();
  }

}
