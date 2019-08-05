import os from 'os'

const getServerInfo = (req, res) => {
  const response = [
    {
      name: 'arch',
      value: os.arch(),
    },
    {
      name: 'cpus',
      value: `${os.cpus().length} cpus ${os.cpus()[0].model}`,
    },
    {
      name: 'hostname',
      value: os.hostname(),
    },
    {
      name: 'platform',
      value: os.platform(),
    },
    {
      name: 'memory',
      value: os.totalmem(),
    }
  ]

  res.json(response)
}

export default { getServerInfo }
