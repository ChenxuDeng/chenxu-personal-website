import React from 'react';
import Navigation from "../../components/navigation/navigation";
import Title from "../../components/title/title";
import About from "../../components/about/about";
import {useSelector} from "react-redux";
import Project from "../../components/project/project";
import Skill from "../../components/skill/skill";
import Contact from "../../components/contact/contact";

function MainPage(props) {
    const animation=useSelector((state)=>{
        return state.mainPage.animation
    })

    return (
        <React.Fragment>
            <Navigation/>
            <div style={{width:'800px',margin:'0 auto'}}>
                <Title/>
                {animation?<About/>:null}
                {animation?<Skill/>:null}
                {animation?<Project/>:null}
                {animation?<Contact/>:null}
            </div>
        </React.Fragment>
    );
}

export default MainPage;