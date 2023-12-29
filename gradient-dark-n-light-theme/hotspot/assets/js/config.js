//this is to enable multi vendo setup, set to true when multi vendo is supported
var isMultiVendo = false;
// 0 = traditional (client choose a vendo) , 1 = auto select vendo base on hotspot address, 2 = interface name ( this will preserve one hotspot server ip only)
var multiVendoOption = 1;

//list here all node mcu address for multi vendo setup
var multiVendoAddresses = [
  // {
  // 	vendoName: "Vendo 1 - ESP32 Wireless", //change accordingly to your vendo name
  // 	vendoIp: "10.10.10.252", //change accordingly to your vendo ip
  // 	chargingEnable: true,  //change true if you want to enable charging station
  // 	eloadEnable: true, //change true if you want to enable eloading station
  // 	hotspotAddress: "10.10.10.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
  // 	interfaceName: "vlan11-hotspot1" // hotspot interface name preser
  // },
  {
    vendoName: "Vendo 2 - ESP8622 Wireless", //change accordingly to your vendo name
    vendoIp: "10.0.0.252", //change accordingly to your vendo ip
    chargingEnable: false, //change true if you want to enable charging station
    eloadEnable: false, //change true if you want to enable eloading station
  },
  // {
  // 	vendoName: "Vendo 3 - ESP8622 LAN", //change accordingly to your vendo name
  // 	vendoIp: "10.10.10.253", //change accordingly to your vendo ip
  // 	chargingEnable: false,  //change true if you want to enable charging station
  // 	eloadEnable: false //change true if you want to enable eloading station
  // },
  // {
  // 	vendoName: "Vendo 4 - ESP32 LAN", //change accordingly to your vendo name
  // 	vendoIp: "10.10.10.254", //change accordingly to your vendo ip
  // 	chargingEnable: true,  //change true if you want to enable charging station
  // 	eloadEnable: false //change true if you want to enable eloading station
  // }
];

//0 means its login by username only, 1 = means if login by username + password
var loginOption = 0; //replace 1 if you want login voucher by username + password

var dataRateOption = false; //replace true if you enable data rates
//put here the default selected address
var vendorIpAddress = "10.0.0.252";

var chargingEnable = false; //replace true if you enable charging, this can be override if multivendo setup

var eloadEnable = false; //replace true if you enable eload, this can be override if multivendo setup

//hide pause time / logout true = you want to show pause / logout button
var showPauseTime = true;

//enable member login, true = if you want to enable member login
var showMemberLogin = false;

//enable extend time button for customers
var showExtendTimeButton = true;

//disable voucher input
var disableVoucherInput = false;

//enable mac address as voucher code
var macAsVoucherCode = false;

var qrCodeVoucherPurchase = false;
