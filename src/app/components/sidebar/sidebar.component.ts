import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() childName = 'my-files';
  activeItem = true;

  constructor(private userService: UserService) { }


  logout(){
    this.userService.logout();
  }
}