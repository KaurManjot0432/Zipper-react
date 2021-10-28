import React from 'react'

export default function Alert(props) {
    //props will contain the message to be displayed in alert and type of alert i.e. success / danger
    return (
        <div style={{ height: '50px' }}>
            {props.alert &&

                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    {props.alert.msg}

                </div>}

        </div>
    )
}