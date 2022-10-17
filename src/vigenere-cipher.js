const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true){
    this.reverse = reverse
  }

  encrypt(message, key) {
    if (!message || !key) { throw new Error('Incorrect arguments!') }
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = []
    let keyString = ''
    while(keyString.length < message.length) {
      keyString.length >= message.length? keyString.slice(0, message.length) : keyString = keyString + key
    }
    keyString = keyString.toUpperCase()
    message = message.toUpperCase()
    let j = 0

    for( let i=0; i<message.length; i++){
      if(alphabet.includes(message[i])){
        let indexLetter = (alphabet.indexOf(message[i]) + alphabet.indexOf(keyString[j])) % alphabet.length
        result.push(alphabet[indexLetter])
        j+=1
      } else {
        result.push(message[i])
      }
    }
    return this.reverse? result.join('') : result.reverse().join('')
  }  

  decrypt(message, key) {
    if (!message || !key) { throw new Error('Incorrect arguments!') }
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = []
    let keyString = ''
    while(keyString.length < message.length) {
      keyString.length >= message.length? keyString.slice(0, message.length) : keyString = keyString + key
    }

    keyString = keyString.toUpperCase()
    message = message.toUpperCase()
    let j = 0

    for( let i=0; i<message.length; i++){
      if(alphabet.includes(message[i])){
        let indexLetter = (alphabet.indexOf(message[i]) - alphabet.indexOf(keyString[j]) + alphabet.length) % alphabet.length
        result.push(alphabet[indexLetter])
        j+=1
      } else {
        result.push(message[i])
      }
    }
    return this.reverse? result.join('') : result.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
