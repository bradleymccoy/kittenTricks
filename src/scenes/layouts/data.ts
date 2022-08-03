import React from 'react';
import { ImageStyle } from 'react-native';
import { ThemedIcon } from '../../components/themed-icon.component';
import {
  AssetArticlesDarkIcon,
  AssetArticlesIcon,
  AssetAuthDarkIcon,
  AssetAuthIcon,
  AssetDashboardsDarkIcon,
  AssetDashboardsIcon,
  AssetEcommerceDarkIcon,
  AssetEcommerceIcon,
  AssetMessagingDarkIcon,
  AssetMessagingIcon,
  AssetSocialDarkIcon,
  AssetSocialIcon,
} from '../../components/icons';
import { MenuItem } from '../../model/menu-item.model';

export interface LayoutData extends MenuItem {
  route: string;
}

export const data: LayoutData[] = [
  {
    title: 'Articles',
    route: 'Articles',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetArticlesIcon, dark: AssetArticlesDarkIcon },
      );
    },
  },
  {
    title: 'Workouts',
    route: 'Dashboards',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetDashboardsIcon, dark: AssetDashboardsDarkIcon },
      );
    },
  },
  {
    title: 'Movements',
    route: 'Libraries',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetSocialIcon, dark: AssetSocialDarkIcon },
      );
    },
  },
];
