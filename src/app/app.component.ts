import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  searchBox: String = "";
  searchResult:any;

  constructor(private authService: AuthServiceService) {

  }

  ngOnInit(): void {
  }

  getWeatherData() {
    this.authService.getWeatherData(this.searchBox)
      .then((data) => {
        this.searchResult = data;
        console.log(data)
      }
      )
  }
}
