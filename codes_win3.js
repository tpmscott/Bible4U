
// Define global variables
var SEARCHANY     = 1;
var SEARCHALL     = 2;
var SEARCHURL     = 4;
var searchType  = '';
var showMatches   = 1000;
var currentMatch  = 0;
var copyArray   = new Array();
var docObj      = document;
var docObj2     = document;
var docObj_h    = document;
var nowbook = 39;
var nowchapter = 0;
var nowsection = 0;
var findbook = new Array();
var findchapter = new Array();
var word1 = "";
var head_size = "64"; //���D�r���j�p
var sing_size = "50"; //�۸֦r���j�p
var bcs_size ; //�g���r���j�p
var sec_size ; //�g��r���j�p
var search_sec_size ; //�d�ߵ��G�g��r���j�p
var pray_size = "50"; //ë�i�r���j�p
var head_color = "fff000"; //���D�r���C��
var sing_color = "fff000"; //�۸֦r���C��
var bcs_color = "ff0000"; //�g���r���C�� 
var sec_color = "fff000"; //�g��r���C��
var disp_secs_a = 7; //�@����ܸg�`��
var open_win = 1; //1:�d�߳s���}�ҩ�->�P�@���� , 2:�d�߳s���}�ҩ�->�s����

var BibleVersion_Disp = 0; // 0:���NKJV, 1:���NIV, 2:��ܧf����Ķ��, 3��ܥ�������


// --------------------------------------------------------------


function write_to_json(arg1, arg2, arg3){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   const Store2 = require('./store2.js');  // Store Bible Reading Records in current directory

   // First instantiate the class
   // For Store Bible Reading Records 1
   // width  -- for Book1
   // height -- for chapter1
   // x      -- for verse1

   const store = new Store2({
     // We'll call our data file 'Reading-Bible-Record1'
     configName: 'Reading-Bible-Record1',
     defaults: {
    
       windowBounds: { width: 44, height: 4, x: 12, y:20 }
     }
   });

// Reading records
// let { width, height, x, y } = store.get('windowBounds');

// Writing records
// store.set('windowBounds', { width, height, x, y });

   var width = arg1;
   var height = arg2;
   var x = arg3;

   store.set('windowBounds', { width, height, x });

}



function readchapter_R(bnum, cnum ,snum , rnum) { // for display : reading bible record been saved
  docObj.open();
  docObj2.open();
  docObj_h.open();

  //docObj.writeln('bnum = ' + bnum + '\n'); // for debug
  //docObj.writeln('cnum = ' + cnum + '\n'); // for debug
  //docObj.writeln('snum = ' + snum + '\n'); // for debug

  if(sec_size<20){
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:8pt }\n' + '.2{ font-size:10pt }\n' + '.3{ font-size:12pt }\n' +
     '.4{ font-size:14pt }\n' + '.5{ font-size:16pt }\n' + '.6{ font-size:18pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
     docObj2.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:8pt }\n' + '.2{ font-size:10pt }\n' + '.3{ font-size:12pt }\n' +
     '.4{ font-size:14pt }\n' + '.5{ font-size:16pt }\n' + '.6{ font-size:18pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  }
  else if(sec_size<32){                                          // Modify 2017.05.29 for test
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'p1 { font-size:20pt }\n' + 'p2 { font-size:22pt }\n' + 'p3 { font-size:24pt }\n' +
     'p4 { font-size:26pt }\n' + 'p5 { font-size:28pt }\n' + 'p6 { font-size:30pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
     docObj2.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'p1 { font-size:20pt }\n' + 'p2 { font-size:22pt }\n' + 'p3 { font-size:24pt }\n' +
     'p4 { font-size:26pt }\n' + 'p5 { font-size:28pt }\n' + 'p6 { font-size:30pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  }
  else if(sec_size<44){
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:32pt }\n' + '.2{ font-size:34pt }\n' + '.3{ font-size:36pt }\n' +
     '.4{ font-size:38pt }\n' + '.5{ font-size:40pt }\n' + '.6{ font-size:42pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
     docObj2.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:32pt }\n' + '.2{ font-size:34pt }\n' + '.3{ font-size:36pt }\n' +
     '.4{ font-size:38pt }\n' + '.5{ font-size:40pt }\n' + '.6{ font-size:42pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  }
  else{
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:44pt }\n' + '.2{ font-size:46pt }\n' + '.3{ font-size:48pt }\n' +
     '.4{ font-size:50pt }\n' + '.5{ font-size:52pt }\n' + '.6{ font-size:54pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
     docObj2.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:44pt }\n' + '.2{ font-size:46pt }\n' + '.3{ font-size:48pt }\n' +
     '.4{ font-size:50pt }\n' + '.5{ font-size:52pt }\n' + '.6{ font-size:54pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  }

  if(sec_size<20)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:8pt }\n' + '.2{ font-size:10pt }\n' + '.3{ font-size:12pt }\n' +
     '.4{ font-size:14pt }\n' + '.5{ font-size:16pt }\n' + '.6{ font-size:18pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  else if(sec_size<32)                                          // Modify 2017.05.29 for test
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'p1 { font-size:20pt }\n' + 'p2 { font-size:22pt }\n' + 'p3 { font-size:24pt }\n' +
     'p4 { font-size:26pt }\n' + 'p5 { font-size:28pt }\n' + 'p6 { font-size:30pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  else if(sec_size<44)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:32pt }\n' + '.2{ font-size:34pt }\n' + '.3{ font-size:36pt }\n' +
     '.4{ font-size:38pt }\n' + '.5{ font-size:40pt }\n' + '.6{ font-size:42pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  else
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:44pt }\n' + '.2{ font-size:46pt }\n' + '.3{ font-size:48pt }\n' +
     '.4{ font-size:50pt }\n' + '.5{ font-size:52pt }\n' + '.6{ font-size:54pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');

//  bnum : �g��
//  cnum : ��
//  snum : �`
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }

  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 ��@�����1�`�A+2 ��@�����2�`  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


//    var bname = profiles[line3].substring(0, profiles[line3].indexOf("^"));

      // �M�X��
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));

      // NKJV
//      var bname = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
//      var cname = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));
//      var sname = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));

      // NIV
//      var bname = profiles3[line3].substring(profiles3[line3].indexOf("%")+1, profiles3[line3].indexOf("^"));
//      var cname = profiles3[line3].substring(profiles3[line3].indexOf("^")+1, profiles3[line3].indexOf(":"));
//      var sname = profiles3[line3].substring(profiles3[line3].indexOf(":")+1, profiles3[line3].indexOf(" "));

