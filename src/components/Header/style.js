import styled from "styled-components";

export const Container = styled.header`
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-area: header;
  
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    justify-content: center;
    gap: 3.2rem;
    padding: 0 5rem;
  }
`;

export const MenuHamburger = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: none;
  }
`;

export const Logout = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: block;
  }
`;

export const SearchBar = styled.div`
  display: none;
  position: relative;

  
  div input::placeholder {
    text-align: center;
  }
  
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: flex;
    flex: 1;
    max-width: 58rem;
  }
`;

export const OrderCount = styled.div`
  position: relative;

  span {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 0.1rem 0.6rem;
    border-radius: 100%;
    position: absolute;
    right: -0.4rem;
    top: -0.6rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: none;
  }
`;

export const Logo = styled.div`
  div p {
    font-size: 2.4rem;
  }

  div img {
    width: 3rem;
  }
`;

export const Requests = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: block;
    width: 20rem;
  }
`;

export const SearchResult = styled.div`
  z-index: 2;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  border: 2px  solid ${({theme}) => theme.COLORS.LIGHT_700};
  position: absolute;
  top: 6rem;
  max-height: 20rem;
  overflow-y: scroll;
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  display: ${({ $isOpen}) => $isOpen ? "flex" : "none"};
  flex-direction: column;
  gap: 1rem;

  p {
    cursor: pointer;
    font-family: "Poppins";
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
    &::after {
      content: "";
      display: block;
      height: 2px;
      margin-top: 5px;
      background-color: ${({theme}) => theme.COLORS.LIGHT_700};
    }
  }
`