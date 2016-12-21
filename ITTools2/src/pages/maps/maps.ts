import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
//import { Diagnostic } from 'ionic-native';
//import { DeviceOrientation, CompassHeading } from 'ionic-native';
/*import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker
 } from 'ionic-native';*/

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})

export class MapsPage {


  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {
  }

   ionViewDidLoad(){
     this.loadMap();
   }




  addMarker(text:string){
    let textInH4:string = text;
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>"+textInH4+"</h4>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  loadMap(){

    Geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.addMarker("Your Position");

    }, (err) => {
      console.log(err);
    });

    /*// create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    let map = new GoogleMap(element);

    // listen to MAP_READY event
    map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

    // create LatLng object
    let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);

    // create CameraPosition
    let position: CameraPosition = {
      target: ionic,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    map.moveCamera(position);

    // create new marker
    let markerOptions: GoogleMapsMarkerOptions = {
      position: ionic,
      title: 'Ionic'
    };

    map.addMarker(markerOptions)
      .then((marker: GoogleMapsMarker) => {
        marker.showInfoWindow();
      });
    */
    /*checkLocation(){
     let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
     let errorCallback = (e) => console.error(e);

     Diagnostic.isLocationEnabled().then(successCallback).catch(errorCallback);
     Diagnostic.isGpsLocationEnabled().then(successCallback).catch(errorCallback);

     DeviceOrientation.getCurrentHeading().then(
     (data: CompassHeading) => console.log(data),
     (error: any) => console.log(error)
     );

     var subscription = DeviceOrientation.watchHeading().subscribe(
     (data: CompassHeading) => console.log(data)
     );
     subscription.unsubscribe();

     }*/
  }

}
