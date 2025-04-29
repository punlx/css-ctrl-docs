import { Image } from '../../shared/Image';
import { utilscss } from '../utils.ctrl';
import { themecss } from './theme.ctrl';

export const ThemeTopic = () => {
  return (
    <div className={`${utilscss.box} ${themecss.wrapper}`}>
      <p data-bold>Introduction</p>

      <p>
        The theme system in <em>css-ctrl</em> is designed to create a seamless and smooth experience{' '}
        when working with <em>.ctrl.ts</em> files. It simplifies the usage of design tokens by{' '}
        providing access to global design elements such as <em>palette</em>, <em>typography</em>,{' '}
        <em>variables</em>, and <em>breakpoints</em>. Additionally, it includes global utilities
        like <em>keyframes</em> and <em>classes definitions</em>. Together, these features make
        integrating a design system into <em>.ctrl.ts</em> files highly flexible.
      </p>
      <p data-bold>Get Started</p>
      <p>
        First, you need to create a file named <em>ctrl.theme.ts</em>. This file should be placed
        either in the root folder, inside the <em>src</em> directory, or at the top level of your
        project — typically near your <em>main.tsx</em> or <em>main.ts</em> file, where root-level
        setup usually resides. This placement ensures that the <em>css-ctrl compiler</em> can easily
        detect the file and function correctly.
      </p>
      <Image draggable={false} src="/imgs/4-11.png" alt="4-11" />

      <p data-bold>Palette</p>
      <p>
        You can create a palette using the <em className="lib">theme.palette()</em> method. The{' '}
        palette should be structured in a row-and-column format, where each row defines a color key{' '}
        (e.g., <em>'red-50'</em>), and each column represents a theme variant — such as{' '}
        <em>'light'</em>, <em>'dark'</em>, or <em>'dim'</em> — with their corresponding color
        values.{' '}
      </p>
      <Image draggable={false} src="/imgs/4-1.png" alt="4-1" />
      <p>
        The first row represents the different color modes. In the example, the formatting helps{' '}
        clearly visualize each mode, making the palette more organized and easier to read.{' '}
      </p>
      <Image draggable={false} src="/imgs/4-2.gif" alt="4-2" />
      <p>
        When you save the file, the <em className="lib">css-ctrl compiler</em> will automatically
        generate a <em className="lib">ctrl.theme.css</em> file.{' '}
      </p>
      <Image draggable={false} src="/imgs/4-3.png" alt="4-3" />
      <p>
        To use the palette in the <em>.ctrl.ts</em> file you created, simply start typing{' '}
        <em>"--"</em>
        just like when writing locally scoped CSS variables. The{' '}
        <em className="lib">css-ctrl compiler</em> will automatically suggest the available color{' '}
        names from your palette. (If the suggestions do not appear, try restarting VSCode.)
      </p>
      <Image draggable={false} src="/imgs/4-4.gif" alt="4-4" />
      <p>
        If you want to display colors based on the mode you select, simply add a comment like{' '}
        <em>// css-ctrl mode: mode-name</em>
      </p>
      <Image draggable={false} src="/imgs/4-5.gif" alt="4-5" />
      <p>
        Now, when you start typing a color, a color swatch will automatically appear according to{' '}
        the mode you selected.
      </p>
      <Image draggable={false} src="/imgs/4-6.png" alt="4-6" />
      <Image draggable={false} src="/imgs/4-7.png" alt="4-7" />
      <p data-bold>Palette Setup</p>
      <p>
        When using CSR (such as ReactJS), you can simply import your{' '}
        <em className="lib">ctrl.theme.ts</em> directly. This automatically applies the color modes{' '}
        based on your palette setup without any additional steps.
      </p>
      <Image draggable={false} src="/imgs/4-9.png" alt="4-9" />
      <p>
        When using SSR (such as NextJS), a few additional steps are required to properly initialize{' '}
        the palette, as explained below.
      </p>
      <Image draggable={false} src="/imgs/4-8.png" alt="4-8" />
      <p>
        In Next.js, you simply call <em>palette.init()</em> after hydration, once the client is{' '}
        ready.
      </p>
      <Image draggable={false} src="/imgs/4-10.png" alt="4-10" />
      <p>
        When the app starts, the <em>html</em> tag (root) will automatically have a{' '}
        <em className="lib">class="default-mode"</em> applied. The default mode corresponds to the{' '}
        first column in the first row that you set up in <em>theme.palette()</em>. In the example,
        the default mode is <em>"light"</em>.
      </p>

      <p data-bold>Typography</p>
    </div>
  );
};
