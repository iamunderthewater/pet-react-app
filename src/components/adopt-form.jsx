import axios from 'axios'
import './release.css'
import { useEffect, useState } from 'react'


export async function getPets() {
    const { data } = await axios.get('https://apn1-eternal-lemur-34403.upstash.io/get/pets?_token=AYZjACQgZjA5OTNkYTAtNzM5Mi00OGFhLWE2M2ItMjk4ZDNjZWUwZWNiMWIzZjczODA1YTJiNDc0Mzg1ODRkOGJkMjk4YzExNDE=')
    return JSON.parse(data.result) || []
}

export async function getAdoptedPets() {
    const { data } = await axios.get('https://apn1-eternal-lemur-34403.upstash.io/get/adopted?_token=AYZjACQgZjA5OTNkYTAtNzM5Mi00OGFhLWE2M2ItMjk4ZDNjZWUwZWNiMWIzZjczODA1YTJiNDc0Mzg1ODRkOGJkMjk4YzExNDE=')
    return JSON.parse(data.result) || []
}

async function updateAdoptedPets(petObj) {
    const pets = await getAdoptedPets()
    pets.push(petObj)
    const resp = axios.post("https://apn1-eternal-lemur-34403.upstash.io/set/adopted?_token=AYZjACQgZjA5OTNkYTAtNzM5Mi00OGFhLWE2M2ItMjk4ZDNjZWUwZWNiMWIzZjczODA1YTJiNDc0Mzg1ODRkOGJkMjk4YzExNDE=", pets)
}

export async function removePet(petObj) {
    const pets = await getPets()
    const filter = pets.filter(p => p.name != petObj.name && p.description != petObj.description)
    await axios.post("https://apn1-eternal-lemur-34403.upstash.io/set/pets?_token=AYZjACQgZjA5OTNkYTAtNzM5Mi00OGFhLWE2M2ItMjk4ZDNjZWUwZWNiMWIzZjczODA1YTJiNDc0Mzg1ODRkOGJkMjk4YzExNDE=", filter)

}


export default function ReleaseForm() {
    const [pets, setPets] = useState([])
    const [selectedPet, setSelectedPet] = useState({})

    useEffect(() => {
        (async () => {
            const data = await getPets()
            setPets(data)
        })()
    },[])

    const handleForm = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const phone = e.target[2].value
        const address = e.target[3].value
        
        const obj = {
            name:name,
            email:email,
            phone:phone,
            address:address,
            adoptedPet:selectedPet
        }

        // remove pet from global list

        // add pet to adopted list
        try {
            await updateAdoptedPets(obj)
            await removePet(selectedPet)
            alert('Adoption Success!')
            window.location.reload()
        } catch (err) {
            alert('Something went wrong!')
        }

    }

    const handleChange = (e) => {
        // console.log(e.target.value);,
        const result = pets.filter(el => el.name == e.target.value)[0]
        setSelectedPet(result)
    }
    return (
        <>
            <div className='release release-container'>
                <form onSubmit={handleForm} action="https://formspree.io/f/xgegzlke" method="POST" enctype="multipart/form-data">
                    <h2>Adopt Form</h2>
                    <div className='col'>
                        <div className='row'>
                            <div>
                                <label htmlFor="">Owner Name</label>
                                <input required type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input required type="email" />
                            </div>
                        </div>
                        <div className='row'>
                            <div>
                                <label htmlFor="">Phone Number</label>
                                <input required type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Address</label>
                                <input required type="text" />
                            </div>
                        </div>
                        <div className='row'>
                            <div>
                            </div>
                            <div>
                                <label htmlFor="">Select Pet</label>
                                <img src={selectedPet.imageUrl} alt="" />
                                <select name="" id="" onChange={handleChange}>
                                    {pets.map(p => {
                                        return <option value={p.name}>{p.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}