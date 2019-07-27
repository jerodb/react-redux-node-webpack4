import fs from 'fs'
import path from 'path'

const callback = (req, res) => {
  const template = path.join(__dirname, '..', '..', '..', 'dist', 'index.html')

  // Loads template
  fs.readFile(template, 'utf8', (err, document) => {
    if (err) throw err

    return res.send(document)
  })
}

export default callback
