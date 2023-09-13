import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Usuario } from 'src/app/shared';
import { tap } from 'rxjs';

const LS_CHAVE: string = "usuarioLogado";
const LS_TOKEN: string = "token";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  public get usuarioLogado(): Usuario {
    let usuario = localStorage[LS_CHAVE];
    return usuario ? JSON.parse(usuario) : null;
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  public get token(): any {
    let token = localStorage[LS_TOKEN];
    return token ? JSON.parse(token) : null;
  }

  public set token(token: any) {
    localStorage[LS_TOKEN] = JSON.stringify(token);
  }

  login(login: Login) {
    return this.http.post(this.url + "/login", login).pipe(tap((res) => res));
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }
}
