import { Image } from '../../shared/Image';
import { utilscss } from '../utils.ctrl';
import { themecss } from './theme.ctrl';

export const ThemeTopic = () => {
  return (
    <div className={`${utilscss.box} ${themecss.wrapper}`}>
      <p data-bold>Palette</p>
      <p>
        You can create a palette using the <em className="lib">.palette</em> method. The palette
        should be structured in a row-and-column format, where each row defines a color key (e.g.,
        <em>'red-50'</em>), and each column represents a theme variant — such as <em>'light'</em>,
        <em>'dark'</em>, or <em>'dim'</em> — with their corresponding color values.
      </p>
      <Image draggable={false} src="/imgs/4-1.png" alt="4-1" />
      <p>
        The first row represents the different color modes. In the example, the formatting helps
        clearly visualize each mode, making the palette more organized and easier to read.
      </p>
      <Image draggable={false} src="/imgs/4-2.gif" alt="4-2" />
      <p>
        When you save the file, the <em data-lib>css-ctrl compiler</em> will automatically generate
        a <em className="lib">ctrl.theme.css</em> file.
      </p>
      <Image draggable={false} src="/imgs/4-3.png" alt="4-3" />
      <p>
        To use the palette you created, simply start typing <em>"--"</em> just like when writing
        locally scoped CSS variables. The <em data-lib>css-ctrl compiler</em> will automatically
        suggest the available color names from your palette. (If the suggestions do not appear, try
        restarting VSCode.)
      </p>
      <Image draggable={false} src="/imgs/4-4.gif" alt="4-4" />
      <p>
        If you want to display colors based on the mode you select, simply add a comment like
        <em>// css-ctrl mode: mode-name</em>
      </p>
      <Image draggable={false} src="/imgs/4-5.gif" alt="4-5" />
      <p>
        Now, when you search for a color, you’ll immediately see a color swatch appear according to
        the mode you selected.
      </p>
      <Image draggable={false} src="/imgs/4-6.png" alt="4-6" />
      <Image draggable={false} src="/imgs/4-7.png" alt="4-7" />
    </div>
  );
};
