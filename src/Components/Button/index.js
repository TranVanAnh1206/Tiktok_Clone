import React, { forwardRef } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            to,
            href,
            small = false,
            large = false,
            text = false,
            primary = false,
            follow = false,
            rounded = false,
            disabled = false,
            upload = false,
            children,
            leftIcon,
            rightIcon,
            onClick,
            className,
            ...passProp
        },
        ref,
    ) => {
        let Tag = 'button';
        const classes = cx('wrapper', {
            primary,
            follow,
            rounded,
            upload,
            text,
            small,
            large,
            leftIcon,
            rightIcon,
            disabled,
            [className]: className,
        });

        const _props = {
            onClick,
            ...passProp,
        };

        // sử lý dự kiện khi có attri disabled
        if (disabled) {
            Object.keys(_props).forEach((propKey) => {
                if (propKey.startsWith('on') && typeof _props[propKey] === 'function') {
                    delete _props[propKey];
                }
            });
        }

        // Nếu như trong có attribute là to thì Thẻ đó là thẻ Link
        if (to) {
            _props.to = to;
            Tag = Link;
        } else if (href) {
            // Nếu như có attribute là href thì là thẻ a
            _props.href = href;
            Tag = 'a';
        }

        return (
            <Tag ref={ref} className={classes} {..._props}>
                {leftIcon && <span className={cx('left-icon', 'icon')}>{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span className={cx('right-icon', 'icon')}>{rightIcon}</span>}
            </Tag>
        );
    },
);

export default Button;
