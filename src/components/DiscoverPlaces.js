import React from 'react'
import Card from './Card'

const DiscoverPlaces = () => {
    return (
        <div className="discover">
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Unique rooms in Kileleshwa"
                description="Spectacular hill country views and an abundance of natural light is what you'll experience in this modern 3500 sq. ft. home. "
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in Nairobi"
                description="Perfect backdrop for your next film shoot"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Apartment"
                description="Lighting equipment is included and will be available at a fee"
                price="£70/night"
            />
        </div>
    )
}

export default DiscoverPlaces
