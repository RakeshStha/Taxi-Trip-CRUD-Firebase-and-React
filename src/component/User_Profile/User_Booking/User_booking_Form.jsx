import React, {useState, useEffect} from "react";
import '../User_Booking/user-booking.css';
import firebase from "firebase";


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




    // componentDidMount(){
    //     this.authListener();
    //   }

    // authListener(){
    //     firebase.auth().onAuthStateChanged((user)=> {
    //       if (user){
    //         this.setState({user});
    //         console.log(user.email)
    //         console.log(user.uid)
    //         document.getElementById('username').innerHTML= user.email;
    //         document.getElementById('uid').innerHTML = user.uid;
    //         // document.getElementById('pswd').innerHTML = user.password;
          
        
    //       }
    //       else {
    //         this.setState({user: null});
    //       }
    //     })


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
    firebase.auth().onAuthStateChanged((user)=> {
        // console.log(user);
        document.getElementById('username').innerHTML= user.email;
    })

    return (
        <form action="" className="user-form" onSubmit={handleFormSubmit}>
            <div className="notes-center">
                <div className="notes">
                    <p><b>Note:</b> Please use your register gmail - <span className="warn" id="username"></span> </p>
                    {/* <span className="warn" id="username"></span> */}
                </div>
            </div>
            <div className="notes-center">
                <div className="user-input">
                    <div className="flex-1">
                        <div className="justify-centers">
                            <label className="user_label">Name:</label>
                            <input type="text" 
                            name="fullName"
                            placeholder="Your name"
                            value={values.fullName}
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                    </div>
                    <div className="flex-1 ">
                        <div className="justify-centers">
                            <label className="user_label">Email: </label>
                            <input type="text" 
                            name="email"
                            placeholder="abc@gmail.com"
                            value={values.email}
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                    </div>  
                </div>
            </div>

            <div className="notes-center">
                <div className="user-input">
                    <div className="flex-1 ">
                        <div className="justify-centers">
                            <label className="user_label">Phone:</label>
                            <input type="number" 
                            min="10"
                            name="number"
                            placeholder="9812345678"
                            value={values.number}
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="justify-centers">
                            <label className="user_label">Country:</label>
                            <select name="country" id="country" className="categories" value={values.country} onChange={handleInputChange} required>
                            <option value="None">----------</option>
                            <option value="Nepal">Nepal</option>
                            </select>
                        </div>
                    </div>  
                </div>
            </div>

        <div className="notes-center">
            <div className="user-input">
                <div className="flex-1">
                    <div className="justify-centers">
                        <label className="user_label">From:</label>
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
                </div>
                <div className="flex-1">
                    <div className="justify-centers">
                        <label className="user_label">To:</label>
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
            </div>
        </div>

        <div className="notes-center">
            <div className="user-input">
                <div className="flex-1">
                    <div className="justify-centers">
                        <label className="user_label">Type:</label>
                        <select name="type" id="type" className="categories" value={values.type} onChange={handleInputChange} required>
                        <option value="None">----------</option>
                        <option value="Normal Taxi">Normal Taxi</option>
                        <option value="Share Taxi">Share taxi</option> 
                        <option value="Share 1 Seat"> Share 1 seat</option>                
                        <option value="Share 2 seat">Share 2 seat</option>
                        <option value="Share 3 seat">Share 3 seat</option> 
                        </select>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="justify-centers">
                        <label className="user_label">Price:</label>
                        <input type="number"
                        className="pricetag"
                        name="price"
                        value={values.price}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>  
            </div>
        </div>

      
        <div className="btn-user">
            <button type="submit" className="btn-users" value={props.currentId===''?"Save":"Update"}>Submit</button>
        </div>
    </form>
    );
}

export default BookingForm;