import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Avatar from '@material-ui/core/Avatar'
import avatar from '../../assets/avatar.jpg'
import Typography from '@material-ui/core/Typography';
import Lottie from "react-lottie-player";
import soundAnimation from '../../../src/assets/sound.json'
import music from '../../assets/Tokens - The Lion Sleeps Tonight.flac'
import {Fade} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

let audio=new Audio(music)

function Navigation(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            appBar:{
                backgroundColor:'rgba(0,0,0,.4)'
            },
            toolBar:{
                minHeight:'40px',
                paddingLeft:'36px',
                paddingRight:'60px',
                [theme.breakpoints.down('xs')]:{
                    paddingLeft:'10px',
                    paddingRight:'10px'
                }
            },
            buttonContainer:{
                padding:'0px',
                minWidth:'5px',
                alignContent:'center',
                marginLeft:'auto',
                '&:hover':{
                    background:'transparent'
                }
            },
            text:{
                marginLeft:'10px',
                marginTop:'6px',
                fontSize:'12px'
            },
            typography:{
                marginLeft:'6px',
                fontFamily:'Poppins',
                fontWeight:'bold'
            },
            musicDiv:{
                marginLeft:'auto',
                display:'flex',
                alignItems:'center',
                '&:hover':{
                    cursor:'pointer'
                }
            },
            avatar:{
                height: '25px',
                width: '25px'
            }
        }
    })

    const classes=useStyle()
    const theme=useTheme()
    const xsMatch=useMediaQuery(theme.breakpoints.down('xs'))

    const [sound,setSound]=useState(false)
    const [navigation,setNavigation]=useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setNavigation(true)
        },3600)
    },[])

    const musicStart=()=>{
        audio.volume=0.2
        sound?audio.pause():audio.play()
    }

    return (
        <React.Fragment>
            {navigation?<Fade in timeout={{enter:1600,exit:1600}}><AppBar className={classes.appBar} position={'fixed'}>
                <Toolbar classes={{regular: classes.toolBar}}>
                    <Avatar src={avatar} alt={'avatar'} className={classes.avatar} variant={'rounded'}/>
                    <Typography variant={'caption'} style={{marginLeft: '7px',fontFamily:'Poppins',fontWeight:'bold'}}>
                        Chenxu Deng's website
                    </Typography>
                    <div className={classes.musicDiv} onClick={() => {
                        setSound(!sound);
                        musicStart()
                    }}>
                        <Lottie loop animationData={soundAnimation} play={sound}
                                style={{height: '25px', width: '25px'}}/>
                        {xsMatch?null:<Typography variant={'caption'} className={classes.typography}
                        >
                            {!sound ? 'Put on some music' : 'The lion sleeps tonight...'}
                        </Typography>}
                    </div>
                </Toolbar>
            </AppBar></Fade>:null}
        </React.Fragment>
    );
}

export default Navigation;