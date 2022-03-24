import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {setCountries(data)
            console.log(data);
        })
        
    },[])
    return (
        <div>
            <h1>Hello there all countries : {countries.length}</h1>
                <div className='container'>
                    {/* one fo the way of declaring data insite componet */}
                    {
                        countries.map(country =><Country
                            country={country}
                            key = {country.cca3}
                        ></Country>)
                    }   
                </div>

        </div>
        
    );
};


export default Countries;