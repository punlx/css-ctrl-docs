import { useState } from 'react';
import { stylingTopiccss } from './stylingTopic.ctrl';
import { utilscss } from './utils.ctrl';
import { Image } from '../../shared/Image'; // 👉 เพิ่มตรงนี้
import img1 from '../../assets/imgs/1-1.gif';
import img2 from '../../assets/imgs/1-2.gif';
import img3 from '../../assets/imgs/1-3.png';
import img4 from '../../assets/imgs/1-4.gif';
import img5 from '../../assets/imgs/1-5.png';
import img6 from '../../assets/imgs/1-6.gif';
import img7 from '../../assets/imgs/1-7.gif';
import img8 from '../../assets/imgs/1-8.png';
import img81 from '../../assets/imgs/1-8.1.png';
import img9 from '../../assets/imgs/1-9.png';
import img10 from '../../assets/imgs/1-10.png';
import img11 from '../../assets/imgs/1-11.png';
import img111 from '../../assets/imgs/1-11.1.png';
import img12 from '../../assets/imgs/1-12.gif';
import img13 from '../../assets/imgs/1-13.gif';

const npm = 'npm install css-ctrl';
const yarn = 'yarn add css-ctrl';

let timeoutId: any = null;
export const StylingTopic = () => {
  const [isCopy, setIsCopy] = useState('');
  const [toggleImg8, setToggleImg8] = useState(false);
  const [toggleImg11, setToggleImg11] = useState(false);

  const copy = (str: string) => {
    setIsCopy(str);
    stylingTopiccss.get('cursorInstall').set({
      cs: 'default',
    });
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      stylingTopiccss.get('cursorInstall').set({
        cs: 'pointer',
      });
      setIsCopy('');
    }, 1000);
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

      <div data-install-wrapper data-hoverborder>
        <div data-install-lib>
          <p
            id="Installation"
            data-bold
            className="session"
            data-lib-text
            style={{ color: 'wheat' }}
          >
            Installation
          </p>
        </div>
        <div data-wrapper>
          <p
            className={stylingTopiccss.cursorInstall}
            data-thin
            data-install
            data-install-lib-txt
            tabIndex={0}
            onClick={() => copy(npm)}
          >
            {isCopy === npm ? 'Successfully copied.' : npm}
          </p>
          <p
            className={stylingTopiccss.cursorInstall}
            data-thin
            data-install
            data-install-lib-txt
            tabIndex={0}
            onClick={() => copy(yarn)}
          >
            {isCopy === yarn ? 'Successfully copied.' : yarn}
          </p>
        </div>

        <div data-install-lib>
          <p data-bold data-lib-text style={{ color: '#c3b3f5' }}>
            <span>VSCode Extension</span>
          </p>
        </div>
        <p
          className={stylingTopiccss.cursorInstall}
          data-thin
          data-install
          data-install-ext
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
        <p data-thin style={{ textAlign: 'center' }}>
          <em>No</em> additional <em>setup</em> or <em>config</em> needed — you're{' '}
          <em>ready to go!</em>
        </p>
      </div>

      {/* A quick introduction */}
      <p data-bold className="session" id="Introduction">
        Introduction
      </p>
      <div className="quickIntroWrapper">
        <p data-thin>
          <em className="fl lib">css-ctrl</em> isn’t built on traditional <em>CSS-in-JS</em>{' '}
          concepts — it’s a <em>new approach</em> to writing and compiling <em>real CSS</em>,
          designed to <em>accelerate your styling workflow</em> with greater{' '}
          <em>speed, efficiency, and control.</em> You’ll define styles inside{' '}
          <em className="lib">*.ctrl.ts</em> files using a <em>highly expressive syntax</em>. On
          save, the <em className="lib">css-ctrl compiler</em> <em>automatically generates</em> a
          corresponding <em className="lib">*.ctrl.css</em> file. This <em>compiled CSS</em> is{' '}
          <em>auto-imported</em> back into the same <em className="lib">.ctrl.ts</em> file, meaning
          you only need a <em>single import</em> wherever you apply styles in <em>your UI.</em>
        </p>
        <br />
        <p>
          <em className="fl">
            If you enjoy fast styling, minimal tools, full styling control, and great DX — this
            library, <em className="lib">css-ctrl</em>, is made for you.
          </em>
        </p>
      </div>
      <Image draggable={false} width={700} src={img2} alt="1-2" />

      {/* Get started */}
      <p data-bold className="session" id="Get_Started">
        Get Started
      </p>
      <p data-thin>
        <em className="fl">First,</em> you need to <em>create</em> a{' '}
        <em className="lib">.ctrl.ts</em> file. For example, let's name it{' '}
        <em className="lib">utils.ctrl.ts</em>. After that, you can create a{' '}
        <em className="lib">css-ctrl template</em> using the <em>snippet</em> by simply typing{' '}
        <em className="lib">"ztrl"</em>. Once you <em>save,</em>{' '}
        <em className="lib">css-ctrl compiler</em>
        will <em>generate</em> the <em className="lib">CSS</em> in a <em>new file called</em>{' '}
        <em className="lib">utils.ctrl.css</em>, and it will <em>automatically import </em>
        <em className="lib">utils.css.ts</em>, making <em className="lib">utils.ctrl.ts</em> ready
        for use in <em>your UI.</em>
      </p>
      <Image draggable={false} width={700} src={img1} alt="1-2" />
      <p>
        <em className="fl lib">css-ctrl</em> introduces a <em>unique</em>, intuitive <em>syntax</em>{' '}
        where you can create <em>styles</em> simply by typing <em>short abbreviations.</em> you
        don't need to <em>memorize</em> a completely <em>new syntax.</em> The{' '}
        <em className="lib">css-ctrl compiler</em> will <em>suggests style completions</em> just
        like <em>regular CSS,</em> making the styling process <em>smooth and natural</em> — with
        virtually <em>no learning curve</em> for styling.
      </p>

      <div className="img-detail">
        <div>Compiled CSS</div>
        <Image draggable={false} data-img-3 src={img3} alt="" data-desc="test" />
      </div>
      <p>
        <em className="fl lib">utils.ctrl.css</em> contains a <em>scope class name</em> generated
        from <em className="lib">@scope utils</em>. You can either set{' '}
        <em className="lib">@scope none</em> or omit <em className="lib">@scope</em> entirely to
        create a <em>non-scoped</em> class. <em>However,</em> doing so will <em>disable</em> the{' '}
        <em>ability</em> to use <em>dynamic CSS variables</em>
      </p>

      <p>
        <em className="fl">After</em> creating the <em className="lib">utils.ctrl.ts</em> file, you
        simply need to <em>import</em> it into <em>your UI</em> and use the <em>class names</em> you
        have <em>defined</em> — with the <em>help</em> of the{' '}
        <em className="lib">css-ctrl compiler</em>, which <em>generates types</em> and enables{' '}
        <em>class name suggestions.</em>
      </p>
      <Image draggable={false} src={img4} data-img-4 alt="" />
      <div className="img-detail">
        <div>DOM</div>
        <Image draggable={false} data-img-5 src={img5} alt="" />
      </div>
      <p data-bold className="session" id="Dynamic_Styling">
        Dynamic Styling
      </p>
      <p>
        <span className="fl">You</span> might have <em>noticed</em> that{' '}
        <em className="lib">.get</em> was also <em>suggested</em> along with the{' '}
        <em>class names</em> you created. This <em>allows</em> you to <em>access</em>{' '}
        <em>dynamic CSS variables</em>, which come in two types:{' '}
        <em className="lib">$properties</em> and <em className="lib">--&variables</em> of the{' '}
        <em>.box</em> class.
      </p>

      <p>
        To apply <em>dynamic properties,</em> you simply add a <em className="lib">$</em> in front
        of <em className="lib">property</em> like below.
      </p>
      <div className="img-detail">
        <div>$properties</div>
        <Image draggable={false} src={img6} data-img-6 alt="" />
      </div>
      <p>
        <span className="fl">When</span> you <em>save</em> the file, the{' '}
        <em className="lib">css-ctrl compiler</em> will <em>automatically generate types,</em>{' '}
        allowing <em className="lib">.get</em> to <em>know</em> which{' '}
        <em className="lib">$properties</em> can be <em>set.</em>
      </p>
      <Image draggable={false} src={img7} data-img-7 alt="" />
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
          {!toggleImg8 ? 'Try onClick' : 'Reset'}
        </div>
        <div data-dom className={utilscss.box}>
          UI
        </div>
        {!toggleImg8 ? (
          <Image draggable={false} src={img8} data-img-7 alt="" />
        ) : (
          <Image draggable={false} src={img81} data-img-7 alt="" />
        )}
      </div>
      <p>
        <span className="fl">To</span> apply <em>dynamic variables</em>, simply add{' '}
        <em className="lib">--&</em> in front of <em>Locally Scoped CSS Variables.</em> When you{' '}
        <em>save</em>, the <em className="lib">css-ctrl compiler</em> will <em>generate types</em>{' '}
        as shown below.
      </p>

      <Image draggable={false} src={img9} data-img-7 alt="" />
      <p>
        <span className="fl">⚠️</span>
        <em>Avoid</em> using a <em className="lib">--&variable</em> name that <em>matches</em> a{' '}
        <em className="lib">$property</em>, as <em className="lib">$properties</em> have{' '}
        <em>fixed names</em>. Also, <em>avoid</em> using both <em className="lib">$properties</em>{' '}
        and <em className="lib">--&variables</em> within the <em>same style property</em> — doing so
        will <em>cause errors during compilation.</em>
      </p>

      <div className="img-detail">
        <div>Usage</div>
        <Image draggable={false} src={img10} data-img-7 alt="" />
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
          {!toggleImg11 ? 'Try onClick' : 'Reset'}
        </div>
        <div data-dom className={utilscss.box2}>
          UI
        </div>
        {!toggleImg11 ? (
          <Image draggable={false} src={img11} data-img-7 alt="" />
        ) : (
          <Image draggable={false} src={img111} data-img-7 alt="" />
        )}
      </div>
      <p data-bold className="session" id="Reset_Variables">
        Reset Variables
      </p>
      <p>
        <span className="fl">As</span> you <em>experienced</em> when trying{' '}
        <em className="lib">Try onClick</em>, pressing <em className="lib">Reset</em> immediately
        The <em>reset</em> function can be used at <em>three different levels:</em> removes the
        corresponding <em>CSS variable</em> from the <em>root</em>.
      </p>
      <Image draggable={false} src={img12} alt="" />

      <ul>
        <li>
          <p>
            <em>
              <span className="const">utilscss</span>.reset<span className="brackets">()</span>
            </em>{' '}
            — resets all <em>dynamic CSS variables</em> inside <em className="lib">utilscss</em>.
          </p>
        </li>
        <li>
          <p>
            <em>
              <span className="const">utilscss</span>.get<span className="brackets">(</span>
              <span className="inside-text">"box"</span>
              <span className="brackets">)</span>.reset
              <span className="brackets">()</span>
            </em>{' '}
            — resets all <em>dynamic CSS variables</em> scoped to the <em>.box</em> class.
          </p>
        </li>
        <li>
          <p>
            <em>
              <span className="const">utilscss</span>.get<span className="brackets">(</span>
              <span className="inside-text">"box"</span>
              <span className="brackets">)</span>.reset
              <span className="brackets">(</span>[<span className="inside-text">"bg"</span>]
              <span className="brackets">)</span>
            </em>{' '}
            — resets only specific <em>dynamic variables</em> like{' '}
            <em className="lib">$properties</em> or <em className="lib">--&variables</em> inside the{' '}
            <em>.box</em> class.
          </p>
        </li>
      </ul>
      <p data-bold className="session" id="Get_Values">
        Get Values
      </p>
      <p>
        <span className="fl">You</span> can <em>get dynamic CSS variables</em>, but it must be done{' '}
        <em>asynchronously</em>. This is because, under the hood, it waits for the <em>DOM</em> to
        complete the <em>setProperty</em> before you can reliably{' '}
        <em>retrieve the actual style values</em> that were set.
      </p>
      <Image draggable={false} src={img13} alt="" />
      <p data-bold className="session" id="⚡Performance">
        ⚡Performance
      </p>
      <p>
        <em className="fl lib">css-ctrl</em> minimizes <em>DOM workload</em> by <em>avoiding</em>{' '}
        runtime <em>CSS rule injection</em>, unlike traditional <em>CSS-in-JS</em> techniques, which
        can trigger <em>repaint</em>, <em>reflow</em>, or <em>dynamic CSS updates</em> during
        styling changes. <em>Instead of recreating</em> styles at runtime,{' '}
        <em className="lib">css-ctrl</em> leverages <em>CSS variables</em> for dynamic updates —
        ensuring that even when <em>thousands</em> of <em className="lib">$properties</em> or{' '}
        <em className="lib">--&variables</em> are updated, performance remains{' '}
        <em>fast and stable</em>. <em className="lib">css-ctrl</em> <em>optimizes</em> updates by{' '}
        <em>batching</em> and <em>applying</em> thousands of <em>CSS variable changes</em> within a{' '}
        <em>single frame,</em> without any noticeable impact on <em>performance</em>.
      </p>
      <p data-bold className="zero-runtime-css-in-js">
        <span>Zero-Runtime</span>
        <span>CSS-in-JS</span>
      </p>

      <p>
        <span className="fl">Traditional</span> <em>zero-runtime CSS-in-JS</em> libraries generate{' '}
        <em>static CSS</em> at <em>build time,</em> offering <em>fast load times</em> but providing{' '}
        <em>less runtime flexibility</em> for dynamic styling. They often require precompiling{' '}
        <em>static variables</em>, which can restrict certain dynamic use cases.
      </p>
      <p>
        <span className="fl">In</span> contrast, <em className="lib">css-ctrl</em> enables{' '}
        <em>true runtime flexibility</em> by using <em>CSS Variables</em> — allowing thousands of{' '}
        <em>dynamic updates</em> without <em>injecting</em> new styles or impacting{' '}
        <em>performance</em>.
      </p>
      <p data-bold>Summary</p>
      <p>
        <span className="fl">With</span> <em className="lib">css-ctrl</em>, you get the best of both
        worlds — true runtime flexibility and zero-runtime performance — unlocking a powerful,
        efficient, and intuitive styling experience.
      </p>
    </div>
  );
};
