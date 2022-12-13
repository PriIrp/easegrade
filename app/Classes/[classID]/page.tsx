import React from 'react'

type Props = {}

const Class = (props: Props) => {
  return (
    <div>Class</div>
  )
}

export async function generateStaticParams(){
  
}

//Fetching students from DataBase
export async function getStaticProps(){
    return{
        props: {}
    }
}


export default Class