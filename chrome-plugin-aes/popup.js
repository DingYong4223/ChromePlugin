const key = "1234567890123456"; // 密钥，必须是16位

function encrypt(text) {
  const iv = crypto.getRandomValues(new Uint8Array(16)); // 生成随机向量
  const algorithm = { name: "AES-CBC", iv: iv };
  const data = new TextEncoder().encode(text);
  return crypto.subtle.importKey("raw", new TextEncoder().encode(key), algorithm, false, ["encrypt"])
    .then(key => crypto.subtle.encrypt(algorithm, key, data))
    .then(encrypted => {
      const buffer = new Uint8Array(iv.length + encrypted.byteLength);
      buffer.set(iv);
      buffer.set(new Uint8Array(encrypted), iv.length);
      return btoa(String.fromCharCode.apply(null, buffer));
    });
}

function decrypt(text) {
  const buffer = new Uint8Array(atob(text).split("").map(char => char.charCodeAt(0)));
  const iv = buffer.slice(0, 16);
  const encrypted = buffer.slice(16);
  const algorithm = { name: "AES-CBC", iv: iv };
  return crypto.subtle.importKey("raw", new TextEncoder().encode(key), algorithm, false, ["decrypt"])
    .then(key => crypto.subtle.decrypt(algorithm, key, encrypted))
    .then(decrypted => new TextDecoder().decode(decrypted));
}

document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("input-text");
  const outputText = document.getElementById("output-text");
  const encryptBtn = document.getElementById("encrypt-btn");
  const decryptBtn = document.getElementById("decrypt-btn");

  encryptBtn.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (text) {
      encrypt(text).then(result => outputText.value = result);
    }
  });

  decryptBtn.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (text) {
      decrypt(text).then(result => outputText.value = result);
    }
  });
});