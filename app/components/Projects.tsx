import React from 'react'
import ProjectSection from './ProjectSection'

export default function Projects() {
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>

            <ProjectSection 
                icon='sajubazaarlogo.png'
                title='Sajuu-Bazaar'
                imgsrc='sajuubazaar_preview.png'
                alt='Sajuu-Bazaar'
                imgAlt='Sajuu-Bazaar Preview'

                logo1='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
                logo1Alt='Nextjs Logo'

                logo2='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
                logo2Alt='Expressjs Logo'

                logo3='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
                logo3Alt='MongoDB Logo'

                logo4='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
                logo4Alt='Typescript Logo'

                logo5='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
                logo5Alt='Nodejs Logo'
            />

            <ProjectSection 
                icon='ass-tech-logo.png'
                title='Ass Tech'
                imgsrc='AssTech_Preview.png'
                alt='Ass Tech'
                imgAlt='Ass Tech Preview'

                logo1='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
                logo1Alt='Vitejs Logo'

                logo2='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg'
                logo2Alt='Go Logo'

                logo4='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
                logo4Alt='Typescript Logo'
            />

            <ProjectSection 
                icon=''
                title='Drizzy Movie'
                imgsrc=''
                alt=''
                imgAlt=''
            />

            <ProjectSection 
                icon=''
                title='Vaccination landing page'
                imgsrc=''
                alt=''
                imgAlt=''
            />

            <ProjectSection 
                icon=''
                title='NoobNet'
                imgsrc=''
                alt=''
                imgAlt=''
            />

        </div>
    )
}
