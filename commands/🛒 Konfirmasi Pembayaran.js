/*CMD
  command: 🛒 Konfirmasi Pembayaran
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🎟️ *Input No.Invoice & metode pembayaran anda*
_contoh: Invoice #123 Bank Mandiri_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.setProperty("invoice",message,"string");
// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendKeyboard("🛒 Upgrade Plan,🔖 My Planned\n🧾 Signal Guide,💭 Cust. Service","maaf, Cust Service kami sedang tidak ditempat..");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "Pembelian\n\n"+ message +"\n`"+user.telegramid + "`";


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendKeyboard("🛒 Upgrade Plan,🔖 My Planned\n🧾 Signal Guide,💭 Cust. Service","Konfirmasi pembayaran terkirim!\ncek status paket anda secara berkala..");
