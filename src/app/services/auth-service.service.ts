import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '313d5d6f40mshaabd2c118f979a4p1454c1jsn5ac35e0d8df5',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };
  constructor() { }

  async getWeatherData(cityName: any) {
     return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${cityName}&format=json&u=f`, this.options)
     .then((data)=>{
      return data.json()
     })
  }
}
