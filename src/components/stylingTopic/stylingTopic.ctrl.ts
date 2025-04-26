import './stylingTopic.ctrl.css';
import { css } from 'css-ctrl';

export const stylingTopiccss = css<{ copyPopover: []; cursorInstall: ['cs']; box: [] }>`
  @scope stylingTopic

  @const badge {
    py[2px]
    px[6px]
    br[999px]
    c[white]
  }

  @const wrapper {
    d[flex]
    fx-d[column]
    ai[center]
    gp[16px]
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
    gp[42px]
    pb[120px]

    > [data-lib-text] {
      tx-w[nowrap]
    }

    > .first-letter {
      ml[32px]
    }

    > .img-detail {
      ps[relative]

      > [data-dom] {
        ps[absolute]
        r[16px]
        t[60px]
        px[8px]
        py[4px]
        br[99px]
        w[26px]
        h[26px]
        h
      }

      > :first-child {
        ps[absolute]
        r[16px]
        t[16px]
        bg[#5937ff]
        px[8px]
        py[4px]
        br[99px]
      }

      > :first-child[data-click] {
        cs[pointer]
        ps[absolute]
        z[2]
        hover(bg[#795eff])
        ts[0.25s ease]
        us[none]
        active(bg[#ab9bff])
      }
    }

    > .allset {
      c[#ffcf76]
    }

    > .groupImg {
      d[flex]
      fx-d[column]
      gp[12px]
      ai[center]
    }

    > img {
      w[700px]
      screen(max-w[700px], w[100%])
    }

    > [data-img-6] {
      w[650px]
    }

    > [data-img-7] {
      w[600px]
    }

    > img[data-img-3] {
      w[450px]
      screen(max-w[700px], w[100%])
    }

    > img[data-img-5] {
      w[500px]
      screen(max-w[700px], w[100%])
    }

    > p {
      lh[2]
      ls[0.02em]
      tx-a[justify]
    }

    > img {
      mbm[screen]
    }

    > em[data-lib] {
      @use badge
      bg[#373adb]
    }

    > em {
      c[wheat]
    }

    > [data-install-wrapper] {
      @use wrapper
      p[100px]!
      br[16px]
      gp[24px]
    }

    > [data-install-lib] {
      d[flex]
      gp[12px]
    }

    > [data-install] {
      p[12px]
      c[#c6c6c6]
      bs[border-box]
      bg[#202020]
      ts[0.25s ease]
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
      gp[6px]
    }
  }
`;