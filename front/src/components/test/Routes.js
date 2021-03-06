import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import NavBar from '../6_navBar/NavBar'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Routes = () => {
    //hooks pour get et update un user
    const [idUser, setIdUser] = useState([])
    const [updateUser, setUpdateUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        birthday: '',
        birthday_place: '',
        actual_club: '',
        categorie: '',
        size: '',
        weight: '',
        hobbies: '',
        profil_pic: '',
        role: ''
    })

    //hooks pour get create et delete history
    const [history, sethistory] = useState([])
    const [createHistory, setcreateHistory] = useState({
        name: '',
        poste: '',
        date: '',
        description: ''
    })
    //hooks pour get et update un palmares
    const [palmares, setpalmares] = useState([])
    const [createPalmares, setcreatePalmares] = useState({
        name: '',
        description: '',
        UserId: 0
    }) 
    //hooks pour get et update une distinction
    const [distinction, setDistinction] = useState([])
    const [createDistinction, setcreateDistinction] = useState({
        name: '',
        date: '',
        UserId: 0
    })

     //hooks pour get et update une client
     const [client, setClient] = useState([])
     const [createClient, setcreateClient] = useState({
        firstname: '',
        lastname: '',
        profil_pic:'',
        club:'',
        UserId: 0
     })

    useEffect(() => {
        fetchDataUser()
    }, [])
    //fetch de la data du user 
    const fetchDataUser = () => {
        axios.get(`http://localhost:5000/users/1`)
            .then(res => setIdUser(res.data))
            .catch((err) => console.log(err))
    }
    // update de la data du user
    const updateDataUser = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/users/1`, idUser)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err))
            window.location.reload(false);

    }
    useEffect(() => {
        fetchDataHistory()
    }, [])
    //fetch de la data des history
    const fetchDataHistory = () => {
        axios.get(`http://localhost:5000/history`)
            .then(res => sethistory(res.data))
            .catch((err) => console.log(err))
    }
    //post de history
    const createDataHistory = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/history', createHistory)
            .catch((err) => console.log(err))
            window.location.reload(false);

    }
    //delete de history
     const fetchDeleteHistory = (id) => {
        axios.delete(`http://localhost:5000/history/${id}`)
        .catch((err) => console.log(err))
        window.location.reload(false);

     }


    useEffect(() => {
        fetchDataPalmares()
    }, [])
    //fetch de la data des palmares
    const fetchDataPalmares = () => {
        axios.get(`http://localhost:5000/palmares`)
            .then(res => setpalmares(res.data))
            .catch((err) => console.log(err))
    }
    //post de palmares
    const createDataPalmares = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/palmares', createPalmares)
            .catch((err) => console.log(err))
            window.location.reload(false);

    }
    //delete de palmares
    const fetchDeletePalmares = (id) => {
        axios.delete(`http://localhost:5000/palmares/${id}`)
            .catch((err) => console.log(err))
            window.location.reload(false);

    }




    useEffect(() => {
        fetchDataDistinction()
    }, [])
    //fetch de la data des distinctions
    const fetchDataDistinction = () => {
        axios.get(`http://localhost:5000/distinctions`)
            .then(res => setDistinction(res.data))
            .catch((err) => console.log(err))
    }
    //post de distinction
    const createDataDistinction = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/distinction', createDistinction)
            .catch((err) => console.log(err))

    }

    //delete de distinction
     const fetchDeleteDistinction = (id) => {
        axios.delete(`http://localhost:5000/distinction/${id}`)
        .catch((err) => console.log(err))

     }


       useEffect(() => {
        fetchDataClient()
    }, [])
    //fetch de la data des clients
    const fetchDataClient = () => {
        axios.get(`http://localhost:5000/clients`)
            .then(res => setClient(res.data))
            .catch((err) => console.log(err))
    }
    //post de clients
    const createDataClient = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/clients', createClient)
            .catch((err) => console.log(err))


    }

    //delete de clients
     const fetchDeleteClient = (id) => {
        axios.delete(`http://localhost:5000/clients/${id}`)
        .catch((err) => console.log(err))


     }
    return (
        <div>
            <NavBar />
            <p>{idUser.firstname}</p>
            <p>{idUser.lastname}</p>
            <p>{idUser.email}</p>
            <p>{idUser.password}</p>
            <p>{idUser.birthday}</p>
            <p>{idUser.birthday_place}</p>
            <p>{idUser.actual_club}</p>
            <p>{idUser.categorie}</p>
            <p>{idUser.size}</p>
            <p>{idUser.weight}</p>
            <p>{idUser.profil_pic}</p>
            <p>{idUser.role}</p>
            <p>{idUser.hobbies}</p>

            <h1>autres champs du user à modifier ou à rentrer</h1>

            <form onSubmit={updateDataUser}>
                <p>firstname</p>
                <input id="firstname" name="firstname" value={idUser.firstname} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, firstname: e.target.value }) }} />
                <p>lastname</p>
                <input id="lastname" name="lastname" value={idUser.lastname} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, lastname: e.target.value }) }} />
                <p>email</p>
                <input id="email" name="email" value={idUser.email} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, email: e.target.value }) }} />
                <p>password</p>
                <input id="password" name="password" value={idUser.password} type="password"
                    onChange={(e) => { setIdUser({ ...idUser, password: e.target.value }) }} />
                < p > birthday </p>
                <input id="birthday" name="birthday" value={idUser.birthday} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, birthday: e.target.value }) }} />

                <p>birthday place</p>
                <input id="birthday_place" name="birthday_place" value={idUser.birthday_place} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, birthday_place: e.target.value }) }} />
                <p>actual_club</p>
                <input id="actual_club" name="actual_club" value={idUser.actual_club} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, actual_club: e.target.value }) }} />
                <p>categorie</p>
                <input id="categorie" name="categorie" value={idUser.categorie} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, categorie: e.target.value }) }} />

                <p>size</p>
                <input id="size" name="size" value={idUser.size} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, size: e.target.value }) }} />
                <p>weight</p>
                <input id="weight" name="weight" value={idUser.weight} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, weight: e.target.value }) }} />
                <p>profil_pic</p>
                <input id="profil_pic" name="profil_pic" value={idUser.profil_pic} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, profil_pic: e.target.value }) }} />
                <p>role</p>
                <input id="role" name="role" value={idUser.role} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, role: e.target.value }) }} />
                <h1>Hobbies</h1>
                <input id="hobbies" name="hobbies" value={idUser.hobbies} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, hobbies: e.target.value }) }} />
                <button type='submit'>submit</button> 
            </form>
            {/* history place */}
            <h1>Parcours sportif</h1>
            {history.filter(history => history.UserId === idUser.id).map(history =>
                <div>
                    <button onClick={()=>fetchDeleteHistory(history.id)} >delete</button>
                    <p>{history.name}</p>
                    <p>{history.description}</p>
                    <p>{history.UserId}</p>
                </div>
            )}

            <form onSubmit={createDataHistory}>
                <p>name</p>
                <input id="name" name="name" value={createHistory.name} required type="text"
                    onChange={(e) => { setcreateHistory({ ...createHistory, name: e.target.value }) }} />
                <p>description</p>
                <input id="description" name="description" value={createHistory.description} required type="text"
                    onChange={(e) => { setcreateHistory({ ...createHistory, description: e.target.value }) }} />

                <button type="submit" onClick={(e) => { setcreateHistory({ ...createHistory, UserId: idUser.id }) }}>submit</button>
            </form>
            <h1>Palmares</h1>
            {palmares.filter(x => x.UserId === idUser.id).map(x =>
                <div>
                    <p>{x.name}</p>
                    <p>{x.description}</p>
                    <p>{x.UserId}</p>
                    <button onClick={()=>fetchDeletePalmares(x.id)} >delete</button>
                </div>

            )}

            <form onSubmit={createDataPalmares}>
                <p>name</p>
                <input id="name" name="name" value={createPalmares.name} required type="text"
                    onChange={(e) => { setcreatePalmares({ ...createPalmares, name: e.target.value }) }} />
                <p>description</p>
                <input id="description" name="description" value={createPalmares.description} required type="text"
                    onChange={(e) => { setcreatePalmares({ ...createPalmares, description: e.target.value }) }} />

                <button type="submit" onClick={(e) => { setcreatePalmares({ ...createPalmares, UserId: idUser.id }) }}>submit</button>
            </form>

            <h1>Distinction personnelle</h1>
            {distinction.filter(distinction => distinction.UserId === idUser.id).map(x =>
                <div>
                    <p>{x.name}</p>
                    <p>{x.date}</p>
                    <p>{x.UserId}</p>
                    <button onClick={()=>fetchDeleteDistinction(x.id)} >delete</button>

                </div>

            )}

            <form onSubmit={createDataDistinction}>
                <p>name</p>
                <input id="name" name="name" value={createDistinction.name} required type="text"
                    onChange={(e) => { setcreateDistinction({ ...createDistinction, name: e.target.value }) }} />
                <p>date</p>
                <input id="date" name="date" value={createDistinction.date} required type="date"
                    onChange={(e) => { setcreateDistinction({ ...createDistinction, date: e.target.value }) }} />

                <button type="submit" onClick={(e) => { setcreateDistinction({ ...createDistinction, UserId: idUser.id }) }}>submit</button>
            </form>

