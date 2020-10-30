import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import axios from 'axios'
import {useForm} from "react-hook-form";

type FormDataType = {
    email: string
    name: string
    message: string
}

export const Contacts = () => {

    const {register, handleSubmit, errors, reset} = useForm<FormDataType>({
        // by setting validateCriteriaMode to 'all',
        // all validation errors for single field will display at once
        criteriaMode: "all"
    })

    const onSubmit = (data: FormDataType) => {
        axios.post('https://mail-smtp-nodejs-server.herokuapp.com/sendMessage', data)
            .then(() => {
                alert('sent')
                reset()
            })
            .catch(() => {
                alert('Some Error')
            })
    }

    return (
        <div className={style.contactWrapper} id='contacts'>
            <div className={styleContainer.container}>
                <div className={style.form}>
                    <div className={style.mainDescription}><h2>Контакты</h2></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder='Email'
                            name={'email'}
                            ref={register({
                                required: true,
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                            })}
                        />
                        {errors?.email?.types?.required && <p>введите email</p>}
                        {errors?.email?.types?.pattern && <p>введите корректный email</p>}
                        <input
                            type="text"
                            placeholder='Name'
                            name={'name'}
                            ref={register}
                        />
                        {errors?.email?.types?.required && <p>введите имя</p>}
                        <textarea
                            name={'message'}
                            placeholder={'message'}
                            ref={register({required: true})}
                        >
                        </textarea>
                        {errors?.email?.types?.required && <p>введите сообщение</p>}
                        <div className={style.buttonWrapper}>
                            <button>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}