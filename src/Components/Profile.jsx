import React from 'react'
import "./Profile.css"

function Profile() {
    return (
        <div className='profile-container'>
            <div className='circles'>
                <div className='circle'>
                    <div className='circle2'>
                        <div className='profile-page'>
                            <div className='left-part'>

                            </div>
                            <div className='right-part'>
                                <div className='name'><u>Full name:</u></div>
                                <div className='age'><u>Age:</u></div>
                                <div className='mobility'><u>Mobility</u></div>
                                <div className='Professions'><u>Professions</u></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile