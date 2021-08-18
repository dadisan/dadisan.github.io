function sendwa() {
  /* Whatsapp Settings */
  let walink = "https://api.whatsapp.com/send",
    phone = "6282226660205",
    walink2 = "Halo saya ingin ",
    text_yes = "Terkirim.",
    text_no = "Isi semua Formulir lalu klik Send.";

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    let walink = "whatsapp://send";
  }

  /* Call Input Form */
  let name = document.getElementById("wa_name").value,
    email = document.getElementById("wa_email").value,
    select = document.getElementById("wa_select").value,
    number = document.getElementById("wa_number").value,
    url = document.getElementById("wa_url").value,
    text = document.getElementById("wa_textarea").value;

  /* Final Whatsapp URL */
  let nl = "%0A";
  let blanter_whatsapp = `${walink}?phone=${phone}&text=
  ${walink2}
  ${nl}*Nama:* ${name}
  ${nl}*Email:* ${email}
  ${nl}*Select:* ${select}
  ${nl}*Nomor:* ${number}
  ${nl}*URL:* ${url}
  ${nl}*Deskripsi:* ${text}`;

  /* Whatsapp Window Open */
  window.open(blanter_whatsapp, "_blank");
  document.getElementById("text-info").innerHTML = '<span class="yes">' + text_yes + "</span>";
  // document.getElementById("text-info").innerHTML = '<span class="no">' + text_no + "</span>";
}
