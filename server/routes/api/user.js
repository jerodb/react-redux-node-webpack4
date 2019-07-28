const getInfo = async (req, res) => {
  const userInfo = req.body

  console.log('User info received: ', userInfo)

  // Do something with the user info.

  res.json('Response')
}

export default { getInfo }
