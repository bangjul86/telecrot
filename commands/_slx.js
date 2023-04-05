/*CMD
  command: /slx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ENTER THE S/L

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("sl",message,"text");
Bot.runCommand("/tpx");
