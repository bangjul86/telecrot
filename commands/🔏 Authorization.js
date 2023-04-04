/*CMD
  command: 🔏 Authorization
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
  Bot.sendMessage("_Authorization failed!_ (akun tidak terdaftar)");
  return
}
// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Pendaftaran sementara di tutup! coba lagi nanti.")
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "NEW MEMBER `" + user.telegramid + "`";


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/
Bot.sendKeyboard("🛒 Upgrade Plan,🔖 My Planned\n🧾 Signal Guide,💭 Cust. Service","Authorization successfully..\nPassword: <pwd> (ID: "+ user.id + ")");

