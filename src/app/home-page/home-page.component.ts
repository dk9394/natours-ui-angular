import { Component } from '@angular/core';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
	clients: number[] = [1, 2, 3, 4, 5, 6, 7];
}
