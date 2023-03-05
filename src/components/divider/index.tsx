/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import "../../assets/styling/Divider.css"

interface DividerProps {
    
}

export const Divider: FC<DividerProps> = (props: DividerProps) => {
   const {} = props
   return (
       <div className="divider-bar">
       </div>
   )
}