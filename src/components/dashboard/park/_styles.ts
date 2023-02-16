import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem;

  .error-message{
    height: 1rem;
    width: 100%;
    text-align: center;
  }

  .MuiPaper-root {
    width: 50vw;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 2rem;
    flex-wrap: wrap;
    align-items: center;

    .paper-wrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100% ;

      .input-wrapper {
        display: flex;
        flex: 1;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 2rem;
      }
    }
  }
`;
