// document.getElementById('next').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
// }
// document.getElementById('prev').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').prepend(lists[lists.length - 1]);
// }
  
// download js
document.getElementById("downloadBtn").addEventListener("click", function() {
    var pdfFilePath = "assets/images/Mukesh'sResume.pdf";
    var link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "Mukesh's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });