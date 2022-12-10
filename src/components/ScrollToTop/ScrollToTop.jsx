import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useWindowScroll } from 'react-use';
import { TbArrowBigTop } from 'react-icons/tb';

import './ScrollToTop.css';
export const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (pageYOffset > 1000) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    if (!visible) {
        return false;
    }
    const clickBtn = () => {
        scroll.scrollToTop();
        setShow(false);
        setTimeout(() => {
            setShow(true);
        }, 1000);
    };
    return (
        <>
            {
                show && <button className={'scroll__to__top'} onClick={clickBtn}>
                    <TbArrowBigTop />
                </button>
            }
        </>
    );
};