/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.pwd){
  Bot.sendMessage("Selamat datang kembali..");
 }
Bot.sendKeyboard("🔐 Daftar,🔏 Authorization","💹 *ARTA FOREX*\n_Technical analysis & Fundamental_\n•• _Live Signal Alerts_\n•• _Up to 10 Signal / hari_\n•• _Stable Profit 99% 200 - 250 pips / hari_\n•• _Low risk 1%_\n•• _Mendukung Semua Broker_\n•• _Free Support_");
Bot.sendMessage("📜 *Gratis Signal* /Daftar Sekarang!");
