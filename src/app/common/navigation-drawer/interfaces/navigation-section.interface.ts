import INavigationRoute from './navigation-route.interface';

export default interface INavigationSection {
  label: string;
  childRoutes: INavigationRoute[];
}
