import React, { useState } from 'react'
import './myrequests.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link, useNavigate } from 'react-router-dom';


const Myrequests = () => {
    const user = JSON.parse(localStorage.getItem('loggeduser'))
    const users = JSON.parse(localStorage.getItem('users'))
    const [emailtitle, setemailtitle] = useState()
    const [emailtext, setemailtext] = useState()
    const [whichproff, setwhichproff] = useState()
    const [number, setnumber] = useState()
    const [massage, setmassage] = useState('will love to help')


    const form = useRef();
    function checkproff(array) {
        let x = 0
        for (let index = 0; index < array.length; index++) {
            if (array[index] == whichproff) {
                x++
            }
        }
        if (x == 1) {
            x = 0
            return true
        } else {
            return false
        }
    }


    function canhelp() {
        const bestarr = []
        const newarr = users.filter(item => item.email != user.email && checkproff(item.proffesions))
        const notarr = users.filter(item => item.email != user.email && checkproff(item.proffesions) == false)
        newarr.map(item => {
            if (checkproff(item.proffesions) == true) {
                   const emailtemplate = {
                    to_email:item.email,
                    to_name:item.username,  
                    from_name:user.username,
                    email_title: emailtitle,
                    email_text : emailtext,
                    email_phone:`https://wa.me/${user.phonenumber}?`,
                    reply_to:user.email,
                   }
                   console.log(item.email);
                   emailjs.send('service_03jkv54', 'template_2dsnlbo', emailtemplate, 'QEn71pL3Eu8fl57Hz')
                   .then((result) => {
                       console.log(result.text);
                   }, (error) => {
                       console.log(error.text);
                   });
                const obj = { from: { username: user.username, email: user.email, phone: user.phonenumber }, text: emailtext }

                item.massages.push(obj)
                bestarr.push(item)

            }
        })
        const updatedarr = notarr.concat(bestarr.concat(user))
        localStorage.setItem('users', JSON.stringify(updatedarr))
    }


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_03jkv54', 'template_dzxmgs1', form.current, 'QEn71pL3Eu8fl57Hz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='request-cont'>



            <h1 className='title-page'>Make a request</h1>

            {localStorage.getItem('loggeduser') && <div>
                <div className='background-cont'>

              </div>
                <h1 className='title-second-page'>Welcome {user.username} would you like to send a request </h1>
                <h2 style={{textAlign:'center',marginBottom:'60px',marginTop:'50px'}}>To make a new request just fill the inputs below and choose the proffesion that you need help with</h2>
                <form ref={form} onSubmit={sendEmail} action="" className='form-request'>

                    <div className='request-area'>
                        <div className='email-div'>
                            <div className='email-info-cont'>
                                <div className='title-input'>
                                    <h3>massage Title</h3>
                                    <input type="text" className='inputs' name='email_title' onChange={(e) => setemailtitle(e.target.value)} />
                                </div>
                                <div className='title-input'>
                                    <h3>choose proffesion</h3>
                                    <select name="" id="" onChange={(e) => setwhichproff(e.target.value)}>
                                        <option value="Accountant">Accountant</option>
                                        <option value="Baker">Baker</option>
                                        <option value="Butcher">Butcher</option>
                                        <option value="Electrician">Electrician</option>
                                        <option value="Farmer">Farmer</option>
                                        <option value="Gardener">Gardener</option>
                                        <option value="Mechanic">Mechanic</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 style={{textAlign:'center',marginTop:'20px'}}>Main massage content</h3>
                            <textarea name="email_text" id="text-area" onChange={(e) => setemailtext(e.target.value)}></textarea>
                        </div>
                        <input type="submit" value="submit" className='request-submit-button' onClick={() => canhelp()} />
                    </div>

                </form>

            </div>
            }


            {!localStorage.getItem('loggeduser') && <div className='background-cont-two'>
                <h1 className='title-second-page'>To be able to send a request you need to be logged in first</h1>
                <Link to='/user/Signup'>
               <button className='new-sign'>Sign-Up</button>
              </Link> 
                 
            </div>}

        </div>
    )
}

export default Myrequests
