import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'Dashboard',
    title: 'Tickets',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'statistics',
        title: 'Dashboard',
        type: 'item',
        url: '',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  }
  
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
