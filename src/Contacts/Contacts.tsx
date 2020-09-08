import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'


// type ContactsType={
//     title:string
//     description:string
// }

function Contacts() {
    return (
        <div className={style.contactWrapper}>
            <div className={styleContainer.container}>
                <div className={style.form}>
                    <div className={style.mainDescription}>Контакты</div>
                    <form action="">
                        <><input type="text" placeholder='input'/></>
                        <><input type="text" placeholder='input'/></>
                        <><textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut autem facere ipsa mollitia officiis quaerat quis sint, tempora tenetur? Inventore perferendis quam repudiandae sapiente sunt. Eum molestiae porro tempora.
                    </textarea></>
                    </form>
                    <button>отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;