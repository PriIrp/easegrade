import React from 'react'

type Props = {}

const Grades = (props: Props) => {
  return (
    <div>Grades</div>
  )
}

//Fetching classes from DB
export async function getStaticProps(){
    return{
        props: {}
    }
}

export default Grades