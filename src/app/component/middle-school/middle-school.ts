import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-middle-school',
  imports: [RouterLink, CommonModule],
  templateUrl: './middle-school.html',
  styleUrl: './middle-school.css',
})
export class MiddleSchool {
  subjects = [
    {
      icon: 'fa-solid fa-book',
      name: 'English',
      description: 'Language, literature, communication and writing skills.',
    },
    {
      icon: 'fa-solid fa-calculator',
      name: 'Mathematics',
      description: 'Logical reasoning and analytical thinking.',
    },
    {
      icon: 'fa-solid fa-flask',
      name: 'Science',
      description: 'Scientific exploration and practical learning.',
    },
    {
      icon: 'fa-solid fa-earth-asia',
      name: 'Social Science',
      description: 'History, geography and civic understanding.',
    },
    {
      icon: 'fa-solid fa-language',
      name: 'Languages',
      description: 'Tamil, Hindi and language proficiency.',
    },
    {
      icon: 'fa-solid fa-laptop-code',
      name: 'Computer Science',
      description: 'Digital literacy and technology skills.',
    },
    {
      icon: 'fa-solid fa-globe',
      name: 'General Knowledge',
      description: 'Global awareness and current affairs.',
    },
    {
      icon: 'fa-solid fa-handshake',
      name: 'Value Education',
      description: 'Ethics, integrity and responsibility.',
    },
  ];

  galleryImages = [
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
