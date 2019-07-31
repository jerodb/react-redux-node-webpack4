import os from 'os'

const getServerInfo = (req, res) => {
  const response = {
    arch: os.arch(),
    cpus: `${os.cpus().length} cpus ${os.cpus()[0].model}`,
    hostname: os.hostname(),
    platform: os.platform(),
    memory: os.totalmem()
  }

  res.json(response)
}

export default { getServerInfo }
