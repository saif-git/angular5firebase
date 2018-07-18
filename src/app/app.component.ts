import { Component } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private afStorage: AngularFireStorage) { }

}
