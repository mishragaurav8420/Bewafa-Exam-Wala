import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false
	public fullScreen = false;

	constructor() {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?:any) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: "Sample Page",
			icon: "home",
			type: "sub",
			active: true,
			children: [
			  { path: "/sample-page/sample-page1", title: "sample-page-1", type: "link" },
			  { path: "/sample-page/sample-page2", title: "sample-page-2", type: "link" },
			],
		 },
		 { path: "/sample-page3", icon: "home", title: "sample-page-3", type: "link" },
	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
