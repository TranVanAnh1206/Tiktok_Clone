import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Menuheader from './Menuheader';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    // đặt hiển thị hiện tại là phần tử cuối cùng trong mảng
    const currentMenu = history[history.length - 1];

    useEffect(() => {
        console.log(currentMenu.data[0].children.data);
    }, []);

    const RenderMenu = () => {
        return currentMenu.data.map((item, index) => {
            // Kiểm tra xem trong item có phần tử children hay không
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // nếu như item có children ta thêm vào mảng history 1 phần tử là children
                            // bởi vì mảng history luôn lấy ra phần tử cuối cùng
                            // nên khi thêm vào và click thì nó sẽ render ra phần tử cuối cùng chính là children
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            // mặc định sẽ là false, tức là không cho select,
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items-wrap')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('custom-popper')}>
                        {history.length > 1 && (
                            <Menuheader
                                title="Language"
                                onBack={() => {
                                    // để quay lại thì chỉ cần cắt từ phần tử 0 đến phần tử cuối cùng
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {RenderMenu()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
