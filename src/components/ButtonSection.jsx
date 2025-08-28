import React from 'react'
import Description from './Description'

const ButtonSection = () => {
  
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="btn-box d-flex      justify-content-center py-5  ">
                    <button onClick={()=>Description(1)} className="btn btn-primary mx-3">HTML</button>
                    <button onClick={()=>Description(2)} className="btn btn-primary mx-3">CSS</button>
                    <button onClick={()=>Description(3)} className="btn btn-primary mx-3">Javascript</button>
                    <button onClick={()=>Description(4)} className="btn btn-primary mx-3">Node.js</button>
                    <button onClick={()=>Description(5)}  className="btn btn-primary mx-3">Express</button>
                    <button onClick={()=>Description(6)} className="btn btn-primary mx-3">React.js</button>
                
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ButtonSection
