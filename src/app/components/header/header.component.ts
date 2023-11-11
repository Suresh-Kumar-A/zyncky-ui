import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  sample(){
    alert('you clicked');
  }
  
  ngOnInit() {
      this.items = [
          {
              label: 'Options',
              items: [
                  {
                      label: 'Update',
                      icon: 'pi pi-refresh',
                      command: () => {
                          // this.update();
                      }
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-times',
                      command: () => {
                          // this.delete();
                      }
                  }
              ]
          },
          {
              label: 'Navigate',
              items: [
                  {
                      label: 'Angular',
                      icon: 'pi pi-external-link',
                      url: 'http://angular.io'
                  },
                  {
                      label: 'Router',
                      icon: 'pi pi-upload',
                      routerLink: '/fileupload'
                  }
              ]
          }
      ];
  }
}
