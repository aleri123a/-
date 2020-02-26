var IE5 = (document.all && document.getElementById) ? true : false;
if ( IE5 ) document.write( "<div id=obj_xT style='position:absolute;top:-100px;z-index:3;display:none' onmouseover=\"overdiv=1;\" onmouseout=\"overdiv=0; setTimeout('cT()',200);\"></div>" );
var nShow = false;
var overdiv = 0;
var timeid = "";
var bmove = 0;
function xT( contents, e, userstyle ) {
	// 내용, 윈도우이벤트핸들, 사용자스타일사용여부
	if ( !IE5 ) return;
	if ( contents == "" ) return;
	if (timeid) clearTimeout(timeid);

	document.all.obj_xT.style.left = -999
	document.all.obj_xT.style.top = -999

	if ( !userstyle ) {
		var tablewidth = ""
		if ( contents.length > 40 ) tablewidth="width=100";
		var div_string = "<table cellspacing=0 "+tablewidth+" cellpadding=0 bgcolor=#FFF9F0"
		+ " style='filter:alpha(opacity=100); border:1 solid #DA753F'>\n"
		+ "<tr><td style='text-indent:3px;cursor:hand;font-size:10pt;height:22px;padding-top:4px;word-break:break-all;'><font color=black style='font-size:9pt'>\n"
		+ contents
		+ "</font></td></tr></table>" ;
	} else {
		div_string = contents ;
	}

	document.all.obj_xT.innerHTML = div_string ;
	document.all.obj_xT.style.display  = "block";
	
	Pos(e);

	overdiv = 0;
	nmove = 0;
	nShow = true;
	return;
}

function cT( ) {
	if ( !IE5 ) { return }
	if ( !overdiv ) {
		obj_xT.style.display  = "none";
		nShow = false;
	}
	return;
}

function sT( e, havelink ) {
	// 윈도우이벤트핸들, 링크가 있는지 여부(1일경우 팝업레이어를 고정)
	if ( !IE5 ) return;
	if ( !nShow ) return;

	if ( !havelink || havelink != 1 ) {
		Pos(e)
	} else {
		if ( bmove < 5 ) Pos(e)
		++ bmove
	}

	document.all.obj_xT.style.display  = "block";
	nShow = true;
	return;
}

function Pos(e) {
	var BodyWidth = document.body.scrollWidth;
	var BodyLeft = document.body.scrollLeft;
	var BodyHeight = document.body.clientHeight;
	var BodyTop = document.body.scrollTop;
	var DivWidth = document.all.obj_xT.scrollWidth;
	var DivHeight = document.all.obj_xT.scrollHeight;

	xpos = e.x + BodyLeft + 5;
	ypos = e.y + BodyTop + 5;

	if ( xpos + DivWidth > BodyWidth ) xpos = BodyWidth - DivWidth;
	if (BodyLeft > xpos) xpos = BodyLeft + 10;
	if (ypos + DivHeight > BodyTop + BodyHeight) ypos = ypos - DivHeight - 10;
	if ( ypos < BodyTop ) ypos = BodyTop + 10;

	document.all.obj_xT.style.left = xpos
	document.all.obj_xT.style.top = ypos
}

function getCookie( name ) { 
	var nameOfCookie = name + "="; 
	var x = 0; 
	while ( x <= document.cookie.length ) { 
		var y = (x+nameOfCookie.length); 
		if ( document.cookie.substring( x, y ) == nameOfCookie ) { 
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) 
			endOfCookie = document.cookie.length; 
			return unescape( document.cookie.substring( y, endOfCookie ) ); 
		} 
		x = document.cookie.indexOf( " ", x ) + 1; 
		if ( x == 0 ) 
		break; 
	} 
	return ""; 
}

function setCookie( name, value, expiredays ) { 
	var todayDate = new Date(); 
	todayDate.setDate( todayDate.getDate() + expiredays ); 
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
} 

function menuTableSisplay(lineID) {
	var munuLine = menuTable.all[lineID];
	cookieValue = getCookie(lineID); 
	if (cookieValue == 'none') {
		for (i=0;i<=200;i++) {
			if (munuLine[i] == undefined) break;
			munuLine[i].style.display='none';
		}
	}
}

function lineEvent(lineID) {
	var munuLine = menuTable.all[lineID];
	cookieValue = 'block';
	for (i=0;i<=200;i++) {
		if (munuLine[i] == undefined) break;
		if (munuLine[i].style.display == 'block') { 
			munuLine[i].style.display='none';
			cookieValue = 'none';
		} else { 
			munuLine[i].style.display='block';
			cookieValue = 'block';
		}
	}
	setCookie(lineID, cookieValue, 365);

}

function koreanCheck(aThis) {
	var f = document.cgifrm;
	//한글체크
	if ( isEmpty(aThis, '성명을 확인해주세요.') ) return false;
		
	for(i=0; i<aThis.value.length; i++) {
	  if(!((aThis.value.charCodeAt(i) > 0x3130 && aThis.value.charCodeAt(i) < 0x318F) || (aThis.value.charCodeAt(i) >= 0xAC00 && aThis.value.charCodeAt(i) <= 0xD7A3))) {
	   alert("반드시 한글만 입력하세요");
		 aThis.focus();
	   return false;
	  }
	}
}

function openWindow(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable) {
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';
  window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}

function shield(aForm, aName) {
	var n   = 0;
	var txt, i, j, found;
	if (aForm[aName].type == 'text' || aForm[aName].type == 'textarea') { 
		//txt = aForm[aName].createTextRange();
		if (document.selection) { //IE
			txt = aForm[aName].createTextRange();
		} else if (window.getSelection) { //others
			return true;
			//txt = aForm[aName].createRange();
		}

		filterArray = ["cookie", "session", "where", "drop", "truncate", "from"];
		for (i = 0; i <= filterArray.length-1 != false; i++) {
			for (j = 0; j <= n && (found = txt.findText(filterArray[i])) != false; j++) {
				txt.moveStart("character", 1);
				txt.moveEnd("textedit");
			}

			if (found) {
				alert("방패 금지어 ["+filterArray[i]+"]가 포함 될 수 없습니다.\n\n["+filterArray[i]+"]는 웹사이트 공격 및 취약점을 찾는데 사용되는 단어중 하나입니다.\n\n입력된 단어는 웹페이지 URL에 직접적으로 적용이 될 수 있으며, 이러한 URL로 접속한 사용자는 이 웹사이트의 방패에 의해 IP가 차단됩니다.\n\n["+filterArray[i]+"]를 대체할 다른 단어를 사용해 주십시오.");
				txt.moveStart("character", -1);
				txt.findText(filterArray[i]);
				txt.select();
				txt.scrollIntoView();
				return false;
			}
		}
	}
	return true;
}

function popupClose(aPopup, aCheckbox) {
	if (document.getElementById(aCheckbox).checked == true) {
		setCookie(aPopup, 'hidden', 1);
	}
	document.getElementById(aPopup).style.display = 'none';
}


