import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (texts: string )=> void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		let InputValue = event.currentTarget.value
		props.setCurrentText(InputValue)
		// НУЖНО ДОПИСАТЬ
	};

	 return (
	   <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	 );
};
