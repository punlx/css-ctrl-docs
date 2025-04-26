import { useState } from 'react';
import { stylingTopiccss } from './stylingTopic.ctrl';
import { popover } from 'css-ctrl/popover';
import { utilscss } from './utils.ctrl';

const openNewTabPopover = popover({
  controls: 'open-new-tab',
  type: 'tooltip',
  transform: {
    horizontal: 'center',
    vertical: 'top',
  },
  anchor: {
    horizontal: 'center',
    vertical: 'bottom',
  },
});

const copySuccesPopover = popover({
  controls: 'copySuccesPopover',
  type: 'modal',
  close: 'close-action',
  transform: {
    horizontal: 'center',
    vertical: 'top',
  },
  anchor: {
    horizontal: 'center',
    vertical: 'bottom',
  },
});

const npm = 'npm install css-ctrl';
const yarn = 'yarn add css-ctrl';

let timeoutId: any = null;
export const StylingTopic = () => {
  const [toggleImg8, setToggleImg8] = useState(false);
  const [toggleImg11, setToggleImg11] = useState(false);

  const copy = (str: string, e: any) => {
    stylingTopiccss.get('cursorInstall').set({
      cs: 'default',
    });
    copySuccesPopover.actions.show(e);
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      copySuccesPopover.actions.close(e);
      stylingTopiccss.get('cursorInstall').set({
        cs: 'pointer',
      });
    }, 400);
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard
        .writeText(str)
        .then(() => {})
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.warn('❗ Clipboard API ไม่รองรับบนเบราว์เซอร์นี้');
    }
  };

  return (
    <div className={stylingTopiccss.box}>
      {/* Installation */}

      {openNewTabPopover.panel(
        <div className={stylingTopiccss.copyPopover}>Go to VSCode Marketplace.</div>
      )}

      {copySuccesPopover.panel(
        <div className={stylingTopiccss.copyPopover}>Successfully copied.</div>
      )}

      <div data-install-wrapper data-hoverborder>
        <div data-install-lib>
          <p data-bold data-lib-text style={{ color: 'wheat' }}>
            Library Installation
          </p>
        </div>
        <div data-wrapper>
          <p
            className={stylingTopiccss.cursorInstall}
            {...copySuccesPopover.aria.trigger}
            data-thin
            data-install
            data-install-lib-txt
            tabIndex={0}
            onClick={(e) => copy(npm, e)}
          >
            {npm}
          </p>
          <p
            className={stylingTopiccss.cursorInstall}
            {...copySuccesPopover.aria.trigger}
            data-thin
            data-install
            data-install-lib-txt
            tabIndex={0}
            onClick={(e) => copy(yarn, e)}
          >
            {yarn}
          </p>
        </div>

        <div data-install-lib>
          <p data-bold data-lib-text style={{ color: '#c3b3f5' }}>
            VSCode Extension Installation
          </p>
        </div>
        <p
          className={stylingTopiccss.cursorInstall}
          {...openNewTabPopover.aria.trigger}
          data-thin
          data-install
          data-install-ext
          onMouseEnter={(e) => {
            openNewTabPopover.actions.show(e);
          }}
          onMouseLeave={(e) => {
            openNewTabPopover.actions.close(e);
          }}
          tabIndex={0}
          onClick={() => {
            window.open(
              `https://marketplace.visualstudio.com/items?itemName=punlx.css-ctrl-compiler`
            );
          }}
        >
          css-ctrl compiler
        </p>
        <p data-bold className="allset">
          🎉 You're all set!
        </p>
        <p data-thin>
          <em>No</em> additional <em>setup</em> or <em>config</em> needed — you're{' '}
          <em>ready to go!</em>
        </p>
      </div>

      {/* A quick introduction */}
      <p data-bold>Introduction</p>
      <div className="quickIntroWrapper">
        <p data-thin>
          <em data-lib className="first-letter">
            css-ctrl
          </em>{' '}
          isn’t built on traditional <em>CSS-in-JS</em> concepts — it’s a <em>new approach</em> to
          writing and compiling <em>real CSS</em>, designed to{' '}
          <em>accelerate your styling workflow</em> with greater{' '}
          <em>speed, efficiency, and control.</em> You’ll define styles inside{' '}
          <em data-lib>*.ctrl.ts</em> files using a <em>highly expressive syntax</em>. On save, the{' '}
          <em data-lib>css-ctrl compiler</em> <em>automatically generates</em> a corresponding{' '}
          <em data-lib>*.ctrl.css</em> file. This <em>compiled CSS</em> is <em>auto-imported</em>{' '}
          back into the same <em data-lib>.ctrl.ts</em> file, meaning you only need a{' '}
          <em>single import</em> wherever you apply styles in <em>your UI.</em>
        </p>
        <br />
        <p>
          <em className="first-letter">
            If you enjoy fast styling, minimal tools, full styling control, and great DX — this
            library, <em data-lib>css-ctrl</em>, is made for you.
          </em>
        </p>
      </div>
      <img draggable={false} width={700} src="/public/imgs/2.gif" alt="" />

      {/* Get started */}
      <p data-bold>Get Started</p>
      <p data-thin>
        <em className="first-letter">First,</em> you need to <em>create</em> a{' '}
        <em data-lib>.ctrl.ts</em> file. For example, let's name it <em data-lib>utils.ctrl.ts</em>.
        After that, you can create a <em data-lib>css-ctrl template</em> using the <em>snippet</em>{' '}
        by simply typing <em data-lib>"ztrl"</em>. Once you <em>save,</em>{' '}
        <em data-lib>css-ctrl compiler</em>
        will <em>generate</em> the <em data-lib>CSS</em> in a <em>new file called</em>{' '}
        <em data-lib>utils.ctrl.css</em>, and it will <em>automatically import </em>
        <em data-lib>utils.css.ts</em>, making <em data-lib>utils.ctrl.ts</em> ready for use in{' '}
        <em>your UI.</em>
      </p>
      <img draggable={false} width={700} src="/public/imgs/1.gif" alt="" />
      <p>
        <em data-lib className="first-letter">
          css-ctrl
        </em>{' '}
        introduces a <em>unique</em>, intuitive <em>syntax</em> where you can create <em>styles</em>{' '}
        simply by typing <em>short abbreviations.</em> you don't need to <em>memorize</em> a
        completely <em>new syntax.</em> The <em data-lib>css-ctrl compiler</em> will{' '}
        <em>suggests style completions</em> just like <em>regular CSS,</em> making the styling
        process <em>smooth and natural</em> — with virtually <em>no learning curve</em> for styling.
      </p>

      <div className="img-detail">
        <div>Compiled CSS</div>
        <img draggable={false} data-img-3 src="/public/imgs/3.png" alt="" data-desc="test" />
      </div>
      <p>
        <em data-lib>utils.ctrl.css</em> contains a <em>scope class name</em> generated from{' '}
        <em data-lib>@scope utils</em>.
      </p>

      <p>
        <em className="first-letter">After</em> creating the <em data-lib>utils.ctrl.ts</em> file,
        you simply need to <em>import</em> it into <em>your UI</em> and use the <em>class names</em>{' '}
        you have <em>defined</em> — with the help of the <em data-lib>css-ctrl compiler</em>, which{' '}
        <em>generates types</em> and enables <em>class name suggestions.</em>
      </p>
      <img draggable={false} src="/public/imgs/4.gif" alt="" />
      <div className="img-detail">
        <div>DOM</div>
        <img draggable={false} data-img-5 src="/public/imgs/5.png" alt="" />
      </div>
      <p data-bold>Dynamic Styling</p>
      <p>
        <span className="first-letter">You</span> might have <em>noticed</em> that{' '}
        <em data-lib>.get</em> was also <em>suggested along</em> with the <em>class names</em> you
        created. This <em>allows</em> you to <em>access</em> the <em data-lib>$properties</em> and{' '}
        <em data-lib>--&variables</em> of the <em>.box</em> class.
      </p>

      <p>
        To apply <em>dynamic properties,</em> you simply add a <em data-lib>$</em> in front of{' '}
        <em data-lib>property</em> like below.
      </p>
      <div className="img-detail">
        <div>$property</div>
        <img draggable={false} src="/public/imgs/6.gif" data-img-6 alt="" />
      </div>
      <p>
        <span className="first-letter">When</span> you <em>save</em> the file, the{' '}
        <em data-lib>css-ctrl compiler</em> will <em>automatically generate types,</em> allowing{' '}
        <em data-lib>.get</em> to know which <em>$properties</em> can be set.
      </p>
      <img draggable={false} src="/public/imgs/7.gif" data-img-7 alt="" />
      <div className="img-detail">
        <div
          tabIndex={0}
          data-click
          onClick={() => {
            setToggleImg8(!toggleImg8);
            if (!toggleImg8) {
              utilscss.get('box').set({
                bg: 'red',
              });
            } else {
              utilscss.get('box').set({
                bg: '#2e2e2e',
              });
            }
          }}
        >
          {!toggleImg8 ? 'Try onClick' : 'Undo'}
        </div>
        <div data-dom className={utilscss.box}>
          UI
        </div>
        {!toggleImg8 ? (
          <img draggable={false} src="/public/imgs/8.png" data-img-7 alt="" />
        ) : (
          <img draggable={false} src="/public/imgs/8.1.png" data-img-7 alt="" />
        )}
      </div>
      <p>
        <span className="first-letter">To</span> apply <em>dynamic variables</em>, simply add{' '}
        <em data-lib>--&</em> in front of <em data-lib>scoped variables</em>. When you <em>save</em>
        , the <em data-lib>css-ctrl compiler</em> will <em>generate types</em> as shown below.
      </p>

      <img draggable={false} src="/public/imgs/9.png" data-img-7 alt="" />
      <p>
        <span className="first-letter">⚠️</span>
        <em>Avoid</em> using a <em data-lib>--&variable</em> name that <em>matches</em> a{' '}
        <em data-lib>$property</em>, as <em data-lib>$properties</em> have <em>fixed names</em>.
        Also, <em>avoid</em> using both <em data-lib>$properties</em> and{' '}
        <em data-lib>--&variables</em> within the <em>same style property</em> — doing so will{' '}
        <em>cause errors during compilation.</em>
      </p>

      <div className="img-detail">
        <div>Usage</div>
        <img draggable={false} src="/public/imgs/10.png" data-img-7 alt="" />
      </div>
      <div className="img-detail">
        <div
          tabIndex={0}
          data-click
          onClick={() => {
            setToggleImg11(!toggleImg11);
            if (!toggleImg11) {
              utilscss.get('box2').set({
                color: 'blue',
              });
            } else {
              utilscss.get('box2').set({
                color: '#2e2e2e',
              });
            }
          }}
        >
          {!toggleImg11 ? 'Try onClick' : 'Undo'}
        </div>
        <div data-dom className={utilscss.box2}>
          UI
        </div>
        {!toggleImg11 ? (
          <img draggable={false} src="/public/imgs/11.png" data-img-7 alt="" />
        ) : (
          <img draggable={false} src="/public/imgs/11.1.png" data-img-7 alt="" />
        )}
      </div>
      <p data-bold>⚡ High Performance</p>
      <p>
        <em data-lib className="first-letter">
          css-ctrl
        </em>{' '}
        minimizes <em>DOM workload</em> by <em>avoiding</em> runtime <em>CSS rule injection</em>,
        unlike traditional <em>CSS-in-JS</em> techniques, which can trigger <em>repaint</em>,{' '}
        <em>reflow</em>, or <em>dynamic CSS updates</em> during styling changes.{' '}
        <em>Instead of recreating</em> styles at runtime, <em data-lib>css-ctrl</em> leverages{' '}
        <em>CSS variables</em> for dynamic updates — ensuring that even when <em>thousands</em> of{' '}
        <em data-lib>$properties</em> or <em data-lib>--&variables</em> are updated, performance
        remains <em>fast and stable</em>. <em data-lib>css-ctrl</em> <em>optimizes</em> updates by{' '}
        <em>batching</em> and <em>applying</em> thousands of <em>CSS variable changes</em> within a{' '}
        <em>single frame,</em> without any noticeable impact on <em>performance</em>.
      </p>
      <p data-bold>ℹ️ Zero-Runtime CSS-in-JS</p>

      <p>
        <span className="first-letter">Traditional</span> <em>zero-runtime CSS-in-JS</em> libraries
        generate <em>static CSS</em> at <em>build time,</em> offering <em>fast load times</em> but{' '}
        <em>limited dynamic styling</em>. In contrast, <em data-lib>css-ctrl</em> enables{' '}
        <em>true runtime flexibility</em> by using <em>CSS Variables</em> — allowing thousands of{' '}
        <em>dynamic updates</em> without injecting new styles or impacting <em>performance</em>.
      </p>
    </div>
  );
};
