import { ItemDropdown } from '../item-dropdown';

export class IsspDropdown extends ItemDropdown {
  title!: string;

  constructor() {
    super();
    Object.defineProperty(this, 'name', {
      get: () => this.title,
      enumerable: true,
    });
  }
}
