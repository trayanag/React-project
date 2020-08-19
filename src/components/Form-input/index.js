
import React from 'react'
import './styles.css';

const FormInput = ({className,label, value, onChange, type,placeholder}) => {

  return (
    <div className="card-text">
      <label>
        {label}
        <input type={type || 'text'}  className={className} value={value} onChange={onChange} placeholder={placeholder} />
      </label>
    </div>
  )

}

export default FormInput