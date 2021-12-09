import styled from "styled-components";

import { BLUE, GRAY_300 } from "@src/common/constants/palette";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  background-color: ${({ theme }) => theme.colors.semanticScheme.mainBg};
  color: ${({ theme }) => theme.colors.scheme.$white};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 1.6rem;
  background-color: ${GRAY_300};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  width: 100%;
`;

const Main = styled.main`
  flex: 1;
  flex-direction: col;
  background-color: ${({ theme }) => theme.colors.semanticScheme.mainBg};
`;

const Article = styled.article`
  padding: 0.4rem 1.6rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 1.6rem;
  background-color: ${BLUE};
`;

export default {
  Wrapper,
  Header,
  Row,
  Main,
  Article,
  Footer,
};
