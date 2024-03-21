import { Assign } from './assign';

export class PaginatedList<T> extends Assign {
  constructor() {
    super();
  }
  count = 0;
  data: Array<T> = new Array<T>();
  hasNextPage = false;
  hasPreviousPage = false;
  pageIndex = 0;
  totalPages = 0;
}
