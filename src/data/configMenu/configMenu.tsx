import HomeSVG from '@/assets/Home.svg';
import ExplorerSVG from '@/assets/Explore.svg';
import NotificationSVG from '@/assets/Notifications.svg';
import MessagesSVG from '@/assets/Messages.svg';
import BookmarksSVG from '@/assets/Bookmarks.svg';
import ListsSVG from '@/assets/Lists.svg';
import ProfileSVG from '@/assets/Profile.svg';
import MoreSVG from '@/assets/More.svg';

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