//      var bcsname1 = bname + ' ��' + cname + '��' + ' ��' + sname + '�`' + '</ol>';
//      var bcsname2 = bname + ' ��' + cname + '�g' + ' ��' + sname + '�`' + '</ol>';

      //var bcsname1 = bname + ' ��' + cname + '��' + '</ol>';   // Marked on 2017.01.07
      //var bcsname2 = bname + ' ��' + cname + '�g' + '</ol>';   // Marked on 2017.01.07

      var bcsname1 = bname + ' ��' + cname + '��' + ' ��' + sname + '�`' + ' �w�Q�x�s�iŪ�g�i��' + rnum + '</ol>';
      var bcsname2 = bname + ' ��' + cname + '�g' + ' ��' + sname + '�`' + ' �w�Q�x�s�iŪ�g�i��' + rnum + '</ol>';

      if(bcs_size==8||bcs_size==20||bcs_size==32||bcs_size==44){
         var bcsname1_1 = '<span class="1">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="1">' + bcsname2 + '</span>'; }

      if(bcs_size==10||bcs_size==22||bcs_size==34||bcs_size==46){
         var bcsname1_1 = '<span class="2">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="2">' + bcsname2 + '</span>'; }

      if(bcs_size==12||bcs_size==24||bcs_size==36||bcs_size==48){
         var bcsname1_1 = '<span class="3">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="3">' + bcsname2 + '</span>'; }

      if(bcs_size==14||bcs_size==26||bcs_size==38||bcs_size==50){
         var bcsname1_1 = '<span class="4">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="4">' + bcsname2 + '</span>'; }

      if(bcs_size==16||bcs_size==28||bcs_size==40||bcs_size==52){
         var bcsname1_1 = '<span class="5">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="5">' + bcsname2 + '</span>'; }

      if(bcs_size==18||bcs_size==30||bcs_size==42||bcs_size==54){
         var bcsname1_1 = '<span class="6">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="6">' + bcsname2 + '</span>'; }


      if(bcs_size==24){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p3>' + bcsname1 + '</p3>';
         var bcsname2_1 = '<p3>' + bcsname2 + '</p3>'; }


      if(bname!="�ֽg") {
         docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
      }
      else {
         docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
      }

      var j=sname-1;

//      docObj.writeln('line1 = '+line1);
//      docObj.writeln('line2 = '+line2);
//      docObj.writeln('line3 = '+line3);
//      docObj.writeln('line4 = '+line4);
//      docObj.writeln('disp_secs = '+disp_secs);
//      docObj.writeln('disp_secs_a = '+disp_secs_a);

      for (var i = line3; i < line4 ; i++) { 
      var oneline = profiles[i].substring(profiles[i].indexOf(" "), profiles[i].length);       // �M�X��
      var oneline2 = profiles2[i].substring(profiles2[i].indexOf(" "), profiles2[i].length);   // NKJV
      var oneline3 = profiles3[i].substring(profiles3[i].indexOf(" "), profiles3[i].length);   // NIV
      var oneline4 = profiles4[i].substring(profiles4[i].indexOf(" "), profiles4[i].length);   // �f����
      var cname_1 = profiles[i].substring(profiles[i].indexOf("^")+1, profiles[i].indexOf(":"));

      j++;

      if(sec_size==8||sec_size==20||sec_size==32||sec_size==44){
         var oneline_1 = '<span class="1">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="1">' + j + '</span>';}

      if(sec_size==10||sec_size==22||sec_size==34||sec_size==46){
         var oneline_1 = '<span class="2">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="2">' + j + '</span>';}

      if(sec_size==12||sec_size==24||sec_size==36||sec_size==48){
         var oneline_1 = '<span class="3">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="3">' + j + '</span>';}

      if(sec_size==14||sec_size==26||sec_size==38||sec_size==50){
         var oneline_1 = '<span class="4">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="4">' + j + '</span>';}

      if(sec_size==16||sec_size==28||sec_size==40||sec_size==52){
         var oneline_1 = '<span class="5">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="5">' + j + '</span>';}

      if(sec_size==18||sec_size==30||sec_size==42||sec_size==54){
         var oneline_1 = '<span class="6">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="6">' + j + '</span>';}



      if(sec_size==20){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p1>' + oneline + '\n' + '</p1>';
         var oneline_2 = '<p1>' + oneline2 + '\n' + '</p1>';
         var oneline_3 = '<p1>' + oneline3 + '\n' + '</p1>';
         var oneline_4 = '<p1>' + oneline4 + '\n' + '</p1>';
         var sj = '<p1>' + j + '</p1>';}

      if(sec_size==22){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p2>' + oneline + '\n' + '</p2>';
         var oneline_2 = '<p2>' + oneline2 + '\n' + '</p2>';
         var oneline_3 = '<p2>' + oneline3 + '\n' + '</p2>';
         var oneline_4 = '<p2>' + oneline4 + '\n' + '</p2>';
         var sj = '<p2>' + j + '</p2>';}

      if(sec_size==24){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p3>' + oneline + '\n' + '</p3>';
         var oneline_2 = '<p3>' + oneline2 + '\n' + '</p3>';
         var oneline_3 = '<p3>' + oneline3 + '\n' + '</p3>';
         var oneline_4 = '<p3>' + oneline4 + '\n' + '</p3>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==30){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p6>' + oneline + '\n' + '</p6>';
         var oneline_2 = '<p6>' + oneline2 + '\n' + '</p6>';
         var oneline_3 = '<p6>' + oneline3 + '\n' + '</p6>';
         var oneline_4 = '<p6>' + oneline4 + '\n' + '</p6>';
         var sj = '<p6>' + j + '</p6>';}



      //var oneline_1_1 = '<table><tr><td valign="top">'+'�M�X��'+'&nbsp'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      //var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      //var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

//      var oneline_1_1 = '<table><tr><td valign="top">'+'�M�X��'+'&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
//      var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
//      var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

      var oneline_1_1 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      var oneline_1_2 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      var oneline_1_3 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';
      var oneline_1_4 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_4+'</td></tr></table>';


      if(cname==cname_1){
         docObj.writeln(oneline_1_1);

         if(parent.command.document.BV.BibleVersion[0].checked)
            docObj2.writeln(oneline_1_2);
         if(parent.command.document.BV.BibleVersion[1].checked)
            docObj2.writeln(oneline_1_3);
         if(parent.command.document.BV.BibleVersion[2].checked)
            docObj2.writeln(oneline_1_4);
      }

//      docObj.writeln(oneline_1);
      }

  docObj.writeln('\n</BODY>\n</HTML>');
  docObj2.writeln('\n</BODY>\n</HTML>');
  docObj.close();
  docObj2.close();
  docObj_h.writeln('\n</BODY>\n</HTML>');
  docObj_h.close();
  // nowbook = bnum;
  // nowchapter = cnum;
  // nowsection = snum;
}



