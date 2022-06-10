import {useCallback, useState} from "react";

export const useIsActiveDeleteModalHook = () => {
    const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
    const handleActiveModalClick = useCallback(
        () => {
            setIsActiveModal(true)
        }, []);
    return {isActiveModal, handleActiveModalClick, setIsActiveModal}
}
