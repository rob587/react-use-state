import React from 'react'
import languages from './languages'

const Description = ({id}) => {
        const language = languages.find(lang => lang.id === id)
          if (!language) return null
  return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div class="card w-25 ">
                        <div class="card-body">
                            <h5 class="card-title" >{language.title}</h5>
                            <p class="card-text">{language.description}</p>
                           
                        </div>
                     </div>

                </div>
            </div>
        </div>

   


  )
}

export default Description
