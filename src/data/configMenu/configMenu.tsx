import HomeSVG from '@/assets/icons/Home.svg';
import ExplorerSVG from '@/assets/icons/Explore.svg';
import NotificationSVG from '@/assets/icons/Notifications.svg';
import MessagesSVG from '@/assets/icons/Messages.svg';
import BookmarksSVG from '@/assets/icons/Bookmarks.svg';
import ListsSVG from '@/assets/icons/Lists.svg';
import ProfileSVG from '@/assets/icons/Profile.svg';
import MoreSVG from '@/assets/icons/More.svg';
import ViewSVG from '@/assets/icons/View.svg';
import SettingsSVG from '@/assets/icons/Settings.svg';

export const menuList = [
  { title: 'Home', icon: <HomeSVG />, url: '/home' },
  { title: 'Explore', icon: <ExplorerSVG />, url: '#' },
  { title: 'Notifications', icon: <NotificationSVG />, url: '#' },
  { title: 'Messages', icon: <MessagesSVG />, url: '#' },
  { title: 'Bookmarks', icon: <BookmarksSVG />, url: '#' },
  { title: 'Lists', icon: <ListsSVG />, url: '/#' },
  { title: 'Profile', icon: <ProfileSVG />, url: '/profile' },
  { title: 'More', icon: <MoreSVG />, url: '#' },
];

export const menuLogoutList = [
  { title: 'View', icon: <ViewSVG />, url: '/view' },
  { title: 'Settings', icon: <SettingsSVG />, url: '#' },
];
