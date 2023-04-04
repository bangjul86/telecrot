/*CMD
  command: /registrasi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🔏 *Buat Password:*
_diperlukan auto authorization_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("pwd",message,"pwd")
Bot.runCommand("/registrasi_confirm");
