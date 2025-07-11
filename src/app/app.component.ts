import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { filter, map } from 'rxjs';
import { LoaderComponent } from './components/loader/loader.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { LayoutService } from './services/layout.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor(private config: NgbRatingConfig, 
    public layoutService: LayoutService, 
    private router: Router, 
    private titleService: Title, 
    private activatedRoute: ActivatedRoute) {
    this.config.max = 5;
    this.config.readonly = true;
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
  
          const pageTitle = route?.snapshot.data['pageTitle'] || route?.snapshot.data['title'];
          return pageTitle ? `${pageTitle} | Cuba Angular` : 'Cuba Angular';
        })
      )
      .subscribe(title => {
        this.titleService.setTitle(title);
      });
  }
  
}
