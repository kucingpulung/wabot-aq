let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • AXIS [083102050562]
│ • Telkomsel/By.u [085155333010]
╰────

╭─「 Donasi • Non Pulsa 」
│ • DANA [085155333010]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
