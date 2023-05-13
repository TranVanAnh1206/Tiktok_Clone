import React from 'react';
import Header from '~/Components/Layouts/components/Header';

// Cơ chế layout loading
/**
 * là layout cố định Header và Sidebar
 * còn phân flay out động thì ta chuyền từ ngoài vào
 * @param {*} Children
 * @returns
 */
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="contents">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
