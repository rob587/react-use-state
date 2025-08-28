import React, { useState } from 'react'
import Description from './Description'

const ButtonSection = () => {
  const [id_, setId] = useState(1)
  return (
    <div>
        <div className="container">
            <div className="row">
              <div className="col"><h1>Learn Web Develop</h1>
              </div>
                <div className="col-12 ">
                    <div className="btn-box  justify-content-center py-5   ">
                    <button onClick={()=>setId(1)} className="btn btn-primary mx-3">HTML</button>
                    <button onClick={()=>setId(2)} className="btn btn-primary mx-3">CSS</button>
                    <button onClick={()=>setId(3)} className="btn btn-primary mx-3">Javascript</button>
                    <button onClick={()=>setId(4)} className="btn btn-primary mx-3">Node.js</button>
                    <button onClick={()=>setId(5)}  className="btn btn-primary mx-3">Express</button>
                    <button onClick={()=>setId(6)} className="btn btn-primary mx-3">React.js</button>
                    {
                      id_ && <Description id={id_} />
                    }
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ButtonSection
