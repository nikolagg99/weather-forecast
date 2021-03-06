import React, {Component} from 'react';
import DayCard from '../components/DayCard';
import './WeekContainerStyle.css'
import SearchBox from '../components/SearchBox';
import BeginPage from '../components/beginPage';
import {openWeatherMapAPI} from '../ApiKeys';

class WeekContainer extends Component{
    constructor(){
        super()
        this.state = {
            fullData: [],
            dailyData: [],
            searchfield: ''
        }
    }

    getWeatherAPI = async(e) => {
            e.preventDefault();
            const city = e.target.elements.city.value
            if(city){
                var weatherAPIURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${openWeatherMapAPI}`;
                fetch(weatherAPIURL)
                .then(res => res.json())
                .then(data => {
                    const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00")) 
                     this.setState({
                         fullData: data.list,
                         dailyData: dailyData,
                         searchfield: city
                     }, () => console.log(this.state))
                })     
            }else{
                console.log('no city')
            }
    }

    formatDayCards = () => {
        return(
            this.state.dailyData.map((reading, i) => <DayCard reading = {reading} key = {i}/>)
        )
    }

    render(){
        if(this.state.searchfield){
            return(      
                <div className='example'>   
                    <h1 className='tc title'>Weather Forecast</h1>
                    <SearchBox searchChange = {this.getWeatherAPI}/>
                    <h3 className='tc cityname'>{this.state.searchfield}</h3>
                    {this.formatDayCards()}
                    <footer className='tc'>Weather forecast created by Nikola Georgiev</footer>
                </div>
            )
        }else{
            return(
                <div className='example'>   
                    <h1 className='tc title'>Weather Forecast</h1>
                    <SearchBox searchChange = {this.getWeatherAPI}/>
                    <h3 className='tc cityname'>{this.state.searchfield}</h3>
                    <BeginPage/>
                    <footer className='tc'>Weather forecast created by Nikola Georgiev</footer>
                </div>
            )
        }
        
    }
}

export default WeekContainer;
