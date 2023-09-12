import EmojiSVG from '@/assets/icons/Emoji.svg';
import GifSVG from '@/assets/icons/Gif.svg';
import PollSVG from '@/assets/icons/Poll.svg';
import ScheduleSVG from '@/assets/icons/Schedule.svg';

interface IConfigActions {
  iconColor: string;
}

const ConfigActions = ({iconColor}: IConfigActions) => {
  return (
    [
      { id: 1, icon: <GifSVG style={{ fill: iconColor }} /> },
      { id: 2, icon: <PollSVG style={{ fill: iconColor }} /> },
      { id: 3, icon: <EmojiSVG style={{ fill: iconColor }} /> },
      { id: 4, icon: <ScheduleSVG style={{ fill: iconColor }} /> },
    ]
  )
}

export default ConfigActions;
