import axios from 'axios'

const getCoralDetail = id => axios
  .post(`${process.env.PUBLIC_URL}/api/coral/detail`, { id })
  .then(res => res.data)
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error)
    return error
  })

export default getCoralDetail
