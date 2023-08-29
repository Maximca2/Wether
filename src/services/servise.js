import axios from "axios"

import { fetchWetherInfo } from '../redux/store/infoWetherReducer'

export const fetchInfoAboutCurInfo = (cords, defaultCord) => {


    return function (dispatch) {

        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${!cords ? defaultCord : cords}?key=5CZ2BY2H5QGRHLPQH48QSJAH9`)
            .then(resp => {
                console.log(resp)
                dispatch(fetchWetherInfo(resp.data))
            })
            .catch(e => {
                console.error(e)
            })
    }

}