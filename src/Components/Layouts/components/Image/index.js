import React, { useState } from 'react';
import { forwardRef } from 'react';
import NoImage from '~/assets/images/NoImage.png';
import styles from '~/Components/Layouts/components/Image/Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallback: externalFallback = NoImage, ...props }, ref) => {
    const [fallback, setFallback] = useState();

    const HandleError = () => {
        setFallback(externalFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={HandleError}
        />
    );
});

export default Image;
