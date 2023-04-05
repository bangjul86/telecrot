/*CMD
  command: /tpx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ENTER THE T/P

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("tp",message,"text");
Bot.runCommand("/datex");
