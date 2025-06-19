import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [HeaderComponent, BannerComponent],
	imports: [CommonModule],
	exports: [HeaderComponent, BannerComponent],
})
export class CoreModule {}
