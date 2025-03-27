import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { LeadService } from '../../services/lead.service';
import { LeadCardComponent } from '../lead-card/lead-card.component';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrl: './lead-list.component.scss',
  imports: [
    CommonModule,
    MatTabsModule,
    LeadCardComponent,
    MatProgressSpinnerModule,
  ]
})
export class LeadListComponent implements OnInit {
  loading: boolean = true; 
  invitedLeads: any[] = [];
  acceptedLeads: any[] = [];

  constructor(private leadService: LeadService) {}

  acceptLead(leadId: number) {
    console.log('acceptLead', leadId);
    
    this.leadService.acceptLead(leadId).subscribe(() => {
      this.loadLeads();
    });
  }
  
  declineLead(leadId: number) {
    this.leadService.declineLead(leadId).subscribe(() => {
      this.loadLeads();
    });
  }

  loadLeads() {
    this.loading = true;
    forkJoin({
      invitedLeads: this.leadService.getInvitedLeads(),
      acceptedLeads: this.leadService.getAcceptedLeads()
    }).subscribe({
      next: (results) => {
        console.log(results);
        this.invitedLeads = results.invitedLeads;
        this.acceptedLeads = results.acceptedLeads;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {
    this.loadLeads();
  }
}
