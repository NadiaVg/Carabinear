import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authService: AuthService,private  httpClient:  HttpClient, private router: Router, private restaurantService: RestaurantService,
    private storage: Storage) { }

  ngOnInit() {
    this.getUserRestaurants();
  }

  ionViewDidEnter(){
    this.getUserRestaurants();
  }

  async getUserRestaurants() {
    let token = await this.storage.get("token");
    this.restaurantService.getUserRestaurants(token).subscribe(res => {
      console.log("User Logged in. This is the motorbike list:");
      console.log(res);
    }, error => {
      console.log(error);
      console.log("User not authenticated. Please log in");
      this.router.navigateByUrl("/home");
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl("/home");
    });
  }

}
