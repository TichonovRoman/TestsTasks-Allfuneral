import React from 'react';
import style from './Footer.module.scss';

const Footer = () => (
    <div className={style.footer}>
        <div className={style.emptyBlock}>
        </div>
        <div className={style.descriptionBlock}>
            <div className={style.footerInscription}>
                <span>(c) 1992 - 2020 Честный агент (c) Все права защищены.</span>
                <span>8 (495) 150-21-12</span>
            </div>
        </div>

    </div>
);


export default Footer;
