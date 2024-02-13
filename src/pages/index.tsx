import Image from "next/image";
import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.scss'

// components
import Header from "@/components/Header";
import CurrentWeather from "@/components/CurrentWeather";
import ForecastWeather from "@/components/ForecastWeather";
import Footer from "@/components/Footer";

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState<ICurrentWeatherProps>();
	const [forecast, setForecast] = useState<IForecastProps>();
	const [searchedCity, setSearchedCity] = useState<string>();
	const [formattedCity, setFormattedCity] = useState<string>();

	useEffect(() => {
		const apiKey = 'a7ca3f3636a835de326df07859bf1e3f';
	
		const fetchData = async () => {
			try {
				const [currentResponse, forecastResponse] = await Promise.all([
					fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${apiKey}`),
					fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${formattedCity}&appid=${apiKey}`)
				]);
		
				const currentData = await currentResponse.json();
				const forecastData = await forecastResponse.json();
		
				setCurrentWeather(currentData);
				setForecast(forecastData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
	
		if (formattedCity) {
		  fetchData();
		}

	}, [formattedCity]);

	return (
		<>
			<div className={styles.content__container}>
				<Header 
					searchedCity={searchedCity}
					setSearchedCity={setSearchedCity}
					setFormattedCity={setFormattedCity}
				/>
				{
					currentWeather && currentWeather.cod !== '404' ? (
						<main>
							{currentWeather && <CurrentWeather {...currentWeather} />}
							{forecast && <ForecastWeather {...forecast} />}
						</main>
					) : (
						<main>
							<div className={styles.empty_data__container}>
								<p>Welcome To</p>
								<h1>Tomo</h1>
								<p>Find out the weather conditions of any city by using the search bar on top.</p>
							</div>
						</main>
					)
				}
			</div>
			<Footer/>
		</>
	);
}
