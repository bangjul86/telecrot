/*CMD
  command: /kirimchat
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Pesan

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "💭_cs Nita_" + "\n" + message + "";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")
