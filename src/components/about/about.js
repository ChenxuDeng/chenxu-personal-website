import React from 'react';
import quote from '../../assets/quote1.png'

function About(props) {
    return (
        <React.Fragment>
            <div style={{display:'flex',width:'100%',position:'relative',justifyContent:'center',marginTop:'16em'}}>
                <div style={{width:'80%',position:'relative',height:'30px'}}>
                    <img src={quote} alt="quote" style={{width:'26px'}}/>
                    <div style={{fontFamily:'Poppins',color:'#f2d2aa',fontSize:'36px',marginTop:'10px'}}>
                        Ni Hao
                    </div>
                    <div style={{fontFamily:'Poppins',color:'#f2d2aa',fontSize:'21px',marginTop:'10px'}}>
                        My name is Chenxu Deng, you can call me Jimmy if you want. I am a Chinese frontend developer who is really enjoy the unique immersion feeling of coding.
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;