/*CMD
  command: /dataplan
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🛍️*Detail Paket Berlangganan*
Planned : Paket 30 Hari
Harga : Rp200.000,-

*Total Pembayaran :* Rp200.000,-
  ANSWER
  keyboard: ✅ Konfirmasi,❎ Ubah Paket
  aliases: 
CMD*/

let wood = Libs.ResourcesLib.userRes("wood");
let rnd = Libs.Random; 
Libs.ResourcesLib.userRes("wood").add(
  rnd.randomInt(123, 125) );

if(data.message=="✅ Konfirmasi"){
  Bot.sendKeyboard("🛒 Konfirmasi Pembayaran","🛒*Subscription Package Payment*\n--------------------------note------------------------\n*Invoice No* #"+ wood.value() + "\n\n*Planned: *Paket 30 hari\n💳 Total Pembayaran Rp200.000\n\n🏧 *Payment to:*\n\n• Bank Mandiri `1130017023585`\nA.n Christof\n\n• Bank Danamon `003636021408`\nA.n Christof\n\n• Bank Jago `103475085724`\nA.n Christof\n\n--------------------Arta Forex--------------------");
  }else{
Bot.runCommand("🛒 Upgrade Plan");
}
