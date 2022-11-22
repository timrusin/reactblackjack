import React, { useContext, useState } from 'react'

const hitStand = React.createContext()
const hitStandUpdate = React.createContext()

export function useHitStand() {
    return useContext(hitStand)
}

export function useHitStandUpdate() {
    return useContext(hitStandUpdate)
}

export function HitStandProvider ({ children }) {
    const [hitStand, setHitStand] = useState(false)

    function toggleHitStand(){
        setHitStand(!hitStand)
    }

    return (
        <hitStand.Provider value={false}>
            <hitStandUpdate.Provider valu={toggleHitStand}>
            {children}
            </hitStandUpdate.Provider>
        </hitStand.Provider>

    )
}



