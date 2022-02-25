import {  useState } from 'react'

const SimpleInput = (props) => {
	const [username, setUsername] = useState('')
	const [enteredNameIsTouched, setIsEnteredNameTouched] = useState(false)

  const enteredNameIsValid=username.trim() !== '';
  const nameInputIsInvalid=!enteredNameIsValid && enteredNameIsTouched;
  let formIsValid=false

  if(enteredNameIsValid){
    formIsValid=true
  }

	const nameInputBlurHandler = (e) => {
		setIsEnteredNameTouched(true)
	}

	const onChangeNameHandler = (e) => {
		setUsername(e.target.value)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		setIsEnteredNameTouched(true)
    if(!enteredNameIsValid){
      return;
    }
		setUsername('')
    setIsEnteredNameTouched(false)
	}

	const nameInputClasses = !nameInputIsInvalid? 'form-control' : 'form-control invalid';

	return (
		<form onSubmit={onSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					value={username}
					onChange={onChangeNameHandler}
					onBlur={nameInputBlurHandler}
				/>
				{nameInputIsInvalid && <p>Name must not be empty</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid} type='submit'>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput;
