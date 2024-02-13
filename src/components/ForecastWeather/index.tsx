import { useState } from 'react';
import Image from 'next/image';
import styles from './Forecast.module.scss'

// hooks
import useGetDate from '@/hooks/getDate';
import useGetTemp from '@/hooks/getTemp';

// assets
import smallSunIcon from '../../../public/weather-icons/small-sunny.svg'
import smallCloudyIcon from '../../../public/weather-icons/small-cloudy.svg'
import smallRainIcon from '../../../public/weather-icons/small-rainy.svg'

export default function ForecastWeather(props: IForecastProps) {
    const {list} = props;

    const nextFiveDays: string[] = [];
    const nextFiveDates: string[] = [];

    for (let i = 1; i <= 5; i++) {
        const nextDay = new Date();
        nextDay.setDate(new Date().getDate() + i);

        const {formattedDay, formattedDate} = useGetDate(Math.floor(nextDay.getTime() / 1000)); 

        nextFiveDays.push(formattedDay.slice(0, 3));
        nextFiveDates.push(formattedDate.slice(0, 5))
    }
    
    const convertTemp = (temp: number) => {
        const {convertedTempDecimal} = useGetTemp(temp);
        return convertedTempDecimal
    }
    
    return (
        <div className={styles.forecast__container}>
            <h5>5-DAY FORECAST</h5>
            <div className={styles.forecast_cards__container}>
                {list.slice(0,5).map((item, index) => (
                    <div className={styles.forecast_card} key={index}>
                        <p className={styles.forecast_card__date}>
                            <span>{nextFiveDays[index]} </span> 
                            {nextFiveDates[index]}
                        </p>
                        <Image 
                            src={ 
                                item.weather[0].main === 'Clouds' ? smallCloudyIcon :
                                item.weather[0].main === 'Rain' ? smallRainIcon : smallSunIcon
                            } 
                            alt={item.weather[0].main.toLowerCase() + '-img'}
                        />
                        <p className={styles.forecast_card__temp}>{convertTemp(item.main.temp)}°C</p>
                        <p className={styles.forecast_card__condition}>{item.weather[0].main}</p>
                        <p className={styles.forecast_card__wind}>Wind {item.wind.speed}km/h</p>
                        <p className={styles.forecast_card__desc}>{item.weather[0].description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}