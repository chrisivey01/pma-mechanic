import axios from 'axios';

const closeMechanicUrl = 'http://pma-mechanics/CloseMechanics'

export const closeMechanics = () => {
    return axios.post(closeMechanicUrl, {})
}