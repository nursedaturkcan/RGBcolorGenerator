const result=document.querySelector(".result input");
const copyButton=document.getElementById("copy-btn");
const sliders=document.querySelectorAll(".wrapper input[type='range']");
const rColor=document.getElementById("red");
const gColor=document.getElementById("green");
const bColor=document.getElementById("blue");

let generateColor = function() {
    let rColorValue = rColor.value;
    let gColorValue = gColor.value;
    let bColorValue = bColor.value;
// html ögesi olan rgb e değişkne değerlerin atanması
    let finalColor=`rgb(${rColorValue},${gColorValue},${bColorValue})`;
    result.value=finalColor;
    // sonucunda arkaplan rengine atanması
    document.body.style.backgroundColor=finalColor;

    
  };
// * result.value nun kopyalanmaası
let copyColorCode = function() {
    result.select(); //!result elemanını seçmek
    document.execCommand("copy"); //! execCommand() yöntemi kullanılarak metin kopyalama işlemi 
    copyButton.innerText = "Copied!";
    // !1 saniye bekle ardından butonun içeriğini copy color code a dönüştür
    setTimeout(function() {
      copyButton.innerText = "Copy Color Code";
    }, 300);
  };
  

//   Bu adımda, addInputListener adında bir fonksiyon tanımlanır. Bu fonksiyon, bir inp parametresi alır ve input olay dinleyicisini (generateColor fonksiyonunu) bu inp öğesine ekler.
  
  function addInputListener(inp) {
    inp.addEventListener("input", generateColor);
  }
//   Bu adımda, sliders dizisi üzerinde forEach döngüsü kullanılır. Her döngü adımında, addInputListener fonksiyonu çağrılır ve geçerli öğe (inp) addInputListener fonksiyonuna iletilir. Bu sayede, her inp öğesi için "input" olay dinleyicisi (generateColor fonksiyonu) eklenir.
  sliders.forEach(addInputListener);
//   sayfa ilk yüklendiğinde generateColor fonksiyonunun çağırılması 
window.addEventListener("load",generateColor);
// copy butonuna tıklanmasının izlenmesi ve copycolorcpde fonk çağırılması
copyButton.addEventListener("click",copyColorCode);
  