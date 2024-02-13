import Image from 'next/image'
import styles from './CurrentWeather.module.scss'

// hooks
import useGetDate from '@/hooks/getDate';

//assets
import sunIcon from '../../../public/weather-icons/sunny.svg'
import cloudIcon from '../../../public/weather-icons/cloudy.svg'
import rainIcon from '../../../public/weather-icons/rainy.svg'
import useGetTemp from '@/hooks/getTemp';

export default function CurrentWeather(props: ICurrentWeatherProps) {
    const {dt, name, wind, main, weather} = props;
    const {formattedDay, formattedDate} = useGetDate(dt);  
    const {convertedTemp} = useGetTemp(main.temp)
    
    return (
        <div className={styles.current__weather}>
            <h3>{name}</h3>
            <div className={styles.current__weather__container}>
                <div className={styles.temp__container}>
                    <p>{convertedTemp}°</p>
                    <p>celcius</p>
                </div>
                <Image 
                    src={ 
                        weather[0].main === 'Clouds' ? cloudIcon :
                        weather[0].main === 'Rain' ? rainIcon : sunIcon
                    } 
                    alt={weather[0].main.toLowerCase() + '-img'}
                />
                <div className={styles.temp_details__container}>
                    <div className={styles.mobile_temp__container}>
                        <p>{convertedTemp}°</p>
                        <p>celcius</p>
                    </div>
                    <div className={styles.details__container}>
                        <h4>{weather[0].main}</h4>
                        <p>Wind {wind.speed}km/h</p>
                        <div>
                            <h6>Last Updated</h6>
                            <p>{formattedDay}</p>
                            <p>{formattedDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}