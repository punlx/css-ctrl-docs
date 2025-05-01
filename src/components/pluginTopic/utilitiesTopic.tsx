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
        <em className="fl">css-ctrl</em> introduces <em>@bind</em>, allowing you to group multiple{' '}
        classes into a single mapping. This makes it easier to manage and apply related classes in{' '}
        your UI.
      </p>

      <p>
        <span className="fl">Traditionally</span>, if you wanted a single element to have multiple{' '}
        classes, you would manually combine them, as shown below:
      </p>
      <Image draggable={false} src={img3_1} alt="3-1" />
      <Image draggable={false} src={img3_2} alt="3-2" />

      <p>
        <em className="fl">css-ctrl</em> simplifies this process with the <em>@bind</em> syntax,{' '}
        eliminating the need for manual combination and making your code much cleaner.
      </p>
      <Image draggable={false} src={img3_3} alt="3-3" />
      <Image draggable={false} src={img3_4} alt="3-4" />

      <p>
        <span className="fl">Both</span> approaches produce the same DOM output.
      </p>
      <Image draggable={false} src={img3_5} alt="3-5" />
      <p>
        If you use <em>@bind</em> with a class name that doesn't exist in the <em>.ctrl.ts</em>{' '}
        file, it will generate a class name without a scope, as shown in the example below.
      </p>
      <Image draggable={false} src={img3_14} alt="3-5" />
      <p>
        <span className="fl">A</span> ghost text <em className="lib">":any"</em> will appear to
        indicate that <em>.primary</em> does not exist inside this <em className="lib">.ctrl.ts</em>{' '}
        file.
      </p>
      <Image draggable={false} src={img3_15} alt="3-5" />

      <p>
        You can use <em>@bind</em> followed by multiple class names.
      </p>
      <Image draggable={false} src={img3_16} alt="3-5" />

      <p data-bold className="session" id="Reusable_Styling">
        Reusable Styling
      </p>

      <p>
        <em className="fl">css-ctrl</em> provides <em>@const</em> and <em>@use</em> to make your{' '}
        styles reusable and maintainable. Define common styles once using <em>@const</em>, and apply{' '}
        them across multiple classes with <em>@use</em>.
      </p>
      <Image draggable={false} src={img3_6} alt="3-6" />
      <Image draggable={false} src={img3_7} alt="3-7" />
      <p>
        <span className="fl">You</span> can also reuse dynamic styling by using{' '}
        <em className="lib">$properties</em> or <em className="lib">--&color</em>, as shown in the
        example below.
      </p>
      <p>
        To use <em data-lib>$properties</em>, simply add a <em>$</em> just like you do when using it
        in a class.
      </p>
      <Image draggable={false} src={img3_8} alt="3-8" />
      <Image draggable={false} src={img3_9} alt="3-9" />
      <p>
        <span className="fl">For</span> <em data-lib>--&variables</em>, simply reference them inside{' '}
        an <em>@const</em> without assigning values directly. You must set the values for{' '}
        <em data-lib>--&variables</em> within the class scope only, as shown in the following{' '}
        example.
      </p>
      <Image draggable={false} src={img3_10} alt="3-10" />
      <Image draggable={false} src={img3_11} alt="3-11" />
      <p>
        <span className="fl">As</span> always, simply save the file and the{' '}
        <em data-lib>css-ctrl compiler</em> will automatically generate types for your dynamic CSS{' '}
        variables.
      </p>
      <p>
        <span className="fl">However</span> , if you prefer simplicity and don't need dynamic{' '}
        styling, you can use <em>locally scoped CSS variables</em> instead.
      </p>
      <Image draggable={false} src={img3_12} alt="3-12" />
      <Image draggable={false} src={img3_13} alt="3-13" />
      <p>
        You can use <em>@use</em> followed by multiple <em>const</em>.
      </p>
      <Image draggable={false} src={img3_17} alt="3-1" />
      <p data-bold className="session" id="Animation">
        Animation
      </p>
      <p>
        <span className="fl">You</span> can use <em>keyframes</em> and <em>animations</em> just like
        in regular CSS, but the <em>syntax</em> is slightly different.
      </p>

      <Image draggable={false} src={img3_18} alt="3-18" />
      <Image draggable={false} src={img3_19} alt="3-19" />
      <p data-bold>Summary</p>
      <p>
        <span className="fl">With</span> <em data-lib>css-ctrl</em>, you can easily manage multiple
        classes, reuse styles across your UI, and flexibly handle both dynamic and locally scoped
        variables — all while keeping your code clean, maintainable, and effortless to scale.
      </p>
    </div>
  );
};
