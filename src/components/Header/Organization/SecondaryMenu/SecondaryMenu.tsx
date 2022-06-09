import React, {memo} from 'react';

import style from "./SecondaryMenu.module.scss";

import OrganizationGroupIcon from "../../../../common/icons/OrganizationGroupIcon.svg";

const SecondaryMenu = memo(() => (
        <div className={style.secondaryMenu}>
            <div>
                <div className={style.userStatus}>
                    <div className={style.whichAgent}>ЧЕСТНЫЙ АГЕНТ</div>
                    <div className={style.agentRole}>МЕНЕДЖЕР ПРОЦЕССА</div>
                </div>
                <div className={style.entity}>
                    <div className={style.entityContent}>
                        <img className={style.organizationGroupIcon} alt={"icon"} src={OrganizationGroupIcon} />
                        <div className={style.entityListName}>Организации</div>
                    </div>

                </div>
            </div>

        </div>
    ));

export default SecondaryMenu;
