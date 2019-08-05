const { HOST } = process.env

const handleErrors = response => {
  console.log('fetch response: ', response)

  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response.json()
}

const getInfo = () => fetch(`${HOST}api/server/info`)
  .then(handleErrors)
  .then(res => res)
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log('Fetch Server Info Error: ', err)
    return { error: 'Something went wrong. See the console for more information.' }
  })

export default { getInfo }
