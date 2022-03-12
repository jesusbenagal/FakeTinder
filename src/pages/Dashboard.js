import TinderCard from "react-tinder-card"
import {useEffect, useState} from "react"
import ChatContainer from '../components/ChatContainer'
import { useCookies } from "react-cookie"
import axios from "axios"

const Dashboard = () => {
    const [user, setUser] = useState(null)
    const [ cookies, setCookie, removeCookie] = useCookies(['user'])


    const userId = cookies.UserId

    const getUser = async () => {
        try{
            const response = await axios.get('http://localhost:8000/user', {
                params: { userId }
            })
            setUser(response.data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    console.log('user', user)


    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://images.pexels.com/photos/7715384/pexels-photo-7715384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://images.pexels.com/photos/7715384/pexels-photo-7715384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Monica Hall',
            url: 'https://images.pexels.com/photos/7715384/pexels-photo-7715384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Jared Dunn',
            url: 'https://images.pexels.com/photos/7715384/pexels-photo-7715384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://images.pexels.com/photos/7715384/pexels-photo-7715384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ]
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className="dashboard">
            <ChatContainer user={user}/>
            <div className="swipe-container">
                <div className="card-container">

                    {characters.map((character) =>
                        <TinderCard
                            className='swipe'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }}
                                 className='card'>
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dashboard