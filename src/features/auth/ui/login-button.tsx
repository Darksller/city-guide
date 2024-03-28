import { useState } from 'react'
import { StyledDialogTitle, StyledAuthButton } from '../styles'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { MapControl } from '@vis.gl/react-google-maps'
import { AuthTabs } from './tabs'
import { useAuth } from '../../../shared/context/auth'
import { doSignOut } from '../lib'

export const LoginButton = () => {
	const { isLoggedIn } = useAuth()
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<MapControl position={google.maps.ControlPosition.TOP_RIGHT}>
			{!isLoggedIn ? (
				<StyledAuthButton onClick={handleClickOpen}>LOGIN</StyledAuthButton>
			) : (
				<StyledAuthButton onClick={doSignOut}>Sign Out</StyledAuthButton>
			)}
			<Dialog open={open} onClose={handleClose}>
				<StyledDialogTitle>{'Authorization'}</StyledDialogTitle>
				<DialogContent>
					<AuthTabs handleClose={handleClose} />
				</DialogContent>
			</Dialog>
		</MapControl>
	)
}
