
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"193",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__dbg"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",4],7],"\",c=\"",["escape",["macro",5],7],"\",b=\"",["escape",["macro",6],7],"\";return a=b.match(\/.*by.* \\- GoFundMe\/ig)?\"campaign-detail\":a.match(\/.*donate$\/ig)\u0026\u0026\"GoFundMe\"==b?\"campaign-donate\":a.match(\/\\\/($|\\?.*)\/ig)?\"homepage\":c.match(\/\\\/thankyou\\?d=.*\/i)?\"donation-complete\":\"ungrouped\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__c",
      "vtp_value":"63072000"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userDetails.userId"
    },{
      "function":"__c",
      "vtp_value":"true"
    },{
      "function":"__ctv"
    },{
      "function":"__cid"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=\"_ga\\x3d\",d=document.cookie.split(\";\"),b=0;b\u003Cd.length;b++){for(var a=d[b];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return\"CID not set\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sessionDetails.sessionId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__k",
      "vtp_name":"passport3",
      "vtp_decodeCookie":true
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",23],7],"\";return a=a?\"loggedIn\":\"loggedOut\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__k",
      "vtp_name":"flow",
      "vtp_decodeCookie":true
    },{
      "function":"__j",
      "vtp_name":"performance.navigation.redirectCount"
    },{
      "function":"__j",
      "vtp_name":"performance.navigation.type"
    },{
      "function":"__j",
      "vtp_name":"performance.memory.usedJSHeapSize"
    },{
      "function":"__j",
      "vtp_name":"performance.memory.totalJSHeapSize"
    },{
      "function":"__j",
      "vtp_name":"performance.memory.jsHeapSizeLimit"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"tm"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],".replace(\/(.*paid_code\";s:\\d+:\")([^\"]+)(\".*)$\/,\"$2\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fundDetails.fundId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fundDetails.fundName"
    },{
      "function":"__j",
      "vtp_name":"GFM.analytics.data.viewid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var d=location.hostname,a=document.referrer.split(\"\/\")[2],b=document.referrer,c=\"Direct\";void 0!=sessionStorage.getItem(\"full_document_referrer\")\u0026\u0026(c=sessionStorage.getItem(\"full_document_referrer\"));if(c===a)return c;if(void 0!=a\u0026\u0026\"www.gofundme.com\"!=a\u0026\u0026a!=c)return sessionStorage.setItem(\"full_document_referrer\",b),b;if(void 0===a)return sessionStorage.setItem(\"full_document_referrer\",\"Direct\"),\"Direct\";if(void 0===sessionStorage.getItem(\"full_document_referrer\")\u0026\u0026d!=a\u0026\u0026\"www.gofundme.com\"!=\na)return sessionStorage.setItem(\"full_document_referrer\",b),b;if(void 0!=sessionStorage.getItem(\"full_document_referrer\")\u0026\u0026d===a)return sessionStorage.getItem(\"full_document_referrer\")}catch(e){console.error(e)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var c=location.hostname,a=document.referrer.split(\"\/\")[2],b=\"Direct\";void 0!=sessionStorage.getItem(\"document_referrer\")\u0026\u0026(b=sessionStorage.getItem(\"document_referrer\"));if(b===a)return b;if(void 0!=a\u0026\u0026\"www.gofundme.com\"!=a\u0026\u0026a!=b)return sessionStorage.setItem(\"document_referrer\",a),a;if(void 0===a)return sessionStorage.setItem(\"document_referrer\",\"Direct\"),\"Direct\";if(void 0===sessionStorage.getItem(\"document_referrer\")\u0026\u0026c!=a\u0026\u0026\"www.gofundme.com\"!=a)return sessionStorage.setItem(\"document_referrer\",\na),a;if(void 0!=sessionStorage.getItem(\"document_referrer\")\u0026\u0026c===a)return sessionStorage.getItem(\"document_referrer\")}catch(d){console.error(d)}})();"]
    },{
      "function":"__c",
      "vtp_value":"40"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",40],8,16],",b=\"not set\";a\u0026\u00260\u003Ca.length\u0026\u0026(b=-1\u003Ca.search(\"(.*?)facebook(.*?)|m.facebook.com\")?\"facebook\":-1\u003Ca.search(\"(.*?)twitter(.*?)|^t.co\")?\"twitter\":-1\u003Ca.search(\"(.*?)google(.*?)|www.google.com\")?\"google\":-1\u003Ca.search(\"(.*?)bing(.*?)\")?\"bing\":-1\u003Ca.search(\"(.*?)youtube(.*?)\")?\"youtube\":-1\u003Ca.search(\"(.*?)instagram(.*?)\")?\"instagram\":-1\u003Ca.search(\"(.*?)whatsapp(.*?)\")?\"whatsapp\":-1\u003Ca.search(\"(.*?)t.umblr.com(.*?)\")?\"tumblr\":-1\u003Ca.search(\"Direct\")?\"direct\":-1\u003Ca.search(\"(.*?)gofundme(.*?)|charity(.*?)go(.?)fun(.*?)\")?\n\"internal\":\"all others\");return b})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"UA-5577581-17"
    },{
      "function":"__c",
      "vtp_value":"UA-5577581-4"
    },{
      "function":"__c",
      "vtp_value":"UA-5577581-16"
    },{
      "function":"__c",
      "vtp_value":"UA-5577581-10"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",44],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*gofundme.com","value",["macro",45]],["map","key","gfm-test01.com","value",["macro",46]],["map","key","support.gofundme.com","value",["macro",47]],["map","key",".*gfmnorma.wpengine.com","value",["macro",46]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products.0.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{currencyCode:\"",["escape",["macro",49],7],"\",purchase:{actionField:{id:\"",["escape",["macro",35],7],"\",revenue:\"",["escape",["macro",50],7],"\"},products:[{name:\"",["escape",["macro",37],7],"\",id:\"",["escape",["macro",35],7],"\",price:\"",["escape",["macro",51],7],"\",brand:\"GoFundMe\",category:\"Undefined\",variant:\"Undefined\",quantity:\"1\"}]}}};return a})();"]
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__c",
      "vtp_value":"6"
    },{
      "function":"__c",
      "vtp_value":"7"
    },{
      "function":"__c",
      "vtp_value":"8"
    },{
      "function":"__c",
      "vtp_value":"9"
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__c",
      "vtp_value":"11"
    },{
      "function":"__c",
      "vtp_value":"12"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.time\u003Espan:nth-child(1)"
    },{
      "function":"__c",
      "vtp_value":"13"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.time\u003Espan:nth-child(2)"
    },{
      "function":"__c",
      "vtp_value":"14"
    },{
      "function":"__c",
      "vtp_value":"15"
    },{
      "function":"__c",
      "vtp_value":"16"
    },{
      "function":"__c",
      "vtp_value":"17"
    },{
      "function":"__c",
      "vtp_value":"18"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fundDetails.fundAmountRaised"
    },{
      "function":"__c",
      "vtp_value":"19"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.raised\u003Espan.goal"
    },{
      "function":"__c",
      "vtp_value":"21"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.fundphoto\u003Ea\u003Ediv.fave-sp"
    },{
      "function":"__c",
      "vtp_value":"22"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.headbar\u003Ea.loc"
    },{
      "function":"__c",
      "vtp_value":"23"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"div.headbar\u003Ea.cat"
    },{
      "function":"__c",
      "vtp_value":"24"
    },{
      "function":"__d",
      "vtp_attributeName":"data-total_shares",
      "vtp_elementId":"top-share-bar",
      "vtp_selectorType":"ID"
    },{
      "function":"__c",
      "vtp_value":"25"
    },{
      "function":"__d",
      "vtp_attributeName":"data-facebook_count",
      "vtp_elementId":"top-share-bar",
      "vtp_selectorType":"ID"
    },{
      "function":"__c",
      "vtp_value":"26"
    },{
      "function":"__d",
      "vtp_attributeName":"data-twitter_count",
      "vtp_elementId":"top-share-bar",
      "vtp_selectorType":"ID"
    },{
      "function":"__c",
      "vtp_value":"UA-5577581-4"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"true",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePath"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signupType"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function k(g,d,k){var b=g,c=b.split(\"?\");g=c[0];b=1\u003Cc.length?b.replace(g,\"\").substring(1):\"\";var a=b;b=a.split(\/[\u0026;]\/);c=[];var e=\"\";if(\"\"===a)d=\"\";else{for(a=0;a\u003Cb.length;a++){var h=b[a].split(\"\\x3d\"),l=h[0];h=h[1];include=!0;for(var m=0;m\u003Cd.length;m++){var f;(f=l.toLowerCase()===d[m].toLowerCase())||(f=\/(([^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))\/,f=f.test(l));f\u0026\u0026(include=!1)}include\u0026\u0026\nc.push({name:l,value:h})}if(1\u003Ec.length)d=e;else{for(a=0;a\u003Cc.length;a++)e+=c[a].name,e+=\"\\x3d\",e+=c[a].value,a!==c.length-1\u0026\u0026(e+=\"\\x26\");d=\"?\"+e}}b=g+d;return b=b.replace(\/([a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+(@|%40|%2540)[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+\\.[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^*\\(\\)]+)\/gi,k)}return k})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"firstname lastname nickname address gender p e profileurl email pwd fname lname user\".split(\" \"),b=\"email_removed\",c=",["escape",["macro",101],8,16],",d=document.location.pathname+document.location.search;return c(d,a,b)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"firstname lastname nickname address gender p e profileurl email pwd fname lname user\".split(\" \"),b=\"email_removed\",c=",["escape",["macro",101],8,16],";return c(",["escape",["macro",18],8,16],",a,b)})();"]
    },{
      "function":"__c",
      "vtp_value":"26"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",104],8,16],";return function(b){try{a\u0026\u0026b.set(\"dimension\"+String(a),b.get(\"clientId\"))}catch(c){console.log(c)}}})();"]
    },{
      "function":"__c",
      "vtp_value":"22"
    },{
      "function":"__c",
      "vtp_value":"23"
    },{
      "function":"__c",
      "vtp_value":"24"
    },{
      "function":"__c",
      "vtp_value":"25"
    },{
      "function":"__c",
      "vtp_value":"26"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",111],8,16],";if(a\u0026\u0026\/GA[0-9]\\.[0-9]\\.[0-9]+\\.[0-9]+$\/.test(a))return a.match(\/GA[0-9]\\.[0-9]\\.(.*)$\/)[1];ga(function(){var a=ga.getAll();if(a\u0026\u0026a[0])return a[0].get(\"clientId\")})})();"]
    },{
      "function":"__c",
      "vtp_value":"27"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__c",
      "vtp_value":"28"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a})();"]
    },{
      "function":"__c",
      "vtp_value":"29"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"member_email_hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visit_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"member_id"
    },{
      "function":"__c",
      "vtp_value":"UA-5577581-12"
    },{
      "function":"__c",
      "vtp_value":"UA-5577581-13"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_defaultValue":["macro",122],
      "vtp_map":["list",["map","key","www.cr-test01.com","value",["macro",123]],["map","key","fundraising.crowdrise.com","value",["macro",122]],["map","key","www.crowdrise.com","value",["macro",122]],["map","key","charity.gofundme.com","value",["macro",122]],["map","key","www.cr-stage01.com","value",["macro",123]],["map","key","charity.gfm-test01.com","value",["macro",123]],["map","key","local.crowdrise.com","value",["macro",122]]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"auto",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","page","value",["macro",102]],["map","fieldName","referrer","value",["macro",103]],["map","fieldName","userId","value",["macro",14]],["map","fieldName","customTask","value",["macro",105]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",106],"dimension",["macro",16]],["map","index",["macro",107],"dimension",["macro",17]],["map","index",["macro",108],"dimension",["macro",103]],["map","index",["macro",109],"dimension",["macro",102]],["map","index",["macro",110],"dimension",["macro",112]],["map","index",["macro",113],"dimension",["macro",114]],["map","index",["macro",115],"dimension",["macro",116]],["map","index",["macro",117],"dimension",["macro",118]],["map","index","43","dimension",["macro",42]],["map","index","44","dimension",["macro",43]],["map","index","47","dimension",["macro",119]],["map","index","48","dimension",["macro",120]],["map","index","11","dimension",["macro",121]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",124],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__c",
      "vtp_value":"30"
    },{
      "function":"__c",
      "vtp_value":"event"
    },{
      "function":"__c",
      "vtp_value":"31"
    },{
      "function":"__c",
      "vtp_value":"33"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"team_id"
    },{
      "function":"__c",
      "vtp_value":"34"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_id"
    },{
      "function":"__c",
      "vtp_value":"35"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"beneficiary_type"
    },{
      "function":"__c",
      "vtp_value":"36"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"beneficiary_id"
    },{
      "function":"__c",
      "vtp_value":"37"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"owner_type"
    },{
      "function":"__c",
      "vtp_value":"38"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"owner_id"
    },{
      "function":"__c",
      "vtp_value":"39"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ticket_event_id"
    },{
      "function":"__c",
      "vtp_value":"40"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"plan_type_campaign"
    },{
      "function":"__c",
      "vtp_value":"47"
    },{
      "function":"__c",
      "vtp_value":"48"
    },{
      "function":"__c",
      "vtp_value":"16"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organizer_id"
    },{
      "function":"__c",
      "vtp_value":"17"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organizer_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"charity_id"
    },{
      "function":"__c",
      "vtp_value":"11"
    },{
      "function":"__c",
      "vtp_value":"12"
    },{
      "function":"__c",
      "vtp_value":"15"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_type"
    },{
      "function":"__c",
      "vtp_value":"41"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"member_type"
    },{
      "function":"__c",
      "vtp_value":"15"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"donation_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hs-form-guid"
    },{
      "function":"__c",
      "vtp_value":"pageview"
    },{
      "function":"__c",
      "vtp_value":"42"
    },{
      "function":"__c",
      "vtp_value":"43"
    },{
      "function":"__c",
      "vtp_value":"G-PBBFM76N6K"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.videoStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.videoPercent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",168],8,16],";switch(a){case \"start\":return\"Start playing\";case \"pause\":return\"Pause\";case \"buffering\":return\"Buffering\";case \"progress\":return\"Reached \"+",["escape",["macro",169],8,16],"+\"%\";case \"complete\":return\"Reached the end\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__c",
      "vtp_value":"39"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.gfmAnalyticsElement"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.gfmElementId"
    },{
      "function":"__c",
      "vtp_value":"G-PBBFM76N6K"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByClassName(\"p-campaign-header\")[0];return a=a.innerHTML})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"#main-content \\x3e div.wrapper.topContent \\x3e div \\x3e h1\");return a=a.innerHTML})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"span.text-stat \\x3e span\").innerText;if(void 0!=a\u0026\u00260\u003Ca)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"li:nth-child(2) \\x3e span.text-stat \\x3e span.text-stat-value\").innerText;if(void 0!=a\u0026\u00260\u003Ca)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"p.raised-by\").innerText;if(void 0!=a.split(\"Raised by \")[1].split(\" people in\")[0])return a.split(\"Raised by \")[1].split(\" people in\")[0].replace(\/,\/g,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"h2.inline.raised\").innerText;if(void 0!=a)return a.split(\"$\")[1].replace(\/,\/g,\"\")})();"]
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.beneficiary_fees"
    },{
      "function":"__c",
      "vtp_value":"49"
    },{
      "function":"__c",
      "vtp_value":"52"
    },{
      "function":"__c",
      "vtp_value":"50"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_number"
    },{
      "function":"__c",
      "vtp_value":"53"
    },{
      "function":"__c",
      "vtp_value":"51"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"frequency"
    },{
      "function":"__c",
      "vtp_value":"54"
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__c",
      "vtp_value":"9"
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__c",
      "vtp_value":"6"
    },{
      "function":"__c",
      "vtp_value":"8"
    },{
      "function":"__c",
      "vtp_value":"7"
    },{
      "function":"__c",
      "vtp_value":"58"
    },{
      "function":"__c",
      "vtp_value":"59"
    },{
      "function":"__c",
      "vtp_value":"56"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"campaign"
    },{
      "function":"__c",
      "vtp_value":"G-WF86BFEZ5L"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__k",
      "vtp_name":"latestDonationAmount",
      "vtp_decodeCookie":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],";if(a instanceof HTMLElement){for(var d=[];a.nodeType===Node.ELEMENT_NODE;){var c=a.nodeName;if(a.id)c+=\"#\"+a.id;else{var b=a;for(c=[];null!==b\u0026\u0026b.nodeType===Node.ELEMENT_NODE;)b:if(c.unshift(b.nodeName),\"undefined\"!==b.previousElementSibling)b=b.previousElementSibling;else{for(;b=b.previousSibling;)if(1===b.nodeType)break b;b=void 0}\"HTML\"!==c[0]\u0026\u0026(c[0]+=\":first-child\");c=c.join(\" + \")}d.unshift(c);a=a.parentNode}a=d.join(\" \\x3e \")}else a=!1;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],";if(a instanceof Element){for(var c=[];a.nodeType===Node.ELEMENT_NODE;){var b=a.nodeName.toLowerCase();if(a.id){b+=\"#\"+a.id;c.unshift(b);break}else{for(var d=a,e=1;d=d.previousElementSibling;)d.nodeName.toLowerCase()==b\u0026\u0026e++;1!=e\u0026\u0026(b+=\":nth-of-type(\"+e+\")\")}c.unshift(b);a=a.parentNode}a=c.join(\" \\x3e \")}else a=void 0;return a})();"]
    },{
      "function":"__c",
      "vtp_value":"_gaA2.0"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__smm",
      "vtp_input":["macro",7],
      "vtp_setDefaultValue":false,
      "vtp_map":["list",["map","key","campaign-detail","value","div.a\u003Ediv.pagetitle"],["map","key","campaign-donate","value","div.headbar\u003Ediv.camptitle"],["map","key","donation-complete","value","div.headbar\u003Ediv.camptitle"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__c",
      "vtp_value":"20"
    },{
      "function":"__c",
      "vtp_value":"27"
    },{
      "function":"__c",
      "vtp_value":"28"
    },{
      "function":"__c",
      "vtp_value":"32"
    },{
      "function":"__c",
      "vtp_value":"33"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Object.keys(",["escape",["macro",159],8,16],");a.forEach(function(a){switch(a){case \"impressions\":return!0;case \"detail\":return!0;case \"checkout\":return!0;case \"purchase\":return!1;default:return!1}});return!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"1",
      "vtp_name":"accountCreated"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"1",
      "vtp_name":"customizeComplete"
    },{
      "function":"__u",
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",18],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.name"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "vtp_javascript":["template","(function(){return ",["escape",["macro",173],8,16],".nodeName})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.purchaseType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.beneficiary_fees_amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"charity_name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.forms;return a.length})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.dimension4"
    },{
      "function":"__d",
      "vtp_elementSelector":"H6",
      "vtp_attributeName":"title",
      "vtp_selectorType":"CSS"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"keyword"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"logged_in"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"plan_type"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"source"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_term",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__c",
      "vtp_value":"13"
    },{
      "function":"__c",
      "vtp_value":"14"
    },{
      "function":"__c",
      "vtp_value":"18"
    },{
      "function":"__c",
      "vtp_value":"19"
    },{
      "function":"__c",
      "vtp_value":"20"
    },{
      "function":"__c",
      "vtp_value":"21"
    },{
      "function":"__c",
      "vtp_value":"32"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",271],"dimension",["macro",252]],["map","index",["macro",272],"dimension",["macro",250]],["map","index",["macro",197],"dimension",["macro",130]],["map","index",["macro",198],"dimension",["macro",132]],["map","index",["macro",200],"dimension",["macro",134]],["map","index",["macro",201],"dimension",["macro",136]],["map","index",["macro",203],"dimension",["macro",138]],["map","index",["macro",202],"dimension",["macro",140]],["map","index",["macro",199],"dimension",["macro",142]],["map","index",["macro",187],"dimension",["macro",188]],["map","index",["macro",152],"dimension",["macro",121]],["map","index",["macro",153],"dimension",["macro",151]],["map","index",["macro",273],"dimension",["macro",254]],["map","index",["macro",274],"dimension",["macro",262]],["map","index",["macro",158],"dimension",["macro",144]],["map","index",["macro",275],"dimension","#"],["map","index",["macro",276],"dimension",["macro",132]],["map","index",["macro",277],"dimension",["macro",144]],["map","index",["macro",278],"dimension","#"],["map","index",["macro",106],"dimension",["macro",16]],["map","index",["macro",107],"dimension",["macro",17]],["map","index",["macro",108],"dimension",["macro",103]],["map","index",["macro",109],"dimension",["macro",102]],["map","index",["macro",110],"dimension",["macro",112]],["map","index",["macro",113],"dimension",["macro",114]],["map","index",["macro",115],"dimension",["macro",116]],["map","index",["macro",117],"dimension",["macro",118]],["map","index",["macro",279],"dimension","#"],["map","index",["macro",129],"dimension",["macro",130]],["map","index",["macro",131],"dimension",["macro",132]],["map","index",["macro",133],"dimension",["macro",134]],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",137],"dimension",["macro",138]],["map","index",["macro",139],"dimension",["macro",140]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",156],"dimension",["macro",157]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-11111-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.videoTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.videoUrl"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gtm-custom-tids"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.gfmAnalyticsMeta"
    },{
      "function":"__c",
      "vtp_value":"49"
    },{
      "function":"__c",
      "vtp_value":"55"
    },{
      "function":"__c",
      "vtp_value":"11"
    },{
      "function":"__c",
      "vtp_value":"57"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"owner_type"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":["macro",2],
      "vtp_useHashAutoLink":["macro",3],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",7]]],
      "vtp_autoLinkDomains":["macro",8],
      "vtp_decorateFormsAutoLink":["macro",9],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",10]],["map","fieldName","cookieDomain","value",["macro",11]],["map","fieldName","cookieExpires","value",["macro",12]],["map","fieldName","legacyHistoryImport","value",["macro",13]],["map","fieldName","userId","value",["macro",14]]],
      "vtp_enableLinkId":["macro",15],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",16]],["map","index","2","dimension",["macro",17]],["map","index","3","dimension",["macro",18]],["map","index","4","dimension",["macro",19]],["map","index","5","dimension",["macro",20]],["map","index","6","dimension",["macro",21]],["map","index","7","dimension",["macro",22]],["map","index","8","dimension",["macro",14]],["map","index","9","dimension",["macro",24]],["map","index","10","dimension",["macro",25]],["map","index","11","dimension",["macro",26]],["map","index","16","dimension",["macro",27]],["map","index","17","dimension","pageview"],["map","index","28","dimension",["template","Rdrs:",["macro",28],",Nav:",["macro",29],",HeapUsed:",["macro",30],",HeapTotal:",["macro",31],",HeapMax:",["macro",32]]],["map","index","32","dimension",["macro",34]],["map","index","33","dimension",["macro",35]],["map","index","14","dimension",["macro",36]],["map","index","15","dimension",["macro",37]],["map","index","34","dimension",["macro",38]],["map","index","37","dimension",["macro",39]],["map","index","38","dimension",["macro",40]],["map","index",["macro",41],"dimension",["macro",42]],["map","index","44","dimension",["macro",43]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",2],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"transaction",
      "vtp_eventLabel":["template","Campaign: ",["macro",37]],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",52],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",10]],["map","fieldName","cookieDomain","value",["macro",11]],["map","fieldName","cookieExpires","value",["macro",12]],["map","fieldName","legacyHistoryImport","value",["macro",13]],["map","fieldName","userId","value",["macro",14]]],
      "vtp_enableLinkId":["macro",15],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension",["macro",16]],["map","index",["macro",54],"dimension",["macro",17]],["map","index",["macro",55],"dimension",["macro",18]],["map","index",["macro",56],"dimension",["macro",19]],["map","index",["macro",57],"dimension",["macro",20]],["map","index",["macro",58],"dimension",["macro",21]],["map","index",["macro",59],"dimension",["macro",22]],["map","index",["macro",60],"dimension",["macro",14]],["map","index",["macro",61],"dimension",["macro",24]],["map","index",["macro",62],"dimension","Donor"],["map","index",["macro",63],"dimension",["macro",26]],["map","index",["macro",64],"dimension",["macro",65]],["map","index",["macro",66],"dimension",["macro",67]],["map","index",["macro",68],"dimension",["macro",36]],["map","index",["macro",69],"dimension",["macro",37]],["map","index",["macro",70],"dimension",["macro",27]],["map","index",["macro",71],"dimension","event"],["map","index",["macro",72],"dimension",["macro",73]],["map","index",["macro",74],"dimension",["macro",75]],["map","index",["macro",76],"dimension",["macro",77]],["map","index",["macro",78],"dimension",["macro",79]],["map","index",["macro",80],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",83]],["map","index",["macro",84],"dimension",["macro",85]],["map","index",["macro",86],"dimension",["macro",87]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",10]],["map","fieldName","cookieDomain","value",["macro",11]],["map","fieldName","cookieExpires","value",["macro",12]],["map","fieldName","legacyHistoryImport","value",["macro",13]],["map","fieldName","userId","value",["macro",14]]],
      "vtp_eventCategory":"Donation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Raised One Dollar",
      "vtp_eventLabel":["macro",36],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"955875456",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",89],
      "vtp_enableRdpCheckbox":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",90],
      "vtp_useDebugVersion":["macro",2],
      "vtp_eventCategory":["macro",91],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",92],
      "vtp_eventLabel":["macro",93],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_eventValue":["macro",94],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",10]],["map","fieldName","cookieDomain","value",["macro",11]],["map","fieldName","cookieExpires","value",["macro",12]],["map","fieldName","legacyHistoryImport","value",["macro",13]],["map","fieldName","userId","value",["macro",14]]],
      "vtp_enableLinkId":["macro",15],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension",["macro",16]],["map","index",["macro",54],"dimension",["macro",17]],["map","index",["macro",55],"dimension",["macro",18]],["map","index",["macro",56],"dimension",["macro",19]],["map","index",["macro",57],"dimension",["macro",20]],["map","index",["macro",58],"dimension",["macro",21]],["map","index",["macro",59],"dimension",["macro",22]],["map","index",["macro",60],"dimension",["macro",14]],["map","index",["macro",61],"dimension",["macro",24]],["map","index",["macro",62],"dimension","Donor"],["map","index",["macro",63],"dimension",["macro",26]],["map","index",["macro",64],"dimension",["macro",65]],["map","index",["macro",66],"dimension",["macro",67]],["map","index",["macro",68],"dimension",["macro",36]],["map","index",["macro",69],"dimension",["macro",37]],["map","index",["macro",70],"dimension",["macro",27]],["map","index",["macro",71],"dimension","event"],["map","index",["macro",72],"dimension",["macro",73]],["map","index",["macro",74],"dimension",["macro",75]],["map","index",["macro",76],"dimension",["macro",77]],["map","index",["macro",78],"dimension",["macro",79]],["map","index",["macro",80],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",83]],["map","index",["macro",84],"dimension",["macro",85]],["map","index",["macro",86],"dimension",["macro",87]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__awct",
      "once_per_load":true,
      "vtp_conversionId":"955875456",
      "vtp_conversionLabel":"egQVCJLermUQgIHmxwM",
      "vtp_url":["macro",89],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",95]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5577581-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":42
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"955875456",
      "vtp_conversionLabel":"i54ZCLre9G4QgIHmxwM",
      "vtp_url":["macro",89],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":45
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"955875456",
      "vtp_conversionLabel":"jPwDCL3e9G4QgIHmxwM",
      "vtp_url":["macro",89],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"GTM",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"AccountCreated",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5577581-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"GTM",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"CustomizeComplete",
      "vtp_dimension":["list",["map","index",["macro",53],"dimension",["macro",16]],["map","index",["macro",54],"dimension",["macro",17]],["map","index",["macro",55],"dimension",["macro",18]],["map","index",["macro",56],"dimension",["macro",19]],["map","index",["macro",57],"dimension",["macro",20]],["map","index",["macro",58],"dimension",["macro",21]],["map","index",["macro",59],"dimension",["macro",22]],["map","index",["macro",60],"dimension",["macro",14]],["map","index",["macro",61],"dimension",["macro",24]],["map","index",["macro",68],"dimension",["macro",36]],["map","index",["macro",69],"dimension",["macro",37]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5577581-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nxq1e",
      "tag_id":56
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"Signup",
      "vtp_twitter_pixel_id":"nxq1e",
      "tag_id":57
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"CompleteRegistration",
      "vtp_twitter_pixel_id":"nxq1e",
      "tag_id":58
    },{
      "function":"__baut",
      "metadata":["map"],
      "setup_tags":["list",["tag",134,0]],
      "once_per_event":true,
      "vtp_eventCategory":"GTM",
      "vtp_tagId":"5152667",
      "vtp_uetqName":"uetq5152667",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"AccountCreated",
      "tag_id":59
    },{
      "function":"__baut",
      "metadata":["map"],
      "setup_tags":["list",["tag",134,0]],
      "once_per_event":true,
      "vtp_eventCategory":"GTM",
      "vtp_tagId":"5152667",
      "vtp_uetqName":"uetq5152667",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"CustomizeComplete",
      "tag_id":60
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":66
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"76771",
      "tag_id":71
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=76771\u0026conversionId=1463802\u0026fmt=gif",
      "tag_id":72
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":75
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"25086261",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"formSubmit",
      "tag_id":76
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1056994874",
      "vtp_conversionLabel":"OvG4CJXilbMBELrsgfgD",
      "vtp_url":["macro",89],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":79
    },{
      "function":"__baut",
      "metadata":["map"],
      "setup_tags":["list",["tag",139,0]],
      "once_per_event":true,
      "vtp_tagId":"25086261",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"claimChairty",
      "tag_id":82
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1056994874",
      "vtp_conversionLabel":"cJTtCKGu45MBELrsgfgD",
      "vtp_url":["macro",89],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":83
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1056994874",
      "vtp_conversionLabel":"DTOWCKSu45MBELrsgfgD",
      "vtp_url":["macro",89],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":84
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":86
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":89
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":92
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":93
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"start campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric","1"]],
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"campaign published",
      "vtp_eventLabel":["macro",116],
      "vtp_dimension":["list",["map","index",["macro",126],"dimension",["macro",127]],["map","index",["macro",128],"dimension","GA Event - Campaign Publish"],["map","index",["macro",129],"dimension",["macro",130]],["map","index",["macro",131],"dimension",["macro",132]],["map","index",["macro",133],"dimension",["macro",134]],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",137],"dimension",["macro",138]],["map","index",["macro",139],"dimension",["macro",140]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",145],"dimension",["macro",145]],["map","index",["macro",146],"dimension",["macro",120]],["map","index",["macro",147],"dimension",["macro",148]],["map","index",["macro",149],"dimension",["macro",150]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":94
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"claim charity",
      "vtp_eventLabel":["macro",151],
      "vtp_dimension":["list",["map","index",["macro",152],"dimension",["macro",121]],["map","index",["macro",153],"dimension",["macro",151]],["map","index",["macro",128],"dimension","GA Event - Claim Charity"],["map","index",["macro",145],"dimension",["macro",119]],["map","index",["macro",146],"dimension",["macro",120]],["map","index",["macro",154],"dimension",["macro",155]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":95
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"charity signup",
      "vtp_eventLabel":["macro",151],
      "vtp_dimension":["list",["map","index",["macro",153],"dimension",["macro",151]],["map","index",["macro",152],"dimension",["macro",121]],["map","index",["macro",128],"dimension","GA Event - Charity Signup"],["map","index",["macro",156],"dimension",["macro",157]],["map","index",["macro",146],"dimension",["macro",120]],["map","index",["macro",145],"dimension",["macro",119]],["map","index",["macro",158],"dimension",["macro",155]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":96
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",159],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":["template","transaction: ",["macro",160]],
      "vtp_eventLabel":["macro",161],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"hubspot form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"submit",
      "vtp_eventLabel":["macro",162],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":98
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",125],
      "vtp_dimension":["list",["map","index",["macro",126],"dimension",["macro",163]],["map","index",["macro",128],"dimension","GA Page View - Charity Page View"],["map","index",["macro",164],"dimension",["macro",40]],["map","index",["macro",165],"dimension",["macro",42]],["map","index","44","dimension",["macro",43]],["map","index","29","dimension",["macro",118]],["map","index","28","dimension",["macro",116]],["map","index","27","dimension",["macro",114]],["map","index","26","dimension",["macro",112]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":99
    },{
      "function":"__paused",
      "vtp_originalTagType":"pa",
      "tag_id":100
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"Add to Cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":101
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"Checkout",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"Product Detail",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",166],
      "vtp_enableUserProperties":true,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":["macro",170],
      "vtp_eventLabel":["template",["macro",171]," - ",["macro",172]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Charity",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: about_infocard",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Charity - about_infocard"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":108
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Charity",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: charitystart_storycard",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Charity - storycard"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":109
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Charity",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: charitystart_infocard",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Charity - infocard"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":110
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Charity",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: charitystart_banner",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Charity - start_banner"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Charity",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: homepage_storycard",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Charity - hp_storycard"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":112
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Charity",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: homepage_merchunit",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Charity - hp_merchunit"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":113
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Charity",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: howitworks_storycard",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Charity - hiw_storycard"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":114
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Charity",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: signin_link",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Charity - signin_link"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":115
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: learn more: gofundme charity",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Footer - gfm_charity"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",99]],
      "vtp_eventLabel":"click: top nav: for nonprofits: gofundme charity",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Navigation - gfm_charity"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":117
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_fieldsToSet":["list",["map","name","event","value","navigation_click"],["map","name","nav_label","value","click: gofundme charity (exit)"],["map","name","nav_destination","value","http:\/\/charity.gofundme.com"]],
      "vtp_sendPageView":false,
      "vtp_measurementId":["macro",178],
      "vtp_enableUserProperties":true,
      "tag_id":118
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Errors",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","page: ",["macro",19]],
      "vtp_eventLabel":["template","soft 404 - from page: ",["macro",18]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":119
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",181],
      "vtp_eventAction":"transaction (custom event)",
      "vtp_eventLabel":["template","Campaign: ",["macro",37]],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",52],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",10]],["map","fieldName","cookieDomain","value",["macro",11]],["map","fieldName","cookieExpires","value",["macro",12]],["map","fieldName","legacyHistoryImport","value",["macro",13]],["map","fieldName","userId","value",["macro",14]]],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension",["macro",16]],["map","index",["macro",54],"dimension",["macro",17]],["map","index",["macro",55],"dimension",["macro",18]],["map","index",["macro",56],"dimension",["macro",19]],["map","index",["macro",57],"dimension",["macro",20]],["map","index",["macro",58],"dimension",["macro",21]],["map","index",["macro",59],"dimension",["macro",22]],["map","index",["macro",60],"dimension",["macro",14]],["map","index",["macro",61],"dimension",["macro",24]],["map","index",["macro",62],"dimension","Donor"],["map","index",["macro",63],"dimension",["macro",26]],["map","index",["macro",64],"dimension",["macro",65]],["map","index",["macro",66],"dimension",["macro",67]],["map","index",["macro",68],"dimension",["macro",36]],["map","index",["macro",69],"dimension",["macro",37]],["map","index",["macro",70],"dimension",["macro",27]],["map","index",["macro",71],"dimension","event"],["map","index",["macro",72],"dimension",["macro",73]],["map","index",["macro",74],"dimension",["macro",75]],["map","index",["macro",76],"dimension",["macro",77]],["map","index",["macro",78],"dimension",["macro",79]],["map","index",["macro",80],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",83]],["map","index",["macro",84],"dimension",["macro",85]],["map","index",["macro",86],"dimension",["macro",87]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"co_campaign_start",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","from: ",["macro",99]],
      "vtp_eventLabel":"click: campaign start",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"campaign_organizer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","campaign_url: ",["macro",99]],
      "vtp_eventLabel":["template","donation count: ",["macro",183]," \/\/ share count: ",["macro",184]],
      "vtp_dimension":["list",["map","index","41","dimension",["macro",183]],["map","index","42","dimension",["macro",184]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":125
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"campaigns",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":["template","campaign_url: ",["macro",99]],
      "vtp_eventLabel":["template","donor count: ",["macro",185]," \/\/ donation value: ",["macro",186]],
      "vtp_dimension":["list",["map","index","45","dimension",["macro",185]],["map","index","46","dimension",["macro",186]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":126
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"charity sign-in",
      "vtp_eventLabel":["macro",151],
      "vtp_dimension":["list",["map","index",["macro",153],"dimension",["macro",151]],["map","index",["macro",152],"dimension",["macro",121]],["map","index",["macro",128],"dimension","GA Event - Charity Sign-In"],["map","index",["macro",154],"dimension",["macro",155]],["map","index",["macro",145],"dimension",["macro",119]],["map","index",["macro",146],"dimension",["macro",120]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":296
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"individual sign up",
      "vtp_dimension":["list",["map","index",["macro",152],"dimension",["macro",121]],["map","index",["macro",153],"dimension",["macro",151]],["map","index",["macro",128],"dimension","GA Event - Individual Sign Up"],["map","index",["macro",145],"dimension",["macro",119]],["map","index",["macro",154],"dimension",["macro",155]],["map","index",["macro",146],"dimension",["macro",120]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":302
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"charity verified",
      "vtp_eventLabel":["macro",151],
      "vtp_dimension":["list",["map","index",["macro",152],"dimension",["macro",121]],["map","index",["macro",153],"dimension",["macro",151]],["map","index",["macro",128],"dimension","GA Event - Charity Verified"],["map","index",["macro",145],"dimension",["macro",119]],["map","index",["macro",146],"dimension",["macro",120]],["map","index",["macro",154],"dimension",["macro",155]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":305
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"start campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric","1"]],
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"campaign created",
      "vtp_eventLabel":["macro",116],
      "vtp_dimension":["list",["map","index",["macro",126],"dimension",["macro",127]],["map","index",["macro",128],"dimension","GA Event - Campaign Created"],["map","index",["macro",129],"dimension",["macro",130]],["map","index",["macro",131],"dimension",["macro",132]],["map","index",["macro",133],"dimension",["macro",134]],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",137],"dimension",["macro",138]],["map","index",["macro",139],"dimension",["macro",140]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",145],"dimension",["macro",145]],["map","index",["macro",146],"dimension",["macro",120]],["map","index",["macro",147],"dimension",["macro",148]],["map","index",["macro",149],"dimension",["macro",150]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":310
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"start campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric","1"]],
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"campaign accepted",
      "vtp_eventLabel":["macro",116],
      "vtp_dimension":["list",["map","index",["macro",126],"dimension",["macro",127]],["map","index",["macro",128],"dimension","GA Event - Campaign Created"],["map","index",["macro",129],"dimension",["macro",130]],["map","index",["macro",131],"dimension",["macro",132]],["map","index",["macro",133],"dimension",["macro",134]],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",137],"dimension",["macro",138]],["map","index",["macro",139],"dimension",["macro",140]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",145],"dimension",["macro",145]],["map","index",["macro",146],"dimension",["macro",120]],["map","index",["macro",147],"dimension",["macro",148]],["map","index",["macro",149],"dimension",["macro",150]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":312
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"start campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric","1"]],
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"campaign activated",
      "vtp_eventLabel":["macro",116],
      "vtp_dimension":["list",["map","index",["macro",126],"dimension",["macro",127]],["map","index",["macro",128],"dimension","GA Event - Campaign Created"],["map","index",["macro",129],"dimension",["macro",130]],["map","index",["macro",131],"dimension",["macro",132]],["map","index",["macro",133],"dimension",["macro",134]],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",137],"dimension",["macro",138]],["map","index",["macro",139],"dimension",["macro",140]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",145],"dimension",["macro",145]],["map","index",["macro",146],"dimension",["macro",120]],["map","index",["macro",147],"dimension",["macro",148]],["map","index",["macro",149],"dimension",["macro",150]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":314
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":["template","ticket transaction: ",["macro",160]],
      "vtp_eventLabel":["macro",161],
      "vtp_dimension":["list",["map","index","31","dimension","GFMc - GA Event - Ticket Purchased - Transaction"],["map","index",["macro",187],"dimension",["macro",188]],["map","index",["macro",146],"dimension",["macro",120]],["map","index",["macro",189],"dimension",["macro",161]],["map","index",["macro",190],"dimension",["macro",161]],["map","index",["macro",191],"dimension",["macro",192]],["map","index",["macro",193],"dimension",["macro",192]],["map","index",["macro",194],"dimension",["macro",195]],["map","index",["macro",196],"dimension",["macro",195]],["map","index",["macro",197],"dimension",["macro",130]],["map","index",["macro",129],"dimension",["macro",130]],["map","index",["macro",131],"dimension",["macro",132]],["map","index",["macro",198],"dimension",["macro",132]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",199],"dimension",["macro",142]],["map","index",["macro",200],"dimension",["macro",134]],["map","index",["macro",133],"dimension",["macro",134]],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",201],"dimension",["macro",136]],["map","index",["macro",202],"dimension",["macro",140]],["map","index",["macro",137],"dimension",["macro",138]],["map","index",["macro",203],"dimension",["macro",138]],["map","index",["macro",139],"dimension",["macro",140]],["map","index",["macro",204],"dimension",["macro",150]],["map","index",["macro",149],"dimension",["macro",150]],["map","index",["macro",147],"dimension",["macro",148]],["map","index",["macro",205],"dimension",["macro",148]],["map","index",["macro",206],"dimension",["macro",119]],["map","index",["macro",145],"dimension",["macro",119]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":334
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"beneficiary selected",
      "vtp_eventLabel":["macro",151],
      "vtp_dimension":["list",["map","index",["macro",152],"dimension",["macro",121]],["map","index",["macro",153],"dimension",["macro",151]],["map","index",["macro",128],"dimension","GFMc -GA Event - Beneficiary Selected"],["map","index",["macro",145],"dimension",["macro",119]],["map","index",["macro",146],"dimension",["macro",120]],["map","index",["macro",154],"dimension",["macro",155]],["map","index",["macro",129],"dimension",["macro",130]],["map","index",["macro",131],"dimension",["macro",132]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",133],"dimension",["macro",134]],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",137],"dimension",["macro",138]],["map","index",["macro",139],"dimension",["macro",140]],["map","index",["macro",149],"dimension",["macro",150]],["map","index",["macro",147],"dimension",["macro",148]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":335
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"YouTube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",170],
      "vtp_eventLabel":["template",["macro",171]," - ",["macro",172]],
      "vtp_dimension":["list",["map","index",["macro",68],"dimension",["macro",207]],["map","index","41","dimension",["macro",183]],["map","index","42","dimension",["macro",184]]],
      "vtp_trackingId":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":337
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o381v",
      "tag_id":348
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1056994874",
      "vtp_conversionLabel":"1ObPCJyHpMcBELrsgfgD",
      "vtp_url":["macro",89],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":351
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"marketing campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"conference: afp",
      "vtp_eventLabel":"click: meet the team",
      "vtp_dimension":["list",["map","index",["macro",128],"dimension","GA Event - Conf Sign Up"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":354
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"marketing campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"conference: ntc",
      "vtp_eventLabel":"click: meet the team",
      "vtp_dimension":["list",["map","index",["macro",128],"dimension","GA Event - Conf Sign Up"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":356
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",208],
      "vtp_enableUserProperties":true,
      "tag_id":359
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"co_campaign_start",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",174],
      "vtp_eventAction":["template","from: ",["macro",99]],
      "vtp_eventLabel":"click: start a fundraiser",
      "vtp_dimension":["list",["map","index",["macro",175],"dimension","GA Event - Start a Fundraiser"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":361
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"campaignComplete",
      "vtp_eventParameters":["list",["map","name","campaignName","value",["macro",37]],["map","name","campaignUrl","value",["macro",19]],["map","name","platform","value","Web"],["map","name","userId","value",["macro",14]],["map","name","campaignId","value",["macro",36]]],
      "vtp_measurementId":["macro",208],
      "vtp_enableUserProperties":true,
      "tag_id":362
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_fieldsToSet":["list",["map","name","platform","value","Web"],["map","name","userId","value",["macro",14]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",208],
      "vtp_enableUserProperties":true,
      "tag_id":363
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"1200",
      "vtp_uniqueTriggerId":"995711_44",
      "tag_id":364
    },{
      "function":"__cl",
      "tag_id":365
    },{
      "function":"__cl",
      "tag_id":366
    },{
      "function":"__cl",
      "tag_id":367
    },{
      "function":"__cl",
      "tag_id":368
    },{
      "function":"__cl",
      "tag_id":369
    },{
      "function":"__cl",
      "tag_id":370
    },{
      "function":"__cl",
      "tag_id":371
    },{
      "function":"__cl",
      "tag_id":372
    },{
      "function":"__cl",
      "tag_id":373
    },{
      "function":"__cl",
      "tag_id":374
    },{
      "function":"__cl",
      "tag_id":375
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_131",
      "tag_id":376
    },{
      "function":"__cl",
      "tag_id":377
    },{
      "function":"__cl",
      "tag_id":378
    },{
      "function":"__cl",
      "tag_id":379
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","995711_140_344","995711_140_345"],
      "vtp_uniqueTriggerId":"995711_140",
      "tag_id":380
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"995711_140_344",
      "tag_id":381
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"995711_140_345",
      "tag_id":383
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_144",
      "tag_id":384
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_145",
      "tag_id":385
    },{
      "function":"__cl",
      "tag_id":386
    },{
      "function":"__cl",
      "tag_id":387
    },{
      "function":"__cl",
      "tag_id":388
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_151",
      "tag_id":389
    },{
      "function":"__cl",
      "tag_id":390
    },{
      "function":"__cl",
      "tag_id":391
    },{
      "function":"__cl",
      "tag_id":392
    },{
      "function":"__cl",
      "tag_id":393
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,100",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"DOM_READY",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"995711_179",
      "vtp_enableTriggerStartOption":true,
      "tag_id":394
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_195",
      "tag_id":395
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_196",
      "tag_id":396
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_197",
      "tag_id":397
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_198",
      "tag_id":398
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_200",
      "tag_id":399
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_201",
      "tag_id":400
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_202",
      "tag_id":401
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_203",
      "tag_id":402
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_204",
      "tag_id":403
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_205",
      "tag_id":404
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"995711_224",
      "tag_id":405
    },{
      "function":"__cl",
      "tag_id":406
    },{
      "function":"__cl",
      "tag_id":407
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","995711_339_338"],
      "vtp_uniqueTriggerId":"995711_339",
      "tag_id":408
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"995711_339_338",
      "tag_id":409
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","995711_342_141","995711_342_50","995711_342_341"],
      "vtp_uniqueTriggerId":"995711_342",
      "tag_id":410
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"995711_342_141",
      "tag_id":411
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"995711_342_50",
      "tag_id":413
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"995711_342_341",
      "tag_id":415
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","995711_343_50","995711_343_313"],
      "vtp_uniqueTriggerId":"995711_343",
      "tag_id":416
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"995711_343_50",
      "tag_id":417
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"995711_343_313",
      "tag_id":419
    },{
      "function":"__cl",
      "tag_id":420
    },{
      "function":"__cl",
      "tag_id":421
    },{
      "function":"__cl",
      "tag_id":422
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"===typeof fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\"),fbq(\"init\",\"819737484732040\"),fbq(\"track\",\"PageView\"));\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=819737484732040\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar donationAmountStash=$(\"#input_amount\").val();document.cookie=\"latestDonationAmount\\x3d\"+donationAmountStash;\u003C\/script\u003E",
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E0!=",["escape",["macro",73],8,16],"-",["escape",["macro",211],8,16],"\u0026\u00260!=",["escape",["macro",73],8,16],"\u0026\u0026\"undefined\"!==typeof ",["escape",["macro",73],8,16],"||dataLayer.push({event:\"raisedOneDollar\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5152667\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq5152667\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nulgi\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nulgi\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nulgi\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{type:\"Account Created\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{type:\"Customize Complete\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",131,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"SubmitApplication\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"25086261\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=76771\u0026amp;conversionId=1530122\u0026amp;fmt=gif\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Contact\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=76771\u0026amp;conversionId=1550242\u0026amp;fmt=gif\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"signupType\",cookieValue=\"charity\",expirationTime=2592E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);expirationTime=date.toUTCString();document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; expires\\x3d\"+expirationTime+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"signupType\",cookieValue=\"individual\",expirationTime=2592E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);expirationTime=date.toUTCString();document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; expires\\x3d\"+expirationTime+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"message\",function(a){\"hsFormCallback\"===a.data.type\u0026\u0026\"onFormSubmitted\"===a.data.eventName\u0026\u0026window.dataLayer.push({event:\"hubspot-form-success\",\"hs-form-guid\":a.data.id})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o381w\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o381w\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o381w\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":350
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"ConferenceSignUp\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":352
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*gofundme.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"www.gfm-test01.com|.*gfmnorma.wpengine.com"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"charity.gofundme.com|crowdrise.com|fundraising.crowdrise.com"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"charity.gfm-test01.com|gfmcharity.wpengine.com"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":".*\/thankyou(\/.*)?\\?d=.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"raisedOneDollar"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/Medical-Illness-Healing"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/Sports-Teams-Clubs"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/Funerals-Memorials-Tributes"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/Education-Schools-Learning"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"https:\/\/www.gofundme.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"trigger-ga-event"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":".*\/thankyou"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"trigger-page-view"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"accountCreated"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"customizeComplete"
    },{
      "function":"_cn",
      "arg0":["macro",96],
      "arg1":"gform_submit_button_2"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"Publish Campaign"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"campaign-manager"
    },{
      "function":"_cn",
      "arg0":["macro",98],
      "arg1":"charity"
    },{
      "function":"_cn",
      "arg0":["macro",97],
      "arg1":"Claim Nonprofit"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"charities\/search"
    },{
      "function":"_cn",
      "arg0":["macro",97],
      "arg1":"Request Access to Nonprofit"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/charities\/search"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"charity-claim"
    },{
      "function":"_cn",
      "arg0":["macro",96],
      "arg1":"register_form"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"charities"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_131($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",96],
      "arg1":"signup_user_modal_form"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_144($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"campaign-published"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"charity-signup"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_140($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"hubspot-form-success"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"www.gofundme.com|ca.gofundme.com|uk.gofundme.com|support.gofundme.com|au.gofundme.com|funds.gofundme.com|ie.gofundme.com|de.gofundme.com|es.gofundme.com|fr.gofundme.com|nl.gofundme.com|it.gofundme.com|www.gofundme.com.googleweblight.com|^gofundme.com|pages.gofundme.com|pt.gofundme.com|support.gofundme.com.googleweblight.com|donate.gofundme.com|es.gofundme.com.googleweblight.com|uk.gofundme.com.googleweblight.com|au.gofundme.com.googleweblight.com|fr.gofundme.com.googleweblight.com|ie.gofundme.com.googleweblight.com|charity.gofundme.com.googleweblight.com|ca.gofundme.com.googleweblight.com|de.gofundme.com.googleweblight.com|happiness.gofundme.com|pt.gofundme.com.googleweblight.com|pr.gofundme.com|gofundme.local|gofundme.com.googleweblight.com|ssr-frontend.gofundme.com|it.gofundme.com.googleweblight.com|pages.gofundme.com.googleweblight.com|donate.gofundme.com.googleweblight.com|nl.gofundme.com.googleweblight.com|cdn-charity.gofundme.com|gofundme.zendesk.com|s.gofundme.com|www.gfm-test01.com|.*gfmnorma.wpengine.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"detail"
    },{
      "function":"_cn",
      "arg0":["macro",167],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_179($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",173],
      "arg1":"div.comparison.right \u003E p \u003E span \u003E a"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"\/c\/about-us"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_198($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",176],
      "arg1":"btn_charitylandingpage_gfmcharity_infocard"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_200($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",176],
      "arg1":"btn_gfmcharity_card"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"start\/charity-fundraising"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_201($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",176],
      "arg1":"btn_charitylandingpage_gfmc_banner"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_202($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_203($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",176],
      "arg1":"banner_merch_unit_us_130"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_204($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",173],
      "arg1":"a.story-card"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"\/c\/how-it-works"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_197($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",177],
      "arg1":"btn_sign_in_gfmcharity"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_196($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",176],
      "arg1":"btn_footer_gfmcharity"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_205($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",176],
      "arg1":"btn_nav_gfmcharity"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_195($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",179],
      "arg1":"Campaign Not Found"
    },{
      "function":"_cn",
      "arg0":["macro",180],
      "arg1":"Page Not Found"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":".*\/thankyou\/share.d=.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"uniqueTransaction"
    },{
      "function":"_css",
      "arg0":["macro",173],
      "arg1":"a.button.primary"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_224($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",173],
      "arg1":"a.a-button"
    },{
      "function":"_cn",
      "arg0":["macro",182],
      "arg1":"sign-up"
    },{
      "function":"_css",
      "arg0":["macro",173],
      "arg1":"span \u003E a"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"\/f\/"
    },{
      "function":"_gt",
      "arg0":["macro",183],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"\/o\/en"
    },{
      "function":"_gt",
      "arg0":["macro",185],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"charity"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"signin"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"charity-verified"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"campaign-created"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"campaign-accepted"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"campaign-activated"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"(^$|((^|,)995711_342($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"campaign-beneficiary-selected"
    },{
      "function":"_css",
      "arg0":["macro",173],
      "arg1":"#gform_submit_button_7"
    },{
      "function":"_re",
      "arg0":["macro",99],
      "arg1":".*afp-2020-time.*"
    },{
      "function":"_css",
      "arg0":["macro",173],
      "arg1":"form \u003E div \u003E input"
    },{
      "function":"_re",
      "arg0":["macro",99],
      "arg1":".*ntc-2020-time.*"
    },{
      "function":"_css",
      "arg0":["macro",173],
      "arg1":"div.search+p\u003Espan\u003Ea"
    },{
      "function":"_cn",
      "arg0":["macro",209],
      "arg1":"sign-up"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^donate$|purchase"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"share\/postDonate"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"donate-data"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"purchase|purchaseActivation"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^donate.data$"
    },{
      "function":"_css",
      "arg0":["macro",210],
      "arg1":"a.form_submit"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/[a-z0-9]+\/donate$",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,2],["add",0,41]],
    [["if",5,6],["add",1]],
    [["if",7],["add",2]],
    [["if",1,8],["add",3]],
    [["if",1,9],["add",3]],
    [["if",1,10],["add",3]],
    [["if",1,11],["add",3]],
    [["if",1,12],["add",3]],
    [["if",1],["add",3,11,25,26,27,28,29,30,36,37,68,72,134,145,16,17,131,139,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,95,96,97,98,99,100,101,102,103,104,106,107,108,109,110,111,112,113,114,115,116,117,118,119,121,125,128,129,130]],
    [["if",13],["add",4]],
    [["if",1,14],["add",5,133,135]],
    [["if",15],["add",6]],
    [["if",16],["add",7,9,12,14,136]],
    [["if",17],["add",8,10,13,15,74,137]],
    [["if",18,19],["add",18]],
    [["if",19,20,21,22],["add",19,20,24,138,140]],
    [["if",19,23,24],["add",21,22,141,142]],
    [["if",19,25,26],["add",21,22,141,142]],
    [["if",27],["add",22,32,60]],
    [["if",28,29,30,31],["add",23,143]],
    [["if",30,32,33],["add",23,144]],
    [["if",34],["add",31]],
    [["if",35],["add",33]],
    [["if",36,37],["add",34]],
    [["if",38],["add",35]],
    [["if",40],["add",38]],
    [["if",41],["add",39]],
    [["if",42],["add",40]],
    [["if",1,4],["add",41],["block",0,3,17,131,134]],
    [["if",44,45],["unless",43],["add",42,67]],
    [["if",46,47,48,49],["add",43]],
    [["if",48,50,51],["add",44]],
    [["if",48,52,53,54],["add",45]],
    [["if",48,55,56],["add",46]],
    [["if",48,52,57,58],["add",47]],
    [["if",48,59,60],["add",48]],
    [["if",48,61,62,63],["add",49]],
    [["if",48,64,65],["add",50]],
    [["if",48,66,67],["add",51]],
    [["if",48,68,69],["add",52,53]],
    [["if",6,70],["add",54]],
    [["if",6,71],["add",54]],
    [["if",72,73],["add",55]],
    [["if",48,74,75],["add",56,75]],
    [["if",19,76,77],["add",56,75]],
    [["if",19,77,78],["add",56,75]],
    [["if",6,79,80],["add",57]],
    [["if",6,81,82],["add",58]],
    [["if",83,84],["add",59]],
    [["if",85],["add",61]],
    [["if",83,86],["add",62]],
    [["if",83,87],["add",63]],
    [["if",88],["add",64,127]],
    [["if",36,89],["add",65]],
    [["if",90],["add",66]],
    [["if",19,91,92],["add",69,70,146,147]],
    [["if",19,93,94],["add",69,71,146,147]],
    [["if",19,95,96],["add",73]],
    [["if",1,97],["add",76]],
    [["if",98],["add",93]],
    [["if",1,99],["add",94]],
    [["if",6],["add",105,123,126]],
    [["if",100],["add",120]],
    [["if",101],["add",122]],
    [["if",102],["add",124]],
    [["if",19,103,104],["add",132]],
    [["if",1,3],["block",0]],
    [["if",1,39],["block",36]]]
},
"runtime":[[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__twitter_website_tag"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ja={Of:!0},ka={};try{ka.__proto__=ja;ha=ka.Of;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null,pa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var qa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.m={};this.i=!1;this.s={}};sa.prototype.get=function(a){return this.m["dust."+a]};sa.prototype.set=function(a,b){this.i||(a="dust."+a,this.s.hasOwnProperty(a)||(this.m[a]=b))};sa.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.$b=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.s.hasOwnProperty(d)||delete c.m[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,g){if(b[f]){if(b[f].Qb+g>b[f].max)throw Error("Quota exceeded");b[f].Qb+=g}}var b={},c=void 0,d=void 0,e={hh:function(f){c=f},se:function(){c&&a(c,1)},jh:function(f){d=f},Ca:function(f){d&&a(d,f)},Gh:function(f,g){b[f]=b[f]||{Qb:0};b[f].max=g},Gg:function(f){return b[f]&&b[f].Qb||0},reset:function(){b={}},mg:a};e.onFnConsume=e.hh;e.consumeFn=e.se;e.onStorageConsume=e.jh;e.consumeStorage=e.Ca;e.setMax=e.Gh;e.getConsumed=e.Gg;e.reset=e.reset;e.consume=e.mg;return e};var xa=function(a,b){this.F=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.s=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.i)if(a.F.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.s["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ca=function(a){var b=new xa(a.F,a);a.s&&(b.s=a.s);b.M=a.M;b.a=a.a;return b};var Da=function(){},Ea=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},Fa=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Fa(a)||
!Fa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ka=function(a,b){for(var c=new Ja,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},D=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},La=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==String(a).toLowerCase()?
!1:!!a},Pa=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ja=function(){this.prefix="gtm.";this.values={}};Ja.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ja.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=E,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];D(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var $a=function(a,b){sa.call(this);this.F=a;this.M=b};pa($a,sa);var bb=function(a,b){for(var c,d=0;d<b.length&&!(c=ab(a,b[d]),c instanceof qa);d++);return c},ab=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof $a))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};$a.prototype.toString=function(){return this.F};$a.prototype.getName=function(){return this.F};
$a.prototype.$b=function(){return new h(ta(this))};$a.prototype.a=function(a,b){a.F.se();return this.M.apply(cb(this,a),Array.prototype.slice.call(arguments,1))};var cb=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Ga(d)?ab(e,d):d};c.prototype.s=function(d){return bb(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};
$a.prototype.Fa=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var db=function(){sa.call(this)};pa(db,sa);db.prototype.$b=function(){return new h(ta(this))};var eb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,fb={Fn:"function",Map:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=eb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof $a?n="Fn":l instanceof h?n="List":l instanceof db&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(fb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},I=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=I(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=I(e,c[d])):c[d]=e}return c};var lb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.$b(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof db){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof $a){var t=function(){for(var p=Array.prototype.slice.call(arguments,0),u=0;u<p.length;u++)p[u]=kb(p[u],b);var v=b?b.F:va(),w=new xa(v);b&&
(w.a=b.a);return f(g.a.apply(g,[w].concat(p)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Ga(g)||La(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(jb(g)){var n=
new db;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new $a("",function(p){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=lb(this.a(u[v]),b);return f((0,this.i.M)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var mb={control:function(a,b){return new qa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().Ca(a.length+f.length);return new $a(a,function(){return function(g){var k=Ca(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var t=bb(k,f);if(t instanceof qa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new db,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function qb(a,b){var c=ab(a,b);if(c instanceof qa||c instanceof $a||c instanceof h||c instanceof db||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var rb=function(){this.m=va();this.a=new xa(this.m)},sb=function(a,b,c){var d=new $a(b,c);d.i=!0;a.a.set(b,d)};rb.prototype.Xb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.a,arguments[c]);return b};
rb.prototype.s=function(a,b){var c=Ca(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=qb(c,arguments[e]);return d};var tb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=tb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=tb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),wb=new qa("break"),xb=new qa("continue"),yb=function(a,b){return this.a(a)+this.a(b)},zb=function(a,b){return this.a(a)&&this.a(b)},Bb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(vb,b))return kb(a[b].apply(a,tb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof $a){var e=tb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(ub.supportedMethods,b)){var f=tb(c);f.unshift(this.i);
return ub[b].apply(a,f)}}if(a instanceof $a||a instanceof db){if(a.has(b)){var g=a.get(b);if(g instanceof $a){var k=tb(c);k.unshift(this.i);return g.a.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof $a?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,tb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Cb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Db=function(a){var b=Ca(this.i),c=bb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Eb=function(){return wb},Fb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof qa)return d}},Gb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Hb=function(){return xb},
Ib=function(a,b,c){var d=new h;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Jb=function(a,b){return this.a(a)/this.a(b)},Kb=function(a,b){return this.a(a)==this.a(b)},Lb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Mb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=bb(e,c);if(f instanceof qa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof db||b instanceof h||b instanceof $a)for(var g=b.$b(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=bb(m,c);if(n instanceof qa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){d.set(a,e);return d},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){var f=Ca(d);ya(f,a,e,!0);return f},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){var f=Ca(d);f.add(a,e);return f},b,c)},Rb=function(a){return this.i.get(this.a(a))},Sb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof db||a instanceof h||a instanceof $a?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ra(b)&&(c=a[b]));return c},Tb=function(a,b){return this.a(a)>this.a(b)},Ub=function(a,b){return this.a(a)>=this.a(b)},Vb=function(a,b){return this.a(a)===this.a(b)},Wb=function(a,b){return this.a(a)!==this.a(b)},Xb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.s(d);if(e instanceof qa)return e},Yb=function(a,b){return this.a(a)<this.a(b)},Zb=function(a,b){return this.a(a)<=
this.a(b)},$b=function(a,b){return this.a(a)%this.a(b)},ac=function(a,b){return this.a(a)*this.a(b)},bc=function(a){return-this.a(a)},dc=function(a){return!this.a(a)},ec=function(a,b){return this.a(a)!=this.a(b)},fc=function(){return null},gc=function(a,b){return this.a(a)||this.a(b)},hc=function(a,b){var c=this.a(a);this.a(b);return c},ic=function(a){return this.a(a)},jc=function(a){return Array.prototype.slice.apply(arguments)},kc=function(a){return new qa("return",this.a(a))},lc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof $a||a instanceof h||a instanceof db)&&a.set(b,c);return c},mc=function(a,b){return this.a(a)-this.a(b)},nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof qa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof qa&&("return"==f.a||"continue"==f.a)))return f},oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},pc=function(a){a=this.a(a);return a instanceof $a?"function":typeof a},qc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},rc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.s(f),e instanceof qa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.s(f);if(e instanceof qa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},sc=function(a){return~Number(this.a(a))},tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))&Number(this.a(b))},xc=function(a,b){return Number(this.a(a))^Number(this.a(b))},yc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Ac=function(){this.a=new rb;zc(this)};Ac.prototype.Xb=function(a){return this.a.i(a)};
var Cc=function(a,b){return Bc.a.s(a,b)},zc=function(a){function b(e,f){var g=d.a,k=String(f);mb.hasOwnProperty(e)&&sb(g,k||e,mb[e])}function c(e,f){sb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,yb);c(1,zb);c(2,Bb);c(3,Cb);c(53,Db);c(4,Eb);c(5,Fb);c(52,Gb);c(6,Hb);c(9,Fb);c(50,Ib);c(10,Jb);c(12,Kb);c(13,Lb);c(47,Nb);c(54,Pb);c(55,Qb);c(15,Rb);c(16,Sb);c(17,Sb);c(18,Tb);c(19,Ub);c(20,Vb);c(21,Wb);c(22,Xb);c(23,Yb);c(24,Zb);c(25,$b);c(26,ac);c(27,
bc);c(28,dc);c(29,ec);c(45,fc);c(30,gc);c(32,hc);c(33,hc);c(34,ic);c(35,ic);c(46,jc);c(36,kc);c(43,lc);c(37,mc);c(38,nc);c(39,oc);c(40,pc);c(41,qc);c(42,rc);c(58,sc);c(57,tc);c(60,uc);c(61,vc);c(56,wc);c(62,xc);c(59,yc)},Ec=function(){var a=Bc,b=Dc();sb(a.a,"require",b)},Fc=function(a,b){a.a.a.M=b};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Oc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Pc=function(a){return Oc[a]};Gc[7]=function(a){return String(a).replace(Nc,Pc)};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Nc,Pc)+"'"}};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=cd[f];if(!g||b.ad(g))return;c[f]=!0;try{var k=od(g,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.og(d,k))}catch(x){b.Ke&&b.Ke(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=nd(a[n],b,c);jd&&(m=m||r===jd.Jb);d.push(r)}return jd&&m?jd.rg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Ga(a[1])&&"macro"===a[1][0]&&jd.Tg(a))return jd.oh(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var p=a[1];if(!fd[p])throw Error("Unable to resolve tag reference "+p+".");return d={xe:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Ed:a("convert_case_to"),Fd:a("convert_false_to"),Gd:a("convert_null_to"),Hd:a("convert_true_to"),Id:a("convert_undefined_to"),$h:a("debug_mode_metadata"),xa:a("function"),qf:a("instance_name"),uf:a("live_only"),wf:a("malware_disabled"),xf:a("metadata"),ai:a("original_vendor_template_id"),Bf:a("once_per_event"),Pd:a("once_per_load"),Xd:a("setup_tags"),Zd:a("tag_id"),$d:a("teardown_tags")}}();var sd=function(a,b,c){this.i=a;this.a=c};pa(sd,Error);function td(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){this.m=a;this.i=b;this.a=[]};pa(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Fa(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Bd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];yd=zd(a);for(var e=0;e<dd.length;e++){var f=dd[e],g=Ad(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ad=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=yd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},zd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Cd=function(){this.a={}};function Dd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new sd(c,d,g);}}function Ed(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Dd(e,b,d,g);Dd(f,b,d,g)}}}};var Jd=function(a){var b=Fd.B,c=this;this.i=new Cd;this.a={};var d={},e=Ed(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});D(a,function(f,g){var k={};D(g,function(l,m){var n=Gd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Gd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Md=!1;var Nd={};Nd.Ph=Oa('');Nd.zg=Oa('');var Od=Md,Pd=Nd.zg,Qd=Nd.Ph;
var de=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ee=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;de(b,"/*")&&(b=b.slice(0,-2));de(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},fe=/^[a-z0-9-]+$/i,ge=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
he=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!fe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!ge.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=r;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ee(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function ke(a){return""+a}
function le(a,b){var c=[];return c};var me=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ne=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ea(e)?c.set(d,me(a+"_"+d,e)):(Fa(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var oe=function(a,b){H(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ne("AssertApiSubject",c)};var pe=function(a,b){H(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ne("AssertThatSubject",c)};function qe(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(lb(arguments[d],c));return kb(a.apply(null,b))}}var se=function(){for(var a=Math,b=re,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=qe(a[e].bind(a)))}return c};var te=function(a){var b;return b};var ue=function(a){var b;return b};var ve=function(a){H(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var we=function(a){H(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var xe=function(a){H(this.getName(),["message:?string"],arguments);};var ye=function(a,b){H(this.getName(),["min:!number","max:!number"],arguments);return Ia(a,b)};var ze=function(){return(new Date).getTime()};var Ae=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.ag.apply(null,Array.prototype.slice.call(arguments,1))};var Be=function(){Ae(this,"read_container_data");var a=new db;a.set("containerId",'GTM-TDTFTZ');a.set("version",'193');a.set("environmentName",'');a.set("debugMode",Od);a.set("previewMode",Qd);a.set("environmentMode",Pd);a.i=!0;return a};var Ce=function(a){return null===a?"null":a instanceof h?"array":a instanceof $a?"function":typeof a};var De=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Od||Qd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(lb(c))})}};var Ee=function(a){return Na(lb(a,this.i))};var Fe=function(a){return Number(lb(a,this.i))};var Ge=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var He=function(a,b,c){var d=null,e=!1;H(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new db;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof db&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var re="floor ceil round max min abs pow sqrt".split(" ");var Ie=function(){var a={};return{Hg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Hh:function(b,c){a[b]=c},reset:function(){a={}}}},Je=function(a,b){H(this.getName(),["apiName:!string","mock:?*"],arguments);};var Ke=function(){this.a={}};Ke.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ke.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Ea(b)?me(a,b):ne(a,b)};function Le(){var a={};return a};var E=window,J=document,Me=navigator,Ne=J.currentScript&&J.currentScript.src,Oe=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},Pe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qe=function(a,b,c){var d=J.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pe(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=J.getElementsByTagName("script")[0]||J.body||J.head;l.parentNode.insertBefore(d,l);return d},Re=function(){if(Ne){var a=Ne.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Se=function(a,b){var c=J.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=J.body&&J.body.lastChild||
J.body||J.head;d.parentNode.insertBefore(c,d);Pe(c,b);void 0!==a&&(c.src=a);return c},Te=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ue=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ve=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){E.setTimeout(a,0)},We=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Xe=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ye=function(a){var b=J.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ze=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},$e=function(a){Me.sendBeacon&&Me.sendBeacon(a)||Te(a)},af=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf=function(a){return bf?J.querySelectorAll(a):null},df=function(a,b){if(!bf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!J.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ef=!1;if(J.querySelectorAll)try{var ff=J.querySelectorAll(":root");ff&&1==ff.length&&ff[0]==J.documentElement&&(ef=!0)}catch(a){}var bf=ef;var Fd={},R=null,vf=Math.random();Fd.B="GTM-TDTFTZ";Fd.Nb="4f0";var wf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},xf="www.googletagmanager.com/gtm.js";var yf=xf,zf=null,Af=null,Bf=null,Cf="//www.googletagmanager.com/a?id="+Fd.B+"&cv=193",Df={},Ef={},Ff=function(){var a=R.sequence||0;R.sequence=a+1;return a};var Gf={},Hf=function(a,b){Gf[a]=Gf[a]||[];Gf[a][b]=!0},If=function(a){for(var b=[],c=Gf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Jf=function(){return"&tc="+fd.filter(function(a){return a}).length},Mf=function(){Kf||(Kf=E.setTimeout(Lf,500))},Lf=function(){Kf&&(E.clearTimeout(Kf),Kf=void 0);void 0===Nf||Of[Nf]&&!Pf&&!Qf||(Rf[Nf]||Sf.Vg()||0>=Tf--?(Hf("GTM",1),Rf[Nf]=!0):(Sf.wh(),Te(Uf()),Of[Nf]=!0,Vf=Wf=Qf=Pf=""))},Uf=function(){var a=Nf;if(void 0===a)return"";var b=If("GTM"),c=If("TAGGING");return[Xf,Of[a]?"":"&es=1",Yf[a],b?"&u="+b:"",c?"&ut="+c:"",Jf(),Pf,Qf,Wf,Vf,"&z=0"].join("")},Zf=function(){return[Cf,"&v=3&t=t",
"&pid="+Ia(),"&rv="+Fd.Nb].join("")},$f="0.005000">Math.random(),Xf=Zf(),ag=function(){Xf=Zf()},Of={},Pf="",Qf="",Vf="",Wf="",Nf=void 0,Yf={},Rf={},Kf=void 0,Sf=function(a,b){var c=0,d=0;return{Vg:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},wh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Tf=1E3,bg=function(a,b){if($f&&!Rf[a]&&Nf!==a){Lf();Nf=a;Vf=Pf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Yf[a]="&e="+c+"&eid="+a;Mf()}},cg=function(a,b,c){if($f&&
!Rf[a]&&b){a!==Nf&&(Lf(),Nf=a);var d,e=String(b[rd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Pf=Pf?Pf+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(hd[g]?"1":"2")+d;Vf=Vf?Vf+"."+k:"&ti="+k;Mf();2022<=Uf().length&&Lf()}},dg=function(a,b,c){if($f&&!Rf[a]){a!==Nf&&(Lf(),Nf=a);var d=c+b;Qf=
Qf?Qf+"."+d:"&epr="+d;Mf();2022<=Uf().length&&Lf()}};var eg={},fg=new Ja,gg={},hg={},kg={name:"dataLayer",set:function(a,b){I(Ya(a,b),gg);ig()},get:function(a){return jg(a,2)},reset:function(){fg=new Ja;gg={};ig()}},jg=function(a,b){if(2!=b){var c=fg.get(a);if($f){var d=lg(a);c!==d&&Hf("GTM",5)}return c}return lg(a)},lg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:mg(b)},mg=function(a){for(var b=gg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var ng=function(a,b){hg.hasOwnProperty(a)||(fg.set(a,b),I(Ya(a,b),gg),ig())},ig=function(a){D(hg,function(b,c){fg.set(b,c);I(Ya(b,void 0),gg);I(Ya(b,c),gg);a&&delete hg[b]})},og=function(a,b,c){eg[a]=eg[a]||{};var d=1!==c?lg(b):fg.get(b);"array"===hb(d)||"object"===hb(d)?eg[a][b]=I(d):eg[a][b]=d},pg=function(a,b){if(eg[a])return eg[a][b]},qg=function(a,b){eg[a]&&delete eg[a][b]};var S={wa:"_ee",ci:"_uci",Fc:"event_callback",Ib:"event_timeout",H:"gtag.config",fa:"allow_ad_personalization_signals",Gc:"restricted_data_processing",cb:"allow_google_signals",ia:"cookie_expires",Hb:"cookie_update",eb:"session_duration",ma:"user_properties"};S.Ge=[S.fa,S.cb,S.Hb];S.Je=[S.ia,S.Ib,S.eb];var tg=/[A-Z]+/,ug=/\s/,vg=function(a){if(q(a)&&(a=Qa(a),!ug.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(tg.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],w:d}}}}},xg=function(a){for(var b={},c=0;c<a.length;++c){var d=vg(a[c]);d&&(b[d.id]=d)}wg(b);var e=[];D(b,function(f,g){e.push(g)});return e};
function wg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.w[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var yg=function(){var a=!1;return a};var V=function(a,b,c,d){return(2===zg()||d||"http:"!=E.location.protocol?a:b)+c},zg=function(){var a=Re(),b;if(1===a)a:{var c=yf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=J.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Ng=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Og={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Pg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Qg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sg=function(a){var b=jg("gtm.whitelist");b&&Hf("GTM",9);var c=b&&Wa(Pa(b),Og),d=jg("gtm.blacklist");d||(d=jg("tagTypeBlacklist"))&&Hf("GTM",3);
d?Hf("GTM",8):d=[];Rg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Pa(d),"google")&&Hf("GTM",2);var e=d&&Wa(Pa(d),Pg),f={};return function(g){var k=g&&g[rd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Ef[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>C(c,l[r])){Hf("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=C(e,k);if(p)t=p;else{var u=Ka(e,l||[]);u&&Hf("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ka(e,Qg));return f[k]=v}},Rg=function(){return Ng.test(E.location&&E.location.hostname)};var Tg={og:function(a,b){b[rd.Ed]&&"string"===typeof a&&(a=1==b[rd.Ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Gd)&&null===a&&(a=b[rd.Gd]);b.hasOwnProperty(rd.Id)&&void 0===a&&(a=b[rd.Id]);b.hasOwnProperty(rd.Hd)&&!0===a&&(a=b[rd.Hd]);b.hasOwnProperty(rd.Fd)&&!1===a&&(a=b[rd.Fd]);return a}};var Ug={active:!0,isWhitelisted:function(){return!0}},Vg=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var Wg=function(){};var Xg=!1,Yg=0,Zg=[];function $g(a){if(!Xg){var b=J.createEventObject,c="complete"==J.readyState,d="interactive"==J.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Xg=!0;for(var e=0;e<Zg.length;e++)O(Zg[e])}Zg.push=function(){for(var f=0;f<arguments.length;f++)O(arguments[f]);return 0}}}function ah(){if(!Xg&&140>Yg){Yg++;try{J.documentElement.doScroll("left"),$g()}catch(a){E.setTimeout(ah,50)}}}var bh=function(a){Xg?a():Zg.push(a)};var ch={},eh={},fh=function(a,b,c,d){if(!eh[a]||wf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=I(d,e));e.id=c;e.status="timeout";return eh[a].tags.push(e)-1},gh=function(a,b,c,d){if(eh[a]){var e=eh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function hh(a){for(var b=ch[a]||[],c=0;c<b.length;c++)b[c]();ch[a]={push:function(d){d(Fd.B,eh[a])}}}
var kh=function(a,b,c){eh[a]={tags:[]};Ea(b)&&ih(a,b);c&&E.setTimeout(function(){return hh(a)},Number(c));return jh(a)},ih=function(a,b){ch[a]=ch[a]||[];ch[a].push(Ta(function(){return O(function(){b(Fd.B,eh[a])})}))};function jh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&hh(a)})},Zf:function(){d=!0;b>=c&&hh(a)}}};var lh=function(){function a(d){return!Fa(d)||0>d?0:d}if(!R._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=Fa(kg.get("gtm.start"))?kg.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Af-b)}}};var ph={},qh=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},rh=!1;
var sh=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||Hf("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}lh();return E[b]},th=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=qh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var vh=function(a){},uh=function(){return E.GoogleAnalyticsObject||"ga"};var xh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var yh=/:[0-9]+$/,zh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ah(a.protocol)||Ah(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||E.location.hostname).replace(yh,"").toLowerCase());return Bh(a,b,c,d,e)},Bh=function(a,b,c,d,e){var f,g=Ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(yh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Hf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=zh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ah=function(a){return a?a.replace(":",
"").toLowerCase():""},Dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Eh=function(a){var b=J.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Hf("TAGGING",1),c="/"+c);var d=b.hostname.replace(yh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Jh=function(){return!1},Kh=function(){var a={};return function(b,c,d){}};function Lh(a,b,c,d){var e=fd[a],f=Mh(a,b,c,d);if(!f)return null;var g=nd(e[rd.Xd],c,[]);if(g&&g.length){var k=g[0];f=Lh(k.index,{D:f,C:1===k.xe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Mh(a,b,c,d){function e(){if(f[rd.wf])k();else{var w=od(f,c,[]),x=fh(c.id,String(f[rd.xa]),Number(f[rd.Zd]),w[rd.xf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=Ra()-z;cg(c.id,fd[a],"5");gh(c.id,x,"success",A);g()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=Ra()-z;cg(c.id,fd[a],"6");gh(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;cg(c.id,f,"1");var B=function(){var A=Ra()-z;cg(c.id,f,"7");gh(c.id,x,"exception",A);y||(y=!0,k())};var z=Ra();try{md(w,c)}catch(A){B(A)}}}var f=fd[a],g=b.D,k=b.C,l=b.terminate;if(c.ad(f))return null;var m=nd(f[rd.$d],c,[]);if(m&&m.length){var n=m[0],r=Lh(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.xe?l:r}if(f[rd.Pd]||f[rd.Bf]){var t=f[rd.Pd]?gd:c.Jh,p=g,u=k;if(!t[a]){e=Ta(e);var v=Nh(a,t,e);g=v.D;k=v.C}return function(){t[a](p,u)}}return e}
function Nh(a,b,c){var d=[],e=[];b[a]=Oh(d,e,c);return{D:function(){b[a]=Ph;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Qh;for(var f=0;f<e.length;f++)e[f]()}}}function Oh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ph(a){a()}function Qh(a,b){b()};var Th=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.xb[d]){var e=fd[d];var f=b.add();try{var g=Lh(d,{D:f,C:f,terminate:f},a,d);g?c.push({$e:d,Ue:pd(e),Xb:g}):(Rh(d,a),f())}catch(l){f()}}b.Zf();c.sort(Sh);for(var k=0;k<c.length;k++)c[k].Xb();return 0<c.length};function Sh(a,b){var c,d=b.Ue,e=a.Ue;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.$e,k=b.$e;f=g>k?1:g<k?-1:0}return f}
function Rh(a,b){if(!$f)return;var c=function(d){var e=b.ad(fd[d])?"3":"4",f=nd(fd[d][rd.Xd],b,[]);f&&f.length&&c(f[0].index);cg(b.id,fd[d],e);var g=nd(fd[d][rd.$d],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Uh=!1,Vh=function(a,b,c,d,e){if("gtm.js"==b){if(Uh)return!1;Uh=!0}bg(a,b);var f=kh(a,d,e);og(a,"event",1);og(a,"ecommerce",1);og(a,"gtm");var g={id:a,name:b,ad:Sg(c),xb:[],Jh:[],Ke:function(){Hf("GTM",6)}};g.xb=Bd(g);var k=Th(g,f);"gtm.js"!==b&&"gtm.sync"!==b||vh(Fd.B);if(!k)return k;for(var l=0;l<g.xb.length;l++)if(g.xb[l]){var m=fd[l];if(m&&!wf[String(m[rd.xa])])return!0}return!1};var Wh=[];function Xh(){var a=Oe("google_tag_data",{});a.ics||(a.ics={entries:{},set:Yh,update:Zh,addListener:$h,notifyListeners:ai,active:!1});return a.ics}function Yh(a,b,c,d,e){var f=Xh();f.active=!0;if(void 0!=b){var g=f.entries,k=g[a]||{},l=k.region,m=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(g[a]={region:m,initial:"granted"===b,update:k.update})}}
function Zh(a,b){var c=Xh();c.active=!0;if(void 0!=b){var d=bi(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(bi(a)!==d)for(var f=0;f<Wh.length;++f){var g=Wh[f];Ga(g.qe)&&-1!==g.qe.indexOf(a)&&(g.Te=!0)}}}function $h(a,b){Wh.push({qe:a,Cg:b})}function ai(){for(var a=0;a<Wh.length;++a){var b=Wh[a];if(b.Te){b.Te=!1;try{b.Cg.call()}catch(c){}}}}
var bi=function(a){var b=Xh().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},ci=function(){return Xh().active},di=function(a,b){Xh().addListener(a,b)},ei=function(a,b){if(!1===bi(b)){var c=!1;di([b],function(){!c&&bi(b)&&(a(),c=!0)})}};var fi=[S.o,S.N],gi=function(a){for(var b=a.region,c=Ga(b)?b:[b],d=0;d<c.length;++d)for(var e=0;e<fi.length;e++){var f=fi[e],g=a[fi[e]],k=c[d];Xh().set(f,g,k,"US","US-GA")}},hi=function(a){for(var b=0;b<fi.length;b++){var c=fi[b],d=a[fi[b]];Xh().update(c,d)}Xh().notifyListeners()},ii=function(a){var b=bi(a);return void 0!=b?b:!0},ji=function(){for(var a=[],b=0;b<fi.length;b++){var c=bi(fi[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")};var li=/^https?:\/\/www\.googletagmanager\.com/;function mi(){var a;return a}function oi(a,b){}
function ni(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function pi(){var a=!1;return a};var qi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){};this.pe=void 0},ri=function(a){var b=new qi;b.eventModel=a;return b},si=function(a,b){a.targetConfig=b;return a},ti=function(a,b){a.containerConfig=b;return a},ui=function(a,b){a.a=b;return a},vi=function(a,b){a.globalConfig=b;return a},wi=function(a,b){a.D=b;return a},xi=function(a,b){a.C=b;return a};
qi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var yi=function(a){function b(e){D(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];D(c,function(e){d.push(e)});return d};function zi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ai={},Bi=function(a){return void 0==Ai[a]?!1:Ai[a]};var Di=function(a,b,c,d){return Ci(d)?zi(a,String(b||document.cookie),c):[]},Gi=function(a,b,c,d,e){if(Ci(e)){var f=Ei(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Fi(f,function(g){return g.Ub},b);if(1===f.length)return f[0].id;f=Fi(f,function(g){return g.yb},c);return f[0]?f[0].id:void 0}}};function Hi(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Di(b,f,!1,d).indexOf(c)}
var Li=function(a,b,c,d){function e(w,x,y){if(null==y)return delete k[x],w;k[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete k[x],w;k[x]=!0;return w+"; "+x}if(!Ci(c.Ea))return!1;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ii(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.dh);g=e(g,"samesite",
c.Ah);c.Eh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=Ji(),r=void 0,t=!1,p=0;p<n.length;++p){var u="none"!==n[p]?n[p]:void 0,v=e(g,"domain",u);try{d&&d(a,k)}catch(w){r=w;continue}t=!0;if(!Ki(u,c.path)&&Hi(v,a,b,c.Ea))return!0}if(r&&!t)throw r;return!1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return Ki(m,c.path)?!1:Hi(g,a,b,c.Ea)},Mi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Li(a,b,c)};
function Fi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Ei(a,b,c){for(var d=[],e=Di(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Ub:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var Ii=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ni=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Oi=/(^|\.)doubleclick\.net$/i,Ki=function(a,b){return Oi.test(document.location.hostname)||"/"===b&&Ni.test(a)},Ji=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Oi.test(e)||Ni.test(e)||a.push("none");
return a},Ci=function(a){if(!Bi("gtag_cs_api")||!a||!ci())return!0;var b=bi(a);return null==b?!0:!!b};var Pi=function(){for(var a=Me.userAgent+(J.cookie||"")+(J.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},Si=function(a,b,c,d,e){var f=Qi(b);return Gi(a,f,Ri(c),d,e)},Ti=function(a,b,c,d){var e=""+Qi(c),f=Ri(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Qi=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ri=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Ui(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ra())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function Vi(){for(var a=Wi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Xi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Wi,Yi;function Zi(a){Wi=Wi||Xi();Yi=Yi||Vi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Wi[l],Wi[m],Wi[n],Wi[r])}return b.join("")}
function $i(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Yi[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Wi=Wi||Xi();Yi=Yi||Vi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var aj;var ej=function(){var a=bj,b=cj,c=dj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ue(J,"mousedown",d);Ue(J,"keyup",d);Ue(J,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},fj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};dj().decorators.push(f)},gj=function(a,b,c){for(var d=dj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a;if(l&&(g.sameHost||m!==J.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Ua(e,g.callback())}}return e},dj=function(){var a=Oe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var hj=/(.*?)\*(.*?)\*(.*)/,ij=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,jj=/^(?:www\.|m\.|amp\.)+/,kj=/([^?#]+)(\?[^#]*)?(#.*)?/;function lj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var nj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Zi(String(d))))}var e=b.join("*");return["1",mj(e),e].join("*")},mj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=aj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}aj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^aj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},pj=function(){return function(a){var b=Eh(E.location.href),c=b.search.replace("?",""),d=zh(c,"_gl",!1,!0)||"";a.query=oj(d)||{};var e=Ch(b,"fragment").match(lj("_gl"));a.fragment=oj(e&&e[3]||"")||{}}},qj=function(){var a=pj(),b=dj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},oj=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=hj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===mj(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)r[t[p]]=$i(t[p+1]);return r}}}}catch(u){}};
function rj(a,b,c,d){function e(n){var r=n,t=lj(a).exec(r),p=r;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=kj.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function sj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=gj(b,1,c),e=gj(b,2,c),f=gj(b,3,c);if(Va(d)){var g=nj(d);c?tj("_gl",g,a):uj("_gl",g,a,!1)}if(!c&&Va(e)){var k=nj(e);uj("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){uj(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){tj(m,n,r);break a}}"string"==typeof r&&rj(m,n,r,void 0)}}
function uj(a,b,c,d){if(c.href){var e=rj(a,b,c.href,void 0===d?!1:d);xh.test(e)&&(c.href=e)}}
function tj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=J.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=rj(a,b,c.action);xh.test(m)&&(c.action=m)}}}
var bj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||sj(e,e.hostname)}}catch(g){}},cj=function(a){try{if(a.action){var b=Ch(Eh(a.action),"host");sj(a,b)}}catch(c){}},vj=function(a,b,c,d){ej();fj(a,b,"fragment"===c?2:1,!!d,!1)},wj=function(a){ej();fj(a,[E.location.hostname],3,!0,!0)},xj=function(){var a=J.location.hostname,b=ij.exec(J.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(jj,""),l=e.replace(jj,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},yj=function(a,b){return!1===a?!1:a||b||xj()};var zj=/^\w+$/,Aj=/^[\w-]+$/,Bj=/^~?[\w-]+$/,Cj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Dj=function(){if(!Bi("gtag_cs_api")||!ci())return!0;var a=bi("ad_storage");return null==a?!0:!!a},Ej=function(a){Dj()?a():ei(a,"ad_storage")};function Fj(a){return a&&"string"==typeof a&&a.match(zj)?a:"_gcl"}
var Hj=function(){var a=Eh(E.location.href),b=Ch(a,"query",!1,void 0,"gclid"),c=Ch(a,"query",!1,void 0,"gclsrc"),d=Ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||zh(e,"gclid",!1,void 0);c=c||zh(e,"gclsrc",!1,void 0)}return Gj(b,c,d)},Gj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Aj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Bi("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Jj=function(a){var b=Hj();Ej(function(){return Ij(b,a)})};
function Ij(a,b,c){function d(m,n){var r=Kj(m,e);r&&(Mi(r,n,f),g=!0)}b=b||{};var e=Fj(b.prefix);c=c||Ra();var f=Ui(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.xi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var Mj=function(a,b){var c=qj();Ej(function(){for(var d=Fj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Cj[f]){var g=Kj(f,d),k=c[g];if(k){var l=Math.min(Lj(k),Ra()),m;b:{for(var n=l,r=Di(g,J.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Lj(r[t])>n){m=!0;break b}m=!1}if(!m){var p=Ui(b,l,!0);p.Ea="ad_storage";Mi(g,k,p)}}}}Ij(Gj(c.gclid,c.gclsrc),b)})},Kj=function(a,b){var c=Cj[a];if(void 0!==c)return b+c},Lj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Nj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Oj=function(a,b,c,d,e){if(Ga(b)){var f=Fj(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=Kj(a[l],f);if(m){var n=Di(m,J.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};Ej(function(){vj(g,b,c,d)})}},Pj=function(a){return a.filter(function(b){return Bj.test(b)})},Qj=function(a,b){for(var c=Fj(b.prefix),d={},e=0;e<a.length;e++)Cj[a[e]]&&(d[a[e]]=Cj[a[e]]);Ej(function(){D(d,function(f,g){var k=Di(c+g,J.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Lj(l),
n={};n[f]=[Nj(l)];Ij(n,b,m)}})})},Rj=function(){var a=["","aw.ds"],b=Hj(),c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&wj(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})},Sj=function(){var a;if(Dj()){for(var b=[],c=J.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({td:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].td]||(g[b[k].td]=[]),g[b[k].td].push({timestamp:l[1],
Eg:l[2]}))}a=g}else a={};return a};function Tj(){var a=!1;return a}
function Uj(a){function b(l){var m;R.reported_gclid||(R.reported_gclid={});m=R.reported_gclid;var n=d+(l?"gcu":"gcs");if(!m[n]){m[n]=!0;var r=[],t=function(v,w){w&&r.push(v+"="+encodeURIComponent(w))},p=d;t("gclid",p);t("gclsrc",e);var u="https://www.google.com/pagead/landing?"+r.join("&");$e(u)}}var c=Hj(),d=c.gclid||"",e=c.gclsrc,
f=!a&&(!d||e&&"aw.ds"!==e?!1:!0),g=Tj();if(f||g){var k=""+Pi();b();}};var Vj;if(3===Fd.Nb.length)Vj="g";else{var Wj="G";Vj=Wj}
var Xj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Vj,OPT:"o"},Yj=function(a){var b=Fd.B.split("-"),c=b[0].toUpperCase(),d=Xj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Fd.Nb.length){var g=void 0;f="2"+(g||"w")}else f=
"";return f+d+Fd.Nb+e};var ik=["1"],jk={},nk=function(a){var b=kk(a.prefix);jk[b]||lk(b,a.path,a.domain)||(mk(b,Pi(),a),lk(b,a.path,a.domain))};function mk(a,b,c){var d=Ti(b,"1",c.domain,c.path),e=Ui(c);e.Ea="ad_storage";Mi(a,d,e)}function lk(a,b,c){var d=Si(a,b,c,ik,"ad_storage");d&&(jk[a]=d);return d}function kk(a){return(a||"_gcl")+"_au"};var ok=/^\d+\.fls\.doubleclick\.net$/;function pk(a){ii("ad_storage")?a():ei(a,"ad_storage")}function qk(a){var b=Eh(E.location.href),c=Ch(b,"host",!1);if(c&&c.match(ok)){var d=Ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function rk(a,b){if("aw"==a||"dc"==a){var c=qk("gcl"+a);if(c)return c.split(".")}var d=Fj(b);if(ii("ad_storage")&&"_gcl"==d){var e;e=Hj()[a]||[];if(0<e.length)return e}var f=Kj(a,d),g;if(f){var k=[];if(J.cookie){var l=Di(f,J.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Nj(l[m]);n&&-1===C(k,n)&&k.push(n)}g=Pj(k)}else g=k}else g=k}else g=[];return g}
var sk=function(){var a=qk("gac");if(a)return decodeURIComponent(a);var b=Sj(),c=[];D(b,function(d,e){for(var f=[],g=0;g<e.length;g++)f.push(e[g].Eg);f=Pj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},tk=function(a,b){var c=Hj().dc||[];pk(function(){nk(b);var d=jk[kk(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;$e(l);e=f[g]=!0}}null==a&&(a=
e);if(a&&d){var m=kk(b.prefix),n=jk[m];n&&mk(m,n,b)}})};var ol={},pl=["G","GP"];ol.bf="";var ql=ol.bf.split(",");function rl(){var a=R;return a.gcq=a.gcq||new sl}
var tl=function(a,b,c){rl().register(a,b,c)},ul=function(a,b,c,d){rl().push("event",[b,a],c,d)},vl=function(a,b){rl().push("config",[a],b)},wl={},xl=function(a){return!0},yl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},zl=function(a,b,c,d,e){this.type=a;this.m=b;this.Z=c||"";
this.a=d;this.i=e},sl=function(){this.i={};this.m={};this.a=[]},Al=function(a,b){var c=vg(b);return a.i[c.containerId]=a.i[c.containerId]||new yl},Bl=function(a,b){if(b){var c=vg(b);if(c&&1===Al(a,b).status&&xl(c.prefix)){Al(a,b).status=2;var d={};$f&&(d.timeoutId=E.setTimeout(function(){Hf("GTM",38);Mf()},3E3));a.push("require",[d],c.containerId);wl[c.containerId]=Ra();if(yg()){}else{var f=encodeURIComponent(c.containerId),g=("http:"!=E.location.protocol?"https:":"http:")+"//www.googletagmanager.com";Qe(g+"/gtag/js?id="+
f+"&l=dataLayer&cx=c")}}}},Cl=function(a,b,c,d){if(d.Z){var e=Al(a,d.Z),f=e.m;if(f){var g=I(c),k=I(e.targetConfig[d.Z]),l=I(e.containerConfig),m=I(e.i),n=I(a.m),r=jg("gtm.uniqueEventId"),t=vg(d.Z).prefix,p=xi(wi(vi(ui(ti(si(ri(g),k),l),m),n),function(){dg(r,t,"2");}),function(){dg(r,t,"3");});try{dg(r,t,"1");
f(d.Z,b,d.m,p)}catch(u){dg(r,t,"4");}}}};
sl.prototype.register=function(a,b,c){if(3!==Al(this,a).status){Al(this,a).m=b;Al(this,a).status=3;c&&(Al(this,a).i=c);var d=vg(a),e=wl[d.containerId];if(void 0!==e){var f=R[d.containerId].bootstrap,g=d.prefix.toUpperCase();R[d.containerId]._spx&&(g=g.toLowerCase());var k=jg("gtm.uniqueEventId"),l=g,m=Ra()-f;if($f&&!Rf[k]){k!==Nf&&(Lf(),Nf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);Wf=Wf?Wf+","+n:"&cl="+n}delete wl[d.containerId]}this.flush()}};
sl.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);Bl(this,c);this.a.push(new zl(a,e,c,b,d));d||this.flush()};
sl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Al(this,c.Z).status&&!a)return;$f&&E.clearTimeout(c.a[0].timeoutId);break;case "set":D(c.a[0],function(l,m){I(Ya(l,m),b.m)});break;case "config":var d=c.a[0],e=!!d[S.oc];delete d[S.oc];var f=Al(this,c.Z),g=vg(c.Z),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.Z]={});f.a&&e||Cl(this,S.H,d,c);f.a=!0;delete d[S.wa];k?I(d,f.containerConfig):
I(d,f.targetConfig[c.Z]);break;case "event":Cl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Dl=function(a,b){return!0};var El=function(a,b){var c;H(this.getName(),["path:!string"],[a]);Ae(this,"access_globals","execute",a);for(var d=a.split("."),e=E,f=e[d[0]],g=1;f&&g<d.length;g++)e=f,f=f[d[g]];if("function"!==hb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(lb(arguments[l],this.i));c=kb((0,this.i.M)(f,e,k),this.i);return c};var Fl=function(a){};var Gl=function(a){var b;H(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","read",a);var c=a.split("."),d=E,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return kb(b,this.i)};var Hl=function(a,b){var c=null;H(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);Ae(this,"access_globals","readwrite",a);Ae(this,"access_globals","readwrite",b);var d=a.split("."),e=Xa(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];if(g&&!Ea(g))return null;if(g)return kb(g,this.i);var k;g=function(){if(!Ea(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=g;var l=b.split("."),m=Xa(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){g.apply(g,Array.prototype.slice.call(arguments,0))};return kb(c,this.i)};var Il=function(a){var b;return kb(b,
this.i)};var Jl=function(a){var b;return b};var Kl=function(a,b){b=void 0===b?!0:b;var c;return c};var Ll=function(a,b){var c;return c};var Ml=function(a,b){var c;return c};var Nl=function(a){var b="";return b};var Ol=function(a){var b="";return b};var Pl=function(a,b){};var Ql={},Rl=function(a,b,c,d){H(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ae(this,"inject_script",a);var e=this.i,f=function(){b instanceof $a&&b.Fa(e)},g=function(){c instanceof $a&&c.Fa(e)};if(!d){Qe(a,f,g);return}var k=d;Ql[k]?(Ql[k].onSuccess.push(f),Ql[k].onFailure.push(g)):(Ql[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Ql[k].onSuccess,m=0;m<l.length;m++)O(l[m]);l.push=function(n){O(n);
return 0}},g=function(){for(var l=Ql[k].onFailure,m=0;m<l.length;m++)O(l[m]);Ql[k]=null},Qe(a,f,g));};var Sl=function(){return!1},Tl={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Ul=function(){};var Vl={},Wl={};Vl.getItem=function(a){var b=null;return b};Vl.setItem=function(a,b){};
Vl.removeItem=function(a){};Vl.clear=function(){};var Xl=function(a,b){var c=!1;return c};var Yl=function(a,b,c){};var Zl=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var $l=function(a,b,c){H(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ae(this,"access_globals","readwrite",a);var d=a.split("."),e=E,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=lb(b,this.i),!0;return!1};var am=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var bm=function(a,b,c){var d=this;};var cm=function(a){var b;return b};function dm(a){}
function em(a,b){var c;return kb(c,this.i)}function fm(){var a="";return a}
function gm(){var a="";return a}
var Dc=function(){var a=new Ke;yg()?(a.add("injectHiddenIframe",Da),a.add("injectScript",Da)):(a.add("injectHiddenIframe",Pl),a.add("injectScript",Rl));var b=Yl;a.add("addEventCallback",dm);a.add("aliasInWindow",Dl);a.add("assertThat",pe);a.add("assertApi",oe);a.add("callInWindow",El);a.add("callLater",Fl);a.add("copyFromDataLayer",
em);a.add("copyFromWindow",Gl);a.add("createQueue",Il);a.add("createArgumentsQueue",Hl);a.add("decodeUri",te);a.add("decodeUriComponent",ue);a.add("encodeUri",ve);a.add("encodeUriComponent",we);a.add("fail",xe);a.add("generateRandom",ye);a.add("getCookieValues",Kl);a.add("getQueryParameters",Ll);a.add("getReferrerQueryParameters",Ml);a.add("getReferrerUrl",Nl);a.add("getTimestamp",ze);a.add("getType",Ce);a.add("getUrl",Ol);a.add("logToConsole",Ul);a.add("makeInteger",Ee);a.add("makeNumber",Fe);a.add("makeString",
Ge);a.add("makeTableMap",He);a.add("Math",se());a.add("mock",Je);a.add("queryPermission",Xl);a.add("readCharacterSet",fm);a.add("readTitle",gm);a.add("sendPixel",b);a.add("setCookie",Zl);a.add("setInWindow",$l);a.add("sha256",bm);a.add("TestHelper",Le());a.add("getContainerVersion",Be);a.add("toBase64",cm,!("btoa"in E)),a.add("fromBase64",
Jl,!("atob"in E));a.add("localStorage",Tl,!Sl());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Bc,Kd;
function hm(){var a=data.runtime||[],b=data.runtime_lines;Bc=new Ac;im();bd=function(e,f,g){jm(f);var k=new db;D(f,function(p,u){k.set(p,kb(u))});Bc.a.a.s=xd();var l={ag:Ld(e),eventId:void 0!==g?g.id:void 0,Wb:e,log:function(){}};if(Jh()){var m=Kh(),n=void 0,r=void 0;l.aa={i:{},a:function(p,u,v){1===u&&(n=p);7===u&&(r=v);m(p,u,v)},m:Ie()};l.log=function(p,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:p,source:r,message:v})}}}var t=Cc(l,[e,k]);Bc.a.a.s=void 0;t instanceof qa&&
"return"===t.a&&(t=t.i);return lb(t)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.Xb(d)}}function jm(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ea(b)&&(a.gtmOnSuccess=function(){O(b)});Ea(c)&&(a.gtmOnFailure=function(){O(c)})}function im(){var a=Bc;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}
function km(a){void 0!==a&&D(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ef[e]=Ef[e]||[];Ef[e].push(b)}})};var lm=["GP","G"],mm="G".split(/,/);mm.push("GF");mm.push("HA");var nm=!1;nm=!0;var om=null,pm={},qm={},rm;function sm(a,b){var c={event:a};b&&(c.eventModel=I(b),b[S.Fc]&&(c.eventCallback=b[S.Fc]),b[S.Ib]&&(c.eventTimeout=b[S.Ib]));return c}
var ym={config:function(a){},event:function(a){var b=a[1];if(q(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&void 0!=a[2])return;c=a[2]}var d=sm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=I(a[1]):3==a.length&&q(a[1])&&(b={},jb(a[2])||Ga(a[2])?b[a[1]]=I(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var zm={policy:!0};var Am=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Cm=function(a){var b=Bm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Dm=!1,Em=[];function Fm(){if(!Dm){Dm=!0;for(var a=0;a<Em.length;a++)O(Em[a])}}var Gm=function(a){Dm?O(a):Em.push(a)};var Xm=function(a){if(Wm(a))return a;this.a=a};Xm.prototype.Kg=function(){return this.a};var Wm=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};Xm.prototype.getUntrustedUpdateValue=Xm.prototype.Kg;var Ym=[],Zm=!1,$m=function(a){return E["dataLayer"].push(a)},an=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function bn(a){var b=a._clear;D(a,function(f,g){"_clear"!==f&&(b&&ng(f,void 0),ng(f,g))});zf||(zf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ff(),a["gtm.uniqueEventId"]=d,ng("gtm.uniqueEventId",d));Bf=c;var e=cn(a);Bf=null;switch(c){case "gtm.init":Hf("GTM",19),e&&Hf("GTM",20)}return e}
function cn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=R.zones;d=e?e.checkState(Fd.B,c):Ug;return d.active?Vh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function dn(){for(var a=!1;!Zm&&0<Ym.length;){Zm=!0;delete gg.eventModel;ig();var b=Ym.shift();if(null!=b){var c=Wm(b);if(c){var d=b;b=Wm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=jg(g,1);if(Ga(k)||jb(k))k=I(k);hg[g]=k}}try{if(Ea(b))try{b.call(kg)}catch(u){}else if(Ga(b)){var l=b;if(q(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=jg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(La(b)){a:{if(b.length&&q(b[0])){var p=ym[b[0]];if(p&&(!c||!zm[b[0]])){b=p(b);break a}}b=void 0}if(!b){Zm=!1;continue}}a=bn(b)||a}}finally{c&&ig(!0)}}Zm=!1}return!a}function en(){var a=dn();try{Am(E["dataLayer"],Fd.B)}catch(b){}return a}
var gn=function(){var a=Oe("dataLayer",[]),b=Oe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};bh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Gm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<R.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Xm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Ym.push.apply(Ym,d);if(300<
this.length)for(Hf("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return dn()&&g};Ym.push.apply(Ym,a.slice(0));fn()&&O(en)},fn=function(){var a=!0;return a};var hn={};hn.Jb=new String("undefined");
var jn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===hn.Jb?b:a[d]);return c.join("")}};jn.prototype.toString=function(){return this.a("undefined")};jn.prototype.valueOf=jn.prototype.toString;hn.Kf=jn;hn.Nc={};hn.rg=function(a){return new jn(a)};var kn={};hn.xh=function(a,b){var c=Ff();kn[c]=[a,b];return c};hn.te=function(a){var b=a?0:1;return function(c){var d=kn[c];if(d&&"function"===typeof d[b])d[b]();kn[c]=void 0}};hn.Tg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};hn.oh=function(a){if(a===hn.Jb)return a;var b=Ff();hn.Nc[b]=a;return'google_tag_manager["'+Fd.B+'"].macro('+b+")"};hn.eh=function(a,b,c){a instanceof hn.Kf&&(a=a.a(hn.xh(b,c)),b=Da);return{Zc:a,D:b}};var ln=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||We(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},mn=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},nn=function(a,b,c){mn(a)[b]=c},on=function(a,b,c,d){var e=mn(a),f=Sa(e,b,d);e[b]=c(f)},pn=function(a,b,c){var d=mn(a);return Sa(d,b,c)};var qn=["input","select","textarea"],rn=["button","hidden","image","reset","submit"],sn=function(a){var b=a.tagName.toLowerCase();return!Ha(qn,function(c){return c===b})||"input"===b&&Ha(rn,function(c){return c===a.type.toLowerCase()})?!1:!0},tn=function(a){return a.form?a.form.tagName?a.form:J.getElementById(a.form):Ze(a,["form"],100)},un=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(sn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var vn=!!E.MutationObserver,wn=void 0,xn=function(a){if(!wn){var b=function(){var c=J.body;if(c)if(vn)(new MutationObserver(function(){for(var e=0;e<wn.length;e++)O(wn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ue(c,"DOMNodeInserted",function(){d||(d=!0,O(function(){d=!1;for(var e=0;e<wn.length;e++)O(wn[e])}))})}};wn=[];J.body?b():O(b)}wn.push(a)};
var In=function(){var a=J.body,b=J.documentElement||a&&a.parentElement,c,d;if(J.compatMode&&"BackCompat"!==J.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Hf("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Jn=function(a){var b=In(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Kn=function(a){if(J.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!E.getComputedStyle)return!0;var c=E.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=E.getComputedStyle(d,null))}return!1};
var Rn=function(a,b,c){function d(){var g=a();f+=e?(Ra()-e)*g.playbackRate/1E3:0;e=Ra()}var e=0,f=0;return{Vb:function(g,k,l){var m=a(),n=m.ue,r=void 0!==l?Math.round(l):void 0!==k?Math.round(m.ue*k):Math.round(m.sg),t=void 0!==k?Math.round(100*k):0>=n?0:Math.round(r/n*100),p=J.hidden?!1:.5<=Jn(c);d();var u=ln(c,"gtm.video",[b]);u["gtm.videoProvider"]="youtube";u["gtm.videoStatus"]=g;u["gtm.videoUrl"]=m.url;u["gtm.videoTitle"]=m.title;u["gtm.videoDuration"]=Math.round(n);u["gtm.videoCurrentTime"]=
Math.round(r);u["gtm.videoElapsedTime"]=Math.round(f);u["gtm.videoPercent"]=t;u["gtm.videoVisible"]=p;$m(u)},zh:function(){e=Ra()},Oc:function(){d()}}};var Sn=E.clearTimeout,Tn=E.setTimeout,W=function(a,b,c){if(yg()){b&&O(b)}else return Qe(a,b,c)},Un=function(){return E.location.href},Vn=function(a){return Ch(Eh(a),"fragment")},Wn=function(a){return Dh(Eh(a))},Xn=function(a,b){return jg(a,b||2)},Yn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=$m(a)):d=$m(a);return d},Zn=function(a,b){E[a]=b},X=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},$n=function(a,b,c){return Di(a,b,void 0===c?!0:!!c)},ao=function(a,b){if(yg()){b&&O(b)}else Se(a,b)},bo=function(a){return!!pn(a,"init",!1)},co=function(a){nn(a,"init",!0)},eo=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":yf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";W(V("https://","http://",c))},fo=function(a,b){var c=a[b];return c};
var go=hn.eh;var Do=new Ja;function Eo(a,b){function c(g){var k=Eh(g),l=Ch(k,"protocol"),m=Ch(k,"host",!0),n=Ch(k,"port"),r=Ch(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Fo(a){return Go(a)?1:0}
function Go(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(Fo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=Do.get(p);u||(u=new RegExp(c,t),Do.set(p,u));r=u.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Eo(b,
c)}return!1};var Ho=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Io={},Jo=encodeURI,Y=encodeURIComponent,Ko=Te;var Lo=function(a,b){if(!a)return!1;var c=Ch(Eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Mo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Io.Ug=function(){var a=!1;return a};var Zp=function(){var a=E.gaGlobal=E.gaGlobal||{};a.hid=a.hid||Ia();return a.hid};var jq=window,kq=document,lq=function(a){var b=jq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===jq["ga-disable-"+a])return!0;try{var c=jq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=zi("AMP_TOKEN",String(kq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return kq.getElementById("__gaOptOutExtension")?!0:!1};
var oq=function(a){D(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[S.ma]||{};D(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var sq=function(a,b,c){ul(b,c,a)},tq=function(a,b,c){ul(b,c,a,!0)},vq=function(a,b){};
function uq(a,b){}var Z={b:{}};
Z.b.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.g="gaawc";Z.__gaawc.h=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=Mo(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(S.ma)||b.vtp_userProperties){var e=d[S.ma]||{};I(Mo(b.vtp_userProperties,"name","value"),e);d[S.ma]=e}a(d,S.Ge,function(f){return Oa(f)});a(d,S.Je,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;vl(d,c);O(b.vtp_gtmOnSuccess)})}();
Z.b.gaawe=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawe=b;Z.__gaawe.g="gaawe";Z.__gaawe.h=!0;Z.__gaawe.priorityOverride=0})(function(b){var c=String(b.vtp_measurementIdOverride||b.vtp_measurementId),d=String(b.vtp_eventName);if("_"===d.charAt(0))O(b.vtp_gtmOnFailure);else{var e={};I(Mo(b.vtp_eventParameters,"name","value"),e);if(e.hasOwnProperty(S.ma)||b.vtp_userProperties){var f=e[S.ma]||{};I(Mo(b.vtp_userProperties,
"name","value"),f);e[S.ma]=f}oq(e);a(e,S.Ge,function(g){return Oa(g)});a(e,S.Je,function(g){return Number(g)});ul(d,e,c);O(b.vtp_gtmOnSuccess)}})}();
Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"193"})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;lh();W(b,function(){var d=X("google_trackConversion");if(Ea(d)){var e=
{};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Mo(a.vtp_customParams,"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var g={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,
google_gtm:Yj()};a.vtp_rdp&&(g.google_restricted_data_processing=!0);a.vtp_userId&&(g.google_user_id=a.vtp_userId);d(g)||c()}else c()},c)})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.b.d=["google"],function(){(function(a){Z.__d=a;Z.__d.g="d";Z.__d.h=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=cf(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=J.getElementById(a.vtp_elementId);b&&(d?c=We(b,d):c=Xe(b));return Qa(String(b&&c))})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(pg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Xn("gtm.referrer",1)||J.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ch(Eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Wn(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ln(c,"gtm.click");Yn(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!bo("cl")){var c=X("document");Ue(c,"click",a,!0);co("cl")}O(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return $n(a.vtp_name,Xn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!q(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,t))return}else if("write"===r){if(-1<C(f,t))return}else if("readwrite"===r){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===r){if(-1<C(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ia(a.vtp_min,a.vtp_max)})}();
Z.b.tg=["google"],function(){function a(k){g.push(k);1<g.length||O(function(){var l=g.join(",");g=[];Yn({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(k,l){var m=d[l],n=m.indexOf(k);-1!==n&&(m.splice(n,1),m.length||a(l))}function c(k){O(k.vtp_gtmOnSuccess);var l=k.vtp_uniqueTriggerId,m=k.vtp_triggerIds,n=k.vtp_firingId;if(k.vtp_isListeningTag){var r=e[n];r?b(n,r):f.push(n)}else{d[l]=m;for(var t=0,p;p=m[t];t++)e[p]=l;for(var u=0;u<f.length;u++)b(f[u],l)}}var d={},e={},f=[],g=[];Z.__tg=c;Z.__tg.g="tg";Z.__tg.h=!0;Z.__tg.priorityOverride=0}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Xn("gtm.url",1);c=c||Un();var d=b[a("vtp_component")];if(!d||"URL"==d)return Wn(String(c));var e=Eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Ch(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Xn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},g={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;I(Mo(n.vtp_fieldsToSet,"fieldName","value"),f);I(Mo(n.vtp_contentGroup,"index","group"),g);I(Mo(n.vtp_dimension,"index","dimension"),k);I(Mo(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=I(n);d=I(d,r)}I(Mo(d.vtp_fieldsToSet,"fieldName","value"),f);I(Mo(d.vtp_contentGroup,
"index","group"),g);I(Mo(d.vtp_dimension,"index","dimension"),k);I(Mo(d.vtp_metric,"index","metric"),l);var t=sh(d.vtp_functionName);if(Ea(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+Ff(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
x=function(P){var K=[].slice.call(arguments,0);K[0]=p+K[0];t.apply(window,K)},y=function(P,K){return void 0===K?K:P(K)},B=function(P,K){if(K)for(var Aa in K)K.hasOwnProperty(Aa)&&x("set",P+Aa,K[Aa])},z=function(){var P=function(zq,vk,Aq){if(!jb(vk))return!1;for(var Hd=Sa(Object(vk),Aq,[]),dh=0;Hd&&dh<Hd.length;dh++)x(zq,Hd[dh]);return!!Hd&&0<Hd.length},K;if(d.vtp_useEcommerceDataLayer){var Aa=!1;Aa||(K=Xn("ecommerce",1))}else d.vtp_ecommerceMacroData&&(K=d.vtp_ecommerceMacroData.ecommerce);if(!jb(K))return;K=Object(K);var cc=Sa(f,"currencyCode",K.currencyCode);void 0!==cc&&x("set","&cu",cc);P("ec:addImpression",K,"impressions");if(P("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){x("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ma=
"detail checkout checkout_option click add remove purchase refund".split(" "),nb="refund purchase remove checkout checkout_option add click detail".split(" "),ob=0;ob<Ma.length;ob++){var Ab=K[Ma[ob]];if(Ab){P("ec:addProduct",Ab,"products");x("ec:setAction",Ma[ob],Ab.actionField);if($f)for(var Ob=0;Ob<nb.length;Ob++){var Uc=K[nb[Ob]];if(Uc){Uc!==Ab&&Hf("GTM",13);break}}break}}},A=function(P,K,Aa){var cc=0;if(P)for(var Ma in P)if(P.hasOwnProperty(Ma)&&
(Aa&&v[Ma]||!Aa&&void 0===v[Ma])){var nb=w[Ma]?Oa(P[Ma]):P[Ma];"anonymizeIp"!=Ma||nb||(nb=void 0);K[Ma]=nb;cc++}return cc},F={name:u};A(f,F,!0);t("create",d.vtp_trackingId||e.trackingId,F);x("set","&gtm",Yj(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(P,K){void 0!==d[K]&&x("set",P,d[K])})("nonInteraction","vtp_nonInteraction");B("contentGroup",g);B("dimension",k);B("metric",l);var G={};A(f,G,!1)&&x("set",G);var L;d.vtp_enableLinkId&&x("require",
"linkid","linkid.js");x("set","hitCallback",function(){var P=f&&f.hitCallback;Ea(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var T={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Na,d.vtp_eventValue||e.value)};A(L,T,!1);x("send",
T);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var za=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:za})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var wa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:wa})}L?x("send","pageview",L):x("send","pageview");d.vtp_autoLinkDomains&&th(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var Ba=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var pb=V("https:","http:","//www.google-analytics.com/"+Ba,f&&f.forceSSL);W(pb,
function(){var P=qh();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else O(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(he(Eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return J.getElementById(w)?a():w}function b(w,x){if(!w)return!1;for(var y=0;y<t.length;y++)if(0<=w.indexOf("//"+t[y]+"/"+x))return!0;return!1}function c(w){var x=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+x+"enablejsapi=1";if(!u){var y=X("document");u=y.location.protocol+"//"+y.location.hostname;y.location.port&&(u+=":"+y.location.port)}return w+x+"enablejsapi=1&origin="+encodeURIComponent(u)}function d(w,
x){var y=w.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(x)return w.setAttribute("src",c(y)),!0}return!1}function e(w,x){if(!w.getAttribute("data-gtm-yt-inspected-"+x.ud)&&(w.setAttribute("data-gtm-yt-inspected-"+x.ud,"true"),d(w,x.Ae))){w.id||(w.id=a());var y=X("YT"),B=y.get(w.id);B||(B=new y.Player(w.id));var z=g(B,x),A={},F;for(F in z)A.$a=F,z.hasOwnProperty(A.$a)&&B.addEventListener(A.$a,function(G){return function(L){return z[G.$a](L.data)}}(A)),A={$a:A.$a}}}
function f(w){O(function(){function x(){for(var B=y.getElementsByTagName("iframe"),z=B.length,A=0;A<z;A++)e(B[A],w)}var y=X("document");x();xn(x)})}function g(w,x){var y,B;function z(){ba=Rn(function(){return{url:Q,title:U,ue:N,sg:w.getCurrentTime(),playbackRate:za}},x.ud,w.getIframe());N=0;U=Q="";za=1;return A}function A(P){switch(P){case p.PLAYING:N=Math.round(w.getDuration());Q=w.getVideoUrl();if(w.getVideoData){var K=w.getVideoData();U=K?K.title:""}za=w.getPlaybackRate();x.lg?ba.Vb("start"):ba.Oc();
M=m(x.qh,x.ph,w.getDuration());return F(P);default:return A}}function F(){wa=w.getCurrentTime();Ba=(new Date).getTime();ba.zh();ia();return G}function G(P){var K;switch(P){case p.ENDED:return T(P);case p.PAUSED:K="pause";case p.BUFFERING:var Aa=w.getCurrentTime()-wa;K=1<Math.abs(((new Date).getTime()-Ba)/1E3*za-Aa)?"seek":K||"buffering";w.getCurrentTime()&&(x.kg?ba.Vb(K):ba.Oc());ea();return L;case p.UNSTARTED:return z(P);default:return G}}function L(P){switch(P){case p.ENDED:return T(P);case p.PLAYING:return F(P);
case p.UNSTARTED:return z(P);default:return L}}function T(){for(;B;){var P=y;Sn(B);P()}x.jg&&ba.Vb("complete",1);return z(p.UNSTARTED)}function ca(){}function ea(){B&&(Sn(B),B=0,y=ca)}function ia(){if(M.length&&0!==za){var P=-1,K;do{K=M[0];if(K.Ga>w.getDuration())return;P=(K.Ga-w.getCurrentTime())/za;if(0>P&&(M.shift(),0===M.length))return}while(0>P);y=function(){B=0;y=ca;0<M.length&&M[0].Ga===K.Ga&&(M.shift(),ba.Vb("progress",K.Se,K.Xe));ia()};B=Tn(y,1E3*P)}}var ba,M=[],N,Q,U,za,wa,Ba,pb=z(p.UNSTARTED);
B=0;y=ca;return{onStateChange:function(P){pb=pb(P)},onPlaybackRateChange:function(P){wa=w.getCurrentTime();Ba=(new Date).getTime();ba.Oc();za=P;ea();ia()}}}function k(w){for(var x=w.split(","),y=x.length,B=[],z=0;z<y;z++){var A=parseInt(x[z],10);isNaN(A)||100<A||0>A||B.push(A/100)}B.sort(function(F,G){return F-G});return B}function l(w){for(var x=w.split(","),y=x.length,B=[],z=0;z<y;z++){var A=parseInt(x[z],10);isNaN(A)||0>A||B.push(A)}B.sort(function(F,G){return F-G});return B}function m(w,x,y){var B=
w.map(function(F){return{Ga:F,Xe:F,Se:void 0}});if(!x.length)return B;var z=x.map(function(F){return{Ga:F*y,Xe:void 0,Se:F}});if(!B.length)return z;var A=B.concat(z);A.sort(function(F,G){return F.Ga-G.Ga});return A}function n(w){w.vtp_triggerStartOption?r(w):bh(function(){r(w)})}function r(w){var x=!!w.vtp_captureStart,y=!!w.vtp_captureComplete,B=!!w.vtp_capturePause,z=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),F=!!w.vtp_fixMissingApi;if(x||y||B||z.length||
A.length){var G={lg:x,jg:y,kg:B,ph:z,qh:A,Ae:F,ud:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},L=X("YT"),T=function(){f(G)};O(w.vtp_gtmOnSuccess);if(L)L.ready&&L.ready(T);else{var ca=X("onYouTubeIframeAPIReady");Zn("onYouTubeIframeAPIReady",function(){ca&&ca();T()});O(function(){for(var ea=X("document"),ia=ea.getElementsByTagName("script"),ba=ia.length,M=0;M<ba;M++){var N=ia[M].getAttribute("src");if(b(N,"iframe_api")||b(N,"player_api"))return}for(var Q=ea.getElementsByTagName("iframe"),
U=Q.length,za=0;za<U;za++)if(!v&&d(Q[za],G.Ae)){W("https://www.youtube.com/iframe_api");v=!0;break}})}}else O(w.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},u,v=!1;Z.__ytl=n;Z.__ytl.g="ytl";Z.__ytl.h=!0;Z.__ytl.priorityOverride=0}();
Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return Fd.B})}();

Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){O(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var g={prefix:e,path:c,domain:d};b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||
(b.vtp_enableCrossDomain||xj())&&Mj(a,g));Jj(g);Qj(["aw","dc"],g);tk(f,g);var k=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var l=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),m=b.vtp_urlPosition,n=!!b.vtp_formDecoration;Oj(a,l,m,n,k);}Uj();})}();


Z.b.aev=["google"],function(){function a(p,u){var v=pg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var x=p+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var B=a(p,w);if(B&&(y=v(B),n[x]=y,r.push(x),35<r.length)){var z=r.shift();delete n[z]}}return y}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(Un());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(p))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!Lo(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ch(Eh(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function g(p){switch(p.tagName.toLowerCase()){case "input":return We(p,"value");case "button":return Xe(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)sn(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&We(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
v;case "TEXT":return b(u,w,Xe)||v;case "URL":var y;a:{var B=String(a(u,"elementUrl")||v||""),z=Eh(B),A=String(p.vtp_component||"URL");switch(A){case "URL":y=B;break a;case "IS_OUTBOUND":y=d(B,p.vtp_affiliatedDomains);break a;default:y=Ch(z,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var F;if(void 0===p.vtp_attribute)F=c(u,w,v);else{var G=p.vtp_attribute,L=a(u,"element");F=L&&We(L,G)||v||""}return F;case "MD":var T=p.vtp_mdValue,ca=b(u,"MD",En);return T&&ca?Hn(ca,
T)||v:ca||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=I(b),d=c;d[rd.xa]=null;d[rd.qf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){lh();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Yj()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(w){return function(x,y,B){var z="DATA_LAYER"==w?Xn(B):k[y];z&&(l[x]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(w){return{value:w.price,quantity:w.quantity,item_id:w.id}})));var r=function(w,x){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[w]=x},t=function(w){return function(x,y,B,z){var A="DATA_LAYER"==w?Xn(B):k[y];z(A)&&r(x,A)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";
k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var v=
!0;v&&b.push(l);a||(a=!0,W(p,f(),e(p)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();
Z.b.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.g="bzi";Z.__bzi.h=!0;Z.__bzi.priorityOverride=0})(function(a){E._linkedin_data_partner_id=a.vtp_id;W("https://snap.licdn.com/li.lms-analytics/insight.min.js",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var g=c[f].key||"";d&&(g="^"+g+"$");var k=new RegExp(g,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=X(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(k,l){void 0!==c[k]&&(f[l]=c[k])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{W("//bat.bing.com/bat.js",
function(){var k=Ho(X("UET"),{ti:c.vtp_tagId,q:e});E[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){O(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();
Z.b.fsl=[],function(){function a(){var e=X("document"),f=c(),g=HTMLFormElement.prototype.submit;Ue(e,"click",function(k){var l=k.target;if(l&&(l=Ze(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&We(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=J.getElementById(l.form):m=Ze(l,["form"],100);m&&f.store(m,l)}},!1);Ue(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,r=f.get(l),t=!0;if(d(l,function(){if(t){var p;
r&&(p=e.createElement("input"),p.type="hidden",p.name=r.name,p.value=r.value,l.appendChild(p));g.call(l);p&&l.removeChild(p)}},m,n,r))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&g.call(k)},!1,l)&&(g.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Ha(e,function(k){return k.form===
g})};return{store:function(g,k){var l=f(g);l?l.button=k:e.push({form:g,button:k})},get:function(g){var k=f(g);return k?k.button:null}}}function d(e,f,g,k,l){var m=pn("fsl",g?"nv.mwt":"mwt",0),n;n=g?pn("fsl","nv.ids",[]):pn("fsl","ids",[]);if(!n.length)return!0;var r=ln(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!Yn(r,an(f),m))return!1}else Yn(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.g=
"fsl";Z.__fsl.h=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};on("fsl","mwt",m,0);g||on("fsl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};on("fsl","ids",n,[]);g||on("fsl","nv.ids",n,[]);bo("fsl")||(a(),co("fsl"));O(e.vtp_gtmOnSuccess)})}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Mo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){O(a.vtp_gtmOnFailure)})}();Z.b.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.g="hid";Z.__hid.h=!0;Z.__hid.priorityOverride=0})(function(){return hn.Jb})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=J.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){O(g)}}}var c=function(d){if(J.body){var e=
d.vtp_gtmOnFailure,f=go(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Zc,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(J.body,Ye(g),k,e)()}else Tn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();

Z.b.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.g="dbg";Z.__dbg.h=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();


Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Ye('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Ko(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.b.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Sg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Ze(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=pn("lcl",k?"nv.mwt":"mwt",0),m;m=k?pn("lcl","nv.ids",[]):pn("lcl","ids",[]);if(m.length){var n=ln(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(fo(g,"rel")||""),t=!!Ha(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Hf("GTM",36);var p=X((fo(g,"target")||"_self").substring(1)),u=!0;if(Yn(n,an(function(){var v;if(v=u&&p){var w;a:if(t){var x;try{x=new MouseEvent(f.type)}catch(y){if(!c.createEvent){w=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.Sg=!0;f.target.dispatchEvent(x);w=!0}else w=!1;v=!w}v&&(p.location.href=fo(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Yn(n,function(){},l||2E3);return!0}}};Ue(c,"click",e,!1);Ue(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=fo(d,"href"),g=f.indexOf("#"),k=fo(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=Wn(f),m=Wn(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};on("lcl","mwt",k,0);e||on("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};on("lcl","ids",l,[]);e||on("lcl","nv.ids",l,[]);bo("lcl")||(a(),co("lcl"));O(c.vtp_gtmOnSuccess)})}();


var wq={};wq.macro=function(a){if(hn.Nc.hasOwnProperty(a))return hn.Nc[a]},wq.onHtmlSuccess=hn.te(!0),wq.onHtmlFailure=hn.te(!1);wq.dataLayer=kg;wq.callback=function(a){Df.hasOwnProperty(a)&&Ea(Df[a])&&Df[a]();delete Df[a]};function xq(){R[Fd.B]=wq;Ua(Ef,Z.b);jd=jd||hn;kd=Tg}
function yq(){Ai.gtm_3pds=!0;R=E.google_tag_manager=E.google_tag_manager||{};if(R[Fd.B]){var a=R.zones;a&&a.unregisterChild(Fd.B)}else{for(var b=data.resource||{},c=b.macros||
[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)ed.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(r)}hd=Z;id=Fo;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;hm();Kd=new Jd(p);if(void 0!==u)for(var w=["sandboxedScripts"],x=0;x<u.length;x++){var y=u[x].replace(/^_*/,"");Ef[y]=w}km(v);xq();
gn();Xg=!1;Yg=0;if("interactive"==J.readyState&&!J.createEventObject||"complete"==J.readyState)$g();else{Ue(J,"DOMContentLoaded",$g);Ue(J,"readystatechange",$g);if(J.createEventObject&&J.documentElement.doScroll){var B=!0;try{B=!E.frameElement}catch(G){}B&&ah()}Ue(E,"load",$g)}Dm=!1;"complete"===J.readyState?Fm():Ue(E,"load",Fm);
a:{if(!$f)break a;E.setInterval(ag,864E5);}Af=(new Date).getTime();}}yq();

})()
