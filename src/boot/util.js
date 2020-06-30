import { scroll, Platform } from 'quasar'

const { getScrollTarget, setScrollPosition } = scroll
// takes an element object
const scrollToElement = (el) => {
  const target = getScrollTarget(el)
  const offset = el.offsetTop
  const duration = 1000
  setScrollPosition(target, offset, duration)
}

const validURL = function(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

const timeNow = function() {
    var d = new Date();
    return ((d.getHours() < 10)?"0":"") + d.getHours() +":"+ ((d.getMinutes() < 10)?"0":"") + d.getMinutes() /*+":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds()*/;
}

const indexOfMap = function(array,key,txt,string=false){
	return array.map(function(e) { return (string) ? e[key].toString():e[key]; }).indexOf(txt);
}

const isRealValue = function(obj)
{
  return typeof obj != 'boolean' ? (
		obj && obj !== 'null' && obj !== 'undefined'
	) : true;
}

const isEmptyObject = function(obj)
{
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}

const isFunction = function (functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const getPlatform = function(){
  if(Platform.is.mobile || Platform.is.cordova || Platform.is.capacitor){
    return 'mobile';
  }else if(Platform.is.desktop){
    return 'desktop';
  }else if(Platform.is.electron){
    return 'electron';
  }else{
    return 'other';
  }
}

const capitalizeFirstLetter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const hasOwnProp = function(obj,prop){
	if(typeof prop != 'string' || !obj){return false}
	return Object.hasOwnProperty.call(obj, prop);
}

const isBlankNull = function(cek){
	let real = typeof cek != 'boolean' ? (
		cek && cek !== 'null' && cek !== 'undefined'
	) : true;
	if(real){
    if(typeof cek == "object"){
      return isEmptyObject(cek);
    }else if(!cek.replace(/\s/g, '').length || cek == ''){
			return true;
		}else{
			return false;
		}
	}else{
		return true;
	}
}

const buildHeaderRequest = function(add={},old={}){
  return {
    headers: {
      ...old,
	  ...add
    }
  }
}

const randomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { 
  scrollToElement, 
  timeNow, 
  getPlatform,
  indexOfMap, 
  isRealValue, 
  isFunction, 
  isEmptyObject,
  hasOwnProp,
  buildHeaderRequest,
  isBlankNull,
  capitalizeFirstLetter,
  validURL,
  randomInt
}