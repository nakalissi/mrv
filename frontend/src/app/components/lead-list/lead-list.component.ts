import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { LeadCardComponent } from '../lead-card/lead-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrl: './lead-list.component.scss',
  imports: [
    CommonModule,
    LeadCardComponent
  ]
})
export class LeadListComponent implements OnInit {
  invitedLeads: any[] = [];
  acceptedLeads: any[] = [];

  constructor(private leadService: LeadService) {}

  ngOnInit(): void {
    this.leadService.getInvitedLeads().subscribe(data => this.invitedLeads = data);
    this.leadService.getAcceptedLeads().subscribe(data => this.acceptedLeads = data);
  }
}
