import { useEffect, useState } from "react";

export default function useGetDate(unixTime: number) {
    const date = new Date(unixTime * 1000);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];

    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    const editedMonth = month < 10 ? `0${month}` : month;
    const editedDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    const formattedDay = day.toUpperCase();
    const formattedDate = `${editedMonth}/${editedDay}/${year}`;

    return {formattedDay, formattedDate}
}