mwf.userAgent=new function(){this.cookieName=mwf.site.cookie.prefix+"user_agent";var a=navigator.userAgent.toLowerCase();this.getOS=function(){var b=a;if(b.match(/(iphone)|(ipad)|(ipod)/)!=null){return"iphone_os"}else{if(b.indexOf("android")!=-1){return"android"}else{if(b.indexOf("blackberry")!=-1){return"blackberry"}else{if(b.indexOf("windows phone os")!=-1){return"windows_phone"}else{if(b.indexOf("windows mobile")!=-1){return"windows_mobile"}else{if(b.indexOf("symbian")!=-1){return"symbian"}else{if(b.indexOf("webos")!=-1){return"webos"}else{if(b.indexOf("mac os x")!=-1){return"mac_os"}else{if(b.indexOf("windows nt")!=-1){return"windows"}else{if(b.indexOf("linux")!=-1){return"linux"}else{return""}}}}}}}}}}};this.getOSVersion=function(){var b=a,c;switch(this.getOS()){case"iphone_os":c=b.indexOf("iPhone OS")+10;b=b.substring(c,Math.min(b.indexOf(" ",c),b.indexOf(".",b.indexOf(".",c)+1)));return b;case"blackberry":if(b.substring(0,10).toLowerCase()=="blackberry"){c=b.indexOf("/")+1;b=b.substring(c,Math.min(b.indexOf(" ",c),b.indexOf(".",b.indexOf(".",c)+1)));return b}break;case"android":if((c=b.indexOf("Android "))!=-1){c+=8;b=b.substring(c,Math.min(b.indexOf(" ",c),b.indexOf(";",c),b.indexOf("-",c),b.indexOf(".",b.indexOf(".",c)+1)));return b}break;case"windows_phone":if((c=b.indexOf("Windows Phone OS "))!=-1){c+=17;b=b.substring(c,b.indexOf(";",c));return b}break;case"windows_mobile":if((c=b.indexOf("Windows Mobile/"))!=-1){c+=15;b=b.substring(c,b.indexOf(";",c));return b}break;case"symbian":if((c=b.indexOf("SymbianOS/"))!=-1){c+=10;b=b.substring(c,b.indexOf(";",c));return b}else{if((c=b.indexOf("Symbian/"))!=-1){c+=8;b="s"+b.substring(c,b.indexOf(";",c));return b}}break;case"webos":if((c=b.indexOf("webOS/"))!=-1){c+=6;b=b.substring(c,Math.min(b.indexOf(";",c),b.indexOf(".",b.indexOf(".",c)+1)));return b}break}return""};this.getBrowser=function(){if(a.indexOf("safari")!=-1){if(this.getOS()=="android"){return"android_webkit"}return"safari"}if(a.indexOf("chrome")!=-1){return"chrome"}if(a.indexOf("iemobile")!=-1){return"iemobile"}if(a.indexOf("camino")!=-1){return"camino"}if(a.indexOf("seamonkey")!=-1){return"seamonkey"}if(a.indexOf("firefox")!=-1){return"firefox"}if(a.indexOf("opera mobi")){return"opera_mobile"}if(a.indexOf("opera_mini")){return"opera_mini"}return""};this.getBrowserEngine=function(){if(a.indexOf("applewebkit")!=-1){return"webkit"}if(a.indexOf("trident")!=-1){return"trident"}if(a.indexOf("gecko")!=-1){return"gecko"}if(a.indexOf("presto")!=-1){return"presto"}if(a.indexOf("khtml")!=-1){return"khtml"}};this.getBrowserEngineVersion=function(){var b=a,c;switch(this.getBrowserEngine()){case"webkit":c=b.indexOf("applewebkit/")+12;return b.substring(c,b.indexOf(" ",c));case"trident":c=b.indexOf("trident/")+8;return b.substring(c,b.indexOf(" ",c));case"gecko":c=b.indexOf("gecko/")+6;return b.substring(c,b.indexOf(" ",c));case"presto":c=b.indexOf("presto/")+7;return b.substring(c,Math.min(b.indexOf("/",c),b.indexOf(" ",c),b.indexOf(")",c)))}return""}};(function(){var a=false;var b=function(){if(a){return}a=true;var g=document.body.className.split(" "),f=g.length,j=mwf.classification,h=mwf.userAgent;var c=function(i){for(p in g){if(i==g[p]){return false}}return true};if(c("mwf")){g[f++]="mwf"}if(j.isMobile()){if(c("mwf_mobile")){g[f++]="mwf_mobile"}}else{if(c("mwf_notmobile")){g[f++]="mwf_notmobile"}}if(j.isStandard()&&c("mwf_standard")){g[f++]="mwf_standard"}if(j.isFull()&&c("mwf_full")){g[f++]="mwf_full"}var e,d;if((e=h.getBrowser()).length>0){e="mwf_browser_"+e.toLowerCase().replace(" ","_");if(c(e)){g[f++]=e}}if((e=h.getBrowserEngine()).length>0){e="mwf_browser_engine_"+e.toLowerCase().replace(" ","_");if(c(e)){g[f++]=e}}if((e=h.getOS()).length>0){e="mwf_os_"+e.toLowerCase().replace(" ","_");if(c(e)){g[f++]=e}}if((d=h.getOSVersion()).length>0){d=e+"_"+d.toLowerCase().replace(/ /g,"_").replace(/\./g,"_");if(c(d)){g[f++]=d}}document.body.className=g.join(" ")};document.addEventListener("DOMContentLoaded",b,false);window.addEventListener("load",b,false)})();