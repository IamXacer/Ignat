import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/* Define your routes within a Routes component */}
            <Routes>

                {/* Route for the home page, which redirects to /pre-junior */}
                <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR} />} />

                {/* Route for /pre-junior */}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />

                {/* Route for /junior */}
                <Route path={PATH.JUNIOR} element={<Junior />} />

                {/* Route for /junior-plus */}
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />

                {/* Route for handling non-existent pages */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>

    )
}

export default Pages
