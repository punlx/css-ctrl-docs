import { useEffect, useRef, ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image = (props: LazyImageProps) => {
  const { src, alt = '', ...rest } = props;
  // const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         setIsVisible(true);
    //         observer.disconnect();
    //       }
    //     });
    //   },
    //   {
    //     rootMargin: '100px', // โหลดล่วงหน้านิดหน่อย ก่อนเข้า viewport
    //   }
    // );
    // if (imgRef.current) {
    //   observer.observe(imgRef.current);
    // }
    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  return <img ref={imgRef} src={src} alt={alt} {...rest} />;
};
