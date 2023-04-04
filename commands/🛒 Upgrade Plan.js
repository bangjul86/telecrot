/*CMD
  command: 🛒 Upgrade Plan
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

Bot.sendMessage("🛍️ *UPGRADE PLAN*\n_Plan Benefits_\n• _Live Signal Alerts_\n• _Stable Profit 99% 3000 - 3500 pips 1 bulan_\n• _Low risk 1%_\n• _Up to 10 Signal per hari_\n• _Real time signal harian_");
Bot.sendKeyboard("💹 Paket 30 Hari (Rp200.000),💹 Paket 90 hari (Rp500.000)\n💹 Paket Unlimited (Rp2.500.000),🔙 Back","🛍️ *Pilih Paket Berlangganan*");
Bot.runCommand("/upgradepkt");
