import React from 'react'

export const Close = ({nameClass}) => {
    return (
        <a href="#close" title="Close">
        <span className={nameClass}>
          <i className="fas fa-times"></i>
        </span>
      </a>
    )
}
