## วิธี initial theme ใน SSR (ส่วนใน CSR ไม่ต้องทำ เพราะมันทำให้อัตโนมัติ)

```tsx
'use client';
import { useEffect } from 'react';
import { generateClassId } from './hash';
import { palette } from './ctrl.theme';

export default function Home() {
  useEffect(() => {
    palette.initialTheme();
  }, []);

  return (
    <>
      <div style={{ color: 'white' }} className={generateClassId('werwertdfgsdfg')}>
        55555
      </div>
    </>
  );
}
```

---

## วิธ๊ซ่อนไฟล์ .ctrl.css

```json
  "files.exclude": {
    "**/*.ctrl.css": true
  }
```

---
  > screen(max-w[700px]) {
        bg[red]
        
      }