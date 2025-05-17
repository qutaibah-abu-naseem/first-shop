import emailjs from 'emailjs-com';
import { Box, TextField, Button, Typography } from '@mui/material';

import React, { useContext, useEffect, useRef } from 'react'
import { api } from '../App'
import About from './about';

const About_us = () => {
    const context = useContext(api)
    const form = useRef(null);
    const style = {
        backgroundColor: 'rgb(255, 255, 255)',
        '& .MuiOutlinedInput-root': {
            borderRadius: '30px', // حواف دائرية حول الـ TextField نفسه
        },
        '& .MuiInputLabel-root': {
            borderRadius: '30px', // جعل الحواف دائرية في الـ Label (النص)
            color: 'rgb(77, 72, 72)',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            margin: '-5px -2px',
            background: 'linear-gradient(to bottom,white,black, rgb(0, 0, 0), black)', // تدرج لوني من الأسود إلى الأبيض
            '-webkit-background-clip': 'text', // يجعل التدرج يظهر على النص فقط
            color: 'transparent',
            fontSize: '22px',
        },
        borderRadius: '30px',
    };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vjgh8zx',  // أدخل SERVICE_ID هنا
            'template_wjffxbn',  // أدخل TEMPLATE_ID هنا
            form.current,       // النموذج الذي سيتم إرساله
            'iE_Zer5jk5C6ZPn-e' // أدخل PUBLIC_KEY الخاص بك هنا
        )
            .then((result) => {
                console.log('Message sent', result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log('Error:', error.text);
                alert("Failed to send message.");
            });
    };

    useEffect(()=>{
        if(context.tocontact && context.refcontact){
            context.refcontact.current.scrollIntoView({behavior:'smooth'})
        }else if(context.toabout&& context.refabout){
            context.refabout.current.scrollIntoView({behavior:'smooth'})
        }
    },[context.toabout,context.tocontact])
    return (
        <div className='h-[auto] mt-[140px]'>
            <About />
            <div ref={context.refcontact} className="bg-zinc-800 w-[90%] mx-auto py-5 my-4" style={{ borderRadius: '20px' }}>
                <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
                    <Typography variant="h4" my={2} sx={{ color: 'white', textAlign: 'center' }}>Contact Us</Typography>
                    <form ref={form} onSubmit={sendEmail}>
                        <TextField
                            name="user_name"
                            fullWidth
                            label="Your Name"
                            margin="normal"
                            required
                            sx={style}
                        />
                        <TextField
                            name="user_email"
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            required
                            sx={style}
                        />
                        <TextField
                            name="message"
                            fullWidth
                            label="Message"
                            multiline
                            rows={4}
                            margin="normal"
                            required
                            sx={style}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            sx={{ mt: 2, mx: 'auto', width: '150px', py: 1, borderRadius: '30px' }}
                        >
                            Send
                        </Button>
                    </form>
                </Box>
            </div>

        </div>
    )
}

export default About_us


// import { useContext, useRef } from 'react';
// import emailjs from 'emailjs-com';
// import { Box, TextField, Button, Typography } from '@mui/material';
// import { api } from '../App';

// const Contact = () => {
//   const form = useRef(null);

//   const style = {
//     backgroundColor: 'rgb(255, 255, 255)',
//     '& .MuiOutlinedInput-root': {
//       borderRadius: '30px', // حواف دائرية حول الـ TextField نفسه
//     },
//     '& .MuiInputLabel-root': {
//       borderRadius: '30px', // جعل الحواف دائرية في الـ Label (النص)
//       color: 'rgb(77, 72, 72)',
//     },
//     '& .MuiInputLabel-root.Mui-focused': {
//       margin: '-5px -2px',
//       background: 'linear-gradient(to bottom,white,black, rgb(0, 0, 0), black)', // تدرج لوني من الأسود إلى الأبيض
//       '-webkit-background-clip': 'text', // يجعل التدرج يظهر على النص فقط
//       color: 'transparent',
//       fontSize: '22px',
//     },
//     borderRadius: '30px',
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_vjgh8zx',  // أدخل SERVICE_ID هنا
//       'template_wjffxbn',  // أدخل TEMPLATE_ID هنا
//       form.current,       // النموذج الذي سيتم إرساله
//       'iE_Zer5jk5C6ZPn-e' // أدخل PUBLIC_KEY الخاص بك هنا
//     )
//       .then((result) => {
//         console.log('Message sent', result.text);
//         alert("Message sent successfully!");
//       }, (error) => {
//         console.log('Error:', error.text);
//         alert("Failed to send message.");
//       });
//   };
//     const context=useContext(api)

//   return (
//     <div ref={context.refcontact} className="bg-zinc-800 w-[90%] mx-auto py-5" style={{ borderRadius: '20px' }}>
//       <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
//         <Typography variant="h4" my={2} sx={{ color: 'white', textAlign: 'center' }}>Contact Me</Typography>
//         <form ref={form} onSubmit={sendEmail}>
//           <TextField
//             name="user_name"
//             fullWidth
//             label="Your Name"
//             margin="normal"
//             required
//             sx={style}
//           />
//           <TextField
//             name="user_email"
//             fullWidth
//             label="Email"
//             type="email"
//             margin="normal"
//             required
//             sx={style}
//           />
//           <TextField
//             name="message"
//             fullWidth
//             label="Message"
//             multiline
//             rows={4}
//             margin="normal"
//             required
//             sx={style}
//           />
//           <Button
//             variant="contained"
//             type="submit"
//             color="primary"
//             sx={{ mt: 2, mx: 'auto', width: '150px', py: 1, borderRadius: '30px' }}
//           >
//             Send
//           </Button>
//         </form>
//       </Box>
//     </div>
//   );
// };

// export default Contact;
