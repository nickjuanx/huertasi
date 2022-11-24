
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

async getUsuarios () {
	const res = await fetch("http://localhost:8080/usuario")
  const resjson = (await res).json()
  return resjson
}





async register (usuario) {
  const res = await fetch("http://localhost:8080/usuario", {method: "POST", body:JSON.stringify(usuario), headers: {
    'Content-Type': 'application/json'
}} )
  const resjson = (await res).json()
  return resjson
}


}