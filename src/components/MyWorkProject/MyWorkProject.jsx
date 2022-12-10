import React from 'react';
import './MyWorkProject.css';
import { Button } from '../Button/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import dGlo from '../../images/3dglo.png';
import lkp from '../../images/lkp.png';
import marvel from '../../images/marvel.png';
import mcdon from '../../images/mcdonalds.png';
import pvx from '../../images/pvx.png';
export const MyWorkProject = () => {
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
        <div className={'container__projects__works'}>
            <motion.h1
                initial='hidden'
                whileInView='visible'
                custom={1} variants={animation}
                className={'h1__project'}
            >{t("projAndWorks")}</motion.h1>
            <motion.div
                initial='hidden'
                whileInView='visible'
                custom={2} variants={animation}
                id='projectsAndWorks'
                className={'cards'}>
                <div
                    className={'card'}><span className={'numb'}>1</span>
                    <img className={'img__projects'} src={dGlo} />
                    <a className={'hover'} href="https://tevi666.github.io/3DGlo/dist/" target="_blank">{t("3d_glo")}</a>
                </div>
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                custom={3} variants={animation}
                className={'cards'}>
                <div
                    className={'card'}><span className={'numb'}>2</span>
                    <img className={'img__projects'} src={lkp} />
                    <a className={'hover'} href="https://tevi666.github.io/lkp-auto/dist/" target="_blank">{t("lkp_auto")}</a>
                </div>
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                custom={4} variants={animation}
                className={'cards'}>
                <div
                    className={'card'}><span className={'numb'}>3</span>
                    <img className={'img__projects'} src={marvel} />
                    <a className={'hover'} href="https://tevi666.github.io/marvel/dist/" target="_blank">{t("marvel")}</a>
                </div>
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                custom={5} variants={animation}
                className={'cards'}>
                <div
                    className={'card'}><span className={'numb'}>4</span>
                    <img className={'img__projects'} src={mcdon} />
                    <a className={'hover'} href="http://mrdonaldstev.herokuapp.com/" target="_blank">{t("mrdon")}</a>
                </div>
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                custom={6} variants={animation}
                className={'cards'}>
                <div
                    className={'card'}><span className={'numb'}>5</span>
                    <img className={'img__projects'} src={pvx} />
                    <a className={'hover'} href="https://tevi666.github.io/graduation-project/dist/" target="_blank">{t("pvx")}</a>
                </div>
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                custom={7} variants={animation}
                className={'btn__more'}><Button title={t("more")} /></motion.div>
        </div>
    );
};