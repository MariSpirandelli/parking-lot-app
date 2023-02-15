import { Container } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  flex: 1;
  overflow: auto;

  &.rr-intro-cover {
    .MuiContainer-root {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  &.MuiContainer-root {
    ${({ disableGutters }) =>
      !disableGutters &&
      `
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 900px) {
      padding-right: 20px;
  padding-left: 20px;

    }
  `}
    height: 100%;
  }

  &.body-with-img-bg {
    background: url('/assets/svg/bg.svg') repeat;
  }

  .MuiAlert-message a {
    color: var(--red);
    text-decoration: underline;
  }
`;
