import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Root = styled.div`
  display: flex;
  width: 100vw;
  font-size: 1rem;
  line-height: 1.2em;
  color: #020024;
  margin-bottom: 5px;
`;

export const Visit = styled.div`
  display: flex;
  border: solid 2px #020024;
  margin: 0.5em;
  padding: 1.2em;
  width: 500px;

  &:hover {
    border: 2px solid #020024;
    color: #fff;
    transition: all 0.3s ease;
    background: #020024;
  }
`;