// --------------------------------------------------------------


function readchapter(bnum, cnum ,snum) {   // for window3, main.html
  docObj.open();
  //docObj2.open();
  //docObj_h.open();

  // For Setting Bible Verse Font Size
  //if(parent.command.document.VS.VerseSize[0].checked)
  //   sec_size = "20";
  //if(parent.command.document.VS.VerseSize[1].checked)
  //   sec_size = "22";
  //if(parent.command.document.VS.VerseSize[2].checked)
  //   sec_size = "24";
  //if(parent.command.document.VS.VerseSize[3].checked)
  //   sec_size = "26";
  //if(parent.command.document.VS.VerseSize[4].checked)
  //   sec_size = "28";
  //if(parent.command.document.VS.VerseSize[5].checked)
  //   sec_size = "30";

  sec_size = "24"; // ���ΩT�w�ȡA����A�אּ�i�]�w


  // For Setting Bible Book Font Size
  //if(parent.command.document.BS.BookSize[0].checked)
  //   bcs_size = "20";
  //if(parent.command.document.BS.BookSize[1].checked)
  //   bcs_size = "22";
  //if(parent.command.document.BS.BookSize[2].checked)
  //   bcs_size = "24";
  //if(parent.command.document.BS.BookSize[3].checked)
  //   bcs_size = "26";
  //if(parent.command.document.BS.BookSize[4].checked)
  //   bcs_size = "28";
  //if(parent.command.document.BS.BookSize[5].checked)
  //   bcs_size = "30";

  bcs_size = "24"; // ���ΩT�w�ȡA����A�אּ�i�]�w


  //docObj.writeln('bnum = ' + bnum + '\n'); // for debug
  //docObj.writeln('cnum = ' + cnum + '\n'); // for debug
  //docObj.writeln('snum = ' + snum + '\n'); // for debug

  //docObj.writeln('nowbook = ' + nowbook + '\n'); // for debug
  //docObj.writeln('nowchapter = ' + nowchapter + '\n'); // for debug
  //docObj.writeln('nowsection = ' + nowsection + '\n'); // for debug

  if(sec_size<20){
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:8pt }\n' + '.2{ font-size:10pt }\n' + '.3{ font-size:12pt }\n' +
     '.4{ font-size:14pt }\n' + '.5{ font-size:16pt }\n' + '.6{ font-size:18pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
     docObj2.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:8pt }\n' + '.2{ font-size:10pt }\n' + '.3{ font-size:12pt }\n' +
     '.4{ font-size:14pt }\n' + '.5{ font-size:16pt }\n' + '.6{ font-size:18pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  }
  else if(sec_size<32){                                                            // Modify 2017.05.29 for test
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'p1 { font-size:20pt }\n' + 'p2 { font-size:22pt }\n' + 'p3 { font-size:24pt }\n' +
     'p4 { font-size:26pt }\n' + 'p5 { font-size:28pt }\n' + 'p6 { font-size:30pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
     //docObj2.writeln('<HTML>\n<HEAD>\n' +
     //'<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     //'p1 { font-size:20pt }\n' + 'p2 { font-size:22pt }\n' + 'p3 { font-size:24pt }\n' +
     //'p4 { font-size:26pt }\n' + 'p5 { font-size:28pt }\n' + 'p6 { font-size:30pt }\n' +
     //'</style>\n' +
     //'<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     //'<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  }
  else if(sec_size<44){
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:32pt }\n' + '.2{ font-size:34pt }\n' + '.3{ font-size:36pt }\n' +
     '.4{ font-size:38pt }\n' + '.5{ font-size:40pt }\n' + '.6{ font-size:42pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
     docObj2.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:32pt }\n' + '.2{ font-size:34pt }\n' + '.3{ font-size:36pt }\n' +
     '.4{ font-size:38pt }\n' + '.5{ font-size:40pt }\n' + '.6{ font-size:42pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  }
  else{
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:44pt }\n' + '.2{ font-size:46pt }\n' + '.3{ font-size:48pt }\n' +
     '.4{ font-size:50pt }\n' + '.5{ font-size:52pt }\n' + '.6{ font-size:54pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
     docObj2.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:44pt }\n' + '.2{ font-size:46pt }\n' + '.3{ font-size:48pt }\n' +
     '.4{ font-size:50pt }\n' + '.5{ font-size:52pt }\n' + '.6{ font-size:54pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  }

  if(bcs_size<20)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:8pt }\n' + '.2{ font-size:10pt }\n' + '.3{ font-size:12pt }\n' +
     '.4{ font-size:14pt }\n' + '.5{ font-size:16pt }\n' + '.6{ font-size:18pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  else if(bcs_size<32)                                                           // Modify 2017.05.29 for test
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'p1 { font-size:20pt }\n' + 'p2 { font-size:22pt }\n' + 'p3 { font-size:24pt }\n' +
     'p4 { font-size:26pt }\n' + 'p5 { font-size:28pt }\n' + 'p6 { font-size:30pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  else if(bcs_size<44)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:32pt }\n' + '.2{ font-size:34pt }\n' + '.3{ font-size:36pt }\n' +
     '.4{ font-size:38pt }\n' + '.5{ font-size:40pt }\n' + '.6{ font-size:42pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  else
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.1{ font-size:44pt }\n' + '.2{ font-size:46pt }\n' + '.3{ font-size:48pt }\n' +
     '.4{ font-size:50pt }\n' + '.5{ font-size:52pt }\n' + '.6{ font-size:54pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');

//  bnum : �g��
//  cnum : ��
//  snum : �`
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }


  //For Setting Display Verses Number
  //if(parent.command.document.DVN.DVNumber[0].checked)
  //   disp_secs_a = "1";
  //if(parent.command.document.DVN.DVNumber[1].checked)
  //   disp_secs_a = "3";
  //if(parent.command.document.DVN.DVNumber[2].checked)
  //   disp_secs_a = "5";
  //if(parent.command.document.DVN.DVNumber[3].checked)
  //   disp_secs_a = "7";
  //if(parent.command.document.DVN.DVNumber[4].checked)
  //   disp_secs_a = "0";

  //disp_secs_a = "7"; // ���ΩT�w�ȡA����A�אּ�i�]�w



  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 ��@�����1�`�A+2 ��@�����2�`  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


