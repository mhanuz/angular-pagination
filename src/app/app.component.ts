import { Component } from '@angular/core';


export interface PaginatedResponse<T> {
  items: T[];
  total: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }

  public pageSize = 10; // per page 10 content
 
  // data
  private readonly items = Array.from(
    Array(100).keys(),
    (item) => item + 1
  );

  public visibleItems: PaginatedResponse<number> = {
    items: this.items.slice(0, this.pageSize), //array of items for this page
    total: this.items.length, // number of item that has been sliced 
  };

  public onPageChange(page: number): void {
    const startIndex = (page-1) * this.pageSize;

    const items = this.items.slice(
      startIndex,
      startIndex + this.pageSize
    );
    this.visibleItems = { items, total: this.items.length };
  }

}
