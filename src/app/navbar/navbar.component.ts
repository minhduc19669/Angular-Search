import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  searchKey(event: any) {
     const keywords = event.target.value;
     this.searchService.searchInput.next(keywords);
  }

}
