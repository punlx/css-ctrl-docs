import { useEffect, useState } from 'react';
import { sidebarcss } from './sidebar.ctrl';
import { useCurrentMenu } from '../../App';

export const Sidebar = () => {
  const { currentMenu } = useCurrentMenu();

  const [sessionList, setSessionList] = useState<string[]>([]);
  useEffect(() => {
    const sessionElements = document.querySelectorAll('.session');
    const listTopicEle = [] as any[];
    sessionElements.forEach((ele) => {
      listTopicEle.push(ele.textContent?.trim());
    });
    if (listTopicEle.length) {
      setSessionList(listTopicEle);
    }
    // สร้างฟังก์ชัน throttle
    // limit คือระยะเวลา (ms) ที่ต้องรอ ก่อนจะเรียก callback ได้อีกครั้ง
    const throttle = (callback: (...args: any[]) => void, limit = 200) => {
      let waiting = false;
      return (...args: any[]) => {
        if (!waiting) {
          callback(...args);
          waiting = true;
          setTimeout(() => {
            waiting = false;
          }, limit);
        }
      };
    };

    const handleScroll = () => {
      const curScroll = document.documentElement.scrollTop;

      // 1) จัดการการแสดงผลของ sidebar
      if (curScroll >= 368) {
        sidebarcss.get('wrapper').set({ v: 'visible', op: '1' });
      } else {
        sidebarcss.get('wrapper').set({ v: 'hidden', op: '0' });
      }

      // 2) จัดการ highlight ของแต่ละ sidebar item
      sessionElements.forEach((ele, index) => {
        const currentEle = ele as HTMLElement;
        const nextEle = sessionElements[index + 1] as HTMLElement | undefined;
        const sidebarId = `sidebar-${currentEle.textContent?.trim()}`;
        const sidebarItem = document.getElementById(sidebarId);

        // ถ้าหา element ไม่เจอ ข้าม
        if (!sidebarItem) return;

        // ตำแหน่ง Y เริ่มของ element ปัจจุบัน
        const currentEleTop = currentEle.offsetTop - 101;
        // ถัดไป ถ้ามี, ไม่งั้นกำหนดเป็น Infinity
        const nextEleTop = nextEle ? nextEle.offsetTop - 101 : Infinity;

        if (curScroll >= currentEleTop && curScroll < nextEleTop) {
          sidebarItem.classList.add('highlight');
        } else {
          sidebarItem.classList.remove('highlight');
        }
      });
    };

    // ใช้งาน throttle ใน eventListener
    document.addEventListener('scroll', throttle(handleScroll, 50));
  }, [currentMenu]);
  return (
    <div className={sidebarcss.wrapper}>
      <div className="session-wrapper">
        {sessionList.map((res) => {
          const id = res.replace(' ', '_');
          return (
            <div
              key={res}
              id={`sidebar-${res}`}
              className="topic"
              onClick={() => {
                const ele = document.getElementById(id);
                if (ele) {
                  document.documentElement.scrollTo({
                    behavior: 'smooth',
                    top: ele.offsetTop - 90,
                  });
                }
              }}
            >
              {res}
            </div>
          );
        })}
      </div>
    </div>
  );
};
