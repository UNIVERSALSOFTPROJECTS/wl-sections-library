import styled from "styled-components";

export const FeaturedGamesElement = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FeaturedGamesTitleIconElement = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.color.warning.default};
`;
