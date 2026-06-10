import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-primary-school',
  imports: [RouterLink, CommonModule],
  templateUrl: './primary-school.html',
  styleUrl: './primary-school.css',
})
export class PrimarySchool {
  galleryImages = [
    'assets/images/primary-gallery-1.jpg',
    'assets/images/primary-gallery-2.jpg',
    'assets/images/primary-gallery-3.jpg',
    'assets/images/primary-gallery-4.jpg',
    'assets/images/primary-gallery-5.jpg',
    'assets/images/primary-gallery-6.jpg',
    'assets/images/primary-gallery-7.jpg',
    'assets/images/primary-gallery-8.jpg',
  ];

  selectedImage: string | null = null;

  openImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