{/* form des clients de l'agent */}
            
            <h1>Client</h1>
            {client.filter(client => client.UserId === idUser.id).map(x =>
                <div>
                    <p>{x.firstname}</p>
                    <p>{x.lastname}</p>
                    <p>{x.club}</p>
                    <p>{x.profil_pic}</p>
                    <button onClick={()=>fetchDeleteClient(x.id)} >delete</button>

                </div>

            )}
            <form onSubmit={createDataClient}>
                <p>Firstname</p>
                <input id="firstname" name="firstname" value={createClient.firstname} required type="text"
                    onChange={(e) => { setcreateClient({ ...createClient, firstname: e.target.value }) }} />
                <p>Lastname</p>
                <input id="lastname" name="lastname" value={createClient.lastname} required type="text"
                    onChange={(e) => { setcreateClient({ ...createClient, lastname: e.target.value }) }} />

                 <p>Profil_pic</p>
                <input id="profil_pic" name="profil_pic" value={createClient.profil_pic} required type="text"
                    onChange={(e) => { setcreateClient({...createClient, profil_pic: e.target.value }) }} />

                <p>Club</p>
                <input id="club" name="club" value={createClient.club} required type="text"
                    onChange={(e) => { setcreateClient({ ...createClient, club: e.target.value }) }} />
                <button type="submit" onClick={(e) => { setcreateClient({ ...createClient, UserId: idUser.id }) }}>submit</button>
            </form>



            {/* <div className="profile-page">
            <NavBar />
            <div className="profile-div-80">
                <div className="profile-first-container">
                    <div className="baneer-profile">
                        <img className="baneer-img" src="https://previews.123rf.com/images/stockdeca/stockdeca1708/stockdeca170800021/85308521-ballon-de-football-sur-l-herbe-verte-banni%C3%A8re-illustration-de-rendu-3d.jpg"/>
                    </div>
                    <div className="div-info-head-profile">
                        <p>Rida LAMRINI</p>
                        <p>Joueur</p>
                        <p>Montpellier Herault Sport Club</p>
                    </div>
                    <div className="div-numberRelation-profile">
                        <p>500 Relations</p>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
    )
}
export default Routes;