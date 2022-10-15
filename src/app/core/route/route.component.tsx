import * as React from 'react';
import { RouteComponentProps as ReactRouterComponentProps, RouteProps as ReactRouteProps } from 'react-router';
import { Route as ReactRoute, Router, Redirect } from 'react-router-dom';

export interface RouteComponentProps<P, C, S> extends ReactRouterComponentProps<P, C, S> {
  router: Router;
}

export type RouteGuard = () => boolean;

export interface RouteProps extends ReactRouteProps {
  useGuard?: RouteGuard;
  redirectPath?: string;
}

export const Route: React.FC<RouteProps> = (props) => {
  const authorized = props.useGuard();
  const WrappedComponent: any = props.component;

  const handleRender = (innerProps: any) => {
    if (authorized) {
      return <WrappedComponent {...innerProps} />;
    }
    return <Redirect to={props.redirectPath} />;
  };

  const { path, ...other } = props;
  delete other.component;

  return <ReactRoute path={path} render={handleRender} {...other} />;
};

Route.defaultProps = {
  useGuard: () => true,
};