//    var bname = profiles[line3].substring(0, profiles[line3].indexOf("^"));

      // �M�X��
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));

      // NKJV
//      var bname = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
//      var cname = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));
//      var sname = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));

      // NIV
//      var bname = profiles3[line3].substring(profiles3[line3].indexOf("%")+1, profiles3[line3].indexOf("^"));
//      var cname = profiles3[line3].substring(profiles3[line3].indexOf("^")+1, profiles3[line3].indexOf(":"));
//      var sname = profiles3[line3].substring(profiles3[line3].indexOf(":")+1, profiles3[line3].indexOf(" "));

//      var bcsname1 = bname + ' ��' + cname + '��' + ' ��' + sname + '�`' + '</ol>';
//      var bcsname2 = bname + ' ��' + cname + '�g' + ' ��' + sname + '�`' + '</ol>';

      var bcsname1 = bname + ' ��' + cname + '��' + '</ol>';
      var bcsname2 = bname + ' ��' + cname + '�g' + '</ol>';

      if(bcs_size==8||bcs_size==20||bcs_size==32||bcs_size==44){
         var bcsname1_1 = '<span class="1">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="1">' + bcsname2 + '</span>'; }

      if(bcs_size==10||bcs_size==22||bcs_size==34||bcs_size==46){
         var bcsname1_1 = '<span class="2">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="2">' + bcsname2 + '</span>'; }

      if(bcs_size==12||bcs_size==24||bcs_size==36||bcs_size==48){
         var bcsname1_1 = '<span class="3">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="3">' + bcsname2 + '</span>'; }

      if(bcs_size==14||bcs_size==26||bcs_size==38||bcs_size==50){
         var bcsname1_1 = '<span class="4">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="4">' + bcsname2 + '</span>'; }

      if(bcs_size==16||bcs_size==28||bcs_size==40||bcs_size==52){
         var bcsname1_1 = '<span class="5">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="5">' + bcsname2 + '</span>'; }

      if(bcs_size==18||bcs_size==30||bcs_size==42||bcs_size==54){
         var bcsname1_1 = '<span class="6">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="6">' + bcsname2 + '</span>'; }


      if(bcs_size==20){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p1>' + bcsname1 + '</p1>';
         var bcsname2_1 = '<p1>' + bcsname2 + '</p1>'; }

      if(bcs_size==22){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p2>' + bcsname1 + '</p2>';
         var bcsname2_1 = '<p2>' + bcsname2 + '</p2>'; }

      if(bcs_size==24){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p3>' + bcsname1 + '</p3>';
         var bcsname2_1 = '<p3>' + bcsname2 + '</p3>'; }

      if(bcs_size==26){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p4>' + bcsname1 + '</p4>';
         var bcsname2_1 = '<p4>' + bcsname2 + '</p4>'; }

      if(bcs_size==28){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p5>' + bcsname1 + '</p5>';
         var bcsname2_1 = '<p5>' + bcsname2 + '</p5>'; }

      if(bcs_size==30){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p6>' + bcsname1 + '</p6>';
         var bcsname2_1 = '<p6>' + bcsname2 + '</p6>'; }


      if(bname!="�ֽg") {
         //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
         docObj.writeln(bcsname1_1.fontcolor(bcs_color));
      }
      else {
         //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
         docObj.writeln(bcsname2_1.fontcolor(bcs_color));
      }

      var j=sname-1;

