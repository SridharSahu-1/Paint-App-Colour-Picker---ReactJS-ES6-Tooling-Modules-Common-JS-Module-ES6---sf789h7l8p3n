import React, {useState , useEffect} from 'react'
import '../styles/Child.css'

function Selection(props) {
    let [background , setbackGround] = useState('')
    let {applyColor} = props;
    function updateSelectionStyle(prem){   
      setbackGround(prem.background)
    }
  return (
    <div className='fix-box' style={{backgroundColor:background}} onClick={()=>{applyColor(updateSelectionStyle)}}>
        <h2 className='subheading'>Selection</h2>
    </div>
  )
}

export default Selection
