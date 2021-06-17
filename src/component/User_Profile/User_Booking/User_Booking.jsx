import React, {useState, useEffect} from "react";
import User_Booking_Form from '../User_Booking/User_booking_Form'
import firebaseDb from '../../Home/firebase'
import '../User_Booking/user-booking.css'




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
            <div className="head-user-booking">
                <h1>Online Booking</h1>
            </div>
        <div class="user_booking">
            <div className="user_booking_content">
                <div className="flex-1">
                    <User_Booking_Form {...({addOrEdit,  currentId, contactObjects})}/>
                    </div>
                <div className="flex-1">
                    <h2 className="tableheading">Recent request records</h2>
                    <table className="records">
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Country</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                        {
                               Object.keys(contactObjects).map(id=>{
                                   return <tr key={id}>
                                       <td>{contactObjects[id].fullName}</td>
                                       <td>{contactObjects[id].email}</td>
                                       <td>{contactObjects[id].number}</td>
                                       <td>{contactObjects[id].country}</td>
                                       <td>{contactObjects[id].from}</td>
                                       <td>{contactObjects[id].to}</td>
                                       <td>{contactObjects[id].type}</td>
                                       <td>{contactObjects[id].price}</td>
                                       {/* <td>{contactObjects[id].address}</td> */}
                                       <td>
                                            <a className="btn-action-pencil " onClick={()=> {setCurrentId(id)}}>
                                                <i className=" fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn-action-trash" onClick={()=> {onDelete(id)}}>
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
        </div>
        </>
    );
}

export default User_Booking;