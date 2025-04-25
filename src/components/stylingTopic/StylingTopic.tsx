import { stylingTopiccss } from './stylingTopic.ctrl';
import { popover } from 'css-ctrl/popover';

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
            Library
          </p>
          <p data-bold>Installation</p>
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
            VSCode Extension
          </p>
          <p data-bold>Installation</p>
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
        <p data-thin>No additional setup or config needed — you're ready to go!</p>
      </div>

      {/* A quick introduction */}
      <p data-bold>Introduction</p>
      <div className="quickIntroWrapper">
        <p data-thin>
          <em data-lib>css-ctrl</em> is not a typical <em>CSS-in-JS</em> library. Instead, it’s a{' '}
          <em>new way</em> to write <em>CSS in TypeScript</em> — designed to{' '}
          <em>boost your styling speed, efficiency, and control.</em> You’ll write your styles in
          <em data-lib>*.ctrl.ts</em> files using a <em>highly expressive syntax.</em> Then, the
          <em data-lib>css-ctrl compiler</em> will <em>automatically generate</em> a corresponding{' '}
          <em data-lib>*.ctrl.css</em> file <em>on save.</em> This <em>compiled CSS</em> is{' '}
          <em>auto-imported</em> back into the same <em data-lib>.ctrl.ts</em> file — so all you
          have to do is <em>import</em> the <em data-lib>.ctrl.ts</em> file wherever you need styles
          in <em>your UI.</em> <em data-lib>css-ctrl</em> delivers <em>dynamic styling</em> with a
          <em data-lib>zero-runtime</em> guarantee — and much more.
          <br></br>
          <br></br>
          <em>
            If you enjoy fast styling, minimal tools, full styling control and great DX —{' '}
            <em data-lib>css-ctrl</em> is made for you.
          </em>
        </p>
      </div>
      <img draggable={false} width={700} src="/public/imgs/2.gif" alt="" />

      {/* Get started */}
      <p data-bold>Get Started</p>
      <p data-thin>
        <em>First,</em> you need to <em>create</em> a <em data-lib>.ctrl.ts</em> file. For example,
        let's name it <em data-lib>utils.ctrl.ts</em>. After that, you can create a{' '}
        <em data-lib>css-ctrl template</em> using the <em>snippet</em> by simply typing{' '}
        <em>"ztrl"</em>. Once you <em>save,</em> the <em data-lib>css-ctrl compiler</em>
        will <em>generate</em> the <em data-lib>CSS</em> in a <em>new file called</em>
        <em data-lib>utils.ctrl.css</em>, and it will <em>automatically import</em>
        <em data-lib>utils.css.ts</em>, making <em data-lib>utils.ctrl.ts</em> ready for use in{' '}
        <em>your UI.</em>
      </p>
      <img draggable={false} width={700} src="/public/imgs/1.gif" alt="" />
      <p>
        <em data-lib>css-ctrl</em> introduces a <em>unique</em>, intuitive <em>syntax</em> where you
        can create <em>styles</em> simply by typing <em>short abbreviations.</em> you don't need to{' '}
        <em>memorize</em> a completely <em>new syntax.</em> The <em data-lib>css-ctrl compiler</em>{' '}
        will <em>suggests style completions</em> just like <em>regular CSS,</em> making the styling
        process <em>smooth and natural</em> — with virtually <em>no learning curve</em> for styling.
      </p>

      <img draggable={false} data-img-3 src="/public/imgs/3.png" alt="" />
      <p>
        <em data-lib>utils.ctrl.css</em> contains a <em>scope class name</em>, which you will{' '}
        <em>learn about later.</em>
      </p>

      <p>
        <p>
          <em>After</em> creating the <em data-lib>utils.ctrl.ts</em> file, you simply need to{' '}
          <em>import</em> it into <em>your UI</em> and use the <em>class names</em> you have{' '}
          <em>defined</em>.
        </p>
      </p>
      <img draggable={false} src="/public/imgs/4.gif" alt="" />
      <img draggable={false} data-img-5 src="/public/imgs/5.png" alt="" />
      <p data-bold>Dynamic Styling</p>
    </div>
  );
};
