import React from 'react';

import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('contents')}>
                {/* Logo */}

                {/* Tìm kiếm */}

                {/* User */}
            </div>
        </header>
    );
}

export default Header;
