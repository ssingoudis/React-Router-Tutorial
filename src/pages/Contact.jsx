import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {

  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')

  return (
    <div>
      <h2>Contact us Mr. {name}</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad optio cumque dolores
         numquam praesentium sint, minima exercitationem et nam ab velit quibusdam quod dicta, 
         sit in saepe obcaecati tempore cum!</p>
    </div>
  )
}
