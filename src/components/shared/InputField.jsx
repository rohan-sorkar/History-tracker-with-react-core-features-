import React from 'react'

const InputField = ({type, name, value, onchangeHandler}) => {
  return (
    <>
        <input type={type} name={name} value={value} onChange={onchangeHandler} /><br />
    </>
  )
}

export default InputField