const fs = require('fs')

global.owner = "6283837273287" //owner number
global.footer = "Sanzy" //footer section
global.namabot = "God Of War" //nama bot
global.status = true //"self/public" section of the bot
global.namaowner = "Sanzyy"
global.idsaluran = "120363370515754589@newsletter"
global.imgmenu = "https://files.catbox.moe/afxbja.png"

//======[ Setting Event ]======//
global.dana = `083116774019`
global.gopay = `083116774019`
global.ovo = "-"
global.shope = "-"
global.bank = "-"
global.qris = fs.readFileSync("./media/qris.jpg")
global.namastore = "*Sanzyy Developer*"
global.lol = "";
global.msg = {
    owner: "You Are Not Owner",
    premium: "You Are Not Premium Member",
    admin: "You Are Not Admin",
    adminbot: "Me Not Admin",
    priv: "khusus pribadi",
    bot: "khusus nomer bot"
}
global.autoTyping = false // ubah jadi true untuk menyalakan auto typing

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
