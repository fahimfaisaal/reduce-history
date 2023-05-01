const fs = require('fs')

const path = __dirname + '/.zsh_history'
const history = fs.readFileSync(path, 'utf-8')

const commandMap = history.split(/\n/).reduce((map, cmd) => {
  const [serialNumber, command] = cmd.split(':0;')
  return map.set(command, serialNumber)
}, new Map())

let reduced_history = ''

for (const [command, serialNumber] of commandMap) {
  reduced_history += `${serialNumber}:0;${command}\n`
}

fs.writeFileSync(path, reduced_history)
