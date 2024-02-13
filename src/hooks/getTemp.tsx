
export default function useGetTemp(temperature: number) {
    const convertedTemp = Math.round(temperature - 273.15);
    const convertedTempDecimal = Math.round((temperature - 273.15) * 10) / 10;

    return {convertedTempDecimal, convertedTemp}
}