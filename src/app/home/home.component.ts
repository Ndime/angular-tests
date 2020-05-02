import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  changeWeight: boolean = false;
  constructor(private data: DataService ) { }

  ngOnInit(): void {
  }

  consoleclick(){
    this.data.consoleclick();
  }

}
