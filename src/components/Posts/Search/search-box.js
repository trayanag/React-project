import React from 'react'

 const SeacrhBox = ({placeholder,handleChange}) => (
    <input
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
    />
)
export default SeacrhBox;
