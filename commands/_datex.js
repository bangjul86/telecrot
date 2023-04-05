/*CMD
  command: /datex
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ENTER THE DATE

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("date",message,"text");
Bot.runCommand("/kirimpaid");
