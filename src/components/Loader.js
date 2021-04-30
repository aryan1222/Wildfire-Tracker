import React from 'react'
import Spinner from './spinner.gif'

const Loading = () => {
    return (
        <div className="loader">
            <img src={Spinner} alt="Loading ...."/>
        </div>
    )
}

export default Loading
