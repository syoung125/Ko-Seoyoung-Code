import styled from "styled-components";

import { GRAY_400 } from "@src/common/constants/palette";

export const ACTIVITY_BAR_WIDTH = "3rem";

const Wrapper = styled.nav`
  background-color: ${GRAY_400};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${ACTIVITY_BAR_WIDTH};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  > :not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

export default {
  Wrapper,
  Ul,
};