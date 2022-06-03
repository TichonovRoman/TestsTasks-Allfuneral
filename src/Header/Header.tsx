import React from 'react';
import style from './Header.module.scss';
import OrganizationGroupIcon from '../icons/OrganizationGroupIcon.svg'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.secondaryMenu}>
               <div>
                   <div className={style.userStatus}>
                       <div className={style.whichAgent}>ЧЕСТНЫЙ АГЕНТ</div>
                       <div className={style.agentRole}>МЕНЕДЖЕР ПРОЦЕССА</div>
                   </div>
                   <div className={style.entity}>
                       <div className={style.entityContent}>
                           <img className={style.organizationGroupIcon} alt={"icon"} src={OrganizationGroupIcon} />
                           <div className={style.entityListName}>ОРГАНИЗАЦИИ</div>
                       </div>

                   </div>
               </div>

            </div>

            <div className={style.mainPage}></div>
        </div>
    );
}

export default Header;
