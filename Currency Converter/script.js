let select1 = document.querySelector("#select1"); // base currency
let select2 = document.querySelector("#select2"); // target currency
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let amountInput = document.querySelector("#amount");
let convertBtn = document.querySelector("#convertBtn");
let swapBtn = document.querySelector("#swapBtn");
let rateBox = document.querySelector("#rate");
let convertedBox = document.querySelector("#converted");

let rate;

// Country list
const countryList = {
  AED: "AE", AFN: "AF", XCD: "AG", ALL: "AL", AMD: "AM", ANG: "AN", AOA: "AO", AQD: "AQ", 
  ARS: "AR", AUD: "AU", AZN: "AZ", BAM: "BA", BBD: "BB", BDT: "BD", XOF: "BE", BGN: "BG", 
  BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN", BOB: "BO", BRL: "BR", BSD: "BS", NOK: "BV", 
  BWP: "BW", BYR: "BY", BZD: "BZ", CAD: "CA", CDF: "CD", XAF: "CF", CHF: "CH", CLP: "CL", 
  CNY: "CN", COP: "CO", CRC: "CR", CUP: "CU", CVE: "CV", CYP: "CY", CZK: "CZ", DJF: "DJ", 
  DKK: "DK", DOP: "DO", DZD: "DZ", ECS: "EC", EEK: "EE", EGP: "EG", ETB: "ET", EUR: "FR", 
  FJD: "FJ", FKP: "FK", GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI", GMD: "GM", 
  GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK", HNL: "HN", HRK: "HR", HTG: "HT", HUF: "HU", 
  IDR: "ID", ILS: "IL", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", JMD: "JM", JOD: "JO", 
  JPY: "JP", KES: "KE", KGS: "KG", KHR: "KH", KMF: "KM", KPW: "KP", KRW: "KR", KWD: "KW", 
  KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB", LKR: "LK", LRD: "LR", LSL: "LS", LTL: "LT", 
  LVL: "LV", LYD: "LY", MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", MNT: "MN", 
  MOP: "MO", MRO: "MR", MTL: "MT", MUR: "MU", MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY", 
  MZN: "MZ", NAD: "NA", XPF: "NC", NGN: "NG", NIO: "NI", NPR: "NP", NZD: "NZ", OMR: "OM", 
  PAB: "PA", PEN: "PE", PGK: "PG", PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA", 
  RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", SCR: "SC", SDG: "SD", 
  SEK: "SE", SGD: "SG", SKK: "SK", SLL: "SL", SOS: "SO", SRD: "SR", STD: "ST", SVC: "SV", 
  SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ", TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR", 
  TTD: "TT", TWD: "TW", TZS: "TZ", UAH: "UA", UGX: "UG", USD: "US", UYU: "UY", UZS: "UZ", 
  VEF: "VE", VND: "VN", VUV: "VU", YER: "YE", ZAR: "ZA", ZMK: "ZM", ZWD: "ZW",
};

// Populate dropdowns
for (let currency in countryList) {
  let option1 = document.createElement("option");
  option1.value = currency;
  option1.innerText = currency;
  select1.appendChild(option1);

  let option2 = document.createElement("option");
  option2.value = currency;
  option2.innerText = currency;
  select2.appendChild(option2);
}

// Fetch exchange rate
async function getRate() {
  let base = select1.value.toLowerCase();   // e.g. "usd"
  let target = select2.value.toLowerCase(); // e.g. "pkr"

  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`;

  let response = await fetch(url);
  let data = await response.json();

  rate = data[base][target];

  // update rate display
  rateBox.innerText = `1 ${base.toUpperCase()} = ${rate} ${target.toUpperCase()}`;
}

// Update flags + rate
function updateFlags() {
  img1.src = `https://flagsapi.com/${countryList[select1.value]}/flat/64.png`;
  img2.src = `https://flagsapi.com/${countryList[select2.value]}/flat/64.png`;
  getRate();
}

select1.addEventListener("change", updateFlags);
select2.addEventListener("change", updateFlags);

// Convert button
convertBtn.addEventListener("click", () => {
  let amount = amountInput.value;
  if (amount === "" || isNaN(amount)) {
    alert("Please enter a valid number.");
    return;
  }
  amount = parseFloat(amount);
  let convertedAmount = (amount * rate).toFixed(2);
  convertedBox.innerText = `Converted Amount: ${convertedAmount} ${select2.value}`;
});

// Swap button
swapBtn.addEventListener("click", () => {
  let temp = select1.value;
  select1.value = select2.value;
  select2.value = temp;
  updateFlags();
});

// Initialize defaults
select1.value = "USD";
select2.value = "PKR";
updateFlags();
