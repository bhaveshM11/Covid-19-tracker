import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './covid.css';
import Button from './Button';

const Covid = () => {

    const [states, setStates] = useState()
    const [data, setData] = useState([]);
    const [main, setmain] = useState();
    

	const getcovidData = async () => {
		const data = await axios.get('https://data.covid19india.org/data.json');
        const tempState=[]
        data.data.statewise.map(record => {
	        tempState.push({label:record.state, value:record.state})
        })
        setmain(data.data.statewise)
        setStates(tempState)
        setData(data.data.statewise[0]);
	};
	useEffect(() => {
		getcovidData();
	}, []);

    const onSelectValueChange = (statevalue) => {
       
        console.log('IN CHANGE FUNCTION - ', statevalue)
        const stateDetails = main.filter(record => {return record.state === statevalue})
        setData(stateDetails[0])
    }


	return (
		<>
			<h1>⭕ Live</h1>
            <h2>COVID-19 TRACKER </h2>
            <div className='header'>
            <Button changefunction={onSelectValueChange} states={states} ></Button>
            </div>
			<div className="row row-2">
				<div className="container">
					<div className="container-child green">
							<p className="small">OUR <span className="large">COUNTRY</span></p> 
				            <p className='content'>India</p>
					</div>
                    <div className="container-child green">
							<p className="small">SELECTED <span className="large">STATE</span></p> 
				            <p className='content size'>{data.state}</p>
					</div>
                    <div className="container-child green">
							<p className="small">TOTAL <span className="large">RECOVERED</span></p> 
				            <p className='content'>{data.recovered}</p>
					</div>
				</div>
			</div>
            <div className="row">
            <div className="container">
					<div className="container-child yellow">
							<p className="small">TOTAL <span className="large">DEATH</span></p> 
				            <p className='content'>{data.deaths}</p>
					</div>
                    <div className="container-child yellow">
							<p className="small">TOTAL <span className="large">ACTIVE</span></p> 
				            <p className='content'>{data.active}</p>
					</div>
                    <div className="container-child yellow">
							<p className="small ">LAST <span className="large">UPDATED</span></p> 
				            <p className='content size'>{data.lastupdatedtime}</p>
					</div>
				</div>
                   
			</div>
		</>
	);
};
export default Covid;
