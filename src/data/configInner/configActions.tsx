import EmojiSVG from '@/assets/Emoji.svg';
import GifSVG from '@/assets/Gif.svg';
import MediaSVG from '@/assets/Media.svg';
import PollSVG from '@/assets/Poll.svg';
import ScheduleSVG from '@/assets/Schedule.svg';

interface IConfigActions {
  iconColor: string;
}

const ConfigActions = ({iconColor}: IConfigActions) => {
  return (
    [
      { id: 1, icon: <MediaSVG style={{ fill: iconColor }} /> },
      { id: 2, icon: <GifSVG style={{ fill: iconColor }} /> },
      { id: 3, icon: <PollSVG style={{ fill: iconColor }} /> },
      { id: 4, icon: <EmojiSVG style={{ fill: iconColor }} /> },
      { id: 5, icon: <ScheduleSVG style={{ fill: iconColor }} /> },
    ]
  )
}

export default ConfigActions;
