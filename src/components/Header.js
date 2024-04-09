import React from 'react'

const Header = ({pageTitle,step}) => {
  return (
    <div>
        <p>{pageTitle[step]}</p>
    </div>
  )
}

export default Header