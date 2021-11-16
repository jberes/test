import { Component, OnInit } from '@angular/core';
import { TestWebinarLinkService } from '../services/test-webinar-link.service';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.scss']
})
export class AnotherPageComponent implements OnInit {
  public testWebinarLinkCustomersTable: any = null;

  constructor(
    private testWebinarLinkService: TestWebinarLinkService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.testWebinarLinkService.getCustomersTable().subscribe(data => this.testWebinarLinkCustomersTable = data);
  }
}
