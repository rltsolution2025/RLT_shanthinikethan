import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admission-process',
  imports: [RouterLink, CommonModule],
  templateUrl: './admission-process.html',
  styleUrl: './admission-process.css',
})
export class AdmissionProcess {}
