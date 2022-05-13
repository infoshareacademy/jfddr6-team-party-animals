import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: left;
`

export const Column = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	padding: 0 15px;
	flex: 1;
	max-width: 70%;
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
	p {
		margin: 10px;
	}
`

export const span = styled.span`
	display: block;
	padding-bottom: 10px;
	outline: none;
	height: 40px;
	width: 100%;
	font-size: 1.5rem;
	color: #020024;
	border-bottom: 1px solid #cecece;
`
