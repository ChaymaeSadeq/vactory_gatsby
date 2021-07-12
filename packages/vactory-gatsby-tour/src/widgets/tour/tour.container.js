import React, { useState, useEffect ,useContext} from 'react'
import loadable from '@loadable/component'
import Cookies from "js-cookie"
import PageContext from 'vactory-gatsby-core'


//import Tour from 'reactour'
const TourLoadable = loadable.lib(() => import('reactour'))

export const TourContainer = ({data}) => {
  console.log("*****GET COOKIES*****")
  console.log(Cookies.get());
  console.table (Cookies.get())  
  

const [isTourOpen, setIsTourOpen] = useState(true);
const steps = [
  
  {
    selector: '#app > header',
    content: 'Our header',
  },  
  {
    selector : '#app > main > div:nth-child(1) > div > div.mt-2.flex.px-4.py-4.justify-between.bg-white.dark\:bg-gray-600.shadow-xl.rounded-lg.cursor-pointer',
    content : 'Users'
  },
      {
        selector : '#app > main > div:nth-child(1) > div > div.mt-4.mx-4',
        content : 'Clients'
      },
      {
        selector: '#app > footer',
        content: 'Our footer',
      },
      {
        selector:'#options-menu',
        content: 'Translation',
      },
      {
        selector:'#app > header > div.ml-2\.5 > a',
        content: 'Connect',
      },
      
      
    // ...
  ];
  useEffect(() => {
    steps.map(step => {
      try {
        let element = document.querySelector(step.selector);
        if (element == null) {
          steps.splice(steps.indexOf(step), 1)
        }
      } catch (error) {
        steps.splice(steps.indexOf(step), 1)
      }

    })
    // setCookie('visited', false)
  }, [])
  if(!Cookies.get('hasConsent')){
      return (
        <>
          
          <TourLoadable fallback={''}>
        {({ default: Tour }) => <Tour
            steps={steps}
            isOpen={isTourOpen}
            onRequestClose={() => setIsTourOpen(false)}
          />}
      </TourLoadable>

        </>
      )
      
    }

    return (
        <>
          <h1>Hello</h1>
        </>
      )

}