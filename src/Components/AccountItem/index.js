import React from 'react';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import avatar from '../../assets/images/326442784_859848175326570_6684353484283132700_n.jpg';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src={avatar} alt="Tên account" />
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>Họ và tên</p>
                <span className={cx('username')}>HoVaTen_username</span>
            </div>
        </div>
    );
}

export default AccountItem;
