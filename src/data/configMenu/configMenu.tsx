import HomeSVG from '@icons/Home.svg';
import ExplorerSVG from '@/assets/icons/Explore.svg';
import NotificationSVG from '@/assets/icons/Notifications.svg';
import MessagesSVG from '@/assets/icons/Messages.svg';
import BookmarksSVG from '@/assets/icons/Bookmarks.svg';
import ListsSVG from '@/assets/icons/Lists.svg';
import ProfileSVG from '@/assets/icons/Profile.svg';
import MoreSVG from '@/assets/icons/More.svg';

const currentPageColor = '#1DA1F2';
const anotherPagesColor = '#0F1419';

const menuList = [
  { title: 'Home', icon: <HomeSVG style={{ fill: currentPageColor }} /> },
  { title: 'Explore', icon: <ExplorerSVG style={{ fill: anotherPagesColor }} /> },
  { title: 'Notifications', icon: <NotificationSVG style={{ fill: anotherPagesColor }} /> },
  { title: 'Messages', icon: <MessagesSVG style={{ fill: anotherPagesColor }} /> },
  { title: 'Bookmarks', icon: <BookmarksSVG style={{ fill: anotherPagesColor }} /> },
  { title: 'Lists', icon: <ListsSVG style={{ fill: anotherPagesColor }} /> },
  { title: 'Profile', icon: <ProfileSVG style={{ fill: anotherPagesColor }} /> },
  { title: 'More', icon: <MoreSVG style={{ fill: anotherPagesColor }} /> },
];

export default menuList