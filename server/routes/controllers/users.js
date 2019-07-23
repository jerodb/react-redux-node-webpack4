import uuid from 'uuid/v4'
import { Users } from '../../models'

const setUser = (req, res) => {
  const { authId } = req.body

  const raw = true
  const where = { authId }
  const idStr = uuid()
  const id = Buffer.from(idStr.replace(/-/g, ''), 'hex')

  let datetime = new Date()
  datetime = JSON.stringify(datetime).split('.')[0].replace('T', ' ')

  // Set the default properties if it doesn't exist
  const defaults = {
    id,
    idStr,
    authId,
    createdAt: datetime,
    updatedAt: datetime
  }

  try {
    Users.findOrCreate({
      raw,
      where,
      defaults
    }).then(result => {
      console.log('results: ', result)
      return res.json(true)
    })
  } catch (err) {
    console.log('ERROR - Users.findOrCreate:', err)
    return res.json(false)
  }
}

export default { setUser }
