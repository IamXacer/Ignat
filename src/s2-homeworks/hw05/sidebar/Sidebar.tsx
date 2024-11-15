import React, { FC } from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { PATH } from '../Pages';

type SidebarProps = {
    open: boolean;
    handleClose: () => void;
};

export const Sidebar: FC<SidebarProps> = ({ open, handleClose }) => {
    return (
        <div className={`${s.sidebar} ${open ? s.open : ''}`}>
            <button className={s.closeButton} onClick={handleClose}>×</button>
            <nav className={s.navLinks}>
                <NavLink
                    to={PATH.PRE_JUNIOR}
                    className={({ isActive }) => isActive ? `${s.link} ${s.activeLink}` : s.link}
                >
                    Pre-junior
                </NavLink>
                <NavLink
                    to={PATH.JUNIOR}
                    className={({ isActive }) => isActive ? `${s.link} ${s.activeLink}` : s.link}
                >
                    Junior
                </NavLink>
                <NavLink
                    to={PATH.JUNIOR_PLUS}
                    className={({ isActive }) => isActive ? `${s.link} ${s.activeLink}` : s.link}
                >
                    Junior PLUS
                </NavLink>
            </nav>
        </div>
    );
};
