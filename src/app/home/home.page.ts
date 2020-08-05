import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Platform, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


/* Import all of the required Google Maps entities from the google-maps package */
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";
import { AppDataService } from '../services/app-data.service';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterContentInit {
  map;
  @ViewChild('mapElement') mapElement;

  // Readable Address
  address: string;

  // Location coordinates
  latitude: number;
  longitude: number;
  accuracy: number;

  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(
    private router: Router,
    private authSvc: AuthService,
    public platform: Platform,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public appData: AppDataService,
    public alertCtrl: AlertController) {}

  

  ngAfterContentInit() {
		this.platform.ready().then(() => this.loadMap());
  }
  
  loadMap() {
		/* The create() function will take the ID of your map element */
		const map = GoogleMaps.create('map');

		map.one( GoogleMapsEvent.MAP_READY ).then((data: any) => {
			const coordinates: LatLng = new LatLng(21.8895428, -102.3117729);

			map.setCameraTarget(coordinates);
			map.setCameraZoom(15);
		});
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }

  //Get current coordinates of device
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;

      this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }

  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }
  
  getAddress() {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    };
    this.nativeGeocoder.forwardGeocode('Aguascalientes', options)
    .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
    .catch((error: any) => console.log(error));
  }

  goToPerfil() {
    this.router.navigateByUrl('/mi-perfil', { replaceUrl: true });
  }

  goToAgenda() {
    this.router.navigateByUrl('/agenda', { replaceUrl: true });
  }

  agendar() {
    if(this.address == "") {
      this.valueNeeded();
    }else {
      this.appData.address = this.address;
   
      this.router.navigateByUrl('/agendar', { replaceUrl: true });
    }
  }


  async valueNeeded(){
    const alert = await this.alertCtrl.create({
      header: 'Lo sentimos',
      subHeader: 'Es necesario escribir la dirección',
      buttons: ['OK']
    });
    await alert.present();
  }

  logout() {
    this.authSvc.logoutUser()
      .then(res => {
        console.log(res);
        this.router.navigateByUrl('/login', { replaceUrl: true });
      })
      .catch(error => {
        console.log(error);
      })
  }

}
