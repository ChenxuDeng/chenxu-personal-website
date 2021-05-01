import React from 'react';
import {Radar} from "react-chartjs-2";
import {makeStyles} from "@material-ui/core";

function Skill(props) {
    const useStyle=makeStyles(()=>{
        return {
            title:{
                fontFamily:'Poppins',
                textAlign:'center',
                color:'#f2d2aa',
                fontSize:'31px',
                marginBottom:'1.6em',
                textDecoration:'underline',
                textDecorationColor:'#f2d2aa',
                fontWeight:'bold'
            }
        }
    })

    const classes=useStyle()

    const data = {
        labels: [
            'Html',
            'Css',
            'JavaScript',
            'ReactJs',
            'ReactNative'
        ],
        datasets: [{
            label: 'score',
            data: [70, 76, 65, 75, 70,],
            fill: true,
            backgroundColor: 'rgba(242, 210, 170, 0.8)',
            borderColor: 'rgba(242, 210, 170,0.9)',
            pointBackgroundColor: 'rgba(242, 210, 170,0.7)',
            pointBorderColor: 'rgba(242, 210, 170,0.7)',
            pointHoverBackgroundColor: '#f2d2aa',
            pointHoverBorderColor: '#f2d2aa',
            pointHitRadius:16
        }]
    }

    const options = {
        scale: {
            ticks: {
                beginAtZero: true,
                backdropColor: 'transparent',
                min:20,
                max:100,
                fontColor:'rgba(242, 210, 170,0.9)',
                fontFamily:'Poppins'
            },
            gridLines: {
                color: 'rgba(255,255,255,0.9)'
            },
            angleLines: {
                color: 'rgba(255,255,255,0.9)'
            },
            pointLabels: {
                fontSize: 23,
                fontColor:'rgba(242, 210, 170)',
                fontFamily:'Poppins'
            }
        },
        maintainAspectRatio: false,
        elements:{
            point:{
                borderWidth:6,
                hoverRadius:7
            },
            line:{
                borderWidth:2
            }
        },
        tooltips:{
            callbacks:{
                title: function(tooltipItem, data) {
                    return data['labels'][tooltipItem[0]['index']];
                }
            }
        },
        responsive: true
    }

    return (
        <React.Fragment>
            <div style={{marginTop:'30em'}}>
                <div className={classes.title}>
                    My Stats
                </div>
                <div style={{display:'flex',justifyContent:'center',marginRight:'3.6em'}}>
                    <div style={{width:600,height:500}}>
                        <Radar data={data} options={options} legend={{display: false}}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skill;