import { StyledContainer } from './_styles';

interface Props {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noScroll?: boolean;
  style?: React.CSSProperties;
  id?: string;
  withImgBackground?: boolean;
}

const Body: React.FC<Props> = ({
  children,
  className,
  fullWidth,
  noScroll,
  style,
  id,
  withImgBackground,
}) => {
  const bodyClassNames = `${className} ${
    withImgBackground ? 'body-with-img-bg' : ''
  }`;

  if (fullWidth) {
    return (
      <StyledContainer
        id={id}
        className={bodyClassNames}
        disableGutters
        maxWidth={false}
        style={style}
      >
        {children}
      </StyledContainer>
    );
  }

  return (
    <StyledContainer
      id={id}
      className={bodyClassNames}
      disableGutters
      maxWidth={false}
      style={style}
    >
      <StyledContainer
        maxWidth="lg"
        style={noScroll ? { overflow: 'unset' } : { overflow: 'visible' }}
      >
        {children}
      </StyledContainer>
    </StyledContainer>
  );
};

export default Body;
