import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoSlide!: Subscription;

  slides = [
    {
      image: 'assets/images/slider-1.jpg',
      title: 'Empowering Young Minds For A Bright Future',
      subtitle:
        'A nurturing environment where academic excellence, innovation, values and leadership development come together.',
      buttonText: 'Explore Our School',
      buttonLink: '/about-us',
      icon: 'fa-solid fa-school',
    },
    {
      image: 'assets/images/slider-2.jpg',
      title: "India's 1st Bagless Educational Institution",
      subtitle:
        'Experiential learning, practical exposure and skill-based education designed for the leaders of tomorrow.',
      buttonText: 'Our Learning Methodology',
      buttonLink: '/vision-and-mission',
      icon: 'fa-solid fa-book-open',
    },
    {
      image: 'assets/images/slider-3.jpg',
      title: 'Admissions Open For Academic Year 2026-27',
      subtitle:
        'Join a vibrant learning community focused on academic excellence, creativity and holistic development.',
      buttonText: 'Admissions Open',
      buttonLink: '/admission',
      icon: 'fa-solid fa-user-graduate',
    },
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlide = interval(5000).subscribe(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    });
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  ngOnDestroy(): void {
    this.autoSlide?.unsubscribe();
  }
}
