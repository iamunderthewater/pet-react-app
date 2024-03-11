import { AuthContext } from "../auth"
import { useContext, useEffect } from "react"
import './home.css'
import Card from "./hero-card"
import ServiceCard from "./service-card"
import {Heartbeat,FindingHome,Grooming,Baseball} from './icons'

export default function Home() {
    const {name,setName} = useContext(AuthContext)

    return (<>
        <div>
            <section id="hero">
                <div style={{position:"relative"}}>
                    <img src="/dog03.jpg" alt="" />
                    <div className="mobile-hidden overlay"></div>
                </div>
                <div className="text">
                    <h2>Change a life, adopt a  <span id="planet">Pet.</span></h2>
                    <p>Unconditional love awaits at our adoption center...</p>
                </div>
            </section>
            <div className="newtext">
            <h1>Welcome to Pet Heaven  :</h1>
          <h2><span id="planet">   Where Love Finds a Home.</span></h2>
            </div>
            <section id="category">
                
                <Card imgUrl={'/categorydog.jpg'} caption={'Dogs'} />
                <Card imgUrl={'/catergorycat.jpg'} caption={'Cats'} />
                <Card imgUrl={'/categoryhamster.jpg'} caption={'Hamster'} />
                <Card imgUrl={'/catergoryhamster.jpg'} caption={'Rabbit'} />
            </section>
            <section id="services">
                <div>
                    <h2>Services</h2>
                    <h4>Our Pets are Always Happy</h4>
                    <p style={{lineHeight:'24px'}}>We bring love to their hearts just as they bring us happiness and joy.</p>
                </div>
                <div>
                    <ServiceCard icon={<FindingHome/>} caption={'Finding Homes'} />
                    <ServiceCard icon={<Baseball/>} caption={'Pet Training'} />
                    <ServiceCard icon={<Heartbeat/>} caption={'Pet Health'} />
                    <ServiceCard icon={<Grooming/>} caption={'Pet Grooming'} />
                </div>
            </section>

            <section id="findpet">
            <h2>Find Your Pets Today!</h2>
                <button>Browse</button>
            </section>

        </div>
    </>)
}