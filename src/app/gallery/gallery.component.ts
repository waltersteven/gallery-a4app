import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image-detail/service-shared/image.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title:String = 'Recent photos';
  visibleImages:any[] = [];
  //creating an input, filterby is optional, default value is all
  @Input() filterBy?: string = 'all'
  
  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
  }

  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }

}

//Pipes: to filter our list of images