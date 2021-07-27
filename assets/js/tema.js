async function gradientredbg(){
	document.cookie = await "tema=gradientredbg";
	await satu.setAttribute("class","navbar-nav sidebar sidebar-light accordion bg-gradient-danger");
	await dua.setAttribute("class",'navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top bg-gradient-danger');
	await tiga.setAttribute("class",'sticky-footer bg-gradient-danger');
	await empat.setAttribute('class','sidebar-brand d-flex align-items-center justify-content-center bg-gradient-danger');
	await lima.setAttribute('class','fas fa-users fa-2x text-danger');
	await enam.setAttribute('class','lert alert bg-danger alert-dismissible');
	console.log('SUCCESS [!]');
}

async function bluebg(){
	document.cookie = await "tema=bluebg";
	await satu.setAttribute("class","navbar-nav sidebar sidebar-light accordion bg-info");
	await dua.setAttribute("class",'navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top bg-info');
	await tiga.setAttribute("class",'sticky-footer bg-info');
	await empat.setAttribute('class','sidebar-brand d-flex align-items-center justify-content-center bg-info');
	await lima.setAttribute('class','fas fa-users fa-2x text-info');
	await enam.setAttribute('class','lert alert bg-info alert-dismissible');
	console.log('SUCCESS [!]');
}

async function greenbg(){
	document.cookie = await "tema=greenbg";
	await satu.setAttribute("class","navbar-nav sidebar sidebar-light accordion bg-success");
	await dua.setAttribute("class",'navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top bg-success');
	await tiga.setAttribute("class",'sticky-footer bg-success');
	await empat.setAttribute('class','sidebar-brand d-flex align-items-center justify-content-center bg-success');
	await lima.setAttribute('class','fas fa-users fa-2x text-success');
	await enam.setAttribute('class','lert alert bg-success alert-dismissible');
	console.log('SUCCESS [!]');
}

window.satu = document.querySelector('ul#accordionSidebar');
window.dua = document.querySelector('nav#SETTINGBG2');
window.tiga = document.querySelector('footer#SettingBg4');
window.empat = document.querySelector('a#settingbg3');
window.lima = document.querySelector('i#settingbg5');
window.enam = document.querySelector('div#demo');



try{
	console.log(document.cookie);
	s = "tema="
	tema = document.cookie
	if(tema.includes(s+"gradientredbg")){gradientredbg()}
	if(tema.includes(s+"bluebg")){bluebg()}
	if(tema.includes(s+"greenbg")){greenbg()}
}catch(e){}