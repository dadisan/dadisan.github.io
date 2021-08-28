let diamond = [10000, 15000, 20000, 25000];

const diamondFF = [
  {
    diamond: "5",
    harga: 1000,
  },
  {
    diamond: "20",
    harga: 3000,
  },
  {
    diamond: "50",
    harga: 7000,
  },
  {
    diamond: "70",
    harga: 9500,
  },
  {
    diamond: "100",
    harga: 14000,
  },
  {
    diamond: "140",
    harga: 19000,
  },
  {
    diamond: "190",
    harga: 26000,
  },
  {
    diamond: "210",
    harga: 28500,
  },
  {
    diamond: "280",
    harga: 38000,
  },
  {
    diamond: "355",
    harga: 47500,
  },
  {
    diamond: "500",
    harga: 67000,
  },
  {
    diamond: "720",
    harga: 94500,
  },
  {
    diamond: "860",
    harga: 113000,
  },
  {
    diamond: "1000",
    harga: 132000,
  },
  {
    diamond: "1075",
    harga: 141500,
  },
  {
    diamond: "1215",
    harga: 160000,
  },
  {
    diamond: "1440",
    harga: 188500,
  },
  {
    diamond: "1580",
    harga: 207000,
  },
  {
    diamond: "1795",
    harga: "235500",
  },
  {
    diamond: "2000",
    harga: "256500",
  },
  {
    diamond: "2720",
    harga: "351000",
  },
  {
    diamond: "3440",
    harga: "445000",
  },
  {
    diamond: "4000",
    harga: "513000",
  },
  {
    diamond: "6000",
    harga: "769500",
  },
  {
    diamond: "7290",
    harga: "940500",
  },
  {
    diamond: "8000",
    harga: "1026000",
  },
];

function formatToCurrency(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

let text = "";
for (const x of diamondFF) {
  let a = `<div><input type="checkbox" name="diamond" class="btn-check" id="diamond${x.diamond}" value="${x.harga}" onclick="totalIt()" autocomplete="off">
  <label class="btn btn-outline-primary mb-1" for="diamond${x.diamond}">${x.diamond}</label></div>`;
  text += a;
}

document.getElementById("diamond").innerHTML = text;

function totalIt() {
  let input = document.getElementsByName("diamond");
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("totalDiamondFF").innerHTML = `<span> Rp${formatToCurrency(total)}</span>`;
  return total;
}

// function sendwa() {
//   /* Whatsapp Settings */
//   let walink = "https://api.whatsapp.com/send",
//     phone = "6282226660205",
//     text_yes = "Terkirim.",
//     text_no = "Isi semua Formulir lalu klik Send.";

//   /* Smartphone Support */
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     let walink = "whatsapp://send";
//   }

//   /* Call Input Form */
//   let name = document.getElementById("wa_name").value,
//     email = document.getElementById("wa_email").value,
//     select = document.getElementById("wa_select").value,
//     number = document.getElementById("wa_number").value,
//     url = document.getElementById("wa_url").value,
//     text = document.getElementById("wa_textarea").value;

//   /* Final Whatsapp URL */
//   let nl = "%0A";
//   let blanter_whatsapp = `${walink}?phone=${phone}&text=Hallo kak
//   ${nl}*Nama:* ${name}
//   ${nl}*Email:* ${email}
//   ${nl}*Select:* ${select}
//   ${nl}*Nomor:* ${number}
//   ${nl}*URL:* ${url}
//   ${nl}*Deskripsi:* ${text}`;

//   /* Whatsapp Window Open */
//   window.open(blanter_whatsapp, "_blank");
//   document.getElementById("text-info").innerHTML = '<span class="yes">' + text_yes + "</span>";
//   // document.getElementById("text-info").innerHTML = '<span class="no">' + text_no + "</span>";
// }
