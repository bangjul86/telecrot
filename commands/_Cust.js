/*CMD
  command: /Cust
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
💭_cs Nita_
Jelaskan, apa yang bisa dibantu?
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 💭 cust. service
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("maaf, cust service sedang offline!");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "Message from: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("Pesan Terkirim!");
