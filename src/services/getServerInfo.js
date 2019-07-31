const { HOST } = process.env

const handleErrors = response => {
  console.log('fetch response: ', response)

  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response.json()
}

const getServerInfo = () => fetch(`${HOST}/api/server/getInfo`)
  .then(handleErrors)
  .then(res => res)
  .catch(err => {
    console.log('getServerInfo Error: ', err)
    return 'Something went wrong. See the console for more information.'
  })

export default getServerInfo
