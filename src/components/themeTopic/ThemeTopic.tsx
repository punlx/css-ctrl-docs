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
import img4_17 from '../../assets/imgs/4-17.png';
import img4_18 from '../../assets/imgs/4-18.png';
import img4_19 from '../../assets/imgs/4-19.gif';
import img4_20 from '../../assets/imgs/4-20.png';
import img4_21 from '../../assets/imgs/4-21.png';
import img4_22 from '../../assets/imgs/4-22.gif';
import img4_23 from '../../assets/imgs/4-23.png';
import img4_24 from '../../assets/imgs/4-24.png';
import img4_25 from '../../assets/imgs/4-25.png';
import img4_26 from '../../assets/imgs/4-26.gif';
import img4_27 from '../../assets/imgs/4-27.png';
import img4_28 from '../../assets/imgs/4-28.gif';
import img4_29 from '../../assets/imgs/4-29.png';
import img4_30 from '../../assets/imgs/4-30.png';
import img4_31 from '../../assets/imgs/4-31.png';
import img4_32 from '../../assets/imgs/4-32.png';
import img4_33 from '../../assets/imgs/4-33.png';
import img4_34 from '../../assets/imgs/4-34.png';

export const ThemeTopic = () => {
  return (
    <div className={`${utilscss.box} ${themecss.wrapper}`}>
      <p data-bold className="session" id="Introduction">
        Introduction
      </p>

      <p>
        <span className="fl">The</span> theme system in <em className="lib">css-ctrl</em> is
        designed to create a seamless and smooth experience when working with{' '}
        <em className="lib">.ctrl.ts</em> files. It simplifies the usage of design tokens by
        providing access to global design elements such as <em>palette</em>, <em>typography</em>,{' '}
        <em>variables</em>, and <em>breakpoints</em>. Additionally, it includes global utilities
        like <em>keyframes</em>, <em>classes</em>, and <em>custom properties</em>. Together, these
        features make integrating a design system into <em className="lib">.ctrl.ts</em> files
        highly flexible.
      </p>
      <p data-bold className="session" id="Get_Started">
        Get Started
      </p>
      <p>
        <span className="fl">First,</span> you need to create a file named{' '}
        <em className="lib">ctrl.theme.ts</em>. This file should be placed either in the{' '}
        <em>root folder</em>, inside the <em>src</em> directory, or at the top level of your project
        — typically near your <em className="lib">main.tsx</em> or <em className="lib">main.ts</em>{' '}
        file, where root-level setup usually resides. This placement ensures that the{' '}
        <em className="lib">css-ctrl compiler</em> can easily detect the file and function
        correctly.
      </p>
      <Image draggable={false} src={img4_11} alt="4-11" />

      <p data-bold className="session" id="Palette">
        Palette
      </p>
      <p>
        <span className="fl">You</span> can create a palette using the{' '}
        <em className="lib">theme.palette()</em> method. The palette should be structured in a
        row-and-column format, where each row defines a color key (e.g., <em>'red-50'</em>), and
        each column represents a theme variant — such as <em>'light'</em>, <em>'dark'</em>, or{' '}
        <em>'dim'</em> — with their corresponding color values.
      </p>
      <Image draggable={false} src={img4_1} alt="4-1" />
      <p>
        <span className="fl">The</span> first row represents the different <em>color modes</em>. In
        the example, the formatting helps clearly visualize each mode, making the palette more
        organized and easier to read.
      </p>
      <Image draggable={false} src={img4_2} alt="4-2" />
      <p>
        <span className="fl">When</span> you save the file, the{' '}
        <em className="lib">css-ctrl compiler</em> will automatically generate a{' '}
        <em className="lib">ctrl.theme.css</em> file and <em>import it back</em> into{' '}
        <em className="lib">ctrl.theme.ts</em>.
      </p>
      <Image draggable={false} src={img4_3} alt="4-3" />
      <p>
        <span className="fl">To</span> use the <em>palette</em> in the{' '}
        <em className="lib">.ctrl.ts</em> file you created, simply <em>start typing</em>{' '}
        <em>"--"</em>, just like when writing <em>locally scoped CSS variables</em>. The{' '}
        <em className="lib">css-ctrl compiler</em> will automatically <em>suggest</em> the{' '}
        <em>available color names</em> from your <em>palette</em>. (If the suggestions do not
        appear, try restarting <em>VSCode</em>.)
      </p>
      <Image draggable={false} src={img4_4} alt="4-4" />
      <p>
        <span className="fl">If</span> you want to display colors based on the mode you select,
        simply add a comment like <em>// css-ctrl mode: mode-name</em>.
      </p>
      <Image draggable={false} src={img4_5} alt="4-5" />
      <p>
        <span className="fl">Now,</span> when you start typing a color, a <em>color swatch</em> will
        automatically appear according to the mode you selected.
      </p>
      <Image draggable={false} src={img4_6} alt="4-6" />
      <Image draggable={false} src={img4_7} alt="4-7" />
      <p data-bold className="session" id="Palette_Setup">
        Palette Setup
      </p>
      <p>
        <span className="fl">When</span> using <em>CSR</em> (such as <em>ReactJS</em>), you can
        simply import your <em className="lib">ctrl.theme.ts</em> directly. This automatically
        applies the <em>color modes</em> based on your palette setup without any additional steps.
      </p>
      <Image draggable={false} src={img4_9} alt="4-9" />
      <p>
        <span className="fl">When</span> using <em>SSR</em> (such as <em>NextJS</em>), a few
        additional steps are required to properly initialize the <em>palette</em>, as explained
        below.
      </p>
      <Image draggable={false} src={img4_8} alt="4-8" />
      <Image draggable={false} src={img4_34} alt="4-34" />
      <p>
        <span className="fl">In</span> <em>Next.js</em>, you simply call <em>palette.init()</em>{' '}
        after hydration, once the client is ready, and set the default mode on the <em>html</em>{' '}
        tag.
      </p>
      <Image draggable={false} src={img4_10} alt="4-10" />
      <p>
        <span className="fl">When</span> the app starts, the <em>html</em> tag (root) will
        automatically have a <em className="lib">class="default-mode"</em> applied. The default mode
        corresponds to the first column in the first row that you set up in{' '}
        <em className="lib">theme.palette()</em>. In the example, the default mode is{' '}
        <em>"light"</em>.
      </p>
      <Image draggable={false} src={img4_13} alt="4-10" />
      <p>
        <span className="fl">The</span> palette you created also comes with several methods for
        managing theme modes.
      </p>

      <p data-bold className="session" id="LocalStorage">
        LocalStorage
      </p>

      <p>
        <span className="fl">
          <em>theme.palette()</em>
        </span>{' '}
        automatically stores the selected theme in <em>localStorage</em>, ensuring it persists even
        after a page refresh.
      </p>
      <Image draggable={false} src={img4_12} alt="4-10" />

      <p data-bold className="session" id="Typography">
        Typography
      </p>
      <p>
        You can create typography settings to use within <em>.ctrl.ts</em> files.
      </p>
      <Image draggable={false} src={img4_14} alt="4-14" />
      <p>
        <span className="fl">⚠️</span> You can apply <em>any styles</em> without limitation, but you
        should <em>consider</em> whether they are appropriate for{' '}
        <em className="lib">typography</em>.
      </p>
      <p>
        Next, use the <em className="lib">ty</em> property to access the typography you created.
      </p>
      <Image draggable={false} src={img4_15} alt="4-15" />
      <Image draggable={false} src={img4_16} alt="4-15" />
      <p data-bold className="session" id="Global_Variables">
        Global Variables
      </p>
      <p>
        You can create <em>global variables</em> for use in <em className="lib">.ctrl.ts</em> files.
      </p>
      <Image draggable={false} src={img4_17} alt="4-17" />
      <Image draggable={false} src={img4_18} alt="4-17" />
      <p>
        <span className="fl">You</span> can access these <em>global CSS variables</em> by using a{' '}
        <em>CSS property</em> that accepts a <em>value</em>.
      </p>
      <Image draggable={false} src={img4_19} alt="4-19" />
      <Image draggable={false} src={img4_20} alt="4-19" />
      <p data-bold className="session" id="Breakpoints">
        Breakpoints
      </p>
      <p>
        <span className="fl">You</span> can define <em>breakpoints</em> for use in{' '}
        <em className="lib">.ctrl.ts</em> files.
      </p>
      <Image draggable={false} src={img4_21} alt="4-19" />
      <Image draggable={false} src={img4_22} alt="4-19" />
      <Image draggable={false} src={img4_23} alt="4-19" />

      <p data-bold className="session" id="Global_Classes">
        Global Classes
      </p>
      <p>
        <span className="fl">You</span> can create <em>global classes</em> for use in{' '}
        <em className="lib">.ctrl.ts</em> files.
      </p>
      <Image draggable={false} src={img4_24} alt="4-19" />
      <Image draggable={false} src={img4_25} alt="4-19" />
      <p>
        <span className="fl">To</span> use them in a <em className="lib">.ctrl.ts</em> file, you
        need to use <em className="lib">@bind</em> to reference the <em>global class names</em>{' '}
        defined in <em className="lib">ctrl.theme.ts</em>.
      </p>
      <Image draggable={false} src={img4_26} alt="4-19" />

      <p data-bold className="session" id="Custom_Properties">
        Custom Properties
      </p>
      <p>
        <span className="fl">You</span> can create <em>Custom Properties</em> for use in{' '}
        <em className="lib">.ctrl.ts</em> files.
      </p>
      <Image draggable={false} src={img4_27} alt="4-19" />
      <Image draggable={false} src={img4_28} alt="4-19" />
      <Image draggable={false} src={img4_29} alt="4-19" />
      <p data-bold className="session" id="Global_Keyframes">
        Global Keyframes
      </p>
      <p>
        <span className="fl">You</span> can create <em>global keyframes</em> for use in{' '}
        <em className="lib">.ctrl.ts</em> files.
      </p>
      <Image draggable={false} src={img4_30} alt="4-30" />
      <Image draggable={false} src={img4_31} alt="4-30" />
      <p>
        <span className="fl">Use</span> it in <em className="lib">.ctrl.ts</em> like this:
      </p>
      <Image draggable={false} src={img4_32} alt="4-19" />
      <Image draggable={false} src={img4_33} alt="4-19" />
      <p data-bold>Summary</p>

      <p>
        <span className="fl">The</span> theme system in <em className="lib">css-ctrl</em> provides a
        powerful, centralized way to manage design tokens across your project. With support for{' '}
        <em>palette</em>, <em>typography</em>, <em>global variables</em>, <em>breakpoints</em>,{' '}
        <em>custom properties</em>, and <em>global classes</em>, it enables seamless integration of
        design systems into <em className="lib">.ctrl.ts</em> files.
      </p>
    </div>
  );
};
