import { Component, OnInit } from '@angular/core';
import { ImageService } from './service-shared/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {  //OnInit forces on implement the function ngOnInit()
  image:any;
  constructor(private imageService: ImageService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.image = this.imageService.getImage(+this.route.snapshot.params['id']) //the initial value of the route parameters, el + convierte el id en número
  }

}
