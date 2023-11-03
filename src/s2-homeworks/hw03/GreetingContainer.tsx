import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if(name === ''){
        setError('name is require!')
    }
    else {
        addUserCallback(name)
        alert(`Hello ${name}`)
        setName('')
    }
}

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
    if (name === '') {
        setError('name is require!')
    }

}

export const pureOnEnter = (e:  React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key ==='Enter' ){
        addUser()

    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimedName = e.currentTarget.value.trim()
        if (trimedName) {
            setName(trimedName) // need to fix
            error && setError('')
        } else {
            name && setName('')
            pureOnBlur(name, setError)
        }

    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
   /*     if (e.key === 'Enter' && name) {
            addUser()

        }*/
        pureOnEnter(e, addUser)
        setName('')
    }

    const totalUsers = users.length // need to fix
    const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
