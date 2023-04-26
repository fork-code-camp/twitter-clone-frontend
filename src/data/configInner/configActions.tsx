import EmojiSVG from '@/assets/Emoji.svg';
import GifSVG from '@/assets/Gif.svg';
import MediaSVG from '@/assets/Media.svg';
import PollSVG from '@/assets/Poll.svg';
import ScheduleSVG from '@/assets/Schedule.svg';

const color = '#1DA1F2';

const dataInnerActions = [
  { id: 1, icon: <MediaSVG style={{ fill: color }} /> },
  { id: 2, icon: <GifSVG style={{ fill: color }} /> },
  { id: 3, icon: <PollSVG style={{ fill: color }} /> },
  { id: 4, icon: <EmojiSVG style={{ fill: color }} /> },
  { id: 5, icon: <ScheduleSVG style={{ fill: color }} /> },
];

export default dataInnerActions;
