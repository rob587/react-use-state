import React from 'react'
import languages from './languages'

const Description = () => {
  return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div class="card w-25  ">
                        <div class="card-body">
                            <h5 class="card-title" >{languages[3]["title"]}</h5>
                            <p class="card-text">{languages[3]["description"]}</p>
                           
                        </div>
                     </div>

                </div>
            </div>
        </div>

   


  )
}

export default Description
