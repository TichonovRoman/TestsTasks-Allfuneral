import React from 'react';
import style from "./OtherPage.module.scss"

type OtherPagePropsPage = {
    title: string,
}

const OtherPage = ({title}: OtherPagePropsPage) => {
    return (
        <div className={style.page}>
            {title}
        </div>
    );
};

export default OtherPage;