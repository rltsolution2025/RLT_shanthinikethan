import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-higher-secondary-school',
  imports: [RouterLink, CommonModule],
  templateUrl: './higher-secondary-school.html',
  styleUrl: './higher-secondary-school.css',
})
export class HigherSecondarySchool {
  galleryImages: string[] = [
    'assets/images/gallery/gallery-1.jpg',
    'assets/images/gallery/gallery-2.jpg',
    'assets/images/gallery/gallery-3.jpg',
    'assets/images/gallery/gallery-4.jpg',
    'assets/images/gallery/gallery-5.jpg',
    'assets/images/gallery/gallery-6.jpg',
    'assets/images/gallery/gallery-7.jpg',
    'assets/images/gallery/gallery-8.jpg',
  ];

  selectedImage: string | null = null;

  openImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
