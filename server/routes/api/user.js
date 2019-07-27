import uuid from 'uuid/v4'
import { setUserService } from '../../services'

const setUser = async (req, res) => {
  const { authId } = req.body

  const idStr = uuid()
  const id = Buffer.from(idStr.replace(/-/g, ''), 'hex')

  let datetime = new Date()
  datetime = JSON.stringify(datetime).split('.')[0].replace('T', ' ')

  const data = {
    authId,
    id,
    idStr,
    datetime
  }

  const userSet = await setUserService(data)

  if (userSet && userSet.error) {
    // eslint-disable-next-line no-console
    console.log('setUserService Error:', userSet.error)
  }

  res.json(userSet)
}

export default { setUser }
