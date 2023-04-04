/*CMD
  command: @
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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function readUserData() {
  if (!user) {
    return
  }

//DATA
  user.link = Libs.commonLib.getLinkFor(user);
  user.balance = Libs.ResourcesLib.userRes("balance").value();
  user.pin = User.getProperty("pin");
  user.hp = User.getProperty("hp");
  user.bet = User.getProperty("bet");
  user.pwd = User.getProperty("pwd");

//DASHBOARD
 user.nama = User.getProperty("nama");
 user.bank = User.getProperty("bank");
 user.rekening = User.getProperty("rekening");
   
  user.addBalance = function(amount) {
    Libs.ResourcesLib.userRes("balance").add(amount)
  }
}

readUserData();
