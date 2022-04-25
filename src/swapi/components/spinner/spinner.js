import React from "react";
import './spinner.css';

const Spinner = () => {
    return (
        <div className="spinner-double-ring">
            <div className="spinner-double-ring-box">
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;

