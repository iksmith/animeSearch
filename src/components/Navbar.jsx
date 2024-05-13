import React from 'react'

function Navbar() {
  return (
    <div className='navBar'>
        <div className="innerNav">
            <div className="navLogo">
                {/* logo */}
                Review App
            </div>
            <div className="addReview">
                <button className='addBtn'>
                    {/* icon */}
                    Add Review
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar