import { isEmptyObject, hasOwnProp } from 'boot/util'
function flattenObjGetArray (obj) {
    if(isEmptyObject(obj) && typeof obj != 'object'){return null}
    var key = Object.keys(obj),
        i = 0,
        tmp = [],
        res = [],
        catBefore = null
    for(; i < key.length; i++){
        if(Array.isArray(obj[key[i]])){
            tmp = [].concat(...obj[key[i]])
            for(var i2 = 0; i2 < tmp.length; i2++){
                tmp[i2].category = key[i]
                tmp[i2].separator = (catBefore && catBefore != key[i]) ? true:false
                catBefore = key[i]
            }
            res = res.concat(...tmp)
        }
    }

    return res
}

export function getAll(state) {
    return flattenObjGetArray(state.emergency)
}

export function getSpecifiedAttr (state) {
    return function(search) {
        if(typeof search != 'string'){return []}

        var arr = flattenObjGetArray(state.emergency),
            res = [],
            i = 0
        for(; i < arr.length; i++){
            if(!hasOwnProp(arr[i],search)){continue}
            res.push(arr[i][search])
        }

        return res
    }
}

export function searchByName (state) {
    return function(search) {
        var arr = flattenObjGetArray(state.emergency),
            res = {},
            i = 0
        for(; i < arr.length; i++){
            if(!hasOwnProp(arr[i],"name")){continue}
            if(arr[i].name.includes(search)){
                res = arr[i]
                break
            }
        }
        return res
    }
}

export function getById (state) {
    return function(search) {
        var arr = flattenObjGetArray(state.emergency),
            res = {},
            i = 0
        for(; i < arr.length; i++){
            if(!hasOwnProp(arr[i],"id")){continue}
            if(arr[i].id == search){
                res = arr[i]
                break
            }
        }
        return res
    }
}