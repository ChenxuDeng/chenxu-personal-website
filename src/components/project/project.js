import React from 'react';
import quote from "../../assets/quote1.png";
import {makeStyles} from "@material-ui/core";
import burgerBuilder from '../../assets/burger builder.png'
import jianshu from '../../assets/jianshu.png'
import zhihu from '../../assets/zhihu.png'
import wow from '../../assets/wow.png'
import jingqi from '../../assets/jingqi.png'
import GitHubButton from "react-github-btn";

function Project(props) {
    const useStyle=makeStyles(()=>{
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
                fontWeight:'bold'
            },
            imageFrame:{

            },
            img:{
                width:'300px',
                borderRadius:6,
                opacity:0.9,
                '&:hover':{
                    opacity:1
                }
            },
            appImage:{
                width:'183px',
                borderRadius:6,
                opacity:0.9,
                '&:hover':{
                    opacity:1
                }
            }
        }
    })

    const classes=useStyle()

    return (
        <React.Fragment>
            <div style={{display:'flex',width:'100%',position:'relative',justifyContent:'center',marginTop:'16em'}}>
                <div style={{width:'80%',position:'relative',height:'30px'}}>
                    <img src={quote} alt="quote" style={{width:'26px'}}/>
                    <div style={{fontFamily:'Poppins',color:'#f2d2aa',fontSize:'36px',marginTop:'10px'}}>
                        Live and learn
                    </div>
                    <div style={{fontFamily:'Poppins',color:'#f2d2aa',fontSize:'21px',marginTop:'10px'}}>
                        I see myself as a beginner since developer is a job that requires constant learning (actually it is just because I am a noob... ).
                    </div>
                </div>
            </div>
            <div className={classes.title}>
                Show Case
            </div>
            <div style={{display:'flex',justifyContent:'center',marginLeft:'16px'}}>
                <div style={{marginRight:'10px'}}>
                    <div className={classes.imageFrame} style={{marginBottom:'6px'}}>
                        <a href="https://mui-burger.web.app/" rel={'noopener noreferrer'} target={'_blank'}>
                            <img src={burgerBuilder} alt="burgerBuilder" className={classes.img}/>
                        </a>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'6px',opacity:0.9}}>
                            <GitHubButton href="https://github.com/ChenxuDeng/MuiBurgerBuilder" data-color-scheme={"no-preference: light; light: light; dark: dark;"}>
                                Burger Builder @ChenxuDeng
                            </GitHubButton>
                        </div>
                    </div>
                    <div className={classes.imageFrame} >
                        <a href="https://jianshu-1d0d3.web.app/" rel={'noopener noreferrer'} target={'_blank'}>
                            <img src={jianshu} alt="jianshu" className={classes.img}/>
                        </a>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'6px',opacity:0.9}}>
                            <GitHubButton href="https://github.com/ChenxuDeng/jianshu" data-color-scheme={"no-preference: light; light: light; dark: dark;"}>
                                JianShu @ChenxuDeng
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
                                ZhiHu @ChenxuDeng
                            </GitHubButton>
                        </div>
                    </div>
                    <div className={classes.imageFrame} >
                        <a href="https://world-of-warcraft-61160.web.app/" rel={'noopener noreferrer'} target={'_blank'}>
                            <img src={wow} alt="wow" className={classes.img}/>
                        </a>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'6px',opacity:0.9}}>
                            <GitHubButton href="https://github.com/ChenxuDeng/wow" data-color-scheme={"no-preference: light; light: light; dark: dark;"}>
                                wow @ChenxuDeng
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
                            Jingqi App @ChenxuDeng
                        </GitHubButton>
                    </div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{fontFamily:'Poppins',color:'#f2d2aa',border:'2px solid #f2d2aa',borderRadius:6,padding:'10px',marginTop:'30px',marginBottom:'30px'}}>
                    My way of practicing and learning is to imitate or clone famous projects, mainly because it saves the time of design, and they have a lot of interesting features for me to learn from recreating them.
                </div>
            </div>
        </React.Fragment>
    );
}

export default Project;