import React,{useState,useEffect} from 'react';
import Lottie from "react-lottie-player";
import logo from '../../assets/logo3.png'
import Fade from '@material-ui/core/Fade';
import arrowAnimation from '../../assets/arrow-down.json'
import {useDispatch,useSelector} from "react-redux";
import * as action from '../../store/action/index'
import titleBackground from '../../assets/background.png'
import skillBackground from '../../assets/background1.gif'
import projectBackground from '../../assets/background2.png'
import contactBackground from '../../assets/background3.png'
import {makeStyles} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Title(props) {
    const [opacity,setOpacity]=useState(0.2)

    const useStyle=makeStyles((theme)=>{
        return{
            filter:{
                backgroundColor:'black',
                height:'100%',
                width:'100%',
                position:'fixed',
                opacity:opacity,
                left:0
            },
            background:{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            },
            logo:{
                display:'flex',
                justifyContent:'center',
                marginTop:'7em',
                [theme.breakpoints.down('xs')]:{
                    marginTop: '10em'
                }
            },
            logoImg:{
                width:'450px',
                height:'490px',
                [theme.breakpoints.down('xs')]:{
                    width:'260px',
                    height:'280px'
                }
            }
        }
    })

    const classes=useStyle()
    const theme=useTheme()
    const xsMatch=useMediaQuery(theme.breakpoints.down('xs'))

    const animation=useSelector((state)=>{
        return state.mainPage.animation
    })

    const [background,setBackground]=useState(true)
    const [background1,setBackground1]=useState(false)
    const [background2,setBackground2]=useState(false)
    const [background3,setBackground3]=useState(false)
    const [arrow,setArrow]=useState(true)
    const [elementHeight,setElementHeight]=useState(900)

    let arrowDown=animation?<Fade in timeout={{enter:1600,exit:1600}}><div style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
        {arrow?<Fade in timeout={{enter:1600,exit:1600}}><Lottie play loop animationData={arrowAnimation} style={{width: '160px', marginTop: '6em'}}/></Fade>:null}
    </div></Fade>:null

    const dispatch=useDispatch()

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(action.animationHandler())
        },5000)
    },[dispatch])

    useEffect(()=>{
        const scrollHandler=()=>{
            if(window.pageYOffset>0){
                setArrow(false)
            }else if(window.pageYOffset===0){
                setArrow(true)
            }

            if(window.pageYOffset>=900){
                setBackground(false)
                setBackground1(true)
            }else if(window.pageYOffset<900){
                setBackground(true)
                setBackground1(false)
                setElementHeight(900)
            }

            if(window.pageYOffset>=2000){
                setBackground1(false)
                setBackground2(true)
            }else if(window.pageYOffset<2000 &&window.pageYOffset>900){
                setBackground2(false)
                setElementHeight(2000)
            }

            if(window.pageYOffset>=3400){
                setBackground2(false)
                setBackground3(true)
            }else if(window.pageYOffset<3400 && window.pageYOffset>2000){
                setBackground3(false)
                setElementHeight(3400)
            }

        }

        const scroll=()=>{
            window.requestAnimationFrame(scrollHandler)
        }
        window.addEventListener('scroll',scroll)

        return ()=>{
            window.removeEventListener('scroll',scroll)
        }
    },[background2])


    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }

            setOpacity((1-(elementHeight-scrollY)/elementHeight)*0.8+0.2)

            if(scrollY>=900 && scrollY<=1000){
                setOpacity(0.2)
                setElementHeight(2000)
            }

            if(scrollY>=2000 && scrollY<=2100){
                setOpacity(0.2)
                setElementHeight(3400)
            }

            if(scrollY>=3400){
                setOpacity(0.2)
            }

            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [opacity,elementHeight]);





    return (
        <React.Fragment>
            <div style={{position:'relative'}}>
                {animation?<div style={{position: 'relative', zIndex: -2}}>
                    <div style={{position: 'fixed', height: '100%', width:'100%',left:0}}>
                        {background?<img src={skillBackground} alt="titleBackground" className={classes.background}/>:null}
                        {background1?<img src={titleBackground} alt="titleBackground" className={classes.background}/>:null}
                        {background2?<img src={projectBackground} alt="titleBackground" className={classes.background}/>:null}
                        {background3?<img src={contactBackground} alt="titleBackground" className={classes.background} style={{objectPosition:'0 0'}}/>:null}
                    </div>
                    <div className={classes.filter}>

                    </div>
                </div>:null}

                <div style={{height:'50px'}}> </div>
                <Fade in timeout={{enter:3600,exit:3600}}>
                    <div className={classes.logo}>
                        <img src={logo} alt="logo" className={classes.logoImg}/>
                    </div>
                </Fade>
                {xsMatch?null:arrowDown}
            </div>
        </React.Fragment>
    );
}

export default Title;