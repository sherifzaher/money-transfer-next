import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export type NavigationItemType = 'dashboard' | 'activity' | 'methods' | 'settings';

export type NavigationItem = {
  type: NavigationItemType;
  pathname: string;
}

export type MockPaymentMethodType = {
  type: string;
  last4: string,
  name: string;
}