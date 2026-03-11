import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <div>
                <img src={image} width={200} height={200} />
                <h4>{title}</h4>
                <h5>{description}</h5>
                <h3>{price} TL</h3>
                <a href={link} target='_blank'>Buy now</a>
            </div>
        </div>
    )
}

export default Course