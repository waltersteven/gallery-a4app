import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];
  constructor() { }

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id)  //find the image whose id is equal to the parameter of function
  }
}

const IMAGES = [
  {"id":1, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg"},
  {"id":2, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg"},
  {"id":3, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg"},
  {"id":4, "category": "camping", "caption": "Our camping spot", "url": "assets/img/camping_01.jpg"},
  {"id":5, "category": "camping", "caption": "Our camping spot", "url": "assets/img/camping_01.jpg"},
  {"id":6, "category": "camping", "caption": "Our camping spot", "url": "assets/img/camping_01.jpg"},
  {"id":7, "category": "camping", "caption": "Our camping spot", "url": "assets/img/camping_01.jpg"},
  {"id":8, "category": "library", "caption": "Sunday afternoon", "url": "assets/img/vacation_01.jpg"},
  {"id":9, "category": "library", "caption": "Sunday afternoon", "url": "assets/img/vacation_01.jpg"},
  {"id":10, "category": "library", "caption": "Sunday afternoon", "url": "assets/img/vacation_01.jpg"}
]