import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(loginDTO: Login): void {
    console.log(loginDTO);
  }
}
