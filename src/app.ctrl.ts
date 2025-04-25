import './app.ctrl.css';
import { css } from 'css-ctrl';

export const appcss = css<{ page: [] }>`
  @scope none

  .page {

    @query [data-bold] {
      ty[bold]
    }
  }
`;
