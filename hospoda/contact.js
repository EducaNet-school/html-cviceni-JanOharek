function validate(){
  var Jmeno = document.getElementById("Jmeno").value;
  var Prijmeni = document.getElementById("Prijmeni").value;
  var Telefon = document.getElementById("Telefon").value;
  var Email = document.getElementById("Email").value;
  var RodneCislo = document.getElementById("RodneCislo").value;
  var Zprava = document.getElementById("Zprava").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if (Jmeno.length < 2) {
    text = "Zadejte prosím jméno";
    error_message.innerHTML = text;
    return false;
}
  if (Prijmeni.length < 2) {
    text = "Zadejte prosím příjmění";
    error_message.innerHTML = text;
    return false;
}
  if(isNaN(Telefon) || Telefon.length != 9){
    text = "Zadejte prosím telefonní číslo";
    error_message.innerHTML = text;
    return false;
  }
  if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(Email) || Email.length <= 6) {
    text = "Zadejte prosím platný email";
    error_message.innerHTML = text;
    return false;
  }
  if (RodneCislo !== "" && (!/^\d{6}\/\d{4}$/.test(RodneCislo) || RodneCislo.length <= 10)) {
    text = "Zadejte platné rodné číslo ve tvaru: YYMMDD/****";
    error_message.innerHTML = text;
    return false;
  }
  if(Zprava.length <= 50){
    text = "Prosím zadejte zprávu která bude delší jak 50 znaků";
    error_message.innerHTML = text;
    return false;
  }
  alert("Vaše zpráva byla odeslána.");
  return true;
}