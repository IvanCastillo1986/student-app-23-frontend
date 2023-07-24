import React from 'react'
import './container.css'


export default function Container({ center, children }) {
    
    let classNames = ['container']
    if (center) {
        classNames.push('container--center')
    }
    
    console.log(`<Container /> rendered!`)
    
    // The children prop automatically renders the content/components inside its parent <Container /> component
    return (
        <div className={classNames.join(' ')}>
            {children}
        </div>
    )
}
