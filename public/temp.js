const deletelink = document.querySelectorAll('#deletelink');
const titlename =document.querySelectorAll('#titlename').innerHTML;
for(let i=0;i< deletelink.length ; i++){
    const url ="/delete?username=" + String(titlename[i]) ;
    deletelink.setAttribute("href",url);
}

