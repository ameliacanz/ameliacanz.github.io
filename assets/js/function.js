a = document;
function tok(id) {
	setTimeout(()=> {
		a.querySelector(id+'tik').setAttribute('style', 'color: rgba(0,0,0,0)')
		tok(id)
	}, 700)
	setTimeout(()=> {
		a.querySelector(id+'tik').setAttribute('style', 'color: white')
	}, 400)
}

function wh(id) {
	a.querySelector(id+'tik').setAttribute('style', 'color: white')
}

function plit(value) {
	hasil = []
	jml = value.length;
	for (var e = 0; e < jml; e++) {
		hasil.push(value[e])
	}
	return JSON.stringify(hasil)
}

function jalan(corsor, id, value, interval, newlineinterval) {
	ev = "";
	nilai = 0;
	value = value.trim()
	jml = value.length;
	for (var e = 0; e < jml; e++) {
		if (value[e] == "[") {
			ev += `setTimeout(()=>{${corsor ? 'wh("span#'+id+'");': ''}a.querySelector('span#${id}').innerHTML += "${value.slice(e += 1).split(']')[0]}"},${(value.slice(e += 1).split(']')[0].includes("br")) ? nilai += newlineinterval: nilai += interval});`
			e += value.slice(e).split(']')[0].length
		} else {
			ev += `setTimeout(()=>{${corsor ? 'wh("span#'+id+'");': ""}a.querySelector('span#${id}').innerHTML += "${value[e] == `
			` ? "<br>": value[e]}"
			},${value[e] == `
			` ? nilai += newlineinterval: nilai += interval});`
		}
	}
	corsor ? tok('span#'+id): ""
	eval(ev);
	ev = "";
}