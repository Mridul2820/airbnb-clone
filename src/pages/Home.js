import React from 'react'
import Banner from '../components/Banner'
import NearBy from '../components/NearBy'
import LiveAnywhere from '../components/LiveAnywhere'
import DiscoverPlaces from '../components/DiscoverPlaces'
import HostBanner from '../components/HostBanner'

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <div className="home__Nairobi">
                <h1>Explore Nearby</h1>
                <NearBy />
            </div>

            <div className="home__Mombasa">
                <h1>Live Anywhere</h1>
                <LiveAnywhere />
            </div>

            <div className="home__host">
                <HostBanner />
            </div>
            <div className="home__discover">
                <h1>Discover Places </h1>
                <DiscoverPlaces />
            </div>
        </div>
    )
}

export default Home
