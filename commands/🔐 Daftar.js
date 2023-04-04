/*CMD
  command: 🔐 Daftar
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /daftar
CMD*/

if(!user.pwd){
  Bot.runCommand("/registrasi")
  return
}
Bot.sendMessage("❗akun terkait sudah terdaftar!");
