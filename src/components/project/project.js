import React from 'react';
import quote from "../../assets/quote1.png";
import {makeStyles} from "@material-ui/core";
import burgerBuilder from '../../assets/burger builder.png'
import jianshu from '../../assets/jianshu.png'
import zhihu from '../../assets/zhihu.png'
import wow from '../../assets/wow.png'
import jingqi from '../../assets/jingqi.png'
import GitHubButton from "react-github-btn";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Project(props) {
    const useStyle=makeStyles((theme)=>{
        return {
            title:{
                fontFamily:'Poppins',
                textAlign:'center',
                color:'#f2d2aa',
                fontSize:'31px',
                marginBottom:'2em',
                textDecoration:'underline',
                textDecorationColor:'#f2d2aa',
                marginTop:'16em',
                fontWeight:'bold',
                [theme.breakpoints.down('xs')]:{
                    fontSize: '20px',
                    textDecoration: 'none'
                }
            },
            imageFrame:{

            },
            img:{
                width:'300px',
                borderRadius:6,
                opacity:0.9,
                '&:hover':{
                    opacity:1
                },
                [theme.breakpoints.down('xs')]:{
                    width:'120px'
                }
            },
            appImage:{
                width:'183px',
                borderRadius:6,
                opacity:0.9,
                '&:hover':{
                    opacity:1
                },
                [theme.breakpoints.down('xs')]:{
                    width:'86px'
                }
            },
            quote:{
                width:'26px',
                [theme.breakpoints.down('xs')]:{
                    width:'20px'
                }
            },
            title1:{
                fontFamily:'Poppins',
                color:'#f2d2aa',
                fontSize:'36px',
                marginTop:'10px',
                [theme.breakpoints.down('xs')]:{
                    fontSize: '26px'
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
            explain:{
                fontFamily:'Poppins',
                color:'#f2d2aa',
                border:'2px solid #f2d2aa',
                borderRadius:6,
                padding:'10px',
                marginTop:'30px',
                marginBottom:'30px',
                width:'46rem',
                [theme.breakpoints.down('xs')]:{
                    fontSize:'16px',
                    width:'80%'
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
    const theme=useTheme()
    const xsMatch=useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <React.Fragment>
            <div style={{display:'flex',width:'100%',position:'relative',justifyContent:'center',marginTop:'16em'}}>
                <div className={classes.container}>
                    <img src={quote} alt="quote" className={classes.quote}/>
                    <div className={classes.title1}>
                        Live and learn
                    </div>
                    <div className={classes.content}>
                        I see myself as a beginner since developer is a job that requires constant learning (actually it is just because I am too noob... ).
                    </div>
                </div>
            </div>
            <div className={classes.title}>
                Show Case
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{marginRight:'10px'}}>
                    <div className={classes.imageFrame} style={{marginBottom:'6px'}}>
                        <a href="https://mui-burger.web.app/" rel={'noopener noreferrer'} target={'_blank'}>
                            <img src={burgerBuilder} alt="burgerBuilder" className={classes.img}/>
                        </a>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'6px',opacity:0.9}}>
                            <GitHubButton href="https://github.com/ChenxuDeng/MuiBurgerBuilder" data-color-scheme={"no-preference: light; light: light; dark: dark;"}>
                                {xsMatch?'Burger Builder':'Burger Builder @ChenxuDeng'}
                            </GitHubButton>
                        </div>
                    </div>
                    <div className={classes.imageFrame} >
                        <a href="https://jianshu-1d0d3.web.app/" rel={'noopener noreferrer'} target={'_blank'}>
                            <img src={jianshu} alt="jianshu" className={classes.img}/>
                        </a>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'6px',opacity:0.9}}>
                            <GitHubButton href="https://github.com/ChenxuDeng/jianshu" data-color-scheme={"no-preference: light; light: light; dark: dark;"}>
                                {xsMatch?'JianShu':'JianShu @ChenxuDeng'}
                            </GitHubButton>
                        </div>
                    </div>
                </div>
                <div style={{marginRight:'10px'}}>
                    <div className={classes.imageFrame} style={{marginBottom:'6px'}}>
                        <a href="https://zhihu-51aa8.web.app/" rel={'noopener noreferrer'} target={'_blank'}>
                            <img src={zhihu} alt="zhihu" className={classes.img}/>
                        </a>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'6px',opacity:0.9}}>
                            <GitHubButton href="https://github.com/ChenxuDeng/zhihu" data-color-scheme={"no-preference: light; light: light; dark: dark;"}>
                                {xsMatch?'ZhiHu':'ZhiHu @ChenxuDeng'}
                            </GitHubButton>
                        </div>
                    </div>
                    <div className={classes.imageFrame} >
                        <a href="https://world-of-warcraft-61160.web.app/" rel={'noopener noreferrer'} target={'_blank'}>
                            <img src={wow} alt="wow" className={classes.img}/>
                        </a>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'6px',opacity:0.9}}>
                            <GitHubButton href="https://github.com/ChenxuDeng/wow" data-color-scheme={"no-preference: light; light: light; dark: dark;"}>
                                {xsMatch?'wow':'wow @ChenxuDeng'}
                            </GitHubButton>
                        </div>
                    </div>
                </div>

                <div className={classes.imageFrame} >
                    <a href="https://expo.io/@chenxudeng/jingqi-app" rel={'noopener noreferrer'} target={'_blank'}>
                        <img src={jingqi} alt="jingqi" className={classes.appImage}/>
                    </a>
                    <div style={{display:'flex',justifyContent:'center',marginTop:'6px',opacity:0.9}}>
                        <GitHubButton href="https://github.com/ChenxuDeng/jingqi-app" data-color-scheme={"no-preference: light; light: light; dark: dark;"}>
                            {xsMatch?'Jingqi':'Jingqi App @ChenxuDeng'}
                        </GitHubButton>
                    </div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',marginLeft:'10px',marginRight:'10px'}}>
                <div className={classes.explain}>
                    My way of practicing and learning is to imitate or clone famous projects, mainly because it saves the time of design, and they have a lot of interesting features for me to learn from recreating them.
                </div>
            </div>
        </React.Fragment>
    );
}

export default Project;