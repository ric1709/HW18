import { useState } from 'react'

const BasicForm = (props) => {
	const [userName, setUserName] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [userLastname, setUserLastname] = useState('')
	const [enteredNameIsTouched, setIsEnteredNameTouched] = useState(false)
	const [enteredLastnameIsTouched, setIsEnteredLastnameTouched] =useState(false)
	const [enteredEmailIsTouched, setIsEnteredEmailTouched] = useState(false)

	const enteredUserNameIsValid = userName.trim() !== ''
	const enteredUserLastnameIsValid = userLastname.trim() !== ''
	const enteredUserEmailIsValid = userEmail.trim() !== ''

	const userNameIsInvalid = !enteredUserNameIsValid && enteredNameIsTouched
	const userLastnameIsInvalid =!enteredUserLastnameIsValid && enteredLastnameIsTouched
	const userEmailIsInvalid = !enteredUserEmailIsValid && enteredEmailIsTouched

	let formIsValid = false

	if (enteredUserNameIsValid && enteredUserLastnameIsValid && enteredUserEmailIsValid) {
		formIsValid = true
	}

	const userEmailInputHandler = (e) => {
		setUserEmail(e.target.value)
	}
	const userNameInputHandler = (e) => {
		setUserName(e.target.value)
	}
	const userLastnameInputHandler = (e) => {
		setUserLastname(e.target.value)
	}

	const userNameOnBlur = () => {
		setIsEnteredNameTouched(true)
	}
	const userEmailOnBlur = () => {
		setIsEnteredEmailTouched(true)
	}
	const userLastnameOnBlur = () => {
		setIsEnteredLastnameTouched(true)
	}

	const onChangeInputHandler = (e) => {
		e.preventDefault()
		setIsEnteredNameTouched(true)
		setIsEnteredLastnameTouched(true)
		setIsEnteredEmailTouched(true)

		if (!enteredUserNameIsValid && !enteredUserLastnameIsValid && !enteredUserEmailIsValid) {
			return;
		}
		setUserEmail('')
		setUserName('')
		setUserLastname('')
		setIsEnteredNameTouched(false)
		setIsEnteredLastnameTouched(false)
		setIsEnteredEmailTouched(false)
	}

	const userNameClasses = !userNameIsInvalid
		? 'form-control'
		: 'form-control invalid'
	const userLastnameClasses = !userLastnameIsInvalid
		? 'form-control'
		: 'form-control invalid'
	const userEmailClasses = !userEmailIsInvalid
		? 'form-control'
		: 'form-control invalid'

	return (
		<form onSubmit={onChangeInputHandler}>
			<div className='control-group'>
				<div className={userNameClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						value={userName}
						onChange={userNameInputHandler}
						onBlur={userNameOnBlur}
					/>
					{userNameIsInvalid && <p>User Name is invalid</p>}
				</div>
				<div className={userLastnameClasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						value={userLastname}
						onChange={userLastnameInputHandler}
						onBlur={userLastnameOnBlur}
					/>
					{userLastnameIsInvalid && <p>User Lastname is invalid</p>}
				</div>
			</div>
			<div className={userEmailClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='email'
					id='name'
					value={userEmail}
					onChange={userEmailInputHandler}
					onBlur={userEmailOnBlur}
				/>
				{userEmailIsInvalid && <p>User Email is invalid</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid} type='submit'>
					Submit
				</button>
			</div>
		</form>
	)
}

export default BasicForm
