import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// This is where we define our routes
const routes: Routes = [
  {path: '', component: HomeComponent}, // With this we're telling angular router that whenver the browser address changes to this path, display this component
  {path: 'followers/:username/:userid', component: GithubProfileComponent}, // in this path we've a parameter called username that will be placed dynamically at runtime from your HTML template
  {path: 'followers', component: GithubFollowersComponent},
  {path: 'posts', component: PostsComponent},
  {path: '**', component: NotFoundComponent} // if the user navigates to a different url that is not a valid route then we want to display a typical not found page. The asterix catches any url in the browser address bar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot is a static method defined in the RouterModule class
  exports: [RouterModule]
})
export class AppRoutingModule { }



/** Note: 
 *    - Each route determines what component should be visible when the user navigates to a certain url. So, a route
 *      is a mapping of a path to a component. 
 * 
 *  1. Routing:
 *        Reference for complete guide: https://angular.io/guide/router
 * 
 *  2. None of our route starts with the slash'/'. And, an empty path represents the home page or the default route. 
 *  
 *  3. See, in the above routes array, we've kept our 'followers/:userid' route above the 'followers' route. Why is it so?
 *     Because, here the order of routes matter a lot. If we would have kept 'followers' route above the 'followers/:userid'
 *     route then anytime if we visit the 'followers/userid' then the path 'follower' would have matched the url
 *     and as a result, evertime 'GithubFollowersComponent' will be displayed. 
 * 
 *        In other words, with the below configuration we will not be able to look at the profile of a given follower.
 *          Eg. We won't reach the 'followers/:userid' route because 'followers' route will match first and it will ignore the userid.
 *              That's why we've kept the 'followers/:userid' route above the 'followers' route.
 * 
 *              {path: 'followers', component: GithubFollowersComponent}  
 *              {path: 'followers/:userid', component: GithubProfileComponent}  
 *  
 *  4. The order of this routes is important. So, let's say, if we put the NotFound routes first in the above array,
 *     then the asterix will catch any routes and we're only going to see the not found page.  
 * 
 *  forRoute(): 
 *    We use forRoot() method to define the root routes for our application. Now, as our application grows we 
 *    may want to break that application into smaller more manageable modules. Then in each module we're 
 *    going to have a set of route for that particular area of the application. Then instead of using forRoot() 
 *    we'll use forChild().
 * 
 * 
 * */