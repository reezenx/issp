import { Component } from '@angular/core';
import { IsspService } from './issp.service';
import { ISSP } from './issp';

@Component({
  selector: 'issp-issps',
  templateUrl: './issps.component.html',
  styleUrls: ['./issps.component.scss'],
})
export class IsspIsspsComponent {
  isspList: ISSP[] = [];
  selectedCategory = 'All';

  constructor(private isspService: IsspService) {
    this.isspList = this.isspService.getIssps();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.isspList = this.filter(filterValue);
  }

  filter(v: string): ISSP[] {
    return this.isspService
      .getIssps()
      .filter((x) => x.isspName.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  }

  ddlChange(ob: any): void {
    const filterValue = ob.value;
    if (filterValue === 'All') {
      this.isspList = this.isspService.getIssps();
    } else {
      this.isspList = this.isspService
        .getIssps()
        // tslint:disable-next-line: no-shadowed-variable
        .filter((issp) => issp.isspFramework === filterValue);
    }
    // this.todos.filter(issp => issp.isspType==filterValue);
  }
}