//      docObj.writeln('line1 = '+line1);
//      docObj.writeln('line2 = '+line2);
//      docObj.writeln('line3 = '+line3);
//      docObj.writeln('line4 = '+line4);
//      docObj.writeln('disp_secs = '+disp_secs);
//      docObj.writeln('disp_secs_a = '+disp_secs_a);

      for (var i = line3; i < line4 ; i++) { 
      var oneline = profiles[i].substring(profiles[i].indexOf(" "), profiles[i].length);       // �M�X��
      var oneline2 = profiles2[i].substring(profiles2[i].indexOf(" "), profiles2[i].length);   // NKJV
      var oneline3 = profiles3[i].substring(profiles3[i].indexOf(" "), profiles3[i].length);   // NIV
      var oneline4 = profiles4[i].substring(profiles4[i].indexOf(" "), profiles4[i].length);   // �f����
      var cname_1 = profiles[i].substring(profiles[i].indexOf("^")+1, profiles[i].indexOf(":"));

      j++;

      if(sec_size==8||sec_size==20||sec_size==32||sec_size==44){
         var oneline_1 = '<span class="1">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="1">' + j + '</span>';}

      if(sec_size==10||sec_size==22||sec_size==34||sec_size==46){
         var oneline_1 = '<span class="2">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="2">' + j + '</span>';}

      if(sec_size==12||sec_size==24||sec_size==36||sec_size==48){
         var oneline_1 = '<span class="3">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="3">' + j + '</span>';}

      if(sec_size==14||sec_size==26||sec_size==38||sec_size==50){
         var oneline_1 = '<span class="4">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="4">' + j + '</span>';}

      if(sec_size==16||sec_size==28||sec_size==40||sec_size==52){
         var oneline_1 = '<span class="5">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="5">' + j + '</span>';}

      if(sec_size==18||sec_size==30||sec_size==42||sec_size==54){
         var oneline_1 = '<span class="6">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="6">' + j + '</span>';}



      if(sec_size==20){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p1>' + oneline + '\n' + '</p1>';
         var oneline_2 = '<p1>' + oneline2 + '\n' + '</p1>';
         var oneline_3 = '<p1>' + oneline3 + '\n' + '</p1>';
         var oneline_4 = '<p1>' + oneline4 + '\n' + '</p1>';
         var sj = '<p1>' + j + '</p1>';}

      if(sec_size==22){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p2>' + oneline + '\n' + '</p2>';
         var oneline_2 = '<p2>' + oneline2 + '\n' + '</p2>';
         var oneline_3 = '<p2>' + oneline3 + '\n' + '</p2>';
         var oneline_4 = '<p2>' + oneline4 + '\n' + '</p2>';
         var sj = '<p2>' + j + '</p2>';}

      if(sec_size==24){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p3>' + oneline + '\n' + '</p3>';
         var oneline_2 = '<p3>' + oneline2 + '\n' + '</p3>';
         var oneline_3 = '<p3>' + oneline3 + '\n' + '</p3>';
         var oneline_4 = '<p3>' + oneline4 + '\n' + '</p3>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==26){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p4>' + oneline + '\n' + '</p4>';
         var oneline_2 = '<p4>' + oneline2 + '\n' + '</p4>';
         var oneline_3 = '<p4>' + oneline3 + '\n' + '</p4>';
         var oneline_4 = '<p4>' + oneline4 + '\n' + '</p4>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==28){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p5>' + oneline + '\n' + '</p5>';
         var oneline_2 = '<p5>' + oneline2 + '\n' + '</p5>';
         var oneline_3 = '<p5>' + oneline3 + '\n' + '</p5>';
         var oneline_4 = '<p5>' + oneline4 + '\n' + '</p5>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==30){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p6>' + oneline + '\n' + '</p6>';
         var oneline_2 = '<p6>' + oneline2 + '\n' + '</p6>';
         var oneline_3 = '<p6>' + oneline3 + '\n' + '</p6>';
         var oneline_4 = '<p6>' + oneline4 + '\n' + '</p6>';
         var sj = '<p6>' + j + '</p6>';}


      //var oneline_1_1 = '<table><tr><td valign="top">'+'�M�X��'+'&nbsp'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      //var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      //var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

//      var oneline_1_1 = '<table><tr><td valign="top">'+'�M�X��'+'&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
//      var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
//      var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

      var oneline_1_1 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      var oneline_1_2 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      var oneline_1_3 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';
      var oneline_1_4 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_4+'</td></tr></table>';


      if(cname==cname_1){

         //if(parent.command.document.BV.BibleVersion[3].checked){   // ��������

         //   var oneline_1_1_v = '<table><tr><td valign="top">'+ '�M�X��' +'</td></tr></table>';
         //   docObj.writeln(oneline_1_1_v);
         //   docObj.writeln(oneline_1_1);

         //   var oneline_1_4_v = '<table><tr><td valign="top">'+ '�f����Ķ��' +'</td></tr></table>';
         //   docObj.writeln(oneline_1_4_v);
         //   docObj.writeln(oneline_1_4);

         //   var oneline_1_2_v = '<table><tr><td valign="top">'+ 'NKJV' +'</td></tr></table>';
         //   docObj2.writeln(oneline_1_2_v);
         //   docObj2.writeln(oneline_1_2);

         //   var oneline_1_3_v = '<table><tr><td valign="top">'+ 'NIV' +'</td></tr></table>';
         //   docObj2.writeln(oneline_1_3_v);
         //   docObj2.writeln(oneline_1_3);

         //}
         //else{

            if(BibleVersion_Disp==3){        // �M�X�� & �f����Ķ��

              var oneline_1_1_v = '<table><tr><td valign="top">'+ '�M�X��' +'</td></tr></table>';
              docObj.writeln(oneline_1_1_v);
              docObj.writeln(oneline_1_1);

              var oneline_1_4_v = '<table><tr><td valign="top">'+ '�f����Ķ��' +'</td></tr></table>';
              docObj.writeln(oneline_1_4_v);
              docObj.writeln(oneline_1_4);

            }
            else
            {
               docObj.writeln(oneline_1_1);
            }

            //docObj.writeln(oneline_1_1);

            //if(parent.command.document.BV.BibleVersion[0].checked)
            //   docObj2.writeln(oneline_1_2);
            //if(parent.command.document.BV.BibleVersion[1].checked)
            //   docObj2.writeln(oneline_1_3);
            //if(parent.command.document.BV.BibleVersion[2].checked)
            //   docObj2.writeln(oneline_1_4);
         //}
      }


      }

  docObj.writeln('\n</BODY>\n</HTML>');
  //docObj2.writeln('\n</BODY>\n</HTML>');
  docObj.close();
  //docObj2.close();
  //docObj_h.writeln('\n</BODY>\n</HTML>');
  //docObj_h.close();
  nowbook = bnum;
  nowchapter = cnum;
  nowsection = snum;
}

function writehead(word1) {
  docObj_h.open();

  if(head_size<42)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'h1{ font-size:30pt }\n' + 'h2{ font-size:32pt }\n' + 'h3{ font-size:34pt }\n' +
     'h4{ font-size:36pt }\n' + 'h5{ font-size:38pt }\n' + 'h6{ font-size:40pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else if(head_size<54)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'h1{ font-size:42pt }\n' + 'h2{ font-size:44pt }\n' + 'h3{ font-size:46pt }\n' +
     'h4{ font-size:48pt }\n' + 'h5{ font-size:50pt }\n' + 'h6{ font-size:52pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else if(head_size<66)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'h1{ font-size:54pt }\n' + 'h2{ font-size:56pt }\n' + 'h3{ font-size:58pt }\n' +
     'h4{ font-size:60pt }\n' + 'h5{ font-size:62pt }\n' + 'h6{ font-size:64pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'h1{ font-size:66pt }\n' + 'h2{ font-size:68pt }\n' + 'h3{ font-size:70pt }\n' +
     'h4{ font-size:72pt }\n' + 'h5{ font-size:74pt }\n' + 'h6{ font-size:76pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');


  if(head_size==30||head_size==42||head_size==54||head_size==66)
     var word_1 = '<center><h1><u><b>' + word1 + '</b></u></h1></ol></center>';

  if(head_size==32||head_size==44||head_size==56||head_size==68)
     var word_1 = '<center><h2><u><b>' + word1 + '</b></u></h2></ol></center>';

  if(head_size==34||head_size==46||head_size==58||head_size==70)
     var word_1 = '<center><h3><u><b>' + word1 + '</b></u></h3></ol></center>';

  if(head_size==36||head_size==48||head_size==60||head_size==72)
     var word_1 = '<center><h4><u><b>' + word1 + '</b></u></h4></ol></center>';

  if(head_size==38||head_size==50||head_size==62||head_size==74)
     var word_1 = '<center><h5><u><b>' + word1 + '</b></u></h5></ol></center>';

  if(head_size==40||head_size==52||head_size==64||head_size==76)
     var word_1 = '<center><h6><u><b>' + word1 + '</b></u></h6></ol></center>';

  docObj_h.writeln(word_1.fontcolor(head_color));

  docObj_h.writeln('\n</BODY>\n</HTML>');
  docObj_h.close();
}

