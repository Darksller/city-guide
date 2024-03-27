import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormValues } from '../types'
import { doSignInWithEmailAndPassword } from '../lib'
import { useAuth } from '../../../context/auth'
import { useState } from 'react'

type SingInFormProps = {
	handleClose: () => void
}

export const SignInForm = ({ handleClose }: SingInFormProps) => {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const { isLoggedIn } = useAuth()
	const form = useForm<FormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	})
	const { register, handleSubmit, formState } = form
	const { errors } = formState

	const onSubmit = async (data: FormValues) => {
		if (!isLoggedIn) {
			setIsLoading(true)
			try {
				await doSignInWithEmailAndPassword(data.email, data.password)
				handleClose()
			} catch (error) {
				if (error instanceof Error) setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Stack spacing={2} minWidth={200}>
				<TextField
					label='Email'
					type='email'
					{...register('email', { required: 'Email is required' })}
					error={!!errors.email}
					helperText={errors.email?.message}
				/>
				<TextField
					label='Password'
					type='password'
					{...register('password', { required: 'Password is required' })}
					error={!!errors.password}
					helperText={errors.password?.message}
				/>
				{error}
				<Button
					type='submit'
					variant='contained'
					color='primary'
					disabled={isLoading}
				>
					{isLoading ? 'Loading...' : 'Login'}
				</Button>
			</Stack>
		</form>
	)
}
