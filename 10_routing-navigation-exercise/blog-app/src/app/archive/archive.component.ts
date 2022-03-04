import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number;
  month: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    this.year = +params.get('year'); // used '+' to type cast string to number type
    this.month = +params.get('month'); // used '+' to type cast string to number type
  }

  viewAllArchive() {
    this.router.navigate(['/']); // navigating to home page 
  }
}
