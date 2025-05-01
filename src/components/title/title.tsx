import { titlecss } from './title.ctrl';
import { Image } from '../../shared/Image';
import iconfull from '../../assets/imgs/iconfull.png'; // ✅ import จาก assets (Vite จะใส่ hash ตอน build)

export const Title = () => {
  return (
    <div className={titlecss.wrap}>
      <Image draggable={false} src={iconfull} alt="Icon Full" />
      <div className={titlecss.title}>
        <p data-bold>Effortless CSS with flexibility and high performance.</p>
        <p>
          Zero-Runtime CSS + TS. Built for fast, dynamic styling with a type-safe API and seamless
          integration with design systems — a lightweight solution crafted for developers who value
          clean code and exceptional DX.
        </p>
      </div>
    </div>
  );
};
