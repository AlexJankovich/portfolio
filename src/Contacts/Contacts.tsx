import React, {FormEvent} from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import axios from 'axios'


// type ContactsType={
//     title:string
//     description:string
// }

function Contacts() {
    type FormType = {
        contacts: string
        yourName: string
        message:string
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            email: e.currentTarget.contacts.value,
            name: e.currentTarget.yourName.value,
            message: e.currentTarget.message.value
        }
        console.log(data)

        axios.post('https://mail-smtp-nodejs-server.herokuapp.com/sendMessage', data)
            .then(() => {
                alert('sent')
            })
            .catch(()=>{
                alert('Some Error')
            })
    }

    return (
        <div className={style.contactWrapper}>
            <div className={styleContainer.container}>
                <div className={style.form}>
                    <div className={style.mainDescription}>Контакты</div>
                    <form action=" " onSubmit={onSubmit}>
                        <input type="text" placeholder='your email' name={'contacts'}/>
                        <input type="text" placeholder='your name' name={'yourName'}/>
                        <textarea name={'message'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut autem facere ipsa mollitia officiis quaerat quis sint, tempora tenetur? Inventore perferendis quam repudiandae sapiente sunt. Eum molestiae porro tempora.
                    </textarea>
                        <div>
                            <button>отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;