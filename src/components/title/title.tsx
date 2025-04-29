import { titlecss } from './title.ctrl';
import { Image } from '../../shared/Image';
import iconfull from '../../assets/imgs/iconfull.png'; // ✅ import จาก assets (Vite จะใส่ hash ตอน build)

export const Title = () => {
  return (
    <div className={titlecss.wrap}>
      <Image draggable={false} src={iconfull} alt="Icon Full" />
      <div className={titlecss.title}>
        <p data-blue>Zero-Runtime</p>
        <p data-white>CSS + TS</p>
        <p>built for</p>
        <p data-blue>Fast Styling,</p>
        <p data-white>Dynamic Styling</p>
        <p>with</p>
        <p data-blue>Type-Safe API,</p>
        <p>and</p>
        <p data-white>Design Systems</p>
        <p>—</p>
        <p data-blue>Very Lightweight</p>
        <p>made for</p>
        <p data-orange>developers</p>
        <p>who love</p>
        <p data-blue>Clean Code</p>
        <p>and</p>
        <p data-white>Great DX.</p>
      </div>
    </div>
  );
};
