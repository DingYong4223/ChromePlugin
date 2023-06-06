// 省略公钥和私钥
const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu5XzN8tTO+F4ogqd/NYm
z+AHd5vtXF+r/djog9y+3Cbqw9Uclf3KlcL7p/ijp9+5D/dobr670eJhtKoDwzXV
0ZQuu1iZN2Dk7zsCErvZkvKDIsJ0d20au9JSDav0sPMGZ7SOQO6UhKxZadyFh+Pr
wx8ZbXgT9CGULZYgwqiWafjByFp6Uac83OBwNVbhG7cD7thtjOfcp264fec47o+h
E7pEFwd9ts0xf9kmE9vbcJdYqlki+I7xSyRpSCh78p+AF5IVBqOpe/6Ilh498Nfn
HbxI/PoSpM8z3KOJZIhrtqBYixG7b6PrwvU1XG7ZAfqwyN1GFhGKfMC2Uqs6JOxc
0wIDAQAB
-----END PUBLIC KEY-----`;

const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7lfM3y1M74Xii
Cp381ibP4Ad3m+1cX6v92OiD3L7cJurD1RyV/cqVwvun+KOn37kP92huvrvR4mG0
qgPDNdXRlC67WJk3YOTvOwISu9mS8oMiwnR3bRq70lINq/Sw8wZntI5A7pSErFlp
3IWH4+vDHxlteBP0IZQtliDCqJZp+MHIWnpRpzzc4HA1VuEbtwPu2G2M59ynbrh9
5zjuj6ETukQXB322zTF/2SYT29twl1iqWSL4jvFLJGlIKHvyn4AXkhUGo6l7/oiW
Hj3w1+cdvEj8+hKkzzPco4lkiGu2oFiLEbtvo+vC9TVcbtkB+rDI3UYWEYp8wLZS
qzok7FzTAgMBAAECggEADoJJnp4mYPJOj1H86Ep0FA4C5dh0onlv5yF40oInbQXB
kMYSAPPxUGYVaueLWPev67E6LZ6pDlHRNtUTl2y5jg1FFA6FQ0hGTM6mmWZYLMp/
JBggRAB3WeGpoQ8UzP7vFuRbQGBzslNWUx7QYTNaz+u+3r2z5WUXffMns4awo5+N
CTVBitiPPcllsEQ4YBcaoGbLFn1ljUHaXFAOQtArEQ0m0ZHrZT3a7TCeCer7H9pW
pzs6TRcb2NhGzn9825Rl35Om02RJCfpFvpxoyxWh0iM5XKkeWaLLsaPlseChUvoF
XTLnfIi9MBjUGVRwidPdyEjWTAiTTOnxQqrd3/fc6QKBgQDjd5PKEAFi/7t6zMOl
MAIjPUr74tBQpfn4tG6CFHoa2eTOwNWZMDX+buikZyNFDaCdklbaMy1xr6X6KE8J
KbYG+D+zhB0DLtI0v+1J2+ukVt06rMfZRejAO+Oi+U4N0q/E7PmhtKqtNZkM/ldF
fB6BaV6VYlKOMYqk7V7+RoCYbwKBgQDTHbPp+e2pduTYo4RNobIDagTb6Jcdkq6y
CrNRwFs5gCxuYZ8u26z1Mpj5I00dY7+bP4IhkIixJzrHD8ZKLUyWd0WIZSCphTdA
C52dmHY9b2XSxqbvpg04qzlxqsuAmxjPc9wrVXN5zPFIh63uNn/VrAa3Uxbx6nxP
FGKuKmQL3QKBgQCvpPBcAUvw1CRCyMbyUUX1TCkQo63T+LYzk7AZhhJblZGXDVRi
u9WVqLK/8FxNwB4cTpn+V7JprQZvSpztKGZEr4EQ750vjgIHdYSXmdg1yFWAL1cK
sW7usdAvUm8xQVU0rQB+G3IH2fFbFTLylss/hsvgclHpNtwmSp0ln+9AxQKBgQCe
ls6DMiMtTUoFz3fglVnTJL43sBZsubaPumgQPm6I2FcIKD9bBNx9aR/u72zLahYS
ene33QpCAdUumhP7vuGsmjZaipUpow/pBZDGRTR1XAxidKYMmnGOI1nIoGO03U2a
8U7wIoXXdnO+Z2Xp73jCOzLkXf97hQkSop6qdN+o5QKBgBSBKpc6TAXLlyf1xX7/
lv4IYlrUuiyVcWreN5/qjxpvr6Jmozcq+D5BddnQyj4YAHwi/80K7JKhCre6rnON
3JT1tWeuXiMvbXHMYUpzpO9TUVXlMaj30oqg6x/jsbKNK91h92cL4U8Db+zL8O95
e1ZN0Im2BYFtAVb02ddvWXj/
-----END PRIVATE KEY-----
`;

function encryptMessage(message) {
  const encrypted = new JSEncrypt();
  encrypted.setPublicKey(publicKey);
  return encrypted.encrypt(message);
}

function decryptMessage(encryptedMessage) {
  const decrypted = new JSEncrypt();
  decrypted.setPrivateKey(privateKey);
  return decrypted.decrypt(encryptedMessage);
}

document.getElementById('encrypt-btn').addEventListener('click', () => {
  const message = document.getElementById('input-text').value;
  const encryptedMessage = encryptMessage(message);
  document.getElementById('output-text').textContent = encryptedMessage;
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
  const encryptedMessage = document.getElementById('input-text').value;
  const decryptedMessage = decryptMessage(encryptedMessage);
  document.getElementById('output-text').textContent = decryptedMessage;
});