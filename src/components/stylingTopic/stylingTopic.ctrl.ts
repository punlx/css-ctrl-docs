import './stylingTopic.ctrl.css';
import { css } from 'css-ctrl';

export const stylingTopiccss = css<{ copyPopover: []; cursorInstall: ['cs']; box: [] }>`
  @scope stylingTopic

  @const wrapper {
    d[flex]
    fdir[column]
    ai[center]
    gap[16px]
  }

  .copyPopover {
    popover-container(bg[#222222] br[12px] c[#a8a8a8])
    p[12px]
  }

  .cursorInstall {
    $cs[pointer]
  }

  .box {
    w[700px]
    screen(max-w[700px], w[auto])
    @use wrapper
    gap[42px]
    pb[120px]

    > .allset {
      c[#ffcf76]
    }

    > .groupImg {
      d[flex]
      fdir[column]
      gap[12px]
      ai[center]
    }

    > img {
      w[700px]
      screen(max-w[700px], w[100%])
    }

    > img[data-img-3] {
      w[400px]
      screen(max-w[700px], w[100%])
    }

    > img[data-img-5] {
      w[500px]
      screen(max-w[700px], w[100%])
    }

    > p {
      lh[2]
    }

    > img {
      mbm[lighten]
    }

    > em[data-lib] {
      bg[#373adb]
      py[2px]
      px[6px]
      br[999px]
    }

    > em {
      c[wheat]
    }

    > [data-install-wrapper] {
      @use wrapper
      p[100px]!
      br[16px]
      gap[24px]
    }

    > [data-install-lib] {
      d[flex]
      gap[12px]
    }

    > [data-install] {
      p[12px]
      c[#c6c6c6]
      bs[border-box]
      bg[#232323]
      tsn[0.25s ease]
      br[12px]
      us[none]
    }

    > [data-install-lib-txt] {
      hover(bg[#303030] c[wheat])
    }

    > [data-install-ext] {
      hover(bg[#303030] c[#c3b3f5])
    }

    > [data-wrapper] {
      d[flex]
      gap[6px]
    }
  }
`;