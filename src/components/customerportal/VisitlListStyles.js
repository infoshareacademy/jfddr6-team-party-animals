import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
  display: flex;
  width: 100vw;
  font-size: 1rem;
  line-height: 1.2em;
  color: #020024;
  margin-bottom: 5px;
  justify-content: center;
`;

export const Visit = styled.div`
  display: flex;
  background-color: #dfb06e;
	width: 500px;
	margin-top: 2rem;
	height: 4rem;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.75px;
	text-transform: uppercase;
	border-radius: 28px;
	line-height: 30px;
	box-shadow: 10px 16px 40px 0 rgb(223 176 110/ 46%);
	text-align: center;

	border: none;
	color: #fff;
	cursor: pointer;
	&:hover {
		background-color: #020024;
		transition: background-color 0.4s ease-in;
	}
`
// export const 
;
