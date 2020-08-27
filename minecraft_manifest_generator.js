/* 
------------------------------------------------------------
                          CREDITS
  
  Programme créer par @briec repl.it 
  Made by @briec repl.it
  (dernière mise à jour : 27/08/2020)
  (last update : 08-27-2020)

  Chaîne youtube (KiwiHub) : 
  https://www.youtube.com/channel/UCMCACsSUCFLLH13q9T5enTA
------------------------------------------------------------
*/

function tailleSub(nombre)
{
	var char_sub = ''; 
	var subXD = '';

	var folder_name1 = document.getElementById("fname_1").value;
	var folder_name2 = document.getElementById("fname_2").value;
	var folder_name3 = document.getElementById("fname_3").value;
	var name1 = document.getElementById("name_sub1").value;
	var name2 = document.getElementById("name_sub2").value;
	var name3 = document.getElementById("name_sub3").value;


	if(nombre == 1)
	{
		//alert('il y a 1 subpack');
		subXD = ',\n   "subpacks": [\n' + '    {\n     "folder_name": "' + folder_name1 + '",\n     "name": "' + name1 + '",\n     "memory_tier": 1\n    }\n' + '   ]';

	}
	else if(nombre == 2)
	{
		//alert('il y a 2 subpack');
		subXD = ',\n   "subpacks": [\n' + '    {\n     "folder_name": "' + folder_name2 + '",\n     "name": "' + name2 + '",\n     "memory_tier": 2\n    },\n' + '    {\n     "folder_name": "' + folder_name1 + '",\n     "name": "' + name1 + '",\n     "memory_tier": 1\n    }\n' + '   ]';
	}
	else if(nombre == 3)
	{
		//alert('il y a 3 subpack');
		subXD = ',\n   "subpacks": [\n' + '    {\n     "folder_name": "' + folder_name3 +'",\n     "name": "' + name3 + '",\n     "memory_tier": 3\n    },\n' + '    {\n     "folder_name": "' + folder_name2 + '",\n     "name": "' + name2 + '",\n     "memory_tier": 2\n    },\n' + '    {\n     "folder_name": "' + folder_name1 + '",\n     "name": "' + name1 + '",\n     "memory_tier": 1\n    }\n' + '   ]';
	}

	char_sub = subXD;

	return char_sub;
}



function get_textarea() {

    document.getElementById("fname_1").disabled = true;
    document.getElementById("fname_2").disabled = true;
    document.getElementById("fname_3").disabled = true;
    document.getElementById("name_sub1").disabled = true;
    document.getElementById("name_sub2").disabled = true;
    document.getElementById("name_sub3").disabled = true;

  var uuidrecup_1 = randomUUID();
  var uuidrecup_2 = randomUUID();
  
  if(uuidrecup_2 == uuidrecup_1)
  {
  	uuidrecup_2 = randomUUID();
  }

  var decsr = document.getElementById("description_head").value;
  var name = document.getElementById("name_head").value;
  var version = document.getElementById("version").value;
  var decsr_2 = document.getElementById("description_module").value;
  var sub_num = document.getElementById("subpacks_num").value;
  var div = document.getElementById("affichage");
  var divuuid_1 = document.getElementById("affichage_uuid_1");
  var divuuid_2 = document.getElementById("affichage_uuid_2");
  divuuid_1.innerHTML = uuidrecup_1;
  divuuid_2.innerHTML = uuidrecup_2;

  var subpack_add = tailleSub(sub_num);
  showDivsub1(sub_num);


  var testXD = '{\n  "format_version": 1,\n  "header": {\n    "description": "' + decsr + '",\n    "name": "' + name + '",\n    "uuid": "' + uuidrecup_1 + '",\n    "version": [' + version + ']\n  },\n  "modules": [\n    {\n      "description": "' + decsr_2 + '",\n      "type": "resources",\n      "uuid": "' + uuidrecup_2 + '",\n      "version": [' + version + ']\n    }\n  ]' + subpack_add + '\n}';

  document.getElementById("manifest_txt").value = testXD;
}


function randomUUID() {
	var chars = "0123456789abcdef";
	var random_1 = '';
	var random_2 = '';
	var random_3 = '';
	var random_4 = '';
	var random_5 = '';

	for (var i=0; i<8; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		random_1 += chars.substring(rnum,rnum+1);
	}
	for (var i=0; i<4; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		random_2 += chars.substring(rnum,rnum+1);
	}
	for (var i=0; i<4; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		random_3 += chars.substring(rnum,rnum+1);
	}
	for (var i=0; i<4; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		random_4 += chars.substring(rnum,rnum+1);
	}
	for (var i=0; i<12; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		random_5 += chars.substring(rnum,rnum+1);
	}
 	var uuid = random_1 + "-" + random_2 + "-" + random_3 + "-" + random_4 + "-" + random_5;
	return uuid;
	
}

function showDivsub1(nombre) {
    if(nombre == 1)
    {
         document.getElementById("fname_1").disabled = false;
         document.getElementById("name_sub1").disabled = false;
    }
    if(nombre == 2)
    {
         document.getElementById("fname_1").disabled = false;
         document.getElementById("fname_2").disabled = false;
         document.getElementById("name_sub1").disabled = false;
         document.getElementById("name_sub2").disabled = false;

    }
    if(nombre == 3)
    {
         document.getElementById("fname_1").disabled = false;
         document.getElementById("fname_2").disabled = false;
         document.getElementById("fname_3").disabled = false;
         document.getElementById("name_sub1").disabled = false;
         document.getElementById("name_sub2").disabled = false;
         document.getElementById("name_sub3").disabled = false;
    }
}
