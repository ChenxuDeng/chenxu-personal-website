import React from 'react';
import quote from '../../assets/quote1.png'
import {makeStyles} from "@material-ui/core";

function About(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            title:{
                fontFamily:'Poppins',
                color:'#f2d2aa',
                fontSize:'36px',
                marginTop:'10px',
                [theme.breakpoints.down('xs')]:{
                    fontSize: '26px'
                }
            },
            quote:{
                width:'26px',
                [theme.breakpoints.down('xs')]:{
                    width: '20px'
                }
            },
            content:{
                fontFamily:'Poppins',
                color:'#f2d2aa',
                fontSize:'21px',
                marginTop:'10px',
                [theme.breakpoints.down('xs')]:{
                    fontSize:'16px'
                }
            },
            container:{
                width:'40rem',
                position:'relative',
                height:'30px',
                [theme.breakpoints.down('xs')]:{
                    width:'80%'
                }
            }
        }
    })

    const classes=useStyle()

    return (
        <React.Fragment>
            <div style={{display:'flex',width:'100%',position:'relative',justifyContent:'center',marginTop:'16em'}}>
                <div className={classes.container}>
                    <img src={quote} alt="quote" className={classes.quote}/>
                    <div className={classes.title}>
                        Ni Hao
                    </div>
                    <div className={classes.content}>
                        My name is Chenxu Deng, you can call me Jimmy if you want. I am a Chinese frontend developer who is really enjoy the unique immersion feeling of coding.
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;