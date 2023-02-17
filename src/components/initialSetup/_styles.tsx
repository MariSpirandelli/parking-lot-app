import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  flex-wrap: wrap;
  height: 10rem;
  align-items: center;
  justify-content: space-evenly;

  .input-group-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .input-wrapper {
      padding: 0.5rem;
    }
  }
`;

export const StyledError = styled.div`
  height: 1rem;
  width: 100%;
  text-align: center;
`;
