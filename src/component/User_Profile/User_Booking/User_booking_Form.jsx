import React, {useState, useEffect} from "react";
import '../User_Booking/user-booking.css'

const BookingForm = (props) => {

    const initialFieldValues= {
        fullName: '',
        email: '',
        number: '',
        country:'',
        from:'',
        to:'',
        type:'',
        price:''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(()=> {
        if (props.currentId === '')
        setValues({
            ...initialFieldValues
        })
        else
        setValues({
            ...props.contactObjects[props.currentId]
        })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleFormSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values)
        
    }

    return (
        <form action="" className="user-form" onSubmit={handleFormSubmit}>
        <div className="user-input">
            <div className="flex-1">
                <label className="user_label">Full Name:</label>
                <br></br>
                <input type="text" 
                name="fullName"
                value={values.fullName}
                onChange={handleInputChange}
                />
            </div>
            <div className="flex-1">
                <label className="user_label">Email:</label>
                <br></br>
                <input type="text" 
                name="email"
                value={values.email}
                onChange={handleInputChange}
                />
            </div>  
        </div>
        <div className="user-input">
            <div className="flex-1">
                <label className="user_label">Number:</label>
                <br></br>
                <input type="number" 
                min="10"
                name="number"
                value={values.number}
                onChange={handleInputChange}
                />
            </div>
            <div className="flex-1">
                <label className="user_label">Country:</label>
                <br></br>
                <input type="text" 
                name="country"
                value={values.country}
                onChange={handleInputChange}
                />
            </div>  
        </div>
        <div className="user-input">
            <div className="flex-1">
                <label className="user_label">From:</label>
                <br></br>
                <select name="from" id="from" className="categories" value={values.from} onChange={handleInputChange} required>
                <option value="None">----------</option>
                <option value="Chapagaun">Chapagaun</option>
                <option value="Lagankhel">Lagankhel</option>                
                <option value="Satdobato">Satdobato</option>
                <option value="Koteshwor">Koteshwor</option>
                <option value="Tinkune">Tinkune</option>
                <option value="Santinagar">Santinagar</option>
                <option value="Baneshwor">Baneshwor</option>
                </select>
            </div>
            <div className="flex-1">
                <label className="user_label">To:</label>
                <br></br>
               
                <select name="to" id="to" className="categories" value={values.to} onChange={handleInputChange} required>
                <option value="None">----------</option>
                <option value="Chapagaun">Chapagaun</option>
                <option value="Lagankhel">Lagankhel</option>                
                <option value="Satdobato">Satdobato</option>
                <option value="Koteshwor">Koteshwor</option>
                <option value="Tinkune">Tinkune</option>
                <option value="Santinagar">Santinagar</option>
                <option value="Baneshwor">Baneshwor</option>
                </select>
            </div>  
        </div>
        <div className="user-input">
            <div className="flex-1">
                <label className="user_label">Type:</label>
                <br></br>
              
                <select name="type" id="type" className="categories" value={values.type} onChange={handleInputChange} required>
                <option value="None">----------</option>
                <option value="Normal Taxi">Normal Taxi</option>
                <option value="Share Taxi">Share taxi</option> 
                <option value="Share 1 Seat"> Share 1 seat</option>                
                <option value="Share 2 seat">Share 2 seat</option>
                <option value="Share 3 seat">Share 3 seat</option> 
                </select>
            </div>
            <div className="flex-1">
                <label className="user_label">Price:</label>
                <br></br>
                <input type="number" 
                name="price"
                value={values.price}
                onChange={handleInputChange}
                />
            </div>  
        </div>
        <div className="btn-user">
            <button type="submit" className="btn-users" value={props.currentId===''?"Save":"Update"}>Submit</button>
        </div>
    </form>
    );
}

export default BookingForm;