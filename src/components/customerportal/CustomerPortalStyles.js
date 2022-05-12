import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 0;
  margin-top: 100px;
  display: flex;
  padding: 15px;
  justify-content: flex-start;
  border: solid 2px #ab33;
  width: 100vw;
  height: 100%;
`;
export const ContentRow = styled.div`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const NavLink = styled(Link)`
  color: #020024;
  padding: 0.5rem 1rem;
  height: 100%;
  border: 2px solid #aaa;

  &:hover {
    border: 2px solid #020024;
    color: #fff;
    transition: all 0.3s ease;
    background: #020024;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    display: table;

    &:hover {
      color: #020024;
      transition: all 0.3s ease;
    }
  }
`;
