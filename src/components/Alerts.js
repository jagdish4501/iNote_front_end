import React from 'react'

export const Alerts = () => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}
