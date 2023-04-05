/*CMD
  command: Paket Gratis
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

if(!user.pwd){
  Bot.sendMessage("❌ akun anda tidak terdaftar")
  return
}
User.setProperty("plan",message,"string");
Bot.sendMessage("⚛️ *ACCOUNT ID:*"+ user.id +"\n-----------------status-----------------\n•• *Planned* <plan>\n•• *Status* Active!\n•• *Period* not specified");
