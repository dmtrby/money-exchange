// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var k = 0;
    var obj = {};
    if (currency > 10000) {
      obj['error'] = "You are rich, my friend! We don\'t have so much coins for exchange";
     return obj;
    }
    if (currency <= 0) {
      return obj;
    }
   while (currency >= 50) {
     currency -= 50; k++;
   }
   if (k > 0) obj['H'] = k;
   k = 0;
   while (currency >= 25) {
     currency -= 25; k++;
   }
   if (k > 0) obj['Q'] = k;
   k = 0;
   while (currency >= 10) {
     currency -= 10; k++;
   }
   if (k > 0) obj['D'] = k;
   k = 0;
   while (currency >= 5) {
     currency -= 5; k++;
   }
   if (k > 0) obj['N'] = k;
   k = 0;
   while (currency > 0) {
         currency -= 1; k++;
   }
   if (k > 0) obj['P'] = k;
   k = 0;
   return obj;
}
