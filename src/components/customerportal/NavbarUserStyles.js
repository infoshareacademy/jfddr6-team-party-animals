import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled.div`
  background-image: linear-gradient(to bottom, #e0e4e5, #dfb06e, #020024);
  background-size: cover;
  background-attachment: fixed;
  z-index: 11;
  align-items: center;
  height: 640px;
  position: relative;
  display: flex;

  @media screen and (min-width: 768px) {
    height: 592px;
  }

  @media screen and (min-width: 992px) {
    height: 710px;
  }

  @media screen and (min-width: 1200px) {
    height: 1200px;
  }
`;

export const NavbarContainer = styled.img`
  z-index: 10;
  position: absolute;
  left: 0;
  object-fit: cover;

  &.pattern {
    height: 100%;
    max-height: 100%;
    top: 0;
  }
`;
