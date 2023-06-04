import axios from "axios";
import {  renderFilteredPlace  } from "./render";

export const getFilteredPlace = async(type, temperature, flight) => {
    try {
        const res = await axios({
            method: 'GET',
            url:'/api/v1/places',
            params:{
                type,
                temperature,
                flight
            }
        })
        if(res.data.status === ('Success')){
            const data  = res.data.data.doc
            const{imageUrl, name, description} = {...data}
            renderFilteredPlace(imageUrl, name, description)
        }else{
            console.log('No place found')
        }
    } catch (error) {
        console.log(error)
    }

}