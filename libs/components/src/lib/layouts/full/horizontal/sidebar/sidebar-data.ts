import { NavItem } from '@issp/common';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    name: 'Dashboards',
    icon: 'home',
    route: 'dashboards',
    children: [
      {
        name: 'Analytical',
        icon: 'point',
        route: 'dashboards/dashboard1',
      },
      {
        name: 'Admin Dashboard',
        icon: 'point',
        route: 'dashboards/dashboard2',
      },
    ],
  },
  {
    name: 'Apps',
    icon: 'apps',
    route: 'apps',
    ddType: '',
    children: [
      {
        name: 'Chat',
        icon: 'point',
        route: 'apps/chat',
      },
      {
        name: 'Calendar',
        icon: 'point',
        route: 'apps/calendar',
      },
      {
        name: 'Email',
        icon: 'point',
        route: 'apps/email/inbox',
      },
      {
        name: 'Contacts',
        icon: 'point',
        route: 'apps/contacts',
      },
      {
        name: 'Courses',
        icon: 'point',
        route: 'apps/courses',
      },
      {
        name: 'Employee',
        icon: 'point',
        route: 'apps/employee',
      },
      {
        name: 'Notes',
        icon: 'point',
        route: 'apps/notes',
      },
      {
        name: 'Tickets',
        icon: 'point',
        route: 'apps/tickets',
      },
      {
        name: 'Invoice',
        icon: 'point',
        route: 'apps/invoice',
      },
      {
        name: 'ToDo',
        icon: 'point',
        route: 'apps/todo',
      },
      {
        name: 'Taskboard',
        icon: 'point',
        route: 'apps/taskboard',
      },
      {
        name: 'Blog',
        icon: 'point',
        route: 'apps/blog',
        children: [
          {
            name: 'Post',
            icon: 'point',
            route: 'apps/blog/post',
          },
          {
            name: 'Detail',
            icon: 'point',
            route:
              'apps/blog/detail/Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
          },
        ],
      },
    ],
  },
  {
    name: 'Ui',
    icon: 'components',
    route: 'ui-components',
    ddType: '',
    children: [
      {
        name: 'Badge',
        icon: 'point',
        route: 'ui-components/badge',
      },
      {
        name: 'Expansion Panel',
        icon: 'point',
        route: 'ui-components/expansion',
      },
      {
        name: 'Chips',
        icon: 'point',
        route: 'ui-components/chips',
      },
      {
        name: 'Dialog',
        icon: 'point',
        route: 'ui-components/dialog',
      },
      {
        name: 'Lists',
        icon: 'point',
        route: 'ui-components/lists',
      },
      {
        name: 'Divider',
        icon: 'point',
        route: 'ui-components/divider',
      },
      {
        name: 'Menu',
        icon: 'point',
        route: 'ui-components/menu',
      },
      {
        name: 'Paginator',
        icon: 'point',
        route: 'ui-components/paginator',
      },
      {
        name: 'Progress Bar',
        icon: 'point',
        route: 'ui-components/progress',
      },
      {
        name: 'Progress Spinner',
        icon: 'point',
        route: 'ui-components/progress-spinner',
      },
      {
        name: 'Ripples',
        icon: 'point',
        route: 'ui-components/ripples',
      },
      {
        name: 'Slide Toggle',
        icon: 'point',
        route: 'ui-components/slide-toggle',
      },
      {
        name: 'Slider',
        icon: 'point',
        route: 'ui-components/slider',
      },
      {
        name: 'Snackbar',
        icon: 'point',
        route: 'ui-components/snackbar',
      },
      {
        name: 'Tabs',
        icon: 'point',
        route: 'ui-components/tabs',
      },
      {
        name: 'Toolbar',
        icon: 'point',
        route: 'ui-components/toolbar',
      },
      {
        name: 'Tooltips',
        icon: 'point',
        route: 'ui-components/tooltips',
      },
    ],
  },
  {
    name: 'Pages',
    icon: 'clipboard',
    route: '',
    children: [
      {
        name: 'Treeview',
        icon: 'point',
        route: 'theme-pages/treeview',
      },
      {
        name: 'Pricing',
        icon: 'point',
        route: 'theme-pages/pricing',
      },
      {
        name: 'Account Setting',
        icon: 'point',
        route: 'theme-pages/account-setting',
      },
      {
        name: 'FAQ',
        icon: 'point',
        route: 'theme-pages/faq',
      },
      {
        name: 'Landingpage',
        icon: 'point',
        route: 'landingpage',
      },
      {
        name: 'Widgets',
        icon: 'point',
        route: 'widgets',
        children: [
          {
            name: 'Cards',
            icon: 'point',
            route: 'widgets/cards',
          },
          {
            name: 'Banners',
            icon: 'point',
            route: 'widgets/banners',
          },
          {
            name: 'Charts',
            icon: 'point',
            route: 'widgets/charts',
          },
        ],
      },
      {
        name: 'Charts',
        icon: 'point',
        route: 'charts',
        children: [
          {
            name: 'Line',
            icon: 'point',
            route: '/charts/line',
          },
          {
            name: 'Gredient',
            icon: 'point',
            route: '/charts/gredient',
          },
          {
            name: 'Area',
            icon: 'point',
            route: '/charts/area',
          },
          {
            name: 'Candlestick',
            icon: 'point',
            route: '/charts/candlestick',
          },
          {
            name: 'Column',
            icon: 'point',
            route: '/charts/column',
          },
          {
            name: 'Doughnut & Pie',
            icon: 'point',
            route: '/charts/doughnut-pie',
          },
          {
            name: 'Radialbar & Radar',
            icon: 'point',
            route: '/charts/radial-radar',
          },
        ],
      },
      {
        name: 'Auth',
        icon: 'point',
        route: '/',
        children: [
          {
            name: 'Login',
            icon: 'point',
            route: '/authentication',
            children: [
              {
                name: 'Side Login',
                icon: 'point',
                route: '/authentication/side-login',
              },
              {
                name: 'Boxed Login',
                icon: 'point',
                route: '/authentication/boxed-login',
              },
            ],
          },
          {
            name: 'Register',
            icon: 'point',
            route: '/authentication',
            children: [
              {
                name: 'Side Login',
                icon: 'point',
                route: '/authentication/side-register',
              },
              {
                name: 'Boxed Login',
                icon: 'point',
                route: '/authentication/boxed-register',
              },
            ],
          },
          {
            name: 'Forgot Password',
            icon: 'point',
            route: '/authentication',
            children: [
              {
                name: 'Side Forgot Password',
                icon: 'point',
                route: '/authentication/side-forgot-pwd',
              },
              {
                name: 'Boxed Forgot Password',
                icon: 'point',
                route: '/authentication/boxed-forgot-pwd',
              },
            ],
          },
          {
            name: 'Two Steps',
            icon: 'point',
            route: '/authentication',
            children: [
              {
                name: 'Side Two Steps',
                icon: 'point',
                route: '/authentication/side-two-steps',
              },
              {
                name: 'Boxed Two Steps',
                icon: 'point',
                route: '/authentication/boxed-two-steps',
              },
            ],
          },
          {
            name: 'Error',
            icon: 'point',
            route: '/authentication/error',
          },
          {
            name: 'Maintenance',
            icon: 'point',
            route: '/authentication/maintenance',
          },
        ],
      },
    ],
  },
  {
    name: 'Forms',
    icon: 'file-description',
    route: 'forms',
    children: [
      {
        name: 'Form elements',
        icon: 'point',
        route: 'forms/forms-elements',
        children: [
          {
            name: 'Autocomplete',
            icon: 'point',
            route: 'forms/forms-elements/autocomplete',
          },
          {
            name: 'Button',
            icon: 'point',
            route: 'forms/forms-elements/button',
          },
          {
            name: 'Checkbox',
            icon: 'point',
            route: 'forms/forms-elements/checkbox',
          },
          {
            name: 'Radio',
            icon: 'point',
            route: 'forms/forms-elements/radio',
          },
          {
            name: 'Datepicker',
            icon: 'point',
            route: 'forms/forms-elements/datepicker',
          },
        ],
      },
      {
        name: 'Form Layouts',
        icon: 'point',
        route: '/forms/form-layouts',
      },
      {
        name: 'Form Horizontal',
        icon: 'point',
        route: '/forms/form-horizontal',
      },
      {
        name: 'Form Vertical',
        icon: 'point',
        route: '/forms/form-vertical',
      },
      {
        name: 'Form Wizard',
        icon: 'point',
        route: '/forms/form-wizard',
      },
    ],
  },
  {
    name: 'Tables',
    icon: 'layout',
    route: 'tables',
    children: [
      {
        name: 'Basic Table',
        icon: 'point',
        route: 'tables/basic-table',
      },
      {
        name: 'Dynamic Table',
        icon: 'point',
        route: 'tables/dynamic-table',
      },
      {
        name: 'Expand Table',
        icon: 'point',
        route: 'tables/expand-table',
      },
      {
        name: 'Filterable Table',
        icon: 'point',
        route: 'tables/filterable-table',
      },
      {
        name: 'Footer Row Table',
        icon: 'point',
        route: 'tables/footer-row-table',
      },
      {
        name: 'HTTP Table',
        icon: 'point',
        route: 'tables/http-table',
      },
      {
        name: 'Mix Table',
        icon: 'point',
        route: 'tables/mix-table',
      },
      {
        name: 'Multi Header Footer',
        icon: 'point',
        route: 'tables/multi-header-footer-table',
      },
      {
        name: 'Pagination Table',
        icon: 'point',
        route: 'tables/pagination-table',
      },
      {
        name: 'Row Context Table',
        icon: 'point',
        route: 'tables/row-context-table',
      },
      {
        name: 'Selection Table',
        icon: 'point',
        route: 'tables/selection-table',
      },
      {
        name: 'Sortable Table',
        icon: 'point',
        route: 'tables/sortable-table',
      },
      {
        name: 'Sticky Column',
        icon: 'point',
        route: 'tables/sticky-column-table',
      },
      {
        name: 'Sticky Header Footer',
        icon: 'point',
        route: 'tables/sticky-header-footer-table',
      },
      {
        name: 'Data table',
        icon: 'border-outer',
        route: '/datatable/kichen-sink',
      },
    ],
  },
];
