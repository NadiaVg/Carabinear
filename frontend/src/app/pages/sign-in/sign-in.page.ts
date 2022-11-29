import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  userForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private userService: UserService,
    private photoService: PhotoService,
    private alertController: AlertController,
    private router: Router,
    private authService: AuthService) {
    this.title = ""
  }
  @Input() title: string;

  ionViewWillEnter() {
    this.userForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {

  }

  get errorControl() {
    return this.userForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'customErrorAlert',
      header: 'Error',
      subHeader: 'Faltan datos',
      buttons: [{
        text: 'OK',
        cssClass: 'alertButton'
      }],
    });

    await alert.present();
  }


  async okAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmado',
      cssClass: 'customOkAlert',
      subHeader: 'Registrado con éxito',
      buttons: [{
        text: 'OK',
        cssClass: 'alertButton',
        handler: () => {
          this.router.navigate(['/profile'])
        },
      }],
    });

    await alert.present();
  }

  register(form) {
    let user: User = {
      id: null,
      email: form.value.email,
      password: form.value.password,
      CP: form.value.CP,
      name: form.value.name,
      admin: false
    };
    this.authService.register(user).subscribe((res) => {
      this.okAlert();
    });


  }
}
