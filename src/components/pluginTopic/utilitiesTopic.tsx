import { Image } from '../../shared/Image';
import { utilscss } from '../utils.ctrl';
import { utilitiescss } from './utilities.ctrl';
import img3_1 from '../../assets/imgs/3-1.png';
import img3_2 from '../../assets/imgs/3-2.png';
import img3_3 from '../../assets/imgs/3-3.png';
import img3_4 from '../../assets/imgs/3-4.png';
import img3_5 from '../../assets/imgs/3-5.png';
import img3_6 from '../../assets/imgs/3-6.png';
import img3_7 from '../../assets/imgs/3-7.png';
import img3_8 from '../../assets/imgs/3-8.png';
import img3_9 from '../../assets/imgs/3-9.png';
import img3_10 from '../../assets/imgs/3-10.png';
import img3_11 from '../../assets/imgs/3-11.png';
import img3_12 from '../../assets/imgs/3-12.png';
import img3_13 from '../../assets/imgs/3-13.png';
import img3_14 from '../../assets/imgs/3-14.png';
import img3_15 from '../../assets/imgs/3-15.png';
import img3_16 from '../../assets/imgs/3-16.png';
import img3_17 from '../../assets/imgs/3-17.png';
import img3_18 from '../../assets/imgs/3-18.png';
import img3_19 from '../../assets/imgs/3-19.png';

export const UtilitiesTopic = () => {
  return (
    <div className={`${utilscss.box} ${utilitiescss.wrapper}`}>
      <p data-bold className="session" id="Class_Binding">
        Class Binding
      </p>

      <p>
        <em className="fl">css-ctrl</em> introduces <em className="lib">@bind</em>, allowing you to{' '}
        <em>group multiple classes</em> into a <em>single mapping</em>. This makes it easier to{' '}
        <em>manage</em> and <em>apply</em> related classes in <em>your UI</em>.
      </p>

      <p>
        <span className="fl">Traditionally</span>, if you wanted a <em>single element</em> to have{' '}
        <em>multiple classes</em>, you would <em>manually combine</em> them, as shown below:
      </p>
      <Image draggable={false} src={img3_1} alt="3-1" />
      <Image draggable={false} src={img3_2} alt="3-2" />

      <p>
        <em className="fl">css-ctrl</em> simplifies this process with the{' '}
        <em className="lib">@bind</em> syntax, <em>eliminating</em> the need for{' '}
        <em>manual combination</em> and making your <em>code</em> much <em>cleaner</em>.
      </p>
      <Image draggable={false} src={img3_3} alt="3-3" />
      <Image draggable={false} src={img3_4} alt="3-4" />

      <p>
        <span className="fl">Both</span> approaches produce the same <em>DOM output</em>.
      </p>
      <Image draggable={false} src={img3_5} alt="3-5" />
      <p>
        <span className="fl">If</span> you use <em className="lib">@bind</em> with a{' '}
        <em>class name</em> that doesn't exist in the <em className="lib">.ctrl.ts</em> file, it
        will generate a <em>class name without a scope</em>, as shown in the example below.
      </p>
      <Image draggable={false} src={img3_14} alt="3-5" />
      <p>
        <span className="fl">A</span> ghost text <em className="lib">":any"</em> will appear to
        indicate that <em>.primary</em> does not exist inside this <em className="lib">.ctrl.ts</em>{' '}
        file.
      </p>
      <Image draggable={false} src={img3_15} alt="3-5" />

      <p>
        <span className="fl">You</span> can use <em className="lib">@bind</em> followed by{' '}
        <em>multiple class names</em>.
      </p>
      <Image draggable={false} src={img3_16} alt="3-5" />

      <p data-bold className="session" id="Reusable_Styling">
        Reusable Styling
      </p>

      <p>
        <em className="fl">css-ctrl</em> provides <em className="lib">@const</em> and{' '}
        <em className="lib">@use</em> to make your <em>styles</em> <em>reusable</em> and{' '}
        <em>maintainable</em>. Define <em>common styles</em> once using{' '}
        <em className="lib">@const</em>, and <em>apply</em> them across <em>multiple classes</em>{' '}
        with <em className="lib">@use</em>.
      </p>
      <Image draggable={false} src={img3_6} alt="3-6" />
      <Image draggable={false} src={img3_7} alt="3-7" />
      <p>
        <span className="fl">You</span> can also reuse <em>dynamic styling</em> by using{' '}
        <em className="lib">$properties</em> or <em className="lib">--&color</em>, as shown in the
        example below.
      </p>
      <p>
        <span className="fl">To</span> use <em className="lib">$properties</em>, simply add a{' '}
        <em className="lib">$</em> just like you do when using it in a <em>class</em>.
      </p>
      <Image draggable={false} src={img3_8} alt="3-8" />
      <Image draggable={false} src={img3_9} alt="3-9" />
      <p>
        <span className="fl">For</span> <em className="lib">--&variables</em>, simply reference them
        inside an <em className="lib">@const</em> without assigning values directly. You must{' '}
        <em>set the values</em> for <em className="lib">--&variables</em> within the{' '}
        <em>class scope</em> only, as shown in the following example.
      </p>
      <Image draggable={false} src={img3_10} alt="3-10" />
      <Image draggable={false} src={img3_11} alt="3-11" />
      <p>
        <span className="fl">As</span> always, simply save the file and the{' '}
        <em className="lib">css-ctrl compiler</em> will automatically <em>generate types</em> for
        your <em>dynamic CSS variables</em>.
      </p>
      <p>
        <span className="fl">However</span>, if you prefer <em>simplicity</em> and don't need{' '}
        <em>dynamic styling</em>, you can use <em>locally scoped CSS variables</em> instead.
      </p>
      <Image draggable={false} src={img3_12} alt="3-12" />
      <Image draggable={false} src={img3_13} alt="3-13" />
      <p>
        <span className="fl">You</span> can use <em className="lib">@use</em> followed by{' '}
        <em>multiple</em> <em className="lib">const</em>.
      </p>
      <Image draggable={false} src={img3_17} alt="3-1" />
      <p data-bold className="session" id="Animation">
        Animation
      </p>
      <p>
        <span className="fl">You</span> can use <em>keyframes</em> and <em>animations</em> just like
        in <em>regular CSS</em>, but the <em>syntax</em> is <em>slightly different</em>.
      </p>

      <Image draggable={false} src={img3_18} alt="3-18" />
      <Image draggable={false} src={img3_19} alt="3-19" />
      <p data-bold>Summary</p>
      <p>
        <span className="fl">With</span> <em className="lib">css-ctrl</em>, you can easily{' '}
        <em>manage multiple classes</em>, <em>reuse styles</em> across your <em>UI</em>, and
        flexibly handle both <em>dynamic</em> and <em>locally scoped variables</em> — all while
        keeping your <em>code</em> <em>clean</em>, <em>maintainable</em>, and{' '}
        <em>effortless to scale</em>.
      </p>
    </div>
  );
};
