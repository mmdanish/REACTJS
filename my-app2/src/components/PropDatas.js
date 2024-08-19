import React from 'react'
import Propss from './Prop'

function PropDatas() {
    const employee = [{
        name: "Danish",
        role: "developer"
    },
    {
        name: "Afeef",
        role: "developer"
    },
    {
        name: "Tony",
        role: "developer"
    }    
]
  return (
    <div>
      {employee.map((obj, index)=>{
        return(
            <>
                <Propss key={index} name={obj.name} role={obj.role} />
            </>
        )
      })}
    </div>
  )
}

export default PropDatas
