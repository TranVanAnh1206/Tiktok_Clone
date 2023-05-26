import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menuheader({ title, onBack }) {
    return (
        <div>
            <header className={cx('menu-header')}>
                <button className={cx('back-btn')} onClick={onBack}>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </button>
                <h4 className={cx('title')}>{title}</h4>
            </header>
        </div>
    );
}

export default Menuheader;