function writebody(word1) {
  docObj.open();

  if(sing_size<42)
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'h1{ font-size:30pt }\n' + 'h2{ font-size:32pt }\n' + 'h3{ font-size:34pt }\n' +
     'h4{ font-size:36pt }\n' + 'h5{ font-size:38pt }\n' + 'h6{ font-size:40pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else if(sing_size<54)
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'h1{ font-size:42pt }\n' + 'h2{ font-size:44pt }\n' + 'h3{ font-size:46pt }\n' +
     'h4{ font-size:48pt }\n' + 'h5{ font-size:50pt }\n' + 'h6{ font-size:52pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'h1{ font-size:54pt }\n' + 'h2{ font-size:56pt }\n' + 'h3{ font-size:58pt }\n' +
     'h4{ font-size:60pt }\n' + 'h5{ font-size:62pt }\n' + 'h6{ font-size:64pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');

  if(sing_size==30||sing_size==42||sing_size==54){
     var word_1 = '<center><h1><b>' + word1 + '</b></h1></ol></center>';
     var word_2 = '<center><h1><b>' + "�� ��" + '</b></h1></ol></center>'; }

  if(sing_size==32||sing_size==44||sing_size==56){
     var word_1 = '<center><h2><b>' + word1 + '</b></h2></ol></center>';
     var word_2 = '<center><h2><b>' + "�� ��" + '</b></h2></ol></center>'; }

  if(sing_size==34||sing_size==46||sing_size==58){
     var word_1 = '<center><h3><b>' + word1 + '</b></h3></ol></center>';
     var word_2 = '<center><h3><b>' + "�� ��" + '</b></h3></ol></center>'; }

  if(sing_size==36||sing_size==48||sing_size==60){
     var word_1 = '<center><h4><b>' + word1 + '</b></h4></ol></center>';
     var word_2 = '<center><h4><b>' + "�� ��" + '</b></h4></ol></center>'; }

  if(sing_size==38||sing_size==50||sing_size==62){
     var word_1 = '<center><h5><b>' + word1 + '</b></h5></ol></center>';
     var word_2 = '<center><h5><b>' + "�� ��" + '</b></h5></ol></center>'; }

  if(sing_size==40||sing_size==52||sing_size==64){
     var word_1 = '<center><h6><b>' + word1 + '</b></h6></ol></center>';
     var word_2 = '<center><h6><b>' + "�� ��" + '</b></h6></ol></center>'; }

  docObj.writeln(word_2.fontcolor(sing_color));
  docObj.writeln(word_1.fontcolor(sing_color));

  docObj.writeln('\n</BODY>\n</HTML>');
  docObj.close();
}

function writebody2(word1) {
  docObj.open();

     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     'h1{ font-size:30pt }\n' + 'h2{ font-size:32pt }\n' + 'h3{ font-size:34pt }\n' +
     'h4{ font-size:36pt }\n' + 'h5{ font-size:38pt }\n' + 'h6{ font-size:40pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');


  docObj.writeln(word1.fontcolor(sing_color));
//  docObj.writeln(word_1.fontcolor(sing_color));

  docObj.writeln('\n</BODY>\n</HTML>');
  docObj.close();
}

function pray() {
  docObj.open();
  docObj_h.open();


     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.30{ font-size:30pt }\n' + '.32{ font-size:32pt }\n' + '.34{ font-size:34pt }\n' +
     '.36{ font-size:36pt }\n' + '.38{ font-size:38pt }\n' + '.40{ font-size:40pt }\n' +
     '.42{ font-size:42pt }\n' + '.44{ font-size:44pt }\n' + '.46{ font-size:46pt }\n' +
     '.48{ font-size:48pt }\n' + '.50{ font-size:50pt }\n' + '.52{ font-size:52pt }\n' +
     '.54{ font-size:54pt }\n' + '.56{ font-size:56pt }\n' + '.58{ font-size:58pt }\n' +
     '.60{ font-size:60pt }\n' + '.62{ font-size:62pt }\n' + '.64{ font-size:64pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');

     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
     '.30{ font-size:30pt }\n' + '.32{ font-size:32pt }\n' + '.34{ font-size:34pt }\n' +
     '.36{ font-size:36pt }\n' + '.38{ font-size:38pt }\n' + '.40{ font-size:40pt }\n' +
     '.42{ font-size:42pt }\n' + '.44{ font-size:44pt }\n' + '.46{ font-size:46pt }\n' +
     '.48{ font-size:48pt }\n' + '.50{ font-size:50pt }\n' + '.52{ font-size:52pt }\n' +
     '.54{ font-size:54pt }\n' + '.56{ font-size:56pt }\n' + '.58{ font-size:58pt }\n' +
     '.60{ font-size:60pt }\n' + '.62{ font-size:62pt }\n' + '.64{ font-size:64pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');


  if(pray_size==30){
    var word_0 = '<span class="30"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="30">'; }

  if(pray_size==32){
    var word_0 = '<span class="32"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="32">'; }

  if(pray_size==34){
    var word_0 = '<span class="34"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="34">'; }

  if(pray_size==36){
    var word_0 = '<span class="36"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="36">'; }

  if(pray_size==38){
    var word_0 = '<span class="38"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="38">'; }

  if(pray_size==40){
    var word_0 = '<span class="40"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="40">'; }

  if(pray_size==42){
    var word_0 = '<span class="42"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="42">'; }

  if(pray_size==44){
    var word_0 = '<span class="44"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="44">'; }

  if(pray_size==46){
    var word_0 = '<span class="46"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="46">'; }

  if(pray_size==48){
    var word_0 = '<span class="48"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="48">'; }

  if(pray_size==50){
    var word_0 = '<span class="50"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="50">'; }

  if(pray_size==52){
    var word_0 = '<span class="52"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="52">'; }

  if(pray_size==54){
    var word_0 = '<span class="54"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="54">'; }

  if(pray_size==56){
    var word_0 = '<span class="56"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="56">'; }

  if(pray_size==58){
    var word_0 = '<span class="58"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="58">'; }

  if(pray_size==60){
    var word_0 = '<span class="60"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="60">'; }

  if(pray_size==62){
    var word_0 = '<span class="62"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="62">'; }

  if(pray_size==64){
    var word_0 = '<span class="64"><font color=ffffff><b>'+"ë�i�覡"+'</b></font></span>';
    var word_a = '<table class="64">'; }

  var word_b = '<tr><td><sup><font color=ffffff>'+"�}�l�ɰ�G"+'</font></sup></td>'+'<td><font color=fff000>'+"�^�D�C�q�t�Wë�i" + '</font></td></tr>';
  var word_d = '<tr><td><sup><font color=ffffff>'+"���Ъ���G"+'</font></sup></td>'+'<td><font color=fff000>'+"���Q���ȡA�g���D�C�q" + '</font></td></tr>';
  var word_f = '<tr><td><sup><font color=ffffff>'+"�����ɰ�G"+'</font></sup></td>'+'<td><font color=fff000>'+"����" + '</font></td></tr></table>';


     var word_01 = '<center>' + word_0 + '</center>';
     var word_a1 = '<center>' + word_a;
     var word_b1 = word_b ;
     var word_d1 = word_d ;
     var word_f1 = word_f + '</center>'; 

  docObj_h.writeln(word_01);
  docObj.writeln(word_a1);
  docObj.writeln(word_b1);
  docObj.writeln(word_d1);
  docObj.writeln(word_f1);


  docObj.writeln('\n</BODY>\n</HTML>');
  docObj.close();
  docObj_h.writeln('\n</BODY>\n</HTML>');
  docObj_h.close();
}


