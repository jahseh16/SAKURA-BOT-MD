import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─

// BETA: Opcional, número del bot directamente
global.botNumber = ''; // Ejemplo: 525218138672

//──ׄ✞ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─

global.owner = [
  ['51935040872', '🜲 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 👻', true],
  ['573228284824']
];

global.mods = [];
global.suittag = ['51935040872'];
global.prems = [];

//─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─

global.libreria = 'Baileys';
global.baileys = 'V 6.7.8';
global.vs = '2.0.0';
global.languaje = 'Español';
global.nameqr = 'Sakura-Bot-MD';
global.sessions = 'blackSession';
global.jadi = 'blackJadiBot';
global.blackJadibts = true;

//─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─



global.packsticker = `♾ ━━━━━━━━\n├ ɓσƭ:\n├ ρяοριєταяιο:\n├ ƒєϲнα ∂є ϲяєαϲιόи:\n├ нοяα:\n♾━━━━━━━━`
global.packname = `𝕭𝖑𝖆𝖈𝖐 𝕮𝖑𝖔𝖛𝖊𝖗 ☘`
global.author = `♾━━━━━━━━\n⇝͟͞SAKURA ☘͟ ⋆\n⇝ ۵-̱̅ⁱ𝐓𝐇𝐄 JAHSEH-͞ˍ\n⇝ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}\n⇝ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')} \n♾━━━━━━━━\n\n\n\nѕτιϲκєя ϐγ: ৎ𝕭𝖑𝖆𝖈𝖐 𝕮𝖑𝖔𝖛𝖊𝖗 ☘͟ `;
global.wm = 'JAHSEH ☘';
global.wm = 'Sakura ☘';
global.titulowm = 'Sakura ☘';
global.igfg = 'ᥫ𝐓𝐇𝐄 JAHSEH';
global.botname = 'Sakura ☘';
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ the Legends ⚡';
global.textbot = 'SAKURA  : 𝐓𝐇𝐄 JAHSEH ';
global.gt = '͟͞SAkura 𝕮𝖑𝖔𝖛𝖊𝖗 ☘͟͞';
global.namechannel = 'SAKURA / 𝐓𝐇𝐄 JAHSEH';

//─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─

global.moneda = 'monedas';

global.gp4 = 'https://chat.whatsapp.com/KpY3oQQVeCMJwfKNEmJHR8';
global.gp1 = 'https://chat.whatsapp.com/IfV1FdKBdCuFeZitzNKZnb';
global.gp2 = 'https://chat.whatsapp.com/KpY3oQQVeCMJwfKNEmJHR8';
global.channel = 'https://whatsapp.com/channel/0029Va25HLl9WtBvS2wfZ32x';
global.channel2 = 'https://whatsapp.com/channel/0029Va25HLl9WtBvS2wfZ32x';
global.yt = 'https://www.youtube.com/@El_JAHSEH17';
global.md = 'https://github.com/jahseh16';
global.correo = '';
global.cn = 'https://whatsapp.com/channel/0029Va25HLl9WtBvS2wfZ32x';

//─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    ...(false ? { remoteJid: '51935040872-1625305606@g.us' } : {})
  },
  message: {
    orderMessage: {
      itemCount: -999999,
      status: 1,
      surface: 1,
      message: global.packname,
      orderTitle: 'Bang',
      thumbnail: global.catalogo,
      sellerJid: '0@s.whatsapp.net'
    }
  }
};

global.ch = {
  ch1: '120363307694217288@newsletter',
};
global.multiplier = 70;

//─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─

global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;

//─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(${file}?update=${Date.now()});
});
