import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setInterval(() => {
      navigate('/')
    }, 2000);
  }, [])
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" alt="" />
    </div>
  )
}

export default PageNotFound