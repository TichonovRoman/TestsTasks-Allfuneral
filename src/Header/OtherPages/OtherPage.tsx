import React from 'react';
import style from "./OtherPage.module.scss"

type OtherPagePropsPage = {
    title: string,
}

const OtherPage = ({title}: OtherPagePropsPage) => {

    const finalClass = title === "Page Not Found" ? style.redPage : style.page;

    return (
        <div className={finalClass}>
            {title}
        </div>
    );
};

export default OtherPage;