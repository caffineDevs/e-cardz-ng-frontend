import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showUserMenu: boolean;
  showNotificationsMenu: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileNavbar() {

  }

  handleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
    this.showNotificationsMenu = false;
  }

  handleUserNotificationsMenu() {
    this.showNotificationsMenu = !this.showNotificationsMenu;
    this.showUserMenu = false;
  }

  toggleActiveLink(e) {
    if (e.target.nodeName != 'A') {
      return;
    }
    const navlinks = Array.from(document.querySelectorAll('.navlinks'));
    navlinks.forEach(navlink => navlink.classList.remove('bg-gray-900', 'text-white-active'));
    e.target.classList.add('bg-gray-900', 'text-white-active');
  }

}
