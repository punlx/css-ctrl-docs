import { Image } from '../../shared/Image';
import { utilscss } from '../utils.ctrl';
import { utilitiescss } from './utilities.ctrl';

export const UtilitiesTopic = () => {
  return (
    <div className={`${utilscss.box} ${utilitiescss.wrapper}`}>
      <p data-bold>Class Binding</p>

      <p>
        <em className="fl">css-ctrl</em> introduces <em>@bind</em>, allowing you to group multiple{' '}
        classes into a single mapping. This makes it easier to manage and apply related classes in{' '}
        your UI.
      </p>

      <p>
        <span className="fl">Traditionally</span>, if you wanted a single element to have multiple{' '}
        classes, you would manually combine them, as shown below:
      </p>
      <Image draggable={false} src="/imgs/3-1.png" alt="3-1" />
      <Image draggable={false} src="/imgs/3-2.png" alt="3-2" />

      <p>
        <em className="fl">css-ctrl</em> simplifies this process with the <em>@bind</em> syntax,{' '}
        eliminating the need for manual combination and making your code much cleaner.
      </p>
      <Image draggable={false} src="/imgs/3-3.png" alt="3-3" />
      <Image draggable={false} src="/imgs/3-4.png" alt="3-4" />

      <p>
        <span className="fl">Both</span> approaches produce the same DOM output.
      </p>
      <Image draggable={false} src="/imgs/3-5.png" alt="3-5" />
      <p data-bold>Reusable Styling</p>

      <p>
        <em className="fl">css-ctrl</em> provides <em>@const</em> and <em>@use</em> to make your{' '}
        styles reusable and maintainable. Define common styles once using <em>@const</em>, and apply{' '}
        them across multiple classes with <em>@use</em>.
      </p>
      <Image draggable={false} src="/imgs/3-6.png" alt="3-6" />
      <Image draggable={false} src="/imgs/3-7.png" alt="3-7" />
      <p>
        <span className="fl">You</span> can also reuse dynamic styling by using{' '}
        <em className="lib">$properties</em> or <em className="lib">--&color</em>, as shown in the
        example below.
      </p>
      <p>
        To use <em data-lib>$properties</em>, simply add a <em>$</em> just like you do when using it
        in a class.
      </p>
      <Image draggable={false} src="/imgs/3-8.png" alt="3-8" />
      <Image draggable={false} src="/imgs/3-9.png" alt="3-9" />
      <p>
        <span className="fl">For</span> <em data-lib>--&variables</em>, simply reference them inside{' '}
        an <em>@const</em> without assigning values directly. You must set the values for{' '}
        <em data-lib>--&variables</em> within the class scope only, as shown in the following{' '}
        example.
      </p>
      <Image draggable={false} src="/imgs/3-10.png" alt="3-10" />
      <Image draggable={false} src="/imgs/3-11.png" alt="3-11" />
      <p>
        <span className="fl">As</span> always, simply save the file and the{' '}
        <em data-lib>css-ctrl compiler</em> will automatically generate types for your dynamic CSS{' '}
        variables.
      </p>
      <p>
        <span className="fl">However</span> , if you prefer simplicity and don't need dynamic{' '}
        styling, you can use <em>locally scoped CSS variables</em> instead.
      </p>
      <Image draggable={false} src="/imgs/3-12.png" alt="3-12" />
      <Image draggable={false} src="/imgs/3-13.png" alt="3-13" />
      <p data-bold>Summary</p>
      <p>
        <span className="fl">With</span> <em data-lib>css-ctrl</em>, you can easily manage multiple
        classes, reuse styles across your UI, and flexibly handle both dynamic and locally scoped
        variables — all while keeping your code clean, maintainable, and effortless to scale.
      </p>
    </div>
  );
};
