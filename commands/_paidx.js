/*CMD
  command: /paidx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ENTER THE CURRENCY

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("cur",message,"text");
Bot.runCommand("/slx");
