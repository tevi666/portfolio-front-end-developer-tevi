import React from 'react';
import { Button } from '../Button/Button';
import Img from '../../images/avatar.jpeg';
import './Sayhello.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Sayhello = () => {
    const { t } = useTranslation();
    const animation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    };
    return (
        <>
            <motion.div className={'container__sayhello'}
                initial='hidden'
                whileInView='visible'
            >
                <div className={'text__sayhello'}>
                    <motion.h1
                        className={'h1__sayhello'}
                        custom={1} variants={animation}
                    >{t("hello")}</motion.h1>
                    <motion.p
                        custom={2} variants={animation}
                    >{t("title_sayhello")}</motion.p>
                    <motion.div
                        custom={3} variants={animation}
                        className={'btn__sayhello'}>
                        <Link to={'form'} smooth={true} duration={1000}>
                            <Button title={t("btn_sayhello")} />
                        </Link>
                    </motion.div>
                </div>
                <motion.div className={'avatar__sayhello'}
                    custom={4} variants={animation}
                >
                    <img
                        src={Img} alt={t("alt")} />
                </motion.div>
            </motion.div>
        </>
    );
};