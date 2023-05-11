import React from 'react';
import classNames from 'classnames/bind';

import Header from '~/Components/Layouts/components/Header';
import Sidebar from './SideBar';
import styles from './DefaultLayouts.module.scss';

const cx = classNames.bind(styles);

// Cơ chế layout loading
/**
 * là layout cố định Header và Sidebar
 * còn phân flay out động thì ta chuyền từ ngoài vào
 * @param {*} Children
 * @returns
 */
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('contents')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
