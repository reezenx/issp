import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Params,
  Router,
  PRIMARY_OUTLET,
  RouterModule,
} from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
  includeParams: boolean;
  isCustomUrl: boolean;
}

@Component({
  selector: 'issp-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule, TablerIconsModule],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public breadcrumbs: IBreadcrumb[] = new Array<IBreadcrumb>();
  hideBreadcrumb = false;

  ngOnInit() {
    // subscribe to the NavigationEnd event
    this.router.events
      // .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        // set breadcrumbs
        const root: ActivatedRoute = this.activatedRoute.root;
        // Don't show the breadcrumb on the home page.
        if (root.snapshot['_routerState'].url === '/') {
          this.hideBreadcrumb = true;
          return;
        }
        this.hideBreadcrumb = false;
        this.breadcrumbs = this.getBreadcrumbs(root);
      });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: IBreadcrumb[] = []
  ): IBreadcrumb[] {
    const routeDataBreadcrumb = 'breadcrumb';
    const defaultRoute = 'breadcrumbDefaultRoute';
    const skipNode = 'breadcrumbSkipNode';
    const dynamicProperty = 'breadcrumbRouteDataProperty';
    // get the child routes
    const children: ActivatedRoute[] = route.children;

    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (const child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      // get the route's URL segment
      const routeUrl: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');

      // dynamicProperty
      // verify the custom data property "breadcrumbRouteDataProperty" is specified on the route
      // if it is, we try to get the value of the custom property
      let customPropertyValue = null;
      let propValue = {};
      if (Object.hasOwn(child.snapshot.routeConfig?.data, dynamicProperty)) {
        const props = child.snapshot.routeConfig.data[dynamicProperty]
          .toString()
          .split('.');
        if (props.length > 0) {
          Object.assign(propValue, child.snapshot.data);
          // Iterate through the properties and look for values.
          props.forEach((p) => {
            if (Object.hasOwn(propValue, p)) {
              // If the property exists, set it's value
              propValue = propValue[p];
            } else {
              // If the property doesn't exist, set propValue = null;
              propValue = null;
            }
          });
          customPropertyValue = propValue;
        }
      }

      // verify the custom data property "breadcrumb" is specified on the route
      if (
        !Object.hasOwn(child.snapshot.routeConfig.data, routeDataBreadcrumb) &&
        customPropertyValue === null
      ) {
        // append route URL to URL
        url += `/${routeUrl}`;
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      let defaultSubRoute = null;
      // verify the custom data property "breadcrumbDefaultRoute" is specified on the route
      if (Object.hasOwn(child.snapshot.data, defaultRoute)) {
        defaultSubRoute = child.snapshot.data[defaultRoute];
      }

      let skipBreadcrumbNode = false;
      // verify the custom data property "breadcrumbSkipNode" is specified on the route
      if (Object.hasOwn(child.snapshot.data, skipNode)) {
        skipBreadcrumbNode = child.snapshot.data[skipNode];
      }

      // customUrl
      const urlProperty = 'breadcrumbDefaultUrl';
      let customUrl: string = null;
      if (Object.hasOwn(child.snapshot.data, urlProperty)) {
        customUrl = child.snapshot.data[urlProperty];
        const paramObject = child.snapshot.params;
        for (const propertyName in paramObject) {
          customUrl = customUrl
            .replace(':' + propertyName, paramObject[propertyName])
            .trim();
        }
      }

      if (!skipBreadcrumbNode) {
        // append route URL to URL
        if (customUrl == null) {
          url += `/${routeUrl}`;
        }

        // add breadcrumb
        const breadcrumb: IBreadcrumb = {
          label:
            customPropertyValue ||
            child.snapshot.routeConfig?.data[routeDataBreadcrumb] ||
            child.snapshot.params['id'],
          params: child.snapshot.params,
          url: defaultSubRoute == null ? url : url + defaultSubRoute,
          includeParams: false,
          isCustomUrl: customUrl != null,
        };

        if (breadcrumb.isCustomUrl) {
          breadcrumb.url = customUrl;
        }

        breadcrumbs.push(breadcrumb);
      }

      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    // we should never get here, but just in case
    return breadcrumbs;
  }
}
