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
if(user.telegramid == 6240997727){
Bot.runCommand("Paid Member")
}else{
Bot.runCommand("Paket Gratis");
}
