import styled from 'styled-components';

export const OverlayDiv = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 998;
  background: var(--primary-background-color);
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    max-width: 60px;
    max-height: 60px;

    rect {
      fill: #000;
    }

    path {
      stroke: var(--primary-text-color);
    }
  }

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;
