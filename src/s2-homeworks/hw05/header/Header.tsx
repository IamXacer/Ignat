import React, { FC, useState } from 'react';
import burgerIcon from './burger.svg';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PATH } from '../Pages';

type PropsType = {
    handleOpen: () => void;
    handleClose: () => void;
};

export const Header: FC<PropsType> = ({ handleOpen, handleClose }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const pageName = currentPath === PATH.PRE_JUNIOR
        ? 'Pre-junior'
        : currentPath === PATH.JUNIOR
            ? 'Junior'
            : currentPath === PATH.JUNIOR_PLUS
                ? 'Junior Plus'
                : 'Error';

    const [isLinksVisible, setIsLinksVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsLinksVisible(true);
    };

    const handleMouseLeave = () => {
        setIsLinksVisible(false);
    };

    return (
        <div id={'hw5-header'} className={s.header}>
            <img
                src={burgerIcon}
                id={'hw5-burger-menu'}
                className={s.burgerMenuIcon}
                onClick={handleOpen}
                onMouseEnter={handleMouseEnter} // Показать ссылки при наведении
                alt={'open menu'}
            />
            <nav
                className={`${s.links} ${isLinksVisible ? s.visible : ''}`}
                onMouseEnter={handleMouseEnter} // Показать ссылки при наведении
                onMouseLeave={handleMouseLeave} // Скрыть ссылки, когда курсор уходит
            >
                <NavLink to={PATH.PRE_JUNIOR} className={s.link}>Pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.link}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.link}>Junior Plus</NavLink>
            </nav>
            <h1>{pageName}</h1>
        </div>
    );
};
