import styled from 'styled-components'

export const StyledIconButton = styled.button`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	background-color: white;
	border-style: none;
	border-radius: 20px;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
	:hover {
		font-size: 30px;
		transition: all;
		transition-duration: 150ms;
	}
`
