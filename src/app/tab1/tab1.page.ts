import { Component, VERSION, OnInit } from '@angular/core';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
	angularVersion = '';
	constructor() {}
	ngOnInit(): void {
		this.angularVersion = VERSION.full;
	}
}
