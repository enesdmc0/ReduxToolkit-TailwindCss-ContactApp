import React from 'react';

const Container = ({children}) => {
    return (
        <div className="bg-gray-100 w-3/4 h-screen m-auto">{children}</div>
    );
};

export default Container;
