import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../shared/_services/authentication.service';
import { Router } from '@angular/router';
import { NavService } from '../../shared/_services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('snav') snav: ElementRef;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public navService: NavService) { }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.navService.snav = this.snav;
  }

}
