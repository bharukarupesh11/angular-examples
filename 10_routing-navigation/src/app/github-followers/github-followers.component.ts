import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(followers => {
      console.log(followers);
      this.followers = followers;
    });


    /*
    // combineLatest requires an array with list of observables to combine them and then it returns a new observable to which we subscribe
      let obs = combineLatest([
        this.route.paramMap,
        this.route.queryParamMap
      ]);

    // Note: Here combined is an array with 2 objects i.e. 1)paramMap object  2)queryParamMap object
      obs.subscribe(combined => {
        // extract the values from both the observable here as below
        let userid = combined[0].get('userid');
        let pageNo = combined[1].get('page');

        // give call to the server as below,
          this.service.getAll({id: userid, page: page})
              .subscribe(followers => {

              }); //passing parameters to the server
        
        // Note: Here, We've a nested subscribe blocks and that looks a little bit ugly. So, how to fix this?
      }); 
    */
  }// end of ngOnInit method

}// end of component class


/**
 *    // To get the required parameters of our route use 'paramMap' 
 *          this.route.paramMap.subscribe();
 *              OR
 *          this.route.snapshot.paramMap.get('id'); 
 * 
 * 
 *    // To get the optional parameters i.e. Query Parameters user 'queryParams' 
 *           1) 
 *              this.route.queryParams
 *                .subscribe(params => {
 *                  console.log('Page No:', params.page);
 *                  console.log('Order:', params.order);
 *              }); 
 *
 *           2)   
 *              this.route.queryParamMap 
 *                .subscribe(params => {
 *                  console.log('Page No:', params.get('page'));
 *                });
 *        
 *            3) this.route.snapshot.queryParamMap.get('page');
 * 
 *    Q. How can we get both the required and optional query parameters and then call the server to get the 
 *       list of followers as below?
 *       Ans: use combineLatest() directive of rxjs to combine multiple observables. 
 * 
 *          // getting the required parameters  
 *          this.route.paramMap
 *            .subscribe(params => {
 *          
 *            });
 * 
 *          // getting the optional query parameters 
 *          this.route.queryParamMap
 *            .subscribe(params => {
 * 
 *          });
 *    
 *          this.service.getAll()
 *            .subscribe(followers => {
 *                this.followers = followers
 *          });
 *  
 */