import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Nav = styled.div`
	background-image: linear-gradient(to bottom right, #e0e4e5, #dfb06e, #020024);
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
`

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

	&.cat {
		bottom: 0;
		width: 800px;
		left: 0px;
	}
`

export const FormSection = styled.div`
	padding: clamp(50px, 30vh, 100px) 0;
	border-radius: 30px;
	width: 100%;
	justify-content: center;
`
export const FormTitle = styled.h1`
	margin-bottom: 4rem;
	font-size: 3rem;
	line-height: 1.1;
	font-weight: 600;
`
export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
`
export const FormColumn = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	padding: 0 15px;
	flex: 1;
	max-width: 70%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`
export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`
export const FormWrapper = styled.form`
	max-width: 540px;
	padding-top: 0;
	width: 100%;
`
export const FormButton = styled.button`
	background-color: #dfb06e;
	width: 100%;
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
export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 2rem;
	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	font-size: 1rem;
	border-bottom: 1px solid #cecece;
`
