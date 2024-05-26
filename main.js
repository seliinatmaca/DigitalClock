// Bu dört satırda, document.getElementById fonksiyonunu kullanarak HTML belgesindeki id'si sırasıyla "hour", "minutes", "seconds" ve "ampm" olan elementleri seçiyoruz ve bunları hourEl, minuteEl, secondEl ve ampmEl değişkenlerine atıyoruz. Bu değişkenler daha sonra saat, dakika, saniye ve AM/PM bilgilerini güncellemek için kullanılacak.

const hourEle = document.getElementById("hour");
const minuteEle = document.getElementById("minutes");
const secondEle = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

//Bu satırda, saat güncelleme işlevi olan updateClock isimli bir fonksiyon tanımlıyoruz.
function updateClock() {
  // Bu üç satırda, new Date() objesi ile şu anki tarihi ve saati alıyoruz. getHours() metoduyla saat, getMinutes() metoduyla dakika ve getSeconds() metoduyla saniye bilgilerini alıyoruz ve bunları sırasıyla h, m ve s değişkenlerine atıyoruz.
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  //Bu satırda, başlangıç değeri "AM" olan bir ampm değişkeni tanımlıyoruz. Bu değişken, saatin AM mi yoksa PM mi olduğunu belirlemek için kullanılacak.
  let ampm = "AM";

  //Bu koşulda, eğer saat (h) 12'den büyükse, 12 çıkararak 12 saatlik formatta göstermek için h değişkenini güncelliyoruz ve ampm değişkenini "PM" olarak ayarlıyoruz.
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  //Bu üç satırda, saat (h), dakika (m) ve saniye (s) değerlerini kontrol ediyoruz. Eğer herhangi bir değer 10'dan küçükse, başına "0" ekliyoruz (örneğin, 9'u "09" yapmak için). Bu, saatin daha düzgün görünmesini sağlıyor.
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  //Bu dört satırda, hourEl, minuteEl, secondEl ve ampmEl elementlerinin innerText özelliğini sırasıyla saat (h), dakika (m), saniye (s) ve AM/PM (ampm) değerleri ile güncelliyoruz. Bu, HTML sayfasındaki ilgili alanların yeni saat, dakika, saniye ve AM/PM bilgileri ile güncellenmesini sağlıyor.
  hourEle.innerText = h;
  minuteEle.innerText = m;
  secondEle.innerText = s;
  ampmEl.innerText = ampm;
  //Bu satırda, setTimeout fonksiyonunu kullanarak updateClock fonksiyonunu 1 saniye (1000 milisaniye) sonra tekrar çağırıyoruz. Bu, saatin her saniye güncellenmesini sağlıyor.
  setTimeout(() => {
    updateClock();
  }, 1000);
}
//Bu satırda, updateClock fonksiyonunu çağırıyoruz, böylece saat güncellenmeye başlıyor ve her saniye kendini yeniliyor.
updateClock();
