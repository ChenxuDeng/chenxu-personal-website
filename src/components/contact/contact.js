import React,{useState,useEffect} from 'react';
import {Button, makeStyles} from "@material-ui/core";
import qrCode from '../../assets/qr.png'
import wechat from '../../assets/we-chat.png'
import emailjs from 'emailjs-com';
import GitHubButton from "react-github-btn";
import emailIcon from '../../assets/email mail.png'
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from '@material-ui/core/CircularProgress';
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Contact(props) {
    const useStyle=makeStyles((theme)=>{
        return {
            title:{
                fontFamily:'Poppins',
                color:'#f2d2aa',
                marginTop:'16em',
                fontSize:'21px',
                fontWeight:'bold',
                [theme.breakpoints.down('xs')]:{
                    fontSize: '18px'
                }
            },
            card:{
                display:'flex',
                alignItems:'center',
                background:'hsla(0,0%,100%,.15)',
                borderRadius:6,
                paddingLeft:'12px',
                paddingRight:'12px',
                justifyContent:'center',
                height:'auto',
                margin:'0 auto',
                paddingTop:'30px',
                paddingBottom:'30px',
                marginTop:'30px',
                width:'600px',
                [theme.breakpoints.down('xs')]:{
                    width:'330px'
                }
            },
            input:{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f2d2aa"
                },
                "& .MuiInputLabel-outlined": {
                    color: "#f2d2aa",
                    fontFamily:'Poppins'
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f2d2aa"
                }
            },
            social:{
                margin:'0 auto',
                display:'flex',
                marginTop:'3em',
                width:'45rem',
                [theme.breakpoints.down('xs')]:{
                    width:'auto'
                }
            },
            form:{
                display:'flex',
                width:'225px',
                [theme.breakpoints.down('xs')]:{
                    width:'145px'
                }
            },
            formMsg:{
                display:'flex',
                width:'470px',
                [theme.breakpoints.down('xs')]:{
                    width:'310px'
                }
            },
            font:{
                fontFamily:'Poppins',
                color:'#f2d2aa',
                fontSize:'30px',
                [theme.breakpoints.down('xs')]:{
                    fontSize:'24px'
                }
            },
            font1:{
                fontFamily:'Poppins',
                color:'#f2d2aa',
                opacity:0.7,
                fontSize:'13px',
                [theme.breakpoints.down('xs')]:{
                    fontSize:'10px',
                    marginLeft:'3px'
                }
            },
            container:{
                width:'45rem',
                [theme.breakpoints.down('xs')]:{
                    width:'auto'
                }
            },
            end:{
                display:'flex',
                marginLeft:'10px',
                justifyContent:'center'
            },
            contactCard:{
                display:'flex',
                alignItems:'center',
                background:'hsla(0,0%,100%,.15)',
                borderRadius:6,
                paddingLeft:'30px',
                paddingRight:'30px',
                justifyContent:'center',
                height:'auto',
                margin:'0 auto',
                paddingTop:'12px',
                paddingBottom:'12px',
                marginTop:'30px',
                marginBottom:'30px',
                [theme.breakpoints.down('xs')]:{
                    display:'flex',
                    alignItems:'center',
                    background:'hsla(0,0%,100%,.15)',
                    borderRadius:6,
                    paddingLeft:'50px',
                    paddingRight:'50px',
                    justifyContent:'center',
                    height:'auto',
                    margin:'0 auto',
                    paddingTop:'30px',
                    paddingBottom:'30px',
                    marginTop:'30px'
                }
            }
        }
    })

    const classes=useStyle()
    const theme=useTheme()
    const xsMatch=useMediaQuery(theme.breakpoints.down('xs'))

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_5ev8a9l', 'template_iwup3w6', e.target, 'user_icxkvcWZfbrdTPSNYP14v')
            .then((result) => {
                console.log(result.text);
                setOkSnack(true)
                setLoading(false)
            }, (error) => {
                console.log(error.text);
                setErrorSnack(true)
                setLoading(false)
            });
        e.target.reset()
    }

    const [name, setName] = useState('');
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const [button,setButton]=useState(false)
    const [okSnack,setOkSnack]=useState(false)
    const [errorSnack,setErrorSnack]=useState(false)
    const [loading,setLoading]=useState(false)

    const nameInputHandler=(event)=>{
        setName(event.target.value)
    }

    const emailInputHandler=(event)=>{
        setEmail(event.target.value)
    }

    const messageInputHandler=(event)=>{
        setMessage(event.target.value)
    }

    useEffect(()=>{
        if(name.length>0&&email.length>0&&message.length>0){
            setButton(true)
        }else {
            setButton(false)
        }
    },[name,email,message])

    const largeContact=<div className={classes.social}>
        <div className={classes.contactCard}>
            <img src={qrCode} alt="qrCode" style={{height:'56px',width:'56px'}}/>
            <img src={wechat} alt="wechat" style={{height:'36px',width:'36px',backgroundColor:'white',borderRadius:7,marginLeft:'20px'}}/>
            <div style={{color:'#f2d2aa',fontFamily:'poppins',marginLeft:'6px'}}>
                WeChat
            </div>
        </div>
        <div className={classes.contactCard} style={{width:'200px',marginLeft:'20px',marginRight:'20px'}}>
            <img src={emailIcon} alt="email" style={{height:'36px',width:'36px'}}/>
            <div style={{color:'#f2d2aa',fontFamily:'poppins',marginLeft:'6px'}}>
                836081346@qq.com
            </div>
        </div>
        <div className={classes.contactCard} style={{marginBottom:'30px'}}>
            <GitHubButton href="https://github.com/ChenxuDeng" data-color-scheme={"no-preference: light; light: light; dark: dark;"} data-size={'large'}>
                @ChenxuDeng
            </GitHubButton>
        </div>
    </div>

    const xsContact=<div style={{marginTop:'20px',display:'flex',justifyContent:'center'}}>
        <div>
            <div className={classes.contactCard} >
                <img src={emailIcon} alt="email" style={{height:'36px',width:'36px'}}/>
                <div style={{color:'#f2d2aa',fontFamily:'poppins',marginLeft:'6px'}}>
                    836081346@qq.com
                </div>
            </div>
            <div className={classes.contactCard} style={{marginBottom:'30px'}}>
                <GitHubButton href="https://github.com/ChenxuDeng" data-color-scheme={"no-preference: light; light: light; dark: dark;"} data-size={'large'}>
                    @ChenxuDeng
                </GitHubButton>
            </div>
            <div className={classes.contactCard} style={{marginBottom:'20px'}}>
                <img src={qrCode} alt="qrCode" style={{height:'100px',width:'100px'}}/>
                <img src={wechat} alt="wechat" style={{height:'36px',width:'36px',backgroundColor:'white',borderRadius:7,marginLeft:'20px'}}/>
                <div style={{color:'#f2d2aa',fontFamily:'poppins',marginLeft:'6px'}}>
                    WeChat
                </div>
            </div>
        </div>
    </div>


    return (
        <React.Fragment>
            <div style={{margin:'0 auto',marginTop:'16em',textAlign:'center'}} className={classes.title}>
                Leave a Message
            </div>
            <div style={{margin:'0 auto'}}>
                <div className={classes.card}>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div style={{display:'flex'}}>
                            <TextField id="outlined-basic"
                                       label="Your Name"
                                       variant="outlined"
                                       name={'from_name'}
                                       style={{marginRight:'20px'}}
                                       className={[classes.input,classes.form]}
                                       InputProps={{ style: {fontFamily:'Poppins',color:'#f2d2aa'} }}
                                       value={name}
                                       onChange={nameInputHandler}
                                       autoComplete={'off'}
                                       required
                            />
                            <TextField id="outlined-basic"
                                       label="Your Email"
                                       variant="outlined"
                                       name={'user_email'}
                                       type={'email'}
                                       className={[classes.input,classes.form]}
                                       InputProps={{ style: {fontFamily:'Poppins',color:'#f2d2aa'} }}
                                       value={email}
                                       onChange={emailInputHandler}
                                       autoComplete={'off'}
                                       required
                            />
                        </div>
                        <div style={{marginTop:'20px',marginBottom:'20px'}}>
                            <TextField name="message"
                                       label={'Your Message'}
                                       multiline
                                       variant="outlined"
                                       rows={4}
                                       className={[classes.input,classes.formMsg]}
                                       InputProps={{ style: {fontFamily:'Poppins',color:'#f2d2aa'} }}
                                       value={message}
                                       onChange={messageInputHandler}
                                       autoComplete={'off'}
                                       required
                            />
                        </div>
                        <div style={{textAlign:'center'}}>
                            <Button type={'submit'} variant={'contained'} style={{marginRight:'3.6px',fontFamily:'Poppins',backgroundColor:'#f2d2aa'}} disabled={!button} onClick={()=>{setLoading(true)}}>
                                {loading?<CircularProgress style={{height:'23px',width:'23px'}}/>:'Send'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className={classes.end}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        The End
                    </div>
                    <div className={classes.font}>
                        Thank you for visiting
                    </div>
                    <div style={{marginTop:'16px'}} className={classes.font1}>
                        I love creating websites and apps,
                    </div>
                    <div className={classes.font1}>
                        Because I enjoy the unique immersion feeling of coding.
                    </div>
                    <div className={classes.font1}>
                        I can speak both English and Mandarin fluently,
                    </div>
                    <div className={classes.font1}>
                        I am currently looking for my first job.
                    </div>
                    <div className={classes.font1}>
                        Feel free to contact me.
                    </div>
                </div>
            </div>
            {xsMatch?xsContact:largeContact}
            <Snackbar open={okSnack} onClose={()=>{setOkSnack(false)}} autoHideDuration={6000} anchorOrigin={{horizontal:'center',vertical:'top'}}>
                <Alert variant="filled" severity="success" onClose={()=>{setOkSnack(false)}}>
                    Got it! I will reply your message to your email ASAP!
                </Alert>
            </Snackbar>
            <Snackbar open={errorSnack} onClose={()=>{setErrorSnack(false)}} autoHideDuration={6000} anchorOrigin={{horizontal:'center',vertical:'top'}}>
                <Alert variant="filled" severity="error" onClose={()=>{setErrorSnack(false)}}>
                    Ops! Don't look at me, I don't know what happened...
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}

export default Contact;