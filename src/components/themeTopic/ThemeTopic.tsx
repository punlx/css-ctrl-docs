import { Image } from '../../shared/Image';
import { utilscss } from '../utils.ctrl';
import { themecss } from './theme.ctrl';

import img4_1 from '../../assets/imgs/4-1.png';
import img4_2 from '../../assets/imgs/4-2.gif';
import img4_3 from '../../assets/imgs/4-3.png';
import img4_4 from '../../assets/imgs/4-4.gif';
import img4_5 from '../../assets/imgs/4-5.gif';
import img4_6 from '../../assets/imgs/4-6.png';
import img4_7 from '../../assets/imgs/4-7.png';
import img4_8 from '../../assets/imgs/4-8.png';
import img4_9 from '../../assets/imgs/4-9.png';
import img4_10 from '../../assets/imgs/4-10.png';
import img4_11 from '../../assets/imgs/4-11.png';
import img4_12 from '../../assets/imgs/4-12.png';
import img4_13 from '../../assets/imgs/4-13.png';
import img4_14 from '../../assets/imgs/4-14.png';
import img4_15 from '../../assets/imgs/4-15.gif';
import img4_16 from '../../assets/imgs/4-16.png';

export const ThemeTopic = () => {
  return (
    <div className={`${utilscss.box} ${themecss.wrapper}`}>
      <p data-bold>Introduction</p>

      <p>
        <span className="fl">The</span> theme system in <em>css-ctrl</em> is designed to create a
        seamless and smooth experience when working with <em>.ctrl.ts</em> files. It simplifies the
        usage of design tokens by providing access to global design elements such as{' '}
        <em>palette</em>, <em>typography</em>, <em>variables</em>, and <em>breakpoints</em>.
        Additionally, it includes global utilities like <em>keyframes</em> and{' '}
        <em>classes definitions</em>. Together, these features make integrating a design system into{' '}
        <em>.ctrl.ts</em> files highly flexible.
      </p>
      <p data-bold>Get Started</p>
      <p>
        <span className="fl">First,</span> you need to create a file named <em>ctrl.theme.ts</em>.
        This file should be placed either in the root folder, inside the <em>src</em> directory, or
        at the top level of your project — typically near your <em>main.tsx</em> or <em>main.ts</em>{' '}
        file, where root-level setup usually resides. This placement ensures that the{' '}
        <em>css-ctrl compiler</em> can easily detect the file and function correctly.
      </p>
      <Image draggable={false} src={img4_11} alt="4-11" />

      <p data-bold>Palette</p>
      <p>
        <span className="fl">You</span> can create a palette using the{' '}
        <em className="lib">theme.palette()</em> method. The palette should be structured in a
        row-and-column format, where each row defines a color key (e.g., <em>'red-50'</em>), and
        each column represents a theme variant — such as <em>'light'</em>, <em>'dark'</em>, or{' '}
        <em>'dim'</em> — with their corresponding color values.{' '}
      </p>
      <Image draggable={false} src={img4_1} alt="4-1" />
      <p>
        <span className="fl">The</span> first row represents the different color modes. In the
        example, the formatting helps clearly visualize each mode, making the palette more organized
        and easier to read.{' '}
      </p>
      <Image draggable={false} src={img4_2} alt="4-2" />
      <p>
        <span className="fl">When</span> you save the file, the{' '}
        <em className="lib">css-ctrl compiler</em> will automatically generate a{' '}
        <em className="lib">ctrl.theme.css</em> file.{' '}
      </p>
      <Image draggable={false} src={img4_3} alt="4-3" />
      <p>
        <span className="fl">To</span> use the palette in the <em>.ctrl.ts</em> file you created,
        simply start typing <em>"--"</em>
        just like when writing locally scoped CSS variables. The{' '}
        <em className="lib">css-ctrl compiler</em> will automatically suggest the available color{' '}
        names from your palette. (If the suggestions do not appear, try restarting VSCode.)
      </p>
      <Image draggable={false} src={img4_4} alt="4-4" />
      <p>
        <span className="fl">If</span> you want to display colors based on the mode you select,
        simply add a comment like <em>// css-ctrl mode: mode-name</em>
      </p>
      <Image draggable={false} src={img4_5} alt="4-5" />
      <p>
        <span className="fl">Now,</span> when you start typing a color, a color swatch will
        automatically appear according to the mode you selected.
      </p>
      <Image draggable={false} src={img4_6} alt="4-6" />
      <Image draggable={false} src={img4_7} alt="4-7" />
      <p data-bold>Palette Setup</p>
      <p>
        <span className="fl">When</span> using CSR (such as ReactJS), you can simply import your{' '}
        <em className="lib">ctrl.theme.ts</em> directly. This automatically applies the color modes{' '}
        based on your palette setup without any additional steps.
      </p>
      <Image draggable={false} src={img4_9} alt="4-9" />
      <p>
        <span className="fl">When</span> using SSR (such as NextJS), a few additional steps are
        required to properly initialize the palette, as explained below.
      </p>
      <Image draggable={false} src={img4_8} alt="4-8" />
      <p>
        <span className="fl">In</span> Next.js, you simply call <em>palette.init()</em> after
        hydration, once the client is ready.
      </p>
      <Image draggable={false} src={img4_10} alt="4-10" />
      <p>
        <span className="fl">When</span> the app starts, the <em>html</em> tag (root) will
        automatically have a <em className="lib">class="default-mode"</em> applied. The default mode
        corresponds to the first column in the first row that you set up in <em>theme.palette()</em>
        . In the example, the default mode is <em>"light"</em>.
      </p>
      <Image draggable={false} src={img4_13} alt="4-10" />
      <p>
        <span className="fl">The</span> palette you created also comes with several methods for
        managing theme modes.
      </p>

      <p data-bold>LocalStorage Support</p>

      <p>
        <span className="fl">
          <em>theme.palette()</em>
        </span>{' '}
        automatically stores the selected theme in <em>localStorage</em>, ensuring it persists even
        after a page refresh.
      </p>
      <Image draggable={false} src={img4_12} alt="4-10" />

      <p data-bold>Typography</p>
      <p>
        You can create typography settings to use within <em>.ctrl.ts</em> files.
      </p>
      <Image draggable={false} src={img4_14} alt="4-14" />
      <p>
        Next, use the <em className='lib'>ty</em> property to access the typography you created.
      </p>
      <Image draggable={false} src={img4_15} alt="4-15" />
      <Image draggable={false} src={img4_16} alt="4-15" />
    </div>
  );
};
