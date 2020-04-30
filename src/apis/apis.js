import axios from 'axios';

const closeMechanicUrl = 'http://pma-mechanics/CloseMechanics'
const getOwnersListUrl = 'http://pma-mechanics/OwnersList'

export const closeMechanics = () => {
    return axios.post(closeMechanicUrl, {})
}

export const getOwnerList = () => {
    return axios.post(getOwnersListUrl, {})
}