// Determine the type of search, and make
// sure the user has entered something
function validate(entry) {
  if (entry.charAt(0) == "+") {
    entry = entry.substring(1,entry.length);
    searchType = SEARCHALL;
    }
  else if (entry.substring(0,4) == "url:") {
    entry = entry.substring(5,entry.length);
    searchType = SEARCHURL;
    }
  else { searchType = SEARCHANY; }
  while (entry.charAt(0) == ' ') {
    entry = entry.substring(1,entry.length);
    document.search.query.value = entry;
    }
  while (entry.charAt(entry.length - 1) == ' ') {
    entry = entry.substring(0,entry.length - 1);
    document.search.query.value = entry;
    }
/*  if (entry.length < 3) {
    alert("You cannot search strings that small. Elaborate a little.");
    document.search.query.focus();
    return;
    }
*/  convertString(entry);
  }

// Put the search terms in an array and
// and call appropriate search algorithm
function convertString(reentry) {
  var searchArray = reentry.split(" ");
  if (searchType == (SEARCHANY | SEARCHALL)) { requireAll(searchArray); }
  else { allowAny(searchArray); }
  }

// Define a function to perform a search that requires
// a match of any of the terms the user provided
function allowAny(t) {
  var findings = new Array(0);

  nowbook = 0;
  nowchapter = 0;
  for (i = 0; i < profiles.length; i++) {
    var oneline = profiles[i];
    var ok = false;
    var compareElement  = profiles[i].toUpperCase();
    if(searchType == SEARCHANY) { var refineElement  = compareElement.substring(0,compareElement.indexOf('|HTTP')); }
    else { var refineElement = compareElement.substring(compareElement.indexOf('|HTTP'), compareElement.length); }
    for (j = 0; j < t.length; j++) {
      var compareString = t[j];
      var temp = "";

//      if (profiles[i].indexOf(document.search.query.value) != -1) {
      if (compareElement.indexOf(compareString) != -1) {
      	ok = true;
        while(chapter_lines[book_chapters[nowbook]+nowchapter+1] < i) {
       	  nowchapter++;
          if(nowchapter + book_chapters[nowbook] > book_chapters[nowbook+1]) {
      	    nowchapter = 0;
      	    nowbook++;
          }
        }
        findbook[findings.length] = nowbook;
        findchapter[findings.length] = nowchapter;

        while(oneline.indexOf(compareString) != -1) {
          temp += oneline.substring(0, oneline.indexOf(compareString)) + 
            '<font color="ff0000">' + compareString + '</font>';
        
          oneline = oneline.substring(oneline.indexOf(compareString)+compareString.length, oneline.length);
        }
        temp += oneline;
        oneline = temp;
//        findings[findings.length] = profiles[i];
//        break;
        }
      }
      if(ok)
        findings[findings.length] = oneline;
    }
  verifyManage(findings);
  }

// Define a function to perform a search that requires
// a match of all terms the user provided
function requireAll(t) {
  var findings = new Array();
  var k = 0;

  nowbook = 0;
  nowchapter = 0;
  for (i = 0; i < profiles.length; i++) {
    var allConfirmation = true;
    var allString       = profiles[i];
    var refineAllString = allString.substring(0,allString.indexOf(' '));
    for (j = 0; j < t.length; j++) {
      var allElement = t[j];
      if (refineAllString.indexOf(allElement) == -1) {
        allConfirmation = false;
        continue;
        }
      }
    if (allConfirmation) {
      while(chapter_lines[book_chapters[nowbook]+nowchapter+1] < i) {
      	nowchapter++;
      	if(nowchapter + book_chapters[nowbook] > book_chapters[nowbook+1]) {
      	  nowchapter = 0;
      	  nowbook++;
      	}
      }
      findbook[k] = nowbook;
      findchapter[k++] = nowchapter;
      findings[findings.length] = profiles[i];
//      docObj.writeln('k = ' + k + ' findbook[k] = ' + findbook[k] + 'findchapter[k] = ' + findchapter[k] + 
//      'findings[findings.length] = ' + findings[findings.length-1] + ' <br />\n');
      }
    }
  verifyManage(findings);
  }

// Determine whether the search was successful
// If so print the results; if not, indicate that, too
function verifyManage(resultSet) {
  if (resultSet.length == 0) { noMatch(); }
  else {
    copyArray = resultSet;
    formatResults(copyArray, currentMatch, showMatches);
    }
  }

// Define a function that indicates that the returned no results
function noMatch() {
  docObj.open();
  docObj.writeln('<HTML><HEAD>' + 
    '<meta http-equiv="Content-Type" content="text/html; charset=big5">' +
    '<TITLE>Search Results</TITLE></HEAD>' +
    '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">' +
//    profiles[0] +
    '<TABLE WIDTH=90% BORDER=0 ALIGN=CENTER><TR><TD VALIGN=TOP><FONT FACE=Arial><B><DL>' +
    '<HR NOSHADE WIDTH=100%>"' + document.search.query.value +
    '" returned no results.<HR NOSHADE WIDTH=100%></TD></TR></TABLE></BODY></HTML>');
  docObj.close();
  document.search.query.select();
  }

// Define a function to print the results of a successful search
function formatResults(results, reference, offset) {
  var currentRecord = (results.length < reference + offset ? results.length : reference + offset);


  // For Setting Search's Verse Font Size
  if(parent.command.document.SVS.SearchVerseSize[0].checked)
     search_sec_size = "14";
  if(parent.command.document.SVS.SearchVerseSize[1].checked)
     search_sec_size = "16";
  if(parent.command.document.SVS.SearchVerseSize[2].checked)
     search_sec_size = "18";
  if(parent.command.document.SVS.SearchVerseSize[3].checked)
     search_sec_size = "20";
  if(parent.command.document.SVS.SearchVerseSize[4].checked)
     search_sec_size = "22";
  if(parent.command.document.SVS.SearchVerseSize[5].checked)
     search_sec_size = "24";

  docObj.open();
  docObj.writeln('<HTML>\n<HEAD>\n<TITLE>Search Results</TITLE>\n' + 
  '<style type="text/css">\n' + 'body{font-family:�з���}\n' +
  'p1 { font-size:14pt }\n' + 'p2 { font-size:16pt }\n' + 'p3 { font-size:18pt }\n' +
  'p4 { font-size:20pt }\n' + 'p5 { font-size:22pt }\n' + 'p6 { font-size:24pt }\n' +
  '</style>\n' +
  '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
    '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');

  docObj.writeln('<script>\n' +
                 'function query_open(fb,fc,fs)\n' +
                 '{\n' +
                 '  if(parent.command.win1.closed)\n' +
                 '     alert("�Х�����d�߳s���}�ҩ�->�s�����A�ë� <�]�w�d�߳s��> �s!!");\n' +
                 '  else\n' +
                 '   { parent.command.win1.frames[0].readchapter(fb,fc,fs);\n' +
                 '     parent.command.win1.focus();return false; }\n' +
                 '}\n' +
                 '<\/script>\n');  

  docObj.writeln('Search Query: <I>' + parent.command.document.search.query.value + '</I><BR>\n' +
    'Search Results: <I>' + (reference + 1) + ' - ' +
    currentRecord + ' of ' + results.length + '</I><br />' +
    '\n\n<!-- Begin result set //-->\n\n\t<UL>');

  var open_win_l = eval(open_win);

//  if (open_win_l==2)
//     docObj.writeln('�� ���I��d�ߵ��G�A�Х�'+'<a href="" onClick="open_win1(); return false;">' + '�}�ҷs����' + '</a>\n '+
//                    '�A�d�ߵ��G�N��ܩ�s�}�ҵ������A���s�d�߽Э��}�s���� ��');  

  if (searchType == SEARCHURL) {
    for (var i = reference; i < currentRecord; i++) {
//      var divide = results[i].split("|");
      docObj.writeln('\t<li>' + results[i] + '</li><P />\n');
      }
    }
  else {
//    docObj.writeln('findbook.length = ' + findbook.length + ' <br /> \n');

      
    for (var i = reference; i < currentRecord; i++) {
//      var divide = results[i].split('|');
      var oneline = results[i].substring(results[i].indexOf(" "), results[i].length);
      //var oneline_S = '<p1>' + oneline + '</p1>';

      var bnum_1 = results[i].substring(0, results[i].indexOf("%"));
      var bname = results[i].substring(results[i].indexOf("%")+1, results[i].indexOf("^"));
      var cname = results[i].substring(results[i].indexOf("^")+1, results[i].indexOf(":"));
      var sname = results[i].substring(results[i].indexOf(":")+1, results[i].indexOf(" "));

      var temp = bname + ' ' + cname + ':' + sname ;

      if(search_sec_size==14){                                                        // Add 2017.05.29 for test
         var temp_S = '<p1>' + temp + '</p1>';
         var oneline_S = '<p1>' + oneline + '</p1>';
      }

      if(search_sec_size==16){                                                        // Add 2017.05.29 for test
         var temp_S = '<p2>' + temp + '</p2>';
         var oneline_S = '<p2>' + oneline + '</p2>';
      }

      if(search_sec_size==18){                                                        // Add 2017.05.29 for test
         var temp_S = '<p3>' + temp + '</p3>';
         var oneline_S = '<p3>' + oneline + '</p3>';
      }

      if(search_sec_size==20){                                                        // Add 2017.05.29 for test
         var temp_S = '<p4>' + temp + '</p4>';
         var oneline_S = '<p4>' + oneline + '</p4>';
      }

      if(search_sec_size==22){                                                        // Add 2017.05.29 for test
         var temp_S = '<p5>' + temp + '</p5>';
         var oneline_S = '<p5>' + oneline + '</p5>';
      }

      if(search_sec_size==24){                                                        // Add 2017.05.29 for test
         var temp_S = '<p6>' + temp + '</p6>';
         var oneline_S = '<p6>' + oneline + '</p6>';
      }



      //var temp_S = '<p1>' + temp + '</p1>';
      var findb = bnum_1;
      var findchap = cname - 1;
      var findsec = sname;

//      var bcsname2 = bname + ' ��' + cname + '�g' + ' ��' + sname + '�`' + '</ol>';

//      var temp = results[i].substring(0, results[i].indexOf(" "));

//         alert("open new window!!");
//      else

      if (open_win_l==2){
         docObj.writeln('<li><a href="" onClick="query_open('+findb+','+findchap+','+findsec+');return false;">' + temp_S + '</a> ' + oneline_S + '</li>\n');
         }
      else
         docObj.writeln('<li><a href="" onClick="parent.command.readchapter(' + findb+ ', ' + findchap+ ',' + findsec+ '); return false;">' + temp_S + '</a> ' + oneline_S + '</li>\n');

//      docObj.writeln('\t<li>' + oneline + '</li><P />\n');
      }
    }
  docObj.writeln('\n\t</UL>\n\n<!-- End result set //-->\n\n');
//  prevNextResults(results.length, reference, offset);
//  docObj.writeln('<HR NOSHADE WIDTH=100%>' +
  docObj.writeln('\n</BODY>\n</HTML>');
  docObj.close();
//  document.search.query.select();
  }

// Define a function to dynamically display Prev and Next buttons
function prevNextResults(ceiling, reference, offset) {
  docObj.writeln('<CENTER><FORM>');
  if(reference > 0) {
    docObj.writeln('<INPUT TYPE=BUTTON VALUE="Prev ' + offset + ' Results" ' +
      'onClick="parent.command.formatResults(parent.command.copyArray, ' +
      (reference - offset) + ', ' + offset + ')">');
    }
  if(reference >= 0 && reference + offset < ceiling) {
    var trueTop = ((ceiling - (offset + reference) < offset) ? ceiling - (reference + offset) : offset);
    var howMany = (trueTop > 1 ? "s" : "");
    docObj.writeln('<INPUT TYPE=BUTTON VALUE="Next ' + trueTop + ' Result' + howMany + '" ' +
      'onClick="parent.command.formatResults(parent.command.copyArray, ' +
      (reference + offset) + ', ' + offset + ')">');
    }
  docObj.writeln('</CENTER>');
  }

function open_win1()
{
//   win1=window.open('index.html','fullscreen1','fullscreen,scrollbars');
   win1=window.open('index.html');
}

