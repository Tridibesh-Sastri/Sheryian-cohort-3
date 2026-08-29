import React,{memo} from 'react'

const Contact = () => {

    console.log("Contact component rendering............")

  return (
    <div>
      <h1>This is Contact</h1>
    </div>
  )
}

export default memo(Contact)
