import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api/muertes';

  constructor(private http: HttpClient) {}

  getMuertesDepartamento(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/departamento`);
  }

  getMuertesMes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/mes`);
  }

  getCausasPrincipales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/causas`);
  }

  getMuertesMunicipio(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/municipio`);
  }

  getSexoDepartamento(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sexo-departamento`);
  }

  getMuertesEdad(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/edad`);
  }

  getCiudadesViolentas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ciudades-violentas`);
  }

  getCiudadesMenorMortalidad(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ciudades-menor-mortalidad`);
  }
}
