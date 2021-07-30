import { useEffect } from 'react'

// Tree-shaking 
const Child = ({ title, forwardedRef, handleColor }) => {


    useEffect(() => {
        console.log(forwardedRef.current, 'child.js')
    }, [])

    return (
        <>
            <p
                onClick={() => handleColor('orange')}
                ref={forwardedRef}>
                {title}
            </p>
        </>
    )
}

export default Child
