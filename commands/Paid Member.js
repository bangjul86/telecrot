/*CMD
  command: Paid Member
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

User.setProperty("plan",message,"string");
Bot.sendMessage("⚛️ *ACCOUNT ID:*"+ user.id +"\n-----------------status-----------------\n•• *Planned* <plan>\n•• *Status* Active!");
