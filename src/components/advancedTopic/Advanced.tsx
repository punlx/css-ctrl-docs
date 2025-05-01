import { utilscss } from '../utils.ctrl';
import { Image } from '../../shared/Image';
import { advancedcss } from './advanced.ctrl';
import img2_1 from '../../assets/imgs/2-1.gif';
import img2_2 from '../../assets/imgs/2-2.gif';
import img2_3 from '../../assets/imgs/2-3.png';
import img2_4 from '../../assets/imgs/2-4.png';
import img2_5 from '../../assets/imgs/2-5.png';
import img2_6 from '../../assets/imgs/2-6.png';
import img2_7 from '../../assets/imgs/2-7.png';
import img2_8 from '../../assets/imgs/2-8.png';
import img2_9 from '../../assets/imgs/2-9.png';
import img2_10 from '../../assets/imgs/2-10.png';
import img2_11 from '../../assets/imgs/2-11.png';
import img2_12 from '../../assets/imgs/2-12.png';
import img2_13 from '../../assets/imgs/2-13.png';
import img2_14 from '../../assets/imgs/2-14.png';
import img2_15 from '../../assets/imgs/2-15.png';
import img2_16 from '../../assets/imgs/2-16.png';
import img2_17 from '../../assets/imgs/2-17.png';

export const Advanced = () => {
  return (
    <div className={`${utilscss.box} ${advancedcss.wrapper}`}>
      <p data-bold className="session" id="More_Styling">
        More Styling
      </p>
      <p>
        <span className="fl">You</span> can use <em>real locally scoped CSS variables</em> and apply{' '}
        <em>!important</em> as follows:
      </p>
      <Image draggable={false} src={img2_1} alt="2-1" />
      <p>
        <span className="fl">Notice</span> that <em>locally scoped CSS variables</em> are used
        similarly to <em data-lib>--&variables</em>, but they do not support dynamic styling.
      </p>

      <p>
        <span className="fl">For</span> <em>!important</em>, simply typing the <em>"!"</em> symbol
        will apply <em>!important</em> to that property. Additionally, the{' '}
        <em data-lib>css-ctrl compiler</em> will generate a <em>ghost text</em> labeled{' '}
        <em>"important"</em> to make it easier to spot.
      </p>
      <Image draggable={false} src={img2_4} alt="2-3" />
      <p>
        <span className="fl">Locally scoped CSS variables</span> can be used in nested styling, both{' '}
        when defining and when accessing from a parent class. For example:
      </p>
      <Image draggable={false} src={img2_7} alt="2-7" />
      <Image draggable={false} src={img2_8} alt="2-8" />

      <p data-bold className="session" id="Nested_Styling">
        Nested Styling
      </p>
      <p>
        <span className="fl">You</span> can create <em>nested styles</em> by typing the{' '}
        <em className="lib">"&gt;"</em> symbol. When you type <em className="lib">"&gt;"</em>, a{' '}
        <em>ghost text</em> showing <em>"query"</em> will appear, indicating that you are entering{' '}
        <em>nested styling mode</em>. This allows you to freely use <em>CSS query selectors</em>{' '}
        without any limitations, just like in SCSS.
      </p>
      <Image draggable={false} src={img2_2} alt="2-2" />
      <p>
        <span className="fl">When</span> you save the file, the{' '}
        <em className="lib">css-ctrl compiler</em> automatically formats the document to make nested{' '}
        styling cleaner and easier to read.
      </p>
      <Image draggable={false} src={img2_3} alt="2-3" />
      <p>
        <span className="fl">What's</span> happening here is that we are using{' '}
        <em className="lib">@scope.card</em>, which means we are accessing the scoped class name{' '}
        <em>.card</em> under <em className="lib">@scope utils</em>. At the same time, we can also{' '}
        directly access the unscoped class name <em>.primary</em> without going through any scope.
      </p>

      <p>
        <span className="fl">You</span> can also use the <em>"&amp;"</em> symbol inside queries —{' '}
        for example, <em>&amp;:hover {'{ ... }'}</em> — similar to how it's done in SCSS.
      </p>
      <Image draggable={false} src={img2_5} alt="2-5" />

      <Image draggable={false} src={img2_6} alt="2-6" />
      <p>
        <span className="fl">You</span> can perform <em>dynamic styling</em> inside nested styling{' '}
        by using <em data-lib>--&variables</em>. However, <em data-lib>$properties</em> cannot be{' '}
        used within nested styling.
      </p>
      <Image draggable={false} src={img2_9} alt="2-9" />
      <Image draggable={false} src={img2_10} alt="2-10" />
      <p data-bold className="session" id="Pseudo-classes">
        Pseudo-classes
      </p>
      <p>
        In addition to accessing <em>Pseudo-classes</em> through nested styling.
      </p>
      <Image draggable={false} src={img2_11} alt="2-11" />

      <p>
        You can also use <em>Pseudo-functions</em> in a similar way.
      </p>
      <Image draggable={false} src={img2_12} alt="2-12" />

      <p>Both approaches will generate the same CSS output.</p>
      <Image draggable={false} src={img2_13} alt="2-13" />
      <p data-bold className="session" id="Responsive_Design">
        Responsive Design
      </p>
      <p>
        When using <em>@media query screen</em> or <em>@container</em>, you can apply them just like{' '}
        <em>Pseudo-functions</em>
      </p>
      <Image draggable={false} src={img2_14} alt="2-14" />
      <Image draggable={false} src={img2_15} alt="2-15" />
      <p>
        <span className="fl">In</span> the first line of a <em>screen()</em> block, the style must
        be one of <em>max-w</em>, <em>min-w</em>, <em>max-h</em>, or <em>min-h</em> only, and it
        must be followed by a <em>comma (",")</em> — for example,{' '}
        <em className="lib" style={{ fontStyle: 'normal' }}>
          screen(max-w[700], ... ){' '}
        </em>
        .<em>css-ctrl</em> supports only simple <em>@media screen</em> and <em>@container</em>{' '}
        queries, as shown in the examples above.
      </p>
      <p>
        You can use <em>screen()</em> and <em>container()</em> inside nested styling.
      </p>
      <Image draggable={false} src={img2_16} alt="2-16" />
      <Image draggable={false} src={img2_17} alt="2-17" />
      <p data-bold>Summary</p>
      <p>
        <span className="fl">With</span> <em data-lib>css-ctrl</em>, you can achieve clean,
        powerful, and highly flexible styling — supporting locally scoped variables, nested styling,
        pseudo-classes, pseudo-functions, and responsive design with a seamless developer
        experience.
      </p>
    </div>
  );
};
