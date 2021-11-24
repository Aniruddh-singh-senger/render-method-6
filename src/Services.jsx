import React from 'react'
import Card from './Card'

const Services = () => {
    return (
        <>
            <h1 style={{ width: '15%', margin: '50px auto' }}> our services</h1>
            <div className='card-s'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Services
