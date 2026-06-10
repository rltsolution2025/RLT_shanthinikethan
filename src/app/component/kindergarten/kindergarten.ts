import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kindergarten',
  imports: [RouterLink, CommonModule],
  templateUrl: './kindergarten.html',
  styleUrl: './kindergarten.css',
})
export class Kindergarten {
  galleryImages = [
    'assets/images/kg-gallery-1.jpg',
    'assets/images/kg-gallery-2.jpg',
    'assets/images/kg-gallery-3.jpg',
    'assets/images/kg-gallery-4.jpg',
    'assets/images/kg-gallery-5.jpg',
    'assets/images/kg-gallery-6.jpg',
  ];

  selectedImage: string | null = null;

  openImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
