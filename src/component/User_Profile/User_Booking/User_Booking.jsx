import React, {useState, useEffect} from "react";
import ContactForm from "./BookingForm"
import firebaseDb from '../../Home/firebase'

const User_Booking = () => {

        var [contactObjects, setContactObjects] = useState({})
        var [currentId, setCurrentId] = useState('')

        //View
        useEffect(()=> {
            firebaseDb.database().ref().child('booked').on('value', snapshot=> {
                if(snapshot.val()!=null)
                setContactObjects({
                    ...snapshot.val()
                })
                else
                    setContactObjects({})
            })
        },[])


        //Insert
        const addOrEdit = obj => {
            if (currentId ==='')
            firebaseDb.database().ref().child('booked').push(
                obj,
                err => {
                    if (err)
                    console.log(err)
                    else
                    setCurrentId('')
                }
            )
            else
            firebaseDb.database().ref().child(`booked/${currentId}`).set(
                obj,
                err => {
                    if (err)
                    console.log(err)
                    else
                    setCurrentId('')
                }
            )

        }

        //Delete
        const onDelete = key => {
            if(window.confirm('Are you sure want to delete this record?')){
                firebaseDb.database().ref().child(`booked/${key}`).remove(
                    err => {
                        if(err)
                            console.log(err)
                        else
                            setCurrentId('')
                    }
                )
            }
        }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({addOrEdit,  currentId, contactObjects})}/>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                {/* <th>Address</th> */}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               Object.keys(contactObjects).map(id=>{
                                   return <tr key={id}>
                                       <td>{contactObjects[id].fullName}</td>
                                       <td>{contactObjects[id].mobile}</td>
                                       <td>{contactObjects[id].email}</td>
                                       {/* <td>{contactObjects[id].address}</td> */}
                                       <td>
                                            <a className="btn text-primary" onClick={()=> {setCurrentId(id)}}>
                                                <i className=" fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={()=> {onDelete(id)}}>
                                                <i className=" fas fa-trash-alt"></i>
                                            </a>
                                       </td>
                                   </tr>
                               }) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default User_Booking;