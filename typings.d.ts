interface ISearchInputProps {
    searchedCity?: string; 
    setSearchedCity?: any; 
    setFormattedCity?: any;
}

interface ICurrentWeatherProps {
    cod: string;
    dt: number;
    name: string;
    wind: {
        speed: number;
    }
    main: {
        temp: number;
    }
    weather: {
        description: string;
        main: string;
    }[];
}

interface IWeatherProps {
    description: string;
    main: string;
}

interface IForecastProps {
    list: IListProps[];
}

interface IListProps {
    main: {
        temp: number
    }
    wind: {
        speed: number;
    };
    dt: number;
    weather: IWeatherProps[]; 
}