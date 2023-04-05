/*CMD
  command: 🔖 My Planned
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
  Bot.sendMessage("⛔ akun anda belum diotorisasi!")
  return
}
if(user.telegramid == 2087417505){
Bot.runCommand("Paid Member")
}else{
Bot.runCommand("Paket Gratis");
}
