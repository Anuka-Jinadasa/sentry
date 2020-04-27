type BreadcrumbLevel = 'fatal' | 'error' | 'warning' | 'info' | 'debug';

type BreadcrumbTypeBase = {
  timestamp?: string; //it's recommended
  category?: string;
  message?: string;
  level?: BreadcrumbLevel;
  event_id?: string;
};

export type BreadcrumbTypeNavigation = {
  type: 'navigation';
  data?: {
    to: string;
    from: string;
  };
} & BreadcrumbTypeBase;

export type BreadcrumbTypeHTTP = {
  type: 'http';
  data?: {
    url?: string;
    method?:
      | 'POST'
      | 'PUT'
      | 'GET'
      | 'HEAD'
      | 'DELETE'
      | 'CONNECT'
      | 'OPTIONS'
      | 'TRACE'
      | 'PATCH';
    status_code?: number;
    reason?: string;
  };
} & BreadcrumbTypeBase;

export type BreadcrumbTypeDefault = {
  type:
    | 'info'
    | 'debug'
    | 'message'
    | 'query'
    | 'ui'
    | 'user'
    | 'exception'
    | 'warning'
    | 'default'
    | 'error';
  data?: {[key: string]: any};
} & BreadcrumbTypeBase;

export type Breadcrumb =
  | BreadcrumbTypeNavigation
  | BreadcrumbTypeHTTP
  | BreadcrumbTypeDefault;

export type BreadcrumbType = Breadcrumb['type'];
