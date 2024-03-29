import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-around;

> p {
  font-size: 1.2rem;
  width: 12rem;
  font-family: "Poppins";
  
  @media(min-width: 425px){
    width: auto;
  }
}

  > div {
    filter: contrast(0);
    p {
      font-size: 1.6rem;
    }

    img {
      width: 2.2rem;
    }
  }

  @media (min-width: 800px) {
    justify-content: space-between;
    padding: 0 10%;
  }
`;
