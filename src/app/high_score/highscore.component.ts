import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css'],
})


export class HighScoreComponent {

  name: string = 'Aaron';
  names: any[] = [];

}
