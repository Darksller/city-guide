import { Slider } from '@mui/material'
import styled from 'styled-components'

export const StyledPlacesInput = styled.input`
	background-color: white;
	margin-top: 10px;
	margin-left: 10px;
	height: 40px;
	width: 50dvw;
	max-width: 300px;
	padding-left: 15px;
	padding-right: 40px;
	border-style: none;
	border-radius: 20px;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
	font-size: 16px;
`
export const StyledPlacesSearchButton = styled.button`
	cursor: pointer;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 18px;
	right: 13px;
	font-size: 20px;
	background-color: white;
	border-style: none;
	color: grey;
	:hover {
		color: black;
	}
`

export const StyledRadiusSlider = styled(Slider)`
	width: 50dvw;
	margin-top: 10px;
	max-width: 290px;
	margin-left: 15px;
`
