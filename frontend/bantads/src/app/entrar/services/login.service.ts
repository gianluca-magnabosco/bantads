import { Injectable } from '@angular/core';
import { LoginDTO } from '../dtos/login.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(loginDTO: LoginDTO): void {
    console.log(loginDTO);
  }
}
