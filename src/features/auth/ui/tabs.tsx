import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import { useState } from 'react'
import { SignInForm } from './sign-in-form'
import { SignUpForm } from './sign-up-form'

type AuthTabsProps = {
	handleClose: () => void
}

export const AuthTabs = ({ handleClose }: AuthTabsProps) => {
	const [value, setValue] = useState('signIn')

	const onTabChange = (_: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	return (
		<TabContext value={value}>
			<TabList onChange={onTabChange}>
				<Tab label='Sign In' value='signIn'></Tab>
				<Tab label='Sign Up' value='signUp'></Tab>
			</TabList>
			<TabPanel value='signIn'>
				<SignInForm handleClose={handleClose} />
			</TabPanel>
			<TabPanel value='signUp'>
				<SignUpForm handleClose={handleClose} />
			</TabPanel>
		</TabContext>
	)
}
