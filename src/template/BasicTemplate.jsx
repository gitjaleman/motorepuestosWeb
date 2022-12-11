import React from 'react'

const BasicTemplate = () => {
    return (
        <div className="w-full h-screen  flex flex-row">
            
            <div className="w-[calc(100%-50px)] h-full bg-slate-100 ">
                {children}
            </div>
        </div>
    );
}

export default BasicTemplate