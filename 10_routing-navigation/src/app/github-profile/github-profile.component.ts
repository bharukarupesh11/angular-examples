import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /** The paramMap returns an observable */
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('userid'); // converted string to number by prefixing it with '+'
        console.log('id:', id);

        // service.getProfile(id); // in real world application we pass this id to our service layer to get the profile details of this particular user. 
      });
  }

  submit(){
    // Programmatic way of navigating 
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'oldest'}
    });
  }

}

/**
 * ActivatedRoute: We use this service to extract the route parameters from our response object. 
 *                 'paramMap' is a property available in this ActivatedRoute service.  
 * 
 * The paramMap returns an observable. So, why route parameters are defined as observables?
 *  - Watch the video no 8 in routing-navigation section. 
 * 
 *  If we have a scenario where we want user to stay on the same page and navigate back and forth then 
 *  we must use paramMap(Observable) for the multiple routes on the same component. 
 * 
 *     But, if we don't have a case where we want user to stay on the same page and navigate back and forth then 
 *  there is a simpler way to get access to route parameters. So, if you're 100% sure that the user has to 
 *  navigate away from this page, go somewhere else and then come back, instead of subscribing to an observables
 *  we can use a 'snapshot' as below(assuming that we don't have Next button on the GithubProfileComponent html page),
 *            ngOnInit(): void {
 *                this.route.snapshot.paramMap.get('id');
 *            }
 */