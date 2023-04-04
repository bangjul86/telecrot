/*CMD
  command: /upgradepkt
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("dataplan",message,"string");

if(data.message=="💹 Paket 30 Hari (Rp200.000)"){
  Bot.runCommand("/dataplan")
}
if(data.message=="💹 Paket 90 hari (Rp500.000)"){
    Bot.sendKeyboard("🛒 Upgrade Plan,🔖 My Planned\n🧾 Signal Guide,💭 Cust. Service","⛔ _Paket ini sedang full member!_");
}
if(data.message=="💹 Paket Unlimited (Rp2.500.000)"){
  Bot.sendKeyboard("🛒 Upgrade Plan,🔖 My Planned\n🧾 Signal Guide,💭 Cust. Service","⛔ _Paket ini sedang full member!_");
}
