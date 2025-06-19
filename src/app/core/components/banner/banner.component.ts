import { Component } from '@angular/core';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrl: './banner.component.scss',
})
export class BannerComponent {
	imageUrl = './../../assets/home-page-banner.png';
	imageInfo = 'Home page image';
}
