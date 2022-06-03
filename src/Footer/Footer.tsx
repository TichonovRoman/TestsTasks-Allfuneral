import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div>

            </div>
            <div className={style.footerInscription}>
                <span>(c) 1992 - 2020 Честный агент (c) Все права защищены.</span>
                <span>8 (495) 150-21-12</span>
            </div>
        </div>
    );
}

export default Footer;
