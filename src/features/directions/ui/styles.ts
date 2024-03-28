import { Card } from '@mui/material'
import styled from 'styled-components'

export const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	justify-items: center;
	width: 40vw;
	max-width: 200px;
	font-size: 18px;
	padding: 10px;
	margin-left: 10px;
	margin-bottom: 5px;
	gap: 5px;
`

export const StyledHeadDiv = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 10px;
	font-weight: bolder;
`
