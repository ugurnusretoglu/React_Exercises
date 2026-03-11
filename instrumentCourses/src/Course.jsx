import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <div>
                <img className='course-image' src={image} width={200} height={200} />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} $</h3>
                <a className='course-link' href={link} target='_blank'>Buy now</a>
            </div>
        </div>
    )
}

export default Course