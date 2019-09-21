import React from 'react'

const Form = (props) => {

    const mappedInfo = props.inform.info.map((badge, i) => 
        <section key= {i}>
        <h3>Name: {badge.firstName} {badge.lastName}</h3>
        <h3>Email: {badge.email}</h3>
        <h3>Place of Birth: {badge.place}</h3>
        <h3>Phone Number: {badge.phone}</h3>
        <h3>Food: {badge.food}</h3>
        <h3>About: {badge.about}</h3>
        </section>
    )

    const { firstName, lastName, email, place, phone, food, about } = props.inform

    return(
        <div>
            <h1 >Name Badge</h1>
            <form onSubmit = {props.submit}>
            
                <input type="text" name="firstName" placeholder='first Name' value = {firstName} onChange = {props.change} required minLength = '3' />
                <input type="text"  name="lastName" placeholder='last Name' value = {lastName} onChange = {props.change} required minLength = '3' />
                <input type="email" name="email" placeholder='Email' value = {email} onChange = {props.change} required minLength = '3' />
                <input type="text" name="place" placeholder='Place of Birth ' value = {place} onChange = {props.change} required minLength = '3' />
                <input type="number" name="phone" placeholder='Phone Number' value = {phone} onChange = {props.change} required minLength = '3' />
                <input type="text" name="food" placeholder='Favorite Food' value = {food} onChange = {props.change} required minLength = '3' />
                <textarea className='full-width' name="about" placeholder='Tell us about yourself!' value = {about} onChange = {props.change} required minLength = '3' />
            
                <button className='grid-full-width'>Submit</button> 
                
            </form>

            {mappedInfo}
            
        </div>
    )
}

export default Form