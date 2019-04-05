import axios from 'axios'

const getGridData = data => axios
  .post(`${process.env.PUBLIC_URL}/api/reefs`, { data })
  .then(res => res.data)
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error)
    return error
  })

export default getGridData
