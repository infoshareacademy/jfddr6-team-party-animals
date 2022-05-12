import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-size: cover;
  width: 100vw;
  align-items: center;
  height: 100%;
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    height: 592px;
  }

  @media screen and (min-width: 992px) {
    height: 710px;
  }

  @media screen and (min-width: 1200px) {
    height: 1200px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
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
