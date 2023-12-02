import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  childName = '';

  constructor(route: ActivatedRoute) {
    route.params.pipe(map(p => p['child'])).subscribe((value) => {
      this.childName = value;
    });
  }

}
