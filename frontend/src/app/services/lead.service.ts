import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
console.log('environment', environment);

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private apiUrl = `${environment.apiBaseUrl}/api/leads`;

  constructor(private http: HttpClient) {}

  getInvitedLeads(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/invited`);
  }

  getAcceptedLeads(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/accepted`);
  }

  acceptLead(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/accept`, {});
  }

  declineLead(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/decline`, {});
  }
}
