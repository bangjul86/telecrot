/*CMD
  command: /kirimkirims
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Detail Sinyal

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("chat",message,"text");
Bot.sendMessageToChatWithId(6240997727, "<chat>");
Bot.sendMessage("Message was sended")
