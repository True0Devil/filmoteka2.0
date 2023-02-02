import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0;
  margin: 0 auto;

  list-style: none;
`;

export const ListItem = styled.li`
  flex-basis: 280px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const MovieImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;

  margin-bottom: 10px;
`;

export const MovieTitle = styled.h2`
  //
  font-size: 12px;
  text-transform: uppercase;

  margin: 0 0 5px 0;
`;

export const MovieDescription = styled.p`
  font-size: 12px;
  margin: 0;

  color: ${({ theme }) => theme.colors.orange};
`;

export const ReleaseDate = styled.span`
  &::before {
    content: "|";
    margin: 0 4px;
  }
`;
