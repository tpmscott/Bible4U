// for mark line
// V2
// Use idb.min.js


var VersML = [] ;   // for verse Mark Lines
var VersML_B = [] ;
var VersML_C = [] ;
var VersML_V = [] ;
var VersML_T = [] ;

var VersML_tmp_B = [] ;
var VersML_tmp_C = [] ;
var VersML_tmp_V = [] ;
var VersML_tmp_T = [] ;


var Book_Verse_Count_Value = 25;  // for Bible4U set 25, Bible2U set 13, Test set 5



let db;
let dbT2;  // New for V4


async function init_Bible4U_DB() {

  //db = await idb.openDb('booksDb', 1, db => {
  //  db.createObjectStore('books', {keyPath: 'name'});   // mean : name is primary key
  //  ObjectStore.createIndex('color_no', 'color_no', { unique: false });
  //  ObjectStore.createIndex('book_no', 'book_no', { unique: false });
  //  ObjectStore.createIndex('chap_no', 'chap_no', { unique: false });
  //  ObjectStore.createIndex('vers_no', 'vers_no', { unique: false });
  //});

   // Declare Database     
   // Need to have a same list with V8

     db = new Dexie('booksDb');
     db.version(0.1).stores({
         books: 'name'
     });

     dbT2 = new Dexie('books_Test2Db');   // New for V4
     dbT2.version(1).stores({
         books: 'name,date'
     });
     dbT2.version(2).stores({      // New for V7
         books: 'name,date',
         ChapNote: 'name,date'
     });
     dbT2.version(3).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name'
     });
     dbT2.version(4).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name',
         Attendance: 'Record'
     });
     dbT2.version(5).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Attendance: 'Record'
     });
     dbT2.version(6).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order'
     });
     dbT2.version(7).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: null // Will drop the table, 
                             // when using clear or delete, the deleted ++CNo will be skiped
                             // but using null to drop table can start again
     });
     dbT2.version(8).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order'
     });
     dbT2.version(9).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No'     
     });
     dbT2.version(10).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: null     
     });
     dbT2.version(11).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No'     
     });
     dbT2.version(12).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name'     
     });
     dbT2.version(13).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No'     
     });
     dbT2.version(14).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order'     
     });
     dbT2.version(15).stores({      // New for V9
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order'     
     });
     dbT2.version(16).stores({      // New for V9
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob'     
     });
     dbT2.version(17).stores({      // New for V11
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker'     
     });
     dbT2.version(18).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses'     
     });
     dbT2.version(19).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords'     
     });
     dbT2.version(20).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords',
         Pictures: 'ID, *MainVerses'       
     });
     dbT2.version(21).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords',
         Pictures: 'ID, P_Name, *MainVerses'       
     });
     dbT2.version(22).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords',
         Pictures: 'ID, P_Name, *MainVerses',
         Service_Record: 'ID_1,ID_2'      // ID_1 : 202009261 , 202009262 , 202009253 
                                          // ID_2 : 20200926M , 20200926A , 20200925E   
     });
     dbT2.version(23).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords',
         Pictures: 'ID, P_Name, *MainVerses',
         Service_Record: 'ID_1,ID_2',
         Comparing_Db_1: 'CNo',
         Comparing_Db_2: 'CNo'
     });
     dbT2.version(24).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName,Member',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords',
         Pictures: 'ID, P_Name, *MainVerses',
         Service_Record: 'ID_1,ID_2',
         Comparing_Db_1: 'CNo',
         Comparing_Db_2: 'CNo'
     });
     dbT2.version(25).stores({      // New for V13
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName,Member',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords',
         Pictures: 'ID, P_Name, *MainVerses',
         Service_Record: 'ID_1,ID_2',
         Comparing_Db_1: 'CNo',
         Comparing_Db_2: 'CNo',
         Bible_Db_1: 'Verse_Content'
     });


   // End of Declare Database


}


async function booksDb_to_books_Test2Db() {  // New for V4

   let Verse_db = await db.books.toArray();

   let Verse_dbT2 = await dbT2.books.toArray();

   if (Verse_db) {

      for (i = 0; i < Verse_db.length; i++) {

         arg_db = Verse_db[i].name;

         if (Verse_dbT2) {

            for (j = 0; j < Verse_dbT2.length; j++) {  // Check exist

               var Same_F = 0; // 0 mean not exist, 1 mean exist

               arg_dbT2 = Verse_dbT2[j].name;

               if(arg_db == arg_dbT2) {

                  Same_F = 1;

               }

            }  // End of for (j = 0;

         } // End of if (Verse_dbT2)

         if(Same_F == 0) {

            let name = Verse_db[i].name;
            let color_no = Verse_db[i].color_no;
            let book_no = Verse_db[i].book_no;
            let chap_no = Verse_db[i].chap_no;
            let vers_no = Verse_db[i].vers_no;
            let date = '20200301';
            //let date = Verse_db[i].date;
            //let date = ML_Date();

            dbT2.books.add({name,color_no, book_no, chap_no, vers_no, date });

         }


      } // End of for (i = 0;

   }

}  // End of async function booksDb_to_books_Test2Db()

function ML_Date() {  // New for V4

   var d = new Date();
   var Y = d.getFullYear();
   var M = d.getMonth() + 1;
   var D = d.getDate();
   //var h = d.getHours();
   //var m = d.getMinutes();

   //var M_Str = M.toString();

   //if(M_Str=='0') M_Str = '00';
   if(M=='1') M = '01';
   if(M=='2') M = '02';
   if(M=='3') M = '03';
   if(M=='4') M = '04';
   if(M=='5') M = '05';
   if(M=='6') M = '06';
   if(M=='7') M = '07';
   if(M=='8') M = '08';
   if(M=='9') M = '09';


   //var D_Str = D.toString();

   //if(M_Str=='0') M_Str = '00';
   if(D=='1') D = '01';
   if(D=='2') D = '02';
   if(D=='3') D = '03';
   if(D=='4') D = '04';
   if(D=='5') D = '05';
   if(D=='6') D = '06';
   if(D=='7') D = '07';
   if(D=='8') D = '08';
   if(D=='9') D = '09';

   var Date_Str = Y.toString() + M.toString() + D.toString() ;

   return Date_Str;

}  // End of function ML_Date()




   // Declare Database

   //  var db = new Dexie('booksDb');
   //  db.version(0.1).stores({
   //      books: 'name'
   //  });

   // End of Declare Database



    async function get2(arg1) {  // arg1:key
      return await idbKeyval.get(arg1);
    }

    async function get3(arg1) {  // arg1:key, for Mark_Line_Records (table)

       let tx = db.transaction('books');
       let MLRStore = tx.objectStore('books');

       let MLR_tmp = await MLRStore.get(arg1);  // get() using primary key as parameter

       if (MLR_tmp) {

          var MLR_V_Color = MLR_tmp.color_no;

       }
       else {

          var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       }

       return MLR_V_Color;  

       //return await idbKeyval.get(arg1);
    }


    async function get4(arg1) {  // arg1:key, for Mark_Line_Records (table)

       let Verse = await db.books.get(arg1);

       //let tx = db.transaction('books');
       //let MLRStore = tx.objectStore('books');

       //let MLR_tmp = await MLRStore.get(arg1);  // get() using primary key as parameter

       if (Verse) {

          var MLR_V_Color = Verse.color_no;       

       }
       else {

          var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       }

       //if (MLR_tmp) {

       //   var MLR_V_Color = MLR_tmp.color_no;

       //}
       //else {

       //   var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       //}

       return MLR_V_Color;  

       //return await idbKeyval.get(arg1);
    }  // End of function get4(arg1)

    async function get5(arg1) {  // arg1:key, for Mark_Line_Records (table)  , // New for V4

       let Verse = await dbT2.books.get(arg1);


       if (Verse) {

          var MLR_V_Color = Verse.color_no;       

       }
       else {

          var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       }


       return MLR_V_Color;  

    }  // End of function get5(arg1)
    
    async function set2(arg1,arg2) {  // arg1:key, arg2:value
      await idbKeyval.set(arg1, arg2);
    }

    async function set3(arg1,arg2,arg3,arg4,arg5) {  // arg1:key, arg2:value, for Mark_Line_Records (table)
    //async function set3(arg1,arg2) {  // arg1:key, arg2:value, for Mark_Line_Records (table)

       let name = arg1;
       let color_no = arg2;
       let book_no = arg3;
       let chap_no = arg4;
       let vers_no = arg5;

       let tx = db.transaction('books', 'readwrite');

       try {
         await tx.objectStore('books').add({name, color_no, book_no, chap_no, vers_no});
         //await tx.objectStore('Mark_Line_Records').add({ML_Verse, V_Color});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
           //await addBook();
         } else {
           throw err;
         }
       }

       //await idbKeyval.set(arg1, arg2);
    }

    async function set4(arg1,arg2,arg3,arg4,arg5) {  // arg1:key, arg2:value, for Mark_Line_Records (table)
    //async function set3(arg1,arg2) {  // arg1:key, arg2:value, for Mark_Line_Records (table)

       let name = arg1;
       let color_no = arg2;
       let book_no = arg3;
       let chap_no = arg4;
       let vers_no = arg5;

       //let tx = db.transaction('books', 'readwrite');

       try {

         db.books.add({name,color_no, book_no, chap_no, vers_no});

         //await tx.objectStore('books').add({name, color_no, book_no, chap_no, vers_no});
         //await tx.objectStore('Mark_Line_Records').add({ML_Verse, V_Color});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
           //await addBook();
         } else {
           throw err;
         }
       }

       //await idbKeyval.set(arg1, arg2);
    }  // End of function set4(arg1,arg2,arg3,arg4,arg5)


    async function set5(arg1,arg2,arg3,arg4,arg5) {  // arg1:key, arg2:value, for Mark_Line_Records (table)
                                                     // New for V4

       let name = arg1;
       let color_no = arg2;
       let book_no = arg3;
       let chap_no = arg4;
       let vers_no = arg5;
       let date = ML_Date();

       try {

         dbT2.books.add({name,color_no, book_no, chap_no, vers_no, date});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
         } else {
           throw err;
         }
       }

    }  // End of function set5(arg1,arg2,arg3,arg4,arg5) 


    async function del2(arg1) {  // arg1:key
      await idbKeyval.delete(arg1);
    }

    async function del3(arg1) {  // arg1:key,  for Mark_Line_Records (table)

       let tx = db.transaction('books', 'readwrite');
       await tx.objectStore('books').delete(arg1);

       //await idbKeyval.delete(arg1);
    }

    async function del4(arg1) {  // arg1:key,  for Mark_Line_Records (table)

       db.books.delete(arg1);

    }

    async function del5(arg1) {  // arg1:key,  for Mark_Line_Records (table)  // New for V4

       dbT2.books.delete(arg1);

    }

    //var Mark_Line_Key="";
    //var Mark_Line_Value="";

    async function Set_Mark_Line() {  // Set Mark Line 

       //var key = 'Gen 1:5';
       //var value = 'G';

       await set2(Mark_Line_Key,Mark_Line_Value);

       //log(`Key ${key} was saved with value ${value}.`);

    }

    async function Get_Mark_Line() {  // Get Mark Line 

       //var key = 'Gen 1:5';

       Mark_Line_Value = await get2(Mark_Line_Key);

       //log(`Key ${key} was read with value ${value}.`);

    }


async function check_n_set_mark_line(arg1,arg2,arg3,arg4) {


   // Reading from Indexeddb

   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   var Mark_Line_Value = await get5(Mark_Line_String);  // New for V4

   //var Mark_Line_Value = await get4(Mark_Line_String);

   //var Mark_Line_Value = await get3(Mark_Line_String);

   //var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   //if(arg1==1 && arg2==20 && arg3==15){  // Exo 21:15 , test
   if(Mark_Line_Value=='1'){  // Exo 21:15 , test

      document.getElementById(arg4).style.color = "red";

   } 
   else {

      document.getElementById(arg4).style.color = "black";

   }

}


async function check_n_set_mark_line_2(arg1,arg2,arg3,arg4) {


   // Reading from Indexeddb

   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   var Mark_Line_Value = await get5(Mark_Line_String);  // New for V4

   //var Mark_Line_Value = await get4(Mark_Line_String);

   //var Mark_Line_Value = await get3(Mark_Line_String);

   //var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   //if(arg1==1 && arg2==20 && arg3==15){  // Exo 21:15 , test
   if(Mark_Line_Value=='1'){  // Exo 21:15 , test

      document.getElementById(arg4).style.color = "red";  // blue

   } 
   else {

      document.getElementById(arg4).style.color = "black";

   }

}



async function Add_or_Remove_mark_line(arg1,arg2,arg3) {


   // Reading from Indexeddb

   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   var Mark_Line_Value = await get5(Mark_Line_String);  // New for V4

   //var Mark_Line_Value = await get4(Mark_Line_String);

   //var Mark_Line_Value = await get3(Mark_Line_String);

   //var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   if(Mark_Line_Value == '1') {  // Remove mark_line

      await del5(Mark_Line_String);  // New for V4

   }
   else {  // Add mark_line

      var Mark_Line_Value = '1' ; // red color


      // Write to Indexeddb


      //await set3(Mark_Line_String,Mark_Line_Value);   

      //await set3(Mark_Line_String,Mark_Line_Value,arg1,arg2,arg3);   // add arg1,arg2,arg3

      await set5(Mark_Line_String,Mark_Line_Value,arg1,arg2,arg3);   // add arg1,arg2,arg3  // New for V4

      //await set2(Mark_Line_String,Mark_Line_Value);   


      // End of Write to Indexeddb


   }


   keyFunction2('enter');efocus(); 


}


async function Show_All_ML_Only() {   // Show all items in ML *** Only ***
                                   // Do Not Write all items to files ***

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "All MLs<br>";

   var Book_Verse_Count = 0;


   for (i = 0; i < 66; i++) {

      var Book_tmp = i + '_';
      Book_Verse_Count = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).count(); // New for V4
      //Book_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp).count();

      if(Book_Verse_Count>0) {

         var First_Verse = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).first(); // New for V4
         //var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).first();

         var argN = First_Verse.name;
         var arg1 = First_Verse.book_no;
         var arg2 = First_Verse.chap_no;
         var arg3 = First_Verse.vers_no;
         var arg4 = First_Verse.vers_no;

         var VH_Bname = BookAbbr4[arg1];

         var Book_Count_Str = VH_Bname + ' (' + Book_Verse_Count + ')';

         //var Book_Count_Str = VH_Bname + ' (' + Book_Verse_Count + ')' + '<br>';

         //text1 += Book_Count_Str;

         text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Show_Book_ML_Only();return false;">' + Book_Count_Str + '</a><br>';



         //VersML_B.push(arg1); 
         //VersML_C.push(arg2); 
         //VersML_V.push(arg3); 
         //VersML_T.push(arg4); 

      }
      else {  // no data


      }


   }  // End of for (i = 0; i < 66; i++)



   // Reading from Indexeddb

   //let tx = db.transaction('books');
   //let bookStore = tx.objectStore('books');

   //let books_All = await bookStore.getAll();  // read all Mark Lines from objectStore 'books'

   //var VersML_Len, j;
   //VersML_Len = VersML.length;


   //if(VersML.length){  // Clear Arrays

   //   VersML.splice(0, VersML_Len);
   //   VersML_B.splice(0, VersML_Len);
   //   VersML_C.splice(0, VersML_Len);
   //   VersML_V.splice(0, VersML_Len);
   //   VersML_T.splice(0, VersML_Len);

   //}


   //if(books_All) { // have data

   //   for (i = 0; i < books_All.length; i++) {

   //      // get data from Indexeddb
   //      var tmp_book_no = books_All[i].book_no;
   //      var tmp_chap_no = books_All[i].chap_no;
   //      var tmp_vers_no = books_All[i].vers_no;

   //      var arg1 = tmp_book_no;
   //      var arg2 = tmp_chap_no;
   //      var arg3 = tmp_vers_no;
   //      var arg4 = tmp_vers_no;

   //      //VersML_B.push(arg1); 
   //      //VersML_C.push(arg2); 
   //      //VersML_V.push(arg3); 
   //      //VersML_T.push(arg4); 

   //      var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
   //      var VH_Chap = arg2 + 1;
   //      var VH_Vers = arg3;
   //      var VH_To_Vers = arg4;

   //      if(arg4>arg3)
   //         var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
   //      else
   //         var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

   //      //VersML.push(VH);  // Put in new record


   //      //text1 += '<button onclick=";return false;">O</button> <a href="" id="7'+VersBM3_B[i]+VersBM3_C[i]+VersBM3_V[i]+VersBM3_T[i]+i+'0" onClick="Show_His_BM_Vers2(' + VersBM3_B[i] + ',' + VersBM3_C[i] + ',' + VersBM3_V[i] + ',' + VersBM3_T[i] + ');change_color(7'+VersBM3_B[i]+VersBM3_C[i]+VersBM3_V[i]+VersBM3_T[i]+i+'0);return false;">' + VersBM3[i] + '</a><br>';
         
   //      //text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + VersML_B[i] + ',' + VersML_C[i] + ',' + VersML_V[i] + ',' + VersML_T[i] + ');return false;">' + VersML[i] + '</a><br>';

   //      text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';



   //   }  // End of for (i = 0; i < books_All.length; i++) 



   //}
   //else {  // no data


   //}



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_All_ML_Only()


async function Show_Book_ML_Only() {   // Show items belong to certain book in ML *** Only ***
                                   // Do Not Write all items to files ***


   var Book_Verse_Count = 0;

   var Book_tmp = nowbook + '_';

   Book_Verse_Count = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).count(); // New for V4
   //Book_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp).count();


   let Verse = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();  // New for V4
   //let Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();

   //let Verse = await db.books.where('name').startsWithIgnoreCase('39_').toArray();

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   //var text1;

   //text1 = "Book MLs<br>";


   if(Book_Verse_Count<Book_Verse_Count_Value ) { // for Bible4U set 25, Bible2U set 13, Test set 5
                             // Display all MLs

      if (Verse) {

         var text1;

         text1 = "Book MLs<br>";

         for (i = 0; i < Verse.length; i++) {

            var tmp_book_no = Verse[i].book_no;
            var tmp_chap_no = Verse[i].chap_no;
            var tmp_vers_no = Verse[i].vers_no;

            var arg1 = tmp_book_no;
            var arg2 = tmp_chap_no;
            var arg3 = tmp_vers_no;
            var arg4 = tmp_vers_no;

            var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
            var VH_Chap = arg2 + 1;
            var VH_Vers = arg3;
            var VH_To_Vers = arg4;

            if(arg4>arg3)
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
            else
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';

         } // End of for (i = 0; i < Verse.length; i++)

      }
      else {

      }  // End of if (Verse)

   }  // End of Display all MLs ------------
   else if(Book_Verse_Count>Book_Verse_Count_Value - 1 ){  // Display count number of each chapter

      var text1;

      text1 = "Book MLs<br>";

      var Chap_Verse_Count = 0;

      var Book_Max_Chap_No = Qmaxchap_v2(nowbook);
      //var Book_Max_Chap_No = 28;

      //for (i = 0; i < Book_Max_Chap_No; i++) {
      for (i = 0; i < Book_Max_Chap_No; i++) {

         //var Book_tmp2 = nowbook + '_' + i;
         //var Book_tmp2 = nowbook + '_' + i;
         var Book_tmp2 = nowbook + '_' + i + '_';

         Chap_Verse_Count = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp2).count();  // New for V4
         //Chap_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp2).count();

         var First_Verse = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp2).first();  // New for V4
         //var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp2).first();

         if(Chap_Verse_Count>0) {

            //var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp2).first();

            var argN = First_Verse.name;
            var arg1 = First_Verse.book_no;
            var arg2 = First_Verse.chap_no;
            var arg3 = First_Verse.vers_no;
            var arg4 = First_Verse.vers_no;

            var VH_Bname = BookAbbr4[arg1];

            var VH_Chap = arg2 + 1

            var Chap_Count_Str = VH_Bname + ' ' + VH_Chap + ' (' + Chap_Verse_Count + ')';

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Show_Chap_ML_Only();return false;">' + Chap_Count_Str + '</a><br>';

         }  // End of if(Chap_Verse_Count>0)


      }  // End of for (i = 0; i < Book_Max_Chap_No; i++)


   }  // End of Display count number of each chapter ---



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_Book_ML_Only()


function Qmaxchap_v2(index) {  // find out maximum chapter of book , add on 15.04.2015
                            // index, start from 0 to 65, input book_int
                            // output maxchap
        var i;
	var cnum=new Array(50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,
	14,3,9,1,4,7,3,3,3,2,14,4, 28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22);
	i=cnum[index];
        return i;
}


async function Show_Chap_ML_Only() {   // Show items belong to certain chap in book in ML *** Only ***
                                   // Do Not Write all items to files ***

   var Book_tmp = nowbook + '_' + nowchapter;

   // Reading from Indexeddb

   let Verse = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();  // New for V4
   //let Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();

   //let Verse = await db.books.where('name').startsWithIgnoreCase('39_1').toArray();

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "Chap MLs<br>";

   if (Verse) {

      for (i = 0; i < Verse.length; i++) {

         var tmp_book_no = Verse[i].book_no;
         var tmp_chap_no = Verse[i].chap_no;
         var tmp_vers_no = Verse[i].vers_no;

         var arg1 = tmp_book_no;
         var arg2 = tmp_chap_no;
         var arg3 = tmp_vers_no;
         var arg4 = tmp_vers_no;

         var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
         var VH_Chap = arg2 + 1;
         var VH_Vers = arg3;
         var VH_To_Vers = arg4;

         if(arg4>arg3)
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
         else
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

         text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';

      } // End of for (i = 0; i < Verse.length; i++)

   }
   else {

   }  // End of if (Verse)


    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_Chap_ML_Only()


async function Show_Recent_ML_Only() {   // New for V4

  Show_MLs_F = 1; // 1 means Show, 0 means Hide

  let Verse = await dbT2.books.orderBy('date').reverse().limit(50).toArray();  // order by chap_no, from big to small
                                                                                // Recent 50
   var text1;

   text1 = "R50 MLs<br>";

   if (Verse) {

      for (i = 0; i < Verse.length; i++) {

         var tmp_book_no = Verse[i].book_no;
         var tmp_chap_no = Verse[i].chap_no;
         var tmp_vers_no = Verse[i].vers_no;

         var arg1 = tmp_book_no;
         var arg2 = tmp_chap_no;
         var arg3 = tmp_vers_no;
         var arg4 = tmp_vers_no;

         var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
         var VH_Chap = arg2 + 1;
         var VH_Vers = arg3;
         var VH_To_Vers = arg4;

         if(arg4>arg3)
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
         else
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

         text1 += '<a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';

      } // End of for (i = 0; i < Verse.length; i++)

   }
   else {

   }  // End of if (Verse)

    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}  // End of function Show_Recent_ML_Only()


function Hide_ML_Only() {   // Show all items in Bookmark5 *** Only ***
                                   // Do Not Write all items to files ***

    Show_MLs_F=0; // 1 means Show, 0 means Hide


   if(Show_MLs_F==0 && Show_BookmarkNote_F==0 && Show_History_F==0 && Show_Bookmark_F==0 && Show_Bookmark1_F==0 && Show_Bookmark2_F==0 && Show_Bookmark3_F==0 && Show_Bookmark4_F==0 && Show_Bookmark5_F==0) { // 1 means Show, 0 means Hide

      //document.getElementById("His_Container").style.width = "0%";
      //document.getElementById("Bible_Container").style.width = "100%";

   }

    document.getElementById("Vers_MLs").innerHTML = "";


}   // End of function Hide_ML_Only()


async function Imp_to_books_Test2Db() {  // New for V5

   //var Imp_Word=document.Imp_to_books_Test2Db.value;

   var Imp_Word = document.getElementById("Imp_to_books_Test2Db").value;


   if(Imp_Word!='' && Imp_Word.length>5 && Imp_Word.substr(0, 5)=='i!^_^') { // For ML import
                                                                             // Do pre-check

      //Split String "str" into Array "res"
      //var str = "i!^_^,2,18,18,2,20200302,65,4,9,20200304";  // <-- test Data
      //var str = "i!^_^,3,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304";  // <-- test Data
      //var str = "i!^_^,4,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304,65,4,10,20200305";  // <-- test Data
      //var res = str.split(",");

      var Imp_Word_Real_Str = Imp_Word.substr(6, Imp_Word.length);

      var Imp_Tmp = Imp_Word_Real_Str.split(",");  // Imp_Tmp is an Array 

      var imp_records_no = Imp_Tmp[0];

      var imp_successed_no = 0;

      for (i = 0; i < imp_records_no; i++) {

         var B_tmp = Imp_Tmp[4*i+1];
         var C_tmp = Imp_Tmp[4*i+2];
         var V_tmp = Imp_Tmp[4*i+3];
         var D_tmp = Imp_Tmp[4*i+4];

         var Mark_Line_String = B_tmp + '_' + C_tmp + '_' + V_tmp;

         var Mark_Line_Value = await get5(Mark_Line_String);

         if(Mark_Line_Value=='0'){  // 0 means No Data, 1 means Has Data

            let name = Mark_Line_String;
            let color_no = "1";
            let book_no = B_tmp;
            //let chap_no = C_tmp.toString();
            let chap_no = Number(C_tmp);
            let vers_no = V_tmp;
            let date = D_tmp;

            imp_successed_no = imp_successed_no + 1;

            try {

              dbT2.books.add({name,color_no, book_no, chap_no, vers_no, date});

            } catch(err) {
              if (err.name == 'ConstraintError') {
                alert("Such Verse exists in DB already");
              } else {
                throw err;
              }
            }

         }  // End of if(Mark_Line_Value=='0')


      }  // End of for (i = 0; i < imp_records_no; i++)

      var imp_mesg = 'ML ' + imp_successed_no + ' imported';

      myExp_Db_Display.innerHTML = imp_mesg;

   }  // End of if(Imp_Word!=''...// For ML import


   if(Imp_Word!='' && Imp_Word.length>5 && Imp_Word.substr(0, 5)=='cn^_^') { // For Chap Note import,  New for V7
                                                                             // Do pre-check

      //Split String "str" into Array "res"
      //var str = "i!^_^,2,18,18,2,20200302,65,4,9,20200304";  // <-- test Data
      //var str = "i!^_^,3,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304";  // <-- test Data
      //var str = "i!^_^,4,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304,65,4,10,20200305";  // <-- test Data
      //var res = str.split(",");

      var Imp_Word_Real_Str = Imp_Word.substr(6, Imp_Word.length);

      var Imp_Tmp = Imp_Word_Real_Str.split("|");  // Imp_Tmp is an Array 

      var imp_records_no = Imp_Tmp[0];

      var update_no = 0;

      var add_no = 0;

      var del_no = 0;

      for (i = 0; i < imp_records_no; i++) {

         var N_tmp = Imp_Tmp[3*i+1];  // name
         var D_tmp = Imp_Tmp[3*i+2];  // date
         var C_tmp = Imp_Tmp[3*i+3];  // content

         // Decrypt Content

         //var encryptedName = localStorage.MyNote;

         //var Key_input = document.getElementById("Key").value;

         //var decryptedName  = CryptoJS.AES.decrypt(encryptedName.toString(), Key_input); // secret key 123

         //var decryptedName_Str = decryptedName.toString(CryptoJS.enc.Utf8);

         var encryptedContent = C_tmp;

         var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

         var decryptedContent  = CryptoJS.AES.decrypt(encryptedContent.toString(), Key_input); 

         var decryptedContent_Str = decryptedContent.toString(CryptoJS.enc.Utf8);




         let Verse = await dbT2.ChapNote.get(N_tmp);

         if (Verse) {  // Exist so update

            //var content_tmp = C_tmp;

            var content_tmp = decryptedContent_Str;

            if (content_tmp == '' ) {
 
               dbT2.ChapNote.delete(N_tmp);

               del_no = del_no + 1;

            }
            else {
            
               dbT2.ChapNote.update(N_tmp, {content: content_tmp  });

               update_no = update_no + 1;

            }
         }
         else {  // Not Exist so Add new

            // Add new

            let name = N_tmp;
            let date = D_tmp;
            //let content = C_tmp;
            let content = decryptedContent_Str;


            try {

              dbT2.ChapNote.add({name,date, content});

              add_no = add_no + 1;

            } catch(err) {
              if (err.name == 'ConstraintError') {
                alert("Such Verse exists in DB already");
              } else {
                throw err;
              }
            }

            // End of Add new

          }


      }  // End of for (i = 0; i < imp_records_no; i++)


      var imp_mesg = 'ChapNote ' + update_no + ' updated, ' + add_no + ' added, ' + del_no + ' deleted.';

      myExp_Db_Display.innerHTML = imp_mesg;


   }  // End of if(Imp_Word!=''...// For Chap Note import


   if(Imp_Word!='' && Imp_Word.length>5 && Imp_Word.substr(0, 5)=='sn^_^') { // For Sermon Note import,  New for V12
                                                                             // Do pre-check

      //Split String "str" into Array "res"
      //var str = "i!^_^,2,18,18,2,20200302,65,4,9,20200304";  // <-- test Data
      //var str = "i!^_^,3,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304";  // <-- test Data
      //var str = "i!^_^,4,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304,65,4,10,20200305";  // <-- test Data
      //var res = str.split(",");

      var Imp_Word_Real_Str = Imp_Word.substr(6, Imp_Word.length);

      var Imp_Tmp = Imp_Word_Real_Str.split("|");  // Imp_Tmp is an Array 

      var imp_records_no = Imp_Tmp[0];

      var update_no = 0;

      var add_no = 0;

      var del_no = 0;

      for (i = 0; i < imp_records_no; i++) {

         var N_tmp = Imp_Tmp[15*i+1];  // Name
         var S_tmp = Imp_Tmp[15*i+2];  // Speaker
         var T_tmp = Imp_Tmp[15*i+3];  // Topic
         var C_tmp = Imp_Tmp[15*i+4];  // Content

         var M1_tmp = Imp_Tmp[15*i+5];  // Main_Verse1
         var M2_tmp = Imp_Tmp[15*i+6];  // Main_Verse2
         var M3_tmp = Imp_Tmp[15*i+7];  // Main_Verse3
         var M4_tmp = Imp_Tmp[15*i+8];  // Main_Verse4
         var M5_tmp = Imp_Tmp[15*i+9];  // Main_Verse5

         var K1_tmp = Imp_Tmp[15*i+10];  // Key_Word1
         var K2_tmp = Imp_Tmp[15*i+11];  // Key_Word2
         var K3_tmp = Imp_Tmp[15*i+12];  // Key_Word3
         var K4_tmp = Imp_Tmp[15*i+13];  // Key_Word4
         var K5_tmp = Imp_Tmp[15*i+14];  // Key_Word5

         var V_tmp = Imp_Tmp[15*i+15];  // Verses


         // Decrypt Content

         //var encryptedName = localStorage.MyNote;

         //var Key_input = document.getElementById("Key").value;

         //var decryptedName  = CryptoJS.AES.decrypt(encryptedName.toString(), Key_input); // secret key 123

         //var decryptedName_Str = decryptedName.toString(CryptoJS.enc.Utf8);

         var encryptedContent = C_tmp;

         var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

         var decryptedContent  = CryptoJS.AES.decrypt(encryptedContent.toString(), Key_input); 

         var decryptedContent_Str = decryptedContent.toString(CryptoJS.enc.Utf8);




         let Verse = await dbT2.SermonNote.get(N_tmp);

         if (Verse) {  // Exist so update

            //var content_tmp = C_tmp;

            var content_tmp = decryptedContent_Str;

            if (content_tmp == '' ) {
 
               //dbT2.SermonNote.delete(N_tmp);

               //del_no = del_no + 1;

            }
            else {
            
               //dbT2.SermonNote.update(N_tmp, {content: content_tmp  });

               dbT2.SermonNote.update(N_tmp, { Speaker: S_tmp, Topic: T_tmp, Content: content_tmp, MainVerses: [M1_tmp, M2_tmp, M3_tmp, M4_tmp, M5_tmp], KeyWords: [K1_tmp, K2_tmp, K3_tmp, K4_tmp, K5_tmp] } );


               update_no = update_no + 1;

            }
         }
         else {  // Not Exist so Add new

            // Add new

            let Name = N_tmp;
            let Speaker = S_tmp;
            let Topic = T_tmp;
            let Content = decryptedContent_Str;

            //let Verses = ;     // Need to add in Exp  *** 2020.8.17

            let Verses = V_tmp;     


            //let Verses = localStorage.VersBM3;


            try {

              //dbT2.ChapNote.add({name,date, content});


              //dbT2.SermonNote.update(N_tmp, { Speaker: S_tmp, Topic: T_tmp, Content: content_tmp, 
              //   MainVerses: [M1_tmp, M2_tmp, M3_tmp, M4_tmp, M5_tmp], KeyWords: [K1_tmp, K2_tmp, K3_tmp, K4_tmp, K5_tmp] } );


              dbT2.SermonNote.add({Name,Speaker,Topic,Content,Verses,MainVerses: [M1_tmp, M2_tmp, M3_tmp, M4_tmp, M5_tmp],KeyWords: [K1_tmp, K2_tmp, K3_tmp, K4_tmp, K5_tmp] });

              add_no = add_no + 1;

            } catch(err) {
              if (err.name == 'ConstraintError') {
                alert("Such Verse exists in DB already");
              } else {
                throw err;
              }
            }

            // End of Add new

          }


      }  // End of for (i = 0; i < imp_records_no; i++)


      var imp_mesg = 'SermonNote ' + update_no + ' updated, ' + add_no + ' added, ' + del_no + ' deleted.';

      myExp_Db_Display.innerHTML = imp_mesg;


   }  // End of if(Imp_Word!=''...// For Sermon Note import


   // -------------------------------------------------


   if(Imp_Word!='' && Imp_Word.length>5 && Imp_Word.substr(0, 5)=='pi^_^') { // For Pictures Info import,  New for V12
                                                                             // Do pre-check

      //Split String "str" into Array "res"
      //var str = "i!^_^,2,18,18,2,20200302,65,4,9,20200304";  // <-- test Data
      //var str = "i!^_^,3,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304";  // <-- test Data
      //var str = "i!^_^,4,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304,65,4,10,20200305";  // <-- test Data
      //var res = str.split(",");

      var Imp_Word_Real_Str = Imp_Word.substr(6, Imp_Word.length);

      var Imp_Tmp = Imp_Word_Real_Str.split("|");  // Imp_Tmp is an Array 

      var imp_records_no = Imp_Tmp[0];

      var update_no = 0;

      var add_no = 0;

      var del_no = 0;

      for (i = 0; i < imp_records_no; i++) {  // 8

         var ID_tmp = Imp_Tmp[8*i+1];        // ID
         var P_Name_tmp = Imp_Tmp[8*i+2];    // P_Name
         var F_Name_tmp = Imp_Tmp[8*i+3];    // F_Name
         var P_Height_tmp = Imp_Tmp[8*i+4];  // P_Height
         var P_Width_tmp = Imp_Tmp[8*i+5];   // P_Width

         var M1_tmp = Imp_Tmp[8*i+6];  // Main_Verse1
         var M2_tmp = Imp_Tmp[8*i+7];  // Main_Verse2
         var M3_tmp = Imp_Tmp[8*i+8];  // Main_Verse3


         let Verse = await dbT2.Pictures.get(ID_tmp);

         if (Verse) {  // Exist so update

            //var content_tmp = C_tmp;

            //var content_tmp = decryptedContent_Str;

            //if (content_tmp == '' ) {
 
               //dbT2.SermonNote.delete(N_tmp);

               //del_no = del_no + 1;

            //}
            //else {
            
               //dbT2.SermonNote.update(N_tmp, {content: content_tmp  });

               dbT2.Pictures.update(ID_tmp, { P_Name: P_Name_tmp, F_Name: F_Name_tmp, P_Height: P_Height_tmp, P_Width: P_Width_tmp , MainVerses: [M1_tmp, M2_tmp, M3_tmp] } );


               update_no = update_no + 1;

            //}
         }
         else {  // Not Exist so Add new

            // Add new

            let ID = ID_tmp;
            let P_Name = P_Name_tmp; 
            let F_Name = F_Name_tmp; 
            let P_Height = P_Height_tmp;
            let P_Width = P_Width_tmp;


            try {


              dbT2.Pictures.add({ID,P_Name,F_Name,P_Height,P_Width, MainVerses: [M1_tmp, M2_tmp, M3_tmp] });


              //dbT2.SermonNote.add({Name,Speaker,Topic,Content,Verses,MainVerses: [M1_tmp, M2_tmp, M3_tmp, M4_tmp, M5_tmp],KeyWords: [K1_tmp, K2_tmp, K3_tmp, K4_tmp, K5_tmp] });

              add_no = add_no + 1;

            } catch(err) {
              if (err.name == 'ConstraintError') {
                alert("Such Verse exists in DB already");
              } else {
                throw err;
              }
            }

            // End of Add new

          }


      }  // End of for (i = 0; i < imp_records_no; i++)


      var imp_mesg = 'Pictures Info ' + update_no + ' updated, ' + add_no + ' added, ' + del_no + ' deleted.';

      myExp_Db_Display.innerHTML = imp_mesg;


   }  // End of if(Imp_Word!=''...// For Sermon Note import


   // ---------------------------------------------------

}



async function Imp_Db_from_Sermon_Notes_Download() {  // New for V12

   //var Imp_Word = document.getElementById("Imp_to_books_Test2Db").value;

   //if(Imp_Word!='' && Imp_Word.length>5 && Imp_Word.substr(0, 5)=='sn^_^') { // For Sermon Note import,  New for V12
                                                                             // Do pre-check

      //Split String "str" into Array "res"
      //var str = "i!^_^,2,18,18,2,20200302,65,4,9,20200304";  // <-- test Data
      //var str = "i!^_^,3,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304";  // <-- test Data
      //var str = "i!^_^,4,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304,65,4,10,20200305";  // <-- test Data
      //var res = str.split(",");

      //var Imp_Word_Real_Str = Imp_Word.substr(6, Imp_Word.length);

      //var Imp_Tmp = Imp_Word_Real_Str.split("|");  // Imp_Tmp is an Array , // Sermon_Notes_Download

      //var Imp_Tmp = Imp_Word_Real_Str.split("|");  // Sermon_Notes_Download

      //var imp_records_no = Sermon_Notes_Download[0]; // Sermon_Notes_Download is an Array

      var imp_records_no = 0;

      var update_no = 0;

      var add_no = 0;

      var del_no = 0;

      var DO_IMP_From_File = 'N';

      if (Sermon_Notes_Download) {

         if (Sermon_Notes_Download.length > 0) {

            imp_records_no = Sermon_Notes_Download[0]; // Sermon_Notes_Download is an Array

         }


         if (imp_records_no != 0) { // 0 means No Data

            DO_IMP_From_File = 'Y';

         }

      }

      if (DO_IMP_From_File == 'Y') {

         for (i = 0; i < imp_records_no; i++) {

            var N_tmp = Sermon_Notes_Download[15*i+1];  // Name
            var S_tmp = Sermon_Notes_Download[15*i+2];  // Speaker
            var T_tmp = Sermon_Notes_Download[15*i+3];  // Topic
            var C_tmp = Sermon_Notes_Download[15*i+4];  // Content

            var M1_tmp = Sermon_Notes_Download[15*i+5];  // Main_Verse1
            var M2_tmp = Sermon_Notes_Download[15*i+6];  // Main_Verse2
            var M3_tmp = Sermon_Notes_Download[15*i+7];  // Main_Verse3
            var M4_tmp = Sermon_Notes_Download[15*i+8];  // Main_Verse4
            var M5_tmp = Sermon_Notes_Download[15*i+9];  // Main_Verse5

            var K1_tmp = Sermon_Notes_Download[15*i+10];  // Key_Word1
            var K2_tmp = Sermon_Notes_Download[15*i+11];  // Key_Word2
            var K3_tmp = Sermon_Notes_Download[15*i+12];  // Key_Word3
            var K4_tmp = Sermon_Notes_Download[15*i+13];  // Key_Word4
            var K5_tmp = Sermon_Notes_Download[15*i+14];  // Key_Word5

            var V_tmp = Sermon_Notes_Download[15*i+15];  // Verses

            // Decrypt Content

            var encryptedContent = C_tmp;

            var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

            var decryptedContent  = CryptoJS.AES.decrypt(encryptedContent.toString(), Key_input); 

            var decryptedContent_Str = decryptedContent.toString(CryptoJS.enc.Utf8);


            // Decrypt Topic

            var encryptedTopic = T_tmp;

            var decryptedTopic  = CryptoJS.AES.decrypt(encryptedTopic.toString(), Key_input); 

            var decryptedTopic_Str = decryptedTopic.toString(CryptoJS.enc.Utf8);


            // Decrypt Speaker

            var encryptedSpeaker = S_tmp;

            var decryptedSpeaker  = CryptoJS.AES.decrypt(encryptedSpeaker.toString(), Key_input); 

            var decryptedSpeaker_Str = decryptedSpeaker.toString(CryptoJS.enc.Utf8);



            // Decrypt Key_Word1 (1-5)

            var encryptedK1 = K1_tmp;

            var decryptedK1  = CryptoJS.AES.decrypt(encryptedK1.toString(), Key_input); 

            var decryptedK1_Str = decryptedK1.toString(CryptoJS.enc.Utf8);

            var encryptedK2 = K2_tmp;

            var decryptedK2  = CryptoJS.AES.decrypt(encryptedK2.toString(), Key_input); 

            var decryptedK2_Str = decryptedK2.toString(CryptoJS.enc.Utf8);

            var encryptedK3 = K3_tmp;

            var decryptedK3  = CryptoJS.AES.decrypt(encryptedK3.toString(), Key_input); 

            var decryptedK3_Str = decryptedK3.toString(CryptoJS.enc.Utf8);

            var encryptedK4 = K4_tmp;

            var decryptedK4  = CryptoJS.AES.decrypt(encryptedK4.toString(), Key_input); 

            var decryptedK4_Str = decryptedK4.toString(CryptoJS.enc.Utf8);

            var encryptedK5 = K5_tmp;

            var decryptedK5  = CryptoJS.AES.decrypt(encryptedK5.toString(), Key_input); 

            var decryptedK5_Str = decryptedK5.toString(CryptoJS.enc.Utf8);


            // Decrypt Verses

            var encryptedVerses = V_tmp;

            var decryptedVerses  = CryptoJS.AES.decrypt(encryptedVerses.toString(), Key_input); 

            var decryptedVerses_Str = decryptedVerses.toString(CryptoJS.enc.Utf8);


            let Verse = await dbT2.SermonNote.get(N_tmp);

            if (Verse) {  // Exist so update

               var content_tmp = decryptedContent_Str;

               var topic_tmp = decryptedTopic_Str;

               var speaker_tmp = decryptedSpeaker_Str;

               var verses_tmp = decryptedVerses_Str;

               var keyword1_tmp = decryptedK1_Str;

               var keyword2_tmp = decryptedK2_Str;

               var keyword3_tmp = decryptedK3_Str;

               var keyword4_tmp = decryptedK4_Str;

               var keyword5_tmp = decryptedK5_Str;


               if (content_tmp == '' ) {
 
                  //dbT2.SermonNote.delete(N_tmp);

                  //del_no = del_no + 1;

               }
               else {
            
                  //dbT2.SermonNote.update(N_tmp, {content: content_tmp  });

                  //dbT2.SermonNote.update(N_tmp, { Speaker: S_tmp, Topic: T_tmp, Content: content_tmp, MainVerses: [M1_tmp, M2_tmp, M3_tmp, M4_tmp, M5_tmp], KeyWords: [K1_tmp, K2_tmp, K3_tmp, K4_tmp, K5_tmp] } );

                  dbT2.SermonNote.update(N_tmp, { Speaker: speaker_tmp, Topic: topic_tmp, Content: content_tmp , Verses: verses_tmp , MainVerses: [M1_tmp, M2_tmp, M3_tmp, M4_tmp, M5_tmp], KeyWords: [keyword1_tmp, keyword2_tmp, keyword3_tmp, keyword4_tmp, keyword5_tmp] } );


                  update_no = update_no + 1;

               }
            }
            else {  // Not Exist so Add new

               // Add new

               let Name = N_tmp;
               let Speaker = decryptedSpeaker_Str;
               let Topic = decryptedTopic_Str;
               let Content = decryptedContent_Str;

               let Verses = decryptedVerses_Str; 

               var keyword1_tmp = decryptedK1_Str;

               var keyword2_tmp = decryptedK2_Str;

               var keyword3_tmp = decryptedK3_Str;

               var keyword4_tmp = decryptedK4_Str;

               var keyword5_tmp = decryptedK5_Str;

               try {

                 //dbT2.ChapNote.add({name,date, content});


                 //dbT2.SermonNote.update(N_tmp, { Speaker: S_tmp, Topic: T_tmp, Content: content_tmp, 
                 //   MainVerses: [M1_tmp, M2_tmp, M3_tmp, M4_tmp, M5_tmp], KeyWords: [K1_tmp, K2_tmp, K3_tmp, K4_tmp, K5_tmp] } );


                 dbT2.SermonNote.add({Name,Speaker,Topic,Content,Verses,MainVerses: [M1_tmp, M2_tmp, M3_tmp, M4_tmp, M5_tmp],KeyWords: [keyword1_tmp, keyword2_tmp, keyword3_tmp, keyword4_tmp, keyword5_tmp] });

                 add_no = add_no + 1;

               } catch(err) {
                 if (err.name == 'ConstraintError') {
                   alert("Such Verse exists in DB already");
                 } else {
                   throw err;
                 }
               }

               // End of Add new  

             } // End of if (Verse) {  // Exist so update


         } // End of for (i = 0; i < imp_records_no; i++)


      } // End of if (DO_IMP_From_File == 'Y')


      var imp_mesg = 'SermonNote Imp from File : ' + update_no + ' updated, ' + add_no + ' added, ' + del_no + ' deleted.';

      myExp_Db_Display.innerHTML = imp_mesg;


} // End of function Imp_Db_from_Sermon_Notes_Download()

//var Sermon_Notes_Download = [];

async function Exp_from_books_Test2Db() { // New for V5

  //let Verse = await dbT2.books.orderBy('date').reverse().limit(10).toArray(); // for test
  //let Verse_Count = 10;  // for test

  let Verse = await dbT2.books.toArray();

  var Verse_Count = Verse.length;

  if (Verse) {

     //var text = 'i!^_^,' + Verse_Count.toString() + ',';
     var text = 'i!^_^,' + Verse_Count.toString();

     for (i = 0; i < Verse.length; i++) {

        let name = Verse[i].name;
        let color_no = Verse[i].color_no;
        let book_no = Verse[i].book_no;
        let chap_no = Verse[i].chap_no;
        let vers_no = Verse[i].vers_no;
        let date = Verse[i].date;

        text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

     } // End of for (i = 0; i < Verse.length; i++)

     var mesg1 = 'ML ' + Verse_Count + ' exported'

     //Exp_to_books_Test2Db.value = mesg1;

     //myExp_Db_Display.innerHTML = text;
     //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
     //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

     document.getElementById("Imp_to_books_Test2Db").value = text;

     copyFunction5(mesg1);

     //myExp_Db_Display.innerHTML = "";


  } // End of if (Verse)

} // End of function Exp_from_books_Test2Db()


function copyFunction4(arg1) {

   //if(Note_Opened==1) {  // 1 means opened, 0 means close

      //document.getElementById("myExpVerse").value = arg1;

      // Copy to the clipboard
      //var copyText = document.getElementById("myExpVerse");
      var copyText = arg1;
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");

      //document.getElementById("myCopyVerse").value = VersHis[arg1] + ' copied.';  
      //document.getElementById("myCopyVerse").value = VersHis[arg1] + ' copied.';  //"Vers_history"


      //var vers_id = 'myV' + arg1.toString();

      //var tmp1_message = VersHis[arg1];
      //var tmp2_message = tmp1_message + ' copied.';
      var tmp3_message = 'Verse copied.';

      //var el = document.getElementById(vers_id);
      //var el = document.getElementById("myExp_Db_Display");  //"myExp_Db_Display"
      var el = document.getElementById("myExp_Db_Display");  //"myExp_Db_Display"

      tooltip(el,tmp3_message);


      //var vers_id = 'myV' + arg1.toString();                         // 原為 vers_id, 2020.1.11 改為 vers_id_1
                                                                       // 若改為 myV_1, 則不 work
      //select_all_and_copy(document.getElementById(vers_id),arg1);    // 原為 vers_id, 2020.1.11 改為 vers_id_1
      //select_all_and_copy(document.getElementById(vers_id));

   //}

   //select_all_and_copy(document.getElementById("Copy_Test"));

}  // End of function copyFunction4


function copyFunction5(arg1) {  // New for V5

      //var vers_id = 'myExp_Db_Display';
      //var copyText = document.getElementById(vers_id);
      //copyText.select();
      //document.execCommand("copy");

      select_all_and_copy_V2(document.getElementById("Imp_to_books_Test2Db"),arg1); // Imp_to_books_Test2Db

      //select_all_and_copy(document.getElementById("myExp_Db_Display"));

      //myExp_Db_Display.innerHTML = "";

} // End of function copyFunction5


function select_all_and_copy_V2(el,arg1)  {    // New for V5
                                              
    // Copy textarea, pre, div, etc.
            if (document.body.createTextRange) {
        // IE
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
        textRange.execCommand("Copy");   
                        tooltip(el, "Copied!"); 
    }
            else if (window.getSelection && document.createRange) {
        // non-IE
        var editable = el.contentEditable; // Record contentEditable status of element
        var readOnly = el.readOnly; // Record readOnly status of element
            el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
            el.readOnly = false; // iOS will not select in a read only form element
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range); // Does not work for Firefox if a textarea or input
        if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT")
            el.select(); // Firefox will only select a form element with select()
        if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i))
            el.setSelectionRange(0, 999999); // iOS only selects "form" elements with SelectionRange
        el.contentEditable = editable; // Restore previous contentEditable status
        el.readOnly = readOnly; // Restore previous readOnly status
                if (document.queryCommandSupported("copy"))
                {
                                    var successful = document.execCommand('copy'); 
                            if (successful) {

                               //Exp_to_books_Test2Db.value = arg1;  // myExp_Db_Display

                               myExp_Db_Display.innerHTML = arg1;

                               //var tmp1_message = VersHis[arg1];
                               //var tmp2_message = tmp1_message + ' copied.';

                               //var e2 = document.getElementById("myCopyVerse_Display");  //add on 2020.01.12

                               //tooltip(e2, tmp2_message);    //add on 2020.01.12

                               //tooltip(el, tmp2_message);  // Mark on 2020.01.12


                               //var tmp3_message = "";
                               //var e2 = document.getElementById("myCopyVerse_Display");  //add on 2020.01.12
                               //tooltip2(e2, tmp3_message);    //add on 2020.01.12


                               //tooltip(el, "Copied to clipboard.");
                            }
                            else {
                               myExp_Db_Display.innerHTML = arg1;
                               //tooltip(el, "Press CTRL+C to copy");
                            }
                        }
                        else
                        {
                                    if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i))
                                                tooltip(el, "Press CTRL+C to copy");
                        }
    }
} // end function select_all_and_copy_V2(el) 


async function Exp_from_books_Test2Db_late_than() { // New for V6

  var Verse_Count = 0;

  var Late_than_date = document.getElementById("Exp_from_books_Test2Db_late_than_date").value;

  if(Late_than_date!='') {

     let Verse = await dbT2.books.where('date').above(Late_than_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        var text = 'i!^_^,' + Verse_Count.toString();

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let color_no = Verse[i].color_no;
           let book_no = Verse[i].book_no;
           let chap_no = Verse[i].chap_no;
           let vers_no = Verse[i].vers_no;
           let date = Verse[i].date;

           text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ML 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_books_Test2Db_late_than()


async function Exp_from_books_Test2Db_startWith() { // New for V6

  var Verse_Count = 0;

  var startWith_date = document.getElementById("Exp_from_books_Test2Db_startWith_date").value;

  if(startWith_date!='') {

     let Verse = await dbT2.books.where('date').startsWithIgnoreCase(startWith_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        var text = 'i!^_^,' + Verse_Count.toString();

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let color_no = Verse[i].color_no;
           let book_no = Verse[i].book_no;
           let chap_no = Verse[i].chap_no;
           let vers_no = Verse[i].vers_no;
           let date = Verse[i].date;

           text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ML 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_books_Test2Db_startWith()


function Show_Picture_No_Save_To_DB() {


   document.getElementById("Add_Picture_Message").innerHTML = '';

   var P_Name_tmp = document.getElementById("PictureName").value;
   var F_Name_tmp = document.getElementById("FileName").value;
   var P_Height_tmp = document.getElementById("PictureHeight").value;
   var P_Width_tmp = document.getElementById("PictureWidth").value;

   var Main_Verse1_tmp = document.getElementById("MainVerse1").value;
   var Main_Verse2_tmp = document.getElementById("MainVerse2").value;
   var Main_Verse3_tmp = document.getElementById("MainVerse3").value;

   if (P_Name_tmp!='' && F_Name_tmp!='' && P_Height_tmp!='' && P_Width_tmp!='' && Main_Verse1_tmp!='') {

         document.getElementById("myImg").style.height = P_Height_tmp; // Height

         document.getElementById("myImg").style.width = P_Width_tmp; // Width

         document.getElementById("Picture_Name").innerHTML = P_Name_tmp; 

         document.getElementById("myImg").src = F_Name_tmp;

   } // End of if (P_Name_tmp!='' && F_Name_tmp!='' && P_Height_tmp!='' && P_Width_tmp!='' && Main_Verse1_tmp!='')


} // End of function Show_Picture_No_Save_To_DB() 


async function Show_Picture2(arg) {  // New for V12

      document.getElementById("Book_Picture_List_Area").style.height = "0%";

      // Start Reading from indexedDB

      var ID_tmp = arg; // 'Rev01'

      let Verse = await dbT2.Pictures.get(ID_tmp);

      if (Verse) {  // Exist

         //var P_Name_tmp = document.getElementById("PictureName").value;
         //var F_Name_tmp = document.getElementById("FileName").value;
         //var P_Height_tmp = document.getElementById("PictureHeight").value;
         //var P_Width_tmp = document.getElementById("PictureWidth").value;

         //var Main_Verse1_tmp = document.getElementById("MainVerse1").value;
         //var Main_Verse2_tmp = document.getElementById("MainVerse2").value;
         //var Main_Verse3_tmp = document.getElementById("MainVerse3").value;

         var picturerName = Verse.P_Name;
         var fileName = Verse.F_Name;
         var pictureHeight = Verse.P_Height;
         var pictureWidth = Verse.P_Width;
         var mainverses = Verse.MainVerses;  // MainVerses

         document.getElementById("PictureName").value = picturerName;      // P_Name
         document.getElementById("FileName").value = fileName;             // F_Name
         document.getElementById("PictureHeight").value = pictureHeight;   // P_Height
         document.getElementById("PictureWidth").value = pictureWidth;   // P_Width

         if (mainverses) {

            document.getElementById("MainVerse1").value = mainverses[0];
            document.getElementById("MainVerse2").value = mainverses[1];
            document.getElementById("MainVerse3").value = mainverses[2];

         }
         else {

            document.getElementById("MainVerse1").value = "";
            document.getElementById("MainVerse2").value = "";
            document.getElementById("MainVerse3").value = "";

         }

         document.getElementById("myImg").style.height = pictureHeight; // Height

         document.getElementById("myImg").style.width = pictureWidth; // Width

         //document.getElementById("myImg").style.height = "140%"; // for Windows

         //document.getElementById("myImg").style.width = "100%"; // for Windows

         document.getElementById("Picture_Name").innerHTML = picturerName; 

         document.getElementById("myImg").src = fileName;

      }
      else {

         var picturerName = "";
         var fileName = "";
         var pictureHeight = "";
         var pictureWidth = "";

         document.getElementById("PictureName").value = picturerName;      // P_Name
         document.getElementById("FileName").value = fileName;             // F_Name
         document.getElementById("PictureHeight").value = pictureHeight;   // P_Height
         document.getElementById("PictureWidth").value = pictureWidth;   // P_Width

         document.getElementById("MainVerse1").value = "";
         document.getElementById("MainVerse2").value = "";
         document.getElementById("MainVerse3").value = "";

      }


} // End of function Show_Picture2(arg)


async function Show_Picture(arg) {  // New for V12



   if (arg=='1') {

      // Start Reading from indexedDB

      var ID_tmp = 'Rev01';

      let Verse = await dbT2.Pictures.get(ID_tmp);

      if (Verse) {  // Exist

         //var P_Name_tmp = document.getElementById("PictureName").value;
         //var F_Name_tmp = document.getElementById("FileName").value;
         //var P_Height_tmp = document.getElementById("PictureHeight").value;
         //var P_Width_tmp = document.getElementById("PictureWidth").value;

         //var Main_Verse1_tmp = document.getElementById("MainVerse1").value;
         //var Main_Verse2_tmp = document.getElementById("MainVerse2").value;
         //var Main_Verse3_tmp = document.getElementById("MainVerse3").value;

         var picturerName = Verse.P_Name;
         var fileName = Verse.F_Name;
         var pictureHeight = Verse.P_Height;
         var pictureWidth = Verse.P_Width;
         var mainverses = Verse.MainVerses;  // MainVerses

         document.getElementById("PictureName").value = picturerName;      // P_Name
         document.getElementById("FileName").value = fileName;             // F_Name
         document.getElementById("PictureHeight").value = pictureHeight;   // P_Height
         document.getElementById("PictureWidth").value = pictureWidth;   // P_Width

         if (mainverses) {

            document.getElementById("MainVerse1").value = mainverses[0];
            document.getElementById("MainVerse2").value = mainverses[1];
            document.getElementById("MainVerse3").value = mainverses[2];

         }
         else {

            document.getElementById("MainVerse1").value = "";
            document.getElementById("MainVerse2").value = "";
            document.getElementById("MainVerse3").value = "";

         }

         document.getElementById("myImg").style.height = pictureHeight; // Height

         document.getElementById("myImg").style.width = pictureWidth; // Width

         //document.getElementById("myImg").style.height = "140%"; // for Windows

         //document.getElementById("myImg").style.width = "100%"; // for Windows

         document.getElementById("Picture_Name").innerHTML = picturerName; 

         document.getElementById("myImg").src = fileName;

      }
      else {

         var picturerName = "";
         var fileName = "";
         var pictureHeight = "";
         var pictureWidth = "";

         document.getElementById("PictureName").value = picturerName;      // P_Name
         document.getElementById("FileName").value = fileName;             // F_Name
         document.getElementById("PictureHeight").value = pictureHeight;   // P_Height
         document.getElementById("PictureWidth").value = pictureWidth;   // P_Width

         document.getElementById("MainVerse1").value = "";
         document.getElementById("MainVerse2").value = "";
         document.getElementById("MainVerse3").value = "";

      }


      //document.getElementById("myImg").style.height = "140%"; // for Windows

      //document.getElementById("myImg").style.width = "100%"; // for Windows

      //document.getElementById("Picture_Name").innerHTML = "7 Seals 7 Trumpets 7 Bowls"; 

      //document.getElementById("myImg").src = "7Seals7Trumpets7Bowls.png";

   }

   if (arg=='2') {

      document.getElementById("myImg").style.height = "130%"; // for Windows  // 140%

      document.getElementById("Picture_Name").innerHTML = "Gods's glory departs from Jerusalem"; 

      document.getElementById("myImg").src = "Gods_glory_departs_from_Jerusalem.png";

   }


   //var OS_tmp = getOS();

   //if (OS_tmp == 'Windows') {

   //   document.getElementById("myImg").style.height = "100%"; // for Windows

   //   document.getElementById("Picture_Name").innerHTML = "7 Seals 7 Trumpets 7 Bowls"; 

   //   document.getElementById("myImg").src = "7Seals7Trumpets7Bowls.png";

   //}
   //else {

   //   document.getElementById("Pictures_Area").style.height = "46%"; // for iPad

   //   document.getElementById("Picture_Name").innerHTML = "7 Seals 7 Trumpets 7 Bowls"; 

   //}

     // document.getElementById("Pictures_Area").style.height = "46%";


} // End of function Show_Picture()


function Open_Add_or_Update_Pictures_Area() {  // New for V12

   var OS_tmp = getOS();

   if (OS_tmp == 'Windows') {

      document.getElementById("Add_or_Update_Pictures_Area").style.height = "35%";

   }
   else {

      document.getElementById("Add_or_Update_Pictures_Area").style.height = "35%";

   } 

} // End of Open_Add_or_Update_Pictures_Area()


function Close_Add_or_Update_Pictures_Area() {

   document.getElementById("Add_or_Update_Pictures_Area").style.height = "0%";

} // End of Close_Add_or_Update_Pictures_Area()



function Open_Pictures_Area() {  // New for V12

   var OS_tmp = getOS();

   if (OS_tmp == 'Windows') {

      document.getElementById("Pictures_Area").style.height = "100%"; // for Windows // 92%

      //document.getElementById("Picture_Name").innerHTML = "7 Seals 7 Trumpets 7 Bowls"; 

   }
   else {

      document.getElementById("Pictures_Area").style.height = "51%"; // for iPad // 46%

      //document.getElementById("Picture_Name").innerHTML = "7 Seals 7 Trumpets 7 Bowls"; 

   }

     // document.getElementById("Pictures_Area").style.height = "46%";


} // End of function Open_Pictures_Area()


function Close_Pictures_Area() {  // New for V12

      document.getElementById("Pictures_Area").style.height = "0%";


} // End of function Close_Pictures_Area()


var Open_or_Close_Pictures_Area_F = 0; // 0 means Close, 1 means Open

function Open_or_Close_Pictures_Area() {

   if ( Open_or_Close_Pictures_Area_F == 0 ) { // 原 為 Close

      Open_Pictures_Area();

      Open_or_Close_Pictures_Area_F = 1;

   }
   else { // 原 為 Open

      Close_Pictures_Area();

      Open_or_Close_Pictures_Area_F = 0;

   }


} // End of function Open_or_Close_Pictures_Area()


function Open_Chap_Note() {  // New for V7

   var OS_tmp = getOS();

   if (OS_tmp == 'Windows') {

      document.getElementById("container6").style.height = "46%"; // for Windows

   }
   else {

      document.getElementById("container6").style.height = "23%"; // for iPad

   }

   //document.getElementById("container6").style.height = "23%"; // 原為 25%, 21%, 22%



}  // End of function Open_Chap_Note()

function Close_Chap_Note() {  // New for V7

   //Note_Opened = 0; // 1 means opened, 0 means close

   document.getElementById("container6").style.height = "0%";
   //efocus(); // add 20190430

   //Delete_Note_Item_No = 0;  // 0 means No Delete action, 1 means delete first item

   //document.getElementById("tool_area_10").style.visibility='hidden';

}  // End of function Close_Chap_Note()

async function Read_Chap_Note() {  // New for V7
              
   // Read-Only Mode

   var Book_tmp = nowbook + '_' + nowchapter;

   let Verse = await dbT2.ChapNote.get(Book_tmp);

   if (Verse) {

      var content = Verse.content;
      document.getElementById("Chap_Note_Textarea").value = content;

      document.getElementById("Chap_Note_Textarea").readOnly = true;

   }
   else {

      var tmp_B = nowbook;
      var tmp_C = nowchapter;

      var VBM_Bname = BookAbbr4[tmp_B];
      var VBM_Chap = tmp_C + 1;

      var MainVerse_Search_Str = VBM_Bname + ' ' + VBM_Chap + ':'; // 'Exo 2:'

      document.getElementById("Chap_Note_Textarea").value = MainVerse_Search_Str + ' No Data';

      document.getElementById("Chap_Note_Textarea").readOnly = true;

   }

}  // End of function Read_Chap_Note()


async function Edit_Chap_Note() {  // New for V7
              
   // Edit Mode

   var Book_tmp = nowbook + '_' + nowchapter;

   let Verse = await dbT2.ChapNote.get(Book_tmp);

   if (Verse) {

      var content = Verse.content;
      document.getElementById("Chap_Note_Textarea").value = content;

      document.getElementById("Chap_Note_Textarea").readOnly = false;

   }
   else {

      document.getElementById("Chap_Note_Textarea").value = '';

      document.getElementById("Chap_Note_Textarea").readOnly = false;

   }

}  // End of function Edit_Chap_Note()


async function Save_Chap_Note() {  // New for V7


   var Book_tmp = nowbook + '_' + nowchapter;

   let Verse = await dbT2.ChapNote.get(Book_tmp);

   if (Verse) {  // Exist so update

      // table.update(key, changes)
      // db.friends.update(2, {name: "Number 2"})

      var content_tmp = document.getElementById("Chap_Note_Textarea").value;

      if (content_tmp == '' ) {

         dbT2.ChapNote.delete(Book_tmp);

      }
      else {

         dbT2.ChapNote.update(Book_tmp, {content: content_tmp  });

      }

   }
   else {  // Not Exist so Add new

       // Add new

       let name = nowbook + '_' + nowchapter;
       let content = document.getElementById("Chap_Note_Textarea").value;
       let date = ML_Date();

       try {

         dbT2.ChapNote.add({name,date, content});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
         } else {
           throw err;
         }
       }

       // End of Add new

   }


}  // End of function Save_Chap_Note()


async function Show_All_ChapNote_Only() {   // New for V7
                                  

   //Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "All Chap Note<br>";

   var Book_ChapNote_Count = 0;


   for (i = 0; i < 66; i++) {

      var Book_tmp = i + '_';
      Book_ChapNote_Count = await dbT2.ChapNote.where('name').startsWithIgnoreCase(Book_tmp).count(); // New for V4
      //Book_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp).count();

      if(Book_ChapNote_Count>0) {

         var First_Verse = await dbT2.ChapNote.where('name').startsWithIgnoreCase(Book_tmp).first(); // New for V4
         //var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).first();

         var argN = First_Verse.name;

         var res = argN.split("_");

         var arg1 = res[0];  // tmp_book_no
         var arg2 = res[1];  // tmp_chap_no
         var arg3 = 1;  // tmp_vers_no
         var arg4 = 1;  // tmp_vers_no

         //var arg1 = First_Verse.book_no;
         //var arg2 = First_Verse.chap_no;
         //var arg3 = First_Verse.vers_no;
         //var arg4 = First_Verse.vers_no;

         var VH_Bname = BookAbbr4[i];

         var Book_Count_Str = VH_Bname + ' (' + Book_ChapNote_Count + ')';

         //var Book_Count_Str = VH_Bname + ' (' + Book_Verse_Count + ')' + '<br>';

         //text1 += Book_Count_Str;

         text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Show_Book_ChapNote_Only();return false;">' + Book_Count_Str + '</a><br>';



         //VersML_B.push(arg1); 
         //VersML_C.push(arg2); 
         //VersML_V.push(arg3); 
         //VersML_T.push(arg4); 

      }
      else {  // no data


      }


   }  // End of for (i = 0; i < 66; i++)



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Chap_Notes").innerHTML = text1;

    document.getElementById("Chap_Note_Textarea").value = '';

    document.getElementById("Chap_Note_Textarea").readOnly = true;

    //Read_Chap_Note();


}   // End of function Show_All_ChapNote_Only()


async function Show_Book_ChapNote_Only() {  // New for V7

   //var Book_Verse_Count = 0;

   var Book_tmp = nowbook + '_';

   //Book_Verse_Count = await dbT2.ChapNote.where('name').startsWithIgnoreCase(Book_tmp).count();

   let Verse = await dbT2.ChapNote.where('name').startsWithIgnoreCase(Book_tmp).toArray(); 

      if (Verse) {

         var text1;

         text1 = "Book Chap Note<br>";

         for (i = 0; i < Verse.length; i++) {

            //var tmp_book_no = Verse[i].book_no;
            //var tmp_chap_no = Verse[i].chap_no;
            //var tmp_vers_no = Verse[i].vers_no;

            var argN = Verse[i].name;

            var res = argN.split("_");

            //var str = "22_11";
            //var res = str.split("_");
            //document.getElementById("demo").innerHTML = res[1];            

            var arg1 = res[0];  // tmp_book_no
            var arg2 = res[1];  // tmp_chap_no
            var arg3 = 1;  // tmp_vers_no
            var arg4 = 1;  // tmp_vers_no

            var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
            var VH_Chap = Number(arg2) + 1;
            var VH_Vers = arg3;
            var VH_To_Vers = arg4;

            if(arg4>arg3)
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
            else
               var VH = VH_Bname + ' ' + VH_Chap ; 
               //var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Read_Chap_Note();return false;">' + VH + '</a><br>';

         } // End of for (i = 0; i < Verse.length; i++)

      }
      else {

      }  // End of if (Verse)

    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Chap_Notes").innerHTML = text1;



}   // End of function Show_Book_ChapNote_Only()


function Hide_ChapNote_Only() {   // Show all items in Bookmark5 *** Only ***
                                   // Do Not Write all items to files ***

    //Show_MLs_F=0; // 1 means Show, 0 means Hide


   //if(Show_MLs_F==0 && Show_BookmarkNote_F==0 && Show_History_F==0 && Show_Bookmark_F==0 && Show_Bookmark1_F==0 && Show_Bookmark2_F==0 && Show_Bookmark3_F==0 && Show_Bookmark4_F==0 && Show_Bookmark5_F==0) { // 1 means Show, 0 means Hide

      //document.getElementById("His_Container").style.width = "0%";
      //document.getElementById("Bible_Container").style.width = "100%";

   //}

    document.getElementById("Chap_Notes").innerHTML = "";


}   // End of function Hide_ChapNote_Only()


async function Show_Recent_ChapNote_Only() {  // New for V7

  let Verse = await dbT2.ChapNote.orderBy('date').reverse().limit(30).toArray();  // order by chap_no, from big to small
                                                                                // Recent 30
      if (Verse) {

         var text1;

         text1 = "R30 Chap Note<br>";

         for (i = 0; i < Verse.length; i++) {

            var argN = Verse[i].name;

            var res = argN.split("_");

            //var str = "22_11";
            //var res = str.split("_");
            //document.getElementById("demo").innerHTML = res[1];  

            var arg1 = res[0];  // tmp_book_no
            var arg2 = res[1];  // tmp_chap_no
            var arg3 = 1;  // tmp_vers_no
            var arg4 = 1;  // tmp_vers_no

            var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
            var VH_Chap = Number(arg2) + 1;
            var VH_Vers = arg3;
            var VH_To_Vers = arg4;

            if(arg4>arg3)
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
            else
               var VH = VH_Bname + ' ' + VH_Chap ; 
               //var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Read_Chap_Note();return false;">' + VH + '</a><br>';

         } // End of for (i = 0; i < Verse.length; i++)

      }
      else {

      }  // End of if (Verse)

    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Chap_Notes").innerHTML = text1;


}   // End of function Show_Recent_ChapNote_Only()


async function Exp_from_ChapNote_Test2Db_Old() { // New for V7 ,  Not in Use


  let Verse = await dbT2.ChapNote.toArray();

  var Verse_Count = Verse.length;

  if (Verse) {

     //var text = 'i!^_^,' + Verse_Count.toString();

     //var text = 'cn^_^,' + Verse_Count.toString();

     var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"


     for (i = 0; i < Verse.length; i++) {

        let name = Verse[i].name;
        let date = Verse[i].date;
        let content = Verse[i].content;

        text += '|' + name + '|' + date + '|' + content;  // change seprator to "|"

        //text += ',' + name + ',' + date + ',' + content;


     } // End of for (i = 0; i < Verse.length; i++)

     var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

     //Exp_to_books_Test2Db.value = mesg1;

     //myExp_Db_Display.innerHTML = text;
     //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
     //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

     document.getElementById("Imp_to_books_Test2Db").value = text;

     copyFunction5(mesg1);

     //myExp_Db_Display.innerHTML = "";


  } // End of if (Verse)

} // End of function Exp_from_ChapNote_Test2Db_Old()



async function Exp_from_Pictures_Test2Db() { // Add on 20201201


  let Verse = await dbT2.Pictures.toArray();

  var Verse_Count = Verse.length;

  if (Verse) {

     //var text = 'i!^_^,' + Verse_Count.toString();

     //var text = 'cn^_^,' + Verse_Count.toString();

     //var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"

     var text = 'pi^_^|' + Verse_Count.toString();  // change seprator to "|"


     for (i = 0; i < Verse.length; i++) {

        let id = Verse[i].ID;
        let p_name = Verse[i].P_Name;
        let f_name = Verse[i].F_Name;

        let p_height = Verse[i].P_Height;
        let p_width = Verse[i].P_Width;

        let mainverses = Verse[i].MainVerses;  // MainVerses

        var Main_Verse1_tmp = '';
        var Main_Verse2_tmp = '';
        var Main_Verse3_tmp = '';

        if (mainverses) {

           Main_Verse1_tmp = mainverses[0];
           Main_Verse2_tmp = mainverses[1];
           Main_Verse3_tmp = mainverses[2];

        }
        else {

           Main_Verse1_tmp = "";
           Main_Verse2_tmp = "";
           Main_Verse3_tmp = "";

        }


        text += '|' + id + '|' + p_name + '|' + f_name + '|' + p_height + '|' + p_width;  // change seprator to "|"

        text += '|' + Main_Verse1_tmp + '|' + Main_Verse2_tmp + '|' + Main_Verse3_tmp;


        //text += '|' + name + '|' + date + '|' + content;  // change seprator to "|"

        //text += ',' + name + ',' + date + ',' + content;


     } // End of for (i = 0; i < Verse.length; i++)

     var mesg1 = 'Pictures Info ' + Verse_Count + ' exported'

     //Exp_to_books_Test2Db.value = mesg1;

     //myExp_Db_Display.innerHTML = text;
     //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
     //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

     document.getElementById("Imp_to_books_Test2Db").value = text;

     copyFunction5(mesg1);

     //myExp_Db_Display.innerHTML = "";


  } // End of if (Verse)

} // End of function Exp_from_Pictures_Test2Db() 


async function Exp_from_ChapNote_Test2Db() { // New for V7


  let Verse = await dbT2.ChapNote.toArray();

  var Verse_Count = Verse.length;

  if (Verse) {

     //var text = 'i!^_^,' + Verse_Count.toString();

     //var text = 'cn^_^,' + Verse_Count.toString();

     var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"


     for (i = 0; i < Verse.length; i++) {

        let name = Verse[i].name;
        let date = Verse[i].date;
        let content = Verse[i].content;

        // Encrypt Content then Exp

        //var Nametext_input = document.getElementById("MyNote_A1").value; 

        //var Key_input = document.getElementById("Key").value; 

        //var encryptedName = CryptoJS.AES.encrypt(Nametext_input, Key_input);

        var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

        var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

        //var encryptedName_Str = encryptedName.toString();

        //var encryptedContent_Str = encryptedContent.toString();


        text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

        //text += '|' + name + '|' + date + '|' + content;  // change seprator to "|"

        //text += ',' + name + ',' + date + ',' + content;


     } // End of for (i = 0; i < Verse.length; i++)

     var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

     //Exp_to_books_Test2Db.value = mesg1;

     //myExp_Db_Display.innerHTML = text;
     //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
     //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

     document.getElementById("Imp_to_books_Test2Db").value = text;

     copyFunction5(mesg1);

     //myExp_Db_Display.innerHTML = "";


  } // End of if (Verse)

} // End of function Exp_from_ChapNote_Test2Db()


async function Exp_from_ChapNote_Test2Db_late_than() { // New for V7

  var Verse_Count = 0;

  var Late_than_date = document.getElementById("Exp_from_ChapNote_Test2Db_late_than_date").value;

  if(Late_than_date!='') {

     let Verse = await dbT2.ChapNote.where('date').above(Late_than_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        //var text = 'i!^_^,' + Verse_Count.toString();

        var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let date = Verse[i].date;
           let content = Verse[i].content;

           // Encrypt Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

           text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

           //text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ChapNote 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_ChapNote_Test2Db_late_than()



async function Exp_from_ChapNote_Test2Db_startWith() { // New for V7

  var Verse_Count = 0;

  var startWith_date = document.getElementById("Exp_from_ChapNote_Test2Db_startWith_date").value;

  if(startWith_date!='') {

     let Verse = await dbT2.ChapNote.where('date').startsWithIgnoreCase(startWith_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        //var text = 'i!^_^,' + Verse_Count.toString();

        var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let date = Verse[i].date;
           let content = Verse[i].content;

           // Encrypt Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

           text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

           //text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ChapNote 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_ChapNote_Test2Db_startWith()


async function Exp_from_ChapNote_Test2Db_Recent() { // New for V7

  var Verse_Count = 0;

  var Limit_No = document.getElementById("Exp_from_ChapNote_Test2Db_Recent").value;

  if(Limit_No!='') {

     //let Verse = await dbT2.ChapNote.where('date').startsWithIgnoreCase(startWith_date).toArray();

     // let Verse = await dbT2.ChapNote.orderBy('date').reverse().limit(30).toArray();  // order by chap_no, from big to small
                                                                                        // Recent 30

     let Verse = await dbT2.ChapNote.orderBy('date').reverse().limit(Limit_No).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        //var text = 'i!^_^,' + Verse_Count.toString();

        var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let date = Verse[i].date;
           let content = Verse[i].content;

           // Encrypt Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

           text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

           //text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ChapNote 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_ChapNote_Test2Db_Recent()


async function Exp_from_ChapNote_Test2Db_Book_Chap() { // New for V7

  var Verse_Count = 0;

  var Book_Chap_tmp = document.getElementById("Exp_from_ChapNote_Test2Db_Book_Chap").value; // Exo 32

  var argN = Book_Chap_tmp;

  var res = argN.split(" ");

  var arg1 = res[0];  // Exo
  var arg2 = res[1];  // 32

  var Bname_tmp = '100'; // 100 means no value, 101 means has valus
  var VH_Bname = '';

  var VH_Name_tmp = '';

  for (i = 0; i < BookAbbr4.length; i++) {

     if (BookAbbr4[i] == arg1) {

        VH_Bname = i; // 1
        Bname_tmp = '101';

     }

  }

  var VH_Chap = Number(arg2) - 1; // 31

  if (Bname_tmp == '101') {

     VH_Name_tmp = VH_Bname + '_' + VH_Chap;

  }
 


  if(Book_Chap_tmp!='' && Bname_tmp == '101' && VH_Name_tmp!='') {

     //let Verse = await dbT2.ChapNote.where('date').startsWithIgnoreCase(startWith_date).toArray();

     // let Verse = await dbT2.ChapNote.orderBy('date').reverse().limit(30).toArray();  // order by chap_no, from big to small
                                                                                        // Recent 30

     //let Verse = await dbT2.ChapNote.orderBy('date').reverse().limit(Limit_No).toArray();


     let Verse = await dbT2.ChapNote.where('name').equals(VH_Name_tmp).toArray(); // 1_31


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        //var text = 'i!^_^,' + Verse_Count.toString();

        var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let date = Verse[i].date;
           let content = Verse[i].content;

           // Encrypt Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

           text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

           //text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ChapNote 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_ChapNote_Test2Db_Book_Chap()




async function Exp_from_SermonNote_Test2Db_Time_Equal() { // New for V12

  var Verse_Count = 0;

  var startWith_date = document.getElementById("Exp_from_SermonNote_Test2Db_Time_Equal").value;

  if(startWith_date!='') {

     let Verse = await dbT2.SermonNote.where('Name').startsWithIgnoreCase(startWith_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        //var text = 'i!^_^,' + Verse_Count.toString();

        //var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"


        var text = 'sn^_^|' + Verse_Count.toString();  // change seprator to "|" ,  for SermonNote


        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].Name;
           let speaker = Verse[i].Speaker;
           let topic = Verse[i].Topic;
           let content = Verse[i].Content;
           //let content = Verse[i].Content;  // MainVerses
           //let content = Verse[i].Content;  // KeyWords

           let mainverses = Verse[i].MainVerses;  // MainVerses
           let keywords = Verse[i].KeyWords;      // KeyWords

           var Main_Verse1_tmp = '';
           var Main_Verse2_tmp = '';
           var Main_Verse3_tmp = '';
           var Main_Verse4_tmp = '';
           var Main_Verse5_tmp = '';

           var Key_Word1_tmp = '';
           var Key_Word2_tmp = '';
           var Key_Word3_tmp = '';
           var Key_Word4_tmp = '';
           var Key_Word5_tmp = '';

           let verses = Verse[i].Verses;

           //dbT2.SermonNote.add({Name,Speaker,Topic,Content,Verses });

           if (mainverses) {

              Main_Verse1_tmp = mainverses[0];
              Main_Verse2_tmp = mainverses[1];
              Main_Verse3_tmp = mainverses[2];
              Main_Verse4_tmp = mainverses[3];
              Main_Verse5_tmp = mainverses[4];

           }
           else {

              Main_Verse1_tmp = "";
              Main_Verse2_tmp = "";
              Main_Verse3_tmp = "";
              Main_Verse4_tmp = "";
              Main_Verse5_tmp = "";

           }

           if (keywords) {

              Key_Word1_tmp = keywords[0];
              Key_Word2_tmp = keywords[1];
              Key_Word3_tmp = keywords[2];
              Key_Word4_tmp = keywords[3];
              Key_Word5_tmp = keywords[4];

           }
           else {

              Key_Word1_tmp = "";
              Key_Word2_tmp = "";
              Key_Word3_tmp = "";
              Key_Word4_tmp = "";
              Key_Word5_tmp = "";

           }


           //let date = Verse[i].date;
           //let content = Verse[i].content;

           // Encrypt Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

           text += '|' + name + '|' + speaker + '|' + topic + '|' + encryptedContent;  // change seprator to "|"

           text += '|' + Main_Verse1_tmp + '|' + Main_Verse2_tmp + '|' + Main_Verse3_tmp + '|' + Main_Verse4_tmp + '|' + Main_Verse5_tmp;

           text += '|' + Key_Word1_tmp + '|' + Key_Word2_tmp + '|' + Key_Word3_tmp + '|' + Key_Word4_tmp + '|' + Key_Word5_tmp + '|' + verses;



           //text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

           //text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'SermonNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'SermonNote 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_SermonNote_Test2Db_Time_Equal()




async function Exp_from_SermonNote_Test2Db_Time_Between() { // New for V12

  var start_date = document.getElementById("Exp_Time_start").value;

  var end_date = document.getElementById("Exp_Time_end").value;


  var Verse_Count = 0;

  //var startWith_date = document.getElementById("Exp_from_SermonNote_Test2Db_Time_Equal").value;

  //if(startWith_date!='') {

  if(start_date!='' && end_date!='') {

     let Verse = await dbT2.SermonNote.where('Name').between(start_date, end_date, true, true).reverse().toArray();

     //let Verse = await dbT2.SermonNote.where('Name').startsWithIgnoreCase(startWith_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        //var text = 'i!^_^,' + Verse_Count.toString();

        //var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"


        var text = 'sn^_^|' + Verse_Count.toString();  // change seprator to "|" ,  for SermonNote


        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].Name;
           let speaker = Verse[i].Speaker;
           let topic = Verse[i].Topic;
           let content = Verse[i].Content;
           //let content = Verse[i].Content;  // MainVerses
           //let content = Verse[i].Content;  // KeyWords

           let mainverses = Verse[i].MainVerses;  // MainVerses
           let keywords = Verse[i].KeyWords;      // KeyWords

           var Main_Verse1_tmp = '';
           var Main_Verse2_tmp = '';
           var Main_Verse3_tmp = '';
           var Main_Verse4_tmp = '';
           var Main_Verse5_tmp = '';

           var Key_Word1_tmp = '';
           var Key_Word2_tmp = '';
           var Key_Word3_tmp = '';
           var Key_Word4_tmp = '';
           var Key_Word5_tmp = '';

           let verses = Verse[i].Verses;

           //dbT2.SermonNote.add({Name,Speaker,Topic,Content,Verses });

           if (mainverses) {

              Main_Verse1_tmp = mainverses[0];
              Main_Verse2_tmp = mainverses[1];
              Main_Verse3_tmp = mainverses[2];
              Main_Verse4_tmp = mainverses[3];
              Main_Verse5_tmp = mainverses[4];

           }
           else {

              Main_Verse1_tmp = "";
              Main_Verse2_tmp = "";
              Main_Verse3_tmp = "";
              Main_Verse4_tmp = "";
              Main_Verse5_tmp = "";

           }

           if (keywords) {

              Key_Word1_tmp = keywords[0];
              Key_Word2_tmp = keywords[1];
              Key_Word3_tmp = keywords[2];
              Key_Word4_tmp = keywords[3];
              Key_Word5_tmp = keywords[4];

           }
           else {

              Key_Word1_tmp = "";
              Key_Word2_tmp = "";
              Key_Word3_tmp = "";
              Key_Word4_tmp = "";
              Key_Word5_tmp = "";

           }


           //let date = Verse[i].date;
           //let content = Verse[i].content;

           // Encrypt Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

           text += '|' + name + '|' + speaker + '|' + topic + '|' + encryptedContent;  // change seprator to "|"

           text += '|' + Main_Verse1_tmp + '|' + Main_Verse2_tmp + '|' + Main_Verse3_tmp + '|' + Main_Verse4_tmp + '|' + Main_Verse5_tmp;

           text += '|' + Key_Word1_tmp + '|' + Key_Word2_tmp + '|' + Key_Word3_tmp + '|' + Key_Word4_tmp + '|' + Key_Word5_tmp + '|' + verses;



           //text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

           //text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'SermonNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'SermonNote 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_SermonNote_Test2Db_Time_Between()




async function Download_from_SermonNote_Test2Db_Time_Between() { // New for V12

  var start_date = document.getElementById("Download_Time_start").value;

  var end_date = document.getElementById("Download_Time_end").value;


  var Verse_Count = 0;

  //var startWith_date = document.getElementById("Exp_from_SermonNote_Test2Db_Time_Equal").value;

  //if(startWith_date!='') {

  if(start_date!='' && end_date!='') {

     let Verse = await dbT2.SermonNote.where('Name').between(start_date, end_date, true, true).reverse().toArray();

     //let Verse = await dbT2.SermonNote.where('Name').startsWithIgnoreCase(startWith_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        //var text = 'i!^_^,' + Verse_Count.toString();

        //var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"

        //var text = 'sn^_^|' + Verse_Count.toString();  // change seprator to "|" ,  for SermonNote

        //var text = 'Sermon_Notes_Download = new Array(' + Verse_Count.toString();  

        var text = 'Sermon_Notes_Download = new Array("' + Verse_Count.toString() + '"';  

                    // change seprator to "," ,  for SermonNote Dowmload to File
                    // Array name : Sermon_Notes_Download


        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].Name;
           let speaker = Verse[i].Speaker;
           let topic = Verse[i].Topic;
           let content = Verse[i].Content;
           //let content = Verse[i].Content;  // MainVerses
           //let content = Verse[i].Content;  // KeyWords

           let mainverses = Verse[i].MainVerses;  // MainVerses
           let keywords = Verse[i].KeyWords;      // KeyWords

           var Main_Verse1_tmp = '';
           var Main_Verse2_tmp = '';
           var Main_Verse3_tmp = '';
           var Main_Verse4_tmp = '';
           var Main_Verse5_tmp = '';

           var Key_Word1_tmp = '';
           var Key_Word2_tmp = '';
           var Key_Word3_tmp = '';
           var Key_Word4_tmp = '';
           var Key_Word5_tmp = '';

           let verses = Verse[i].Verses;

           //dbT2.SermonNote.add({Name,Speaker,Topic,Content,Verses });

           if (mainverses) {

              Main_Verse1_tmp = mainverses[0];
              Main_Verse2_tmp = mainverses[1];
              Main_Verse3_tmp = mainverses[2];
              Main_Verse4_tmp = mainverses[3];
              Main_Verse5_tmp = mainverses[4];

           }
           else {

              Main_Verse1_tmp = "";
              Main_Verse2_tmp = "";
              Main_Verse3_tmp = "";
              Main_Verse4_tmp = "";
              Main_Verse5_tmp = "";

           }

           if (keywords) {

              Key_Word1_tmp = keywords[0];
              Key_Word2_tmp = keywords[1];
              Key_Word3_tmp = keywords[2];
              Key_Word4_tmp = keywords[3];
              Key_Word5_tmp = keywords[4];

           }
           else {

              Key_Word1_tmp = "";
              Key_Word2_tmp = "";
              Key_Word3_tmp = "";
              Key_Word4_tmp = "";
              Key_Word5_tmp = "";

           }


           //let date = Verse[i].date;
           //let content = Verse[i].content;

           // Encrypt Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

           var encryptedVerses = CryptoJS.AES.encrypt(verses, Key_input);  // Add on 2020.08.20 for Download to File

           // Encrypt Topic

           var encryptedTopic = CryptoJS.AES.encrypt(topic, Key_input);

           // Encrypt Speaker

           var encryptedSpeaker = CryptoJS.AES.encrypt(speaker, Key_input);

           // Encrypt Key_Word1_tmp (1-5)

           var encryptedKey_Word1 = CryptoJS.AES.encrypt(Key_Word1_tmp, Key_input);
           var encryptedKey_Word2 = CryptoJS.AES.encrypt(Key_Word2_tmp, Key_input);
           var encryptedKey_Word3 = CryptoJS.AES.encrypt(Key_Word3_tmp, Key_input);
           var encryptedKey_Word4 = CryptoJS.AES.encrypt(Key_Word4_tmp, Key_input);
           var encryptedKey_Word5 = CryptoJS.AES.encrypt(Key_Word5_tmp, Key_input);



           //text += ',' + name + ',' + speaker + ',' + topic + ',' + encryptedContent + '\n';  // change seprator to ","

           //text += ',' + Main_Verse1_tmp + ',' + Main_Verse2_tmp + ',' + Main_Verse3_tmp + ',' + Main_Verse4_tmp + ',' + Main_Verse5_tmp;

           //text += ',' + Key_Word1_tmp + ',' + Key_Word2_tmp + ',' + Key_Word3_tmp + ',' + Key_Word4_tmp + ',' + Key_Word5_tmp + ',' + encryptedVerses + '\n';



           text += ',"' + name + '","' + encryptedSpeaker + '","' + encryptedTopic + '","' + encryptedContent + '"';  // change seprator to ","

           text += ',\n"' + Main_Verse1_tmp + '","' + Main_Verse2_tmp + '","' + Main_Verse3_tmp + '","' + Main_Verse4_tmp + '","' + Main_Verse5_tmp + '"';

           text += ',\n"' + encryptedKey_Word1 + '","' + encryptedKey_Word2 + '","' + encryptedKey_Word3 + '","' + encryptedKey_Word4 + '","' + encryptedKey_Word5 + '","' + encryptedVerses + '"\n';


           //text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

           //text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)


        text += ');'; // Add on 2020.08.20 for Download to File


        //console.log(csv);
        console.log(text);
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(text);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'Sermon_Notes_Download.txt'; // use .txt , then change to .js by manual
        hiddenElement.click();


        var mesg1 = 'SermonNote ' + Verse_Count + ' downloaded';

        myExp_Db_Display.innerHTML = mesg1;

        //var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        //document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        //copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'SermonNote 0 downloaded';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Download_from_SermonNote_Test2Db_Time_Between()


function Clear_Picture_Info() { // Clear

   document.getElementById("PictureName").value = '';
   document.getElementById("FileName").value = '';
   document.getElementById("PictureHeight").value = '';
   document.getElementById("PictureWidth").value = '';

   document.getElementById("MainVerse1").value = '';
   document.getElementById("MainVerse2").value = '';
   document.getElementById("MainVerse3").value = ''; 

} // End of function Clear_Picture_Info()



async function Update_Picture_Info_To_DB() { // Update 

   document.getElementById("Add_Picture_Message").innerHTML = '';

   var P_Name_tmp = document.getElementById("PictureName").value;
   var F_Name_tmp = document.getElementById("FileName").value;
   var P_Height_tmp = document.getElementById("PictureHeight").value;
   var P_Width_tmp = document.getElementById("PictureWidth").value;

   var Main_Verse1_tmp = document.getElementById("MainVerse1").value;
   var Main_Verse2_tmp = document.getElementById("MainVerse2").value;
   var Main_Verse3_tmp = document.getElementById("MainVerse3").value;

   var Book_Picture_Count = 0;

   var Main_Verse1_tmp_3 = Main_Verse1_tmp.substr(0, 3);

   Book_Picture_Count = await dbT2.Pictures.where('MainVerses').startsWithIgnoreCase(Main_Verse1_tmp_3).distinct().count() + 1;

   if (Book_Picture_Count==1)
      Book_Picture_Count = '01';
   if (Book_Picture_Count==2)
      Book_Picture_Count = '02';
   if (Book_Picture_Count==3)
      Book_Picture_Count = '03';
   if (Book_Picture_Count==4)
      Book_Picture_Count = '04';
   if (Book_Picture_Count==5)
      Book_Picture_Count = '05';
   if (Book_Picture_Count==6)
      Book_Picture_Count = '06';
   if (Book_Picture_Count==7)
      Book_Picture_Count = '07';
   if (Book_Picture_Count==8)
      Book_Picture_Count = '08';
   if (Book_Picture_Count==9)
      Book_Picture_Count = '09';

   var ID_tmp = Main_Verse1_tmp_3 + Book_Picture_Count;


   var Verse_Count = 0;

   var Picture_Exist = 'N';

   var ID_Update_Tmp = '';

   if (P_Name_tmp!='' && F_Name_tmp!='' && P_Height_tmp!='' && P_Width_tmp!='' && Main_Verse1_tmp!='') {

      let Verse = await dbT2.Pictures.where('P_Name').startsWithIgnoreCase(P_Name_tmp).toArray(); // check P_Name_tmp

      //let Verse = await dbT2.Pictures.where('P_Name').equals(P_Name_tmp).toArray(); // check P_Name_tmp

      Verse_Count = Verse.length;

      if (Verse) {  

        for (i = 0; i < Verse.length; i++) {

           let Name_TMP = Verse[i].P_Name;   

           if ( Name_TMP == P_Name_tmp ) { // Exist then Update

              Picture_Exist = 'Y';

              ID_Update_Tmp = Verse[i].ID;

              //dbT2.SermonNote.update(Name, { Speaker: Speaker_tmp, Topic: Topic_tmp, Content: Content_tmp, MainVerses: [Main_Verse1_tmp, Main_Verse2_tmp, Main_Verse3_tmp, Main_Verse4_tmp, Main_Verse5_tmp], KeyWords: [Key_Word1_tmp, Key_Word2_tmp, Key_Word3_tmp, Key_Word4_tmp, Key_Word5_tmp] } );

              //dbT2.Pictures.update(ID, { P_Name: Speaker_tmp, F_Name: Topic_tmp, P_Height: Content_tmp, P_Width: Content_tmp , MainVerses: [Main_Verse1_tmp, Main_Verse2_tmp, Main_Verse3_tmp] } );

              //document.getElementById("Add_Picture_Message").innerHTML = '"' + Name_TMP + '"' + ' exist already';

           }
                
        } // End of for (i = 0; i < Verse.length; i++)

      }


      if (Picture_Exist == 'Y') { // Exist then Update

         var ID = ID_Update_Tmp;

         dbT2.Pictures.update(ID, { P_Name: P_Name_tmp, F_Name: F_Name_tmp, P_Height: P_Height_tmp, P_Width: P_Width_tmp , MainVerses: [Main_Verse1_tmp, Main_Verse2_tmp, Main_Verse3_tmp] } );

         document.getElementById("Add_Picture_Message").innerHTML = '"' + P_Name_tmp + '"' + ' has been updated';

      } // End of if (Picture_Exist == 'Y')
      
      if (Picture_Exist == 'N') { // Not Exist then Click "Add New Picture"


         document.getElementById("Add_Picture_Message").innerHTML = 'Please Click [Add New Picture]';


      } // End of if (Picture_Exist == 'N')
   }
   else {

      document.getElementById("Add_Picture_Message").innerHTML = "Name, File, Height, Width and first Main Verses can't be Null";

   } // End of if (P_Name_tmp!='' && F_Name_tmp!='' && P_Height_tmp!='' && P_Width_tmp!='' && Main_Verse1_tmp!='') 




} // End of function Update_Picture_Info_To_DB()


async function Add_Picture_Info_To_DB() { // Add 

   document.getElementById("Add_Picture_Message").innerHTML = '';

   var P_Name_tmp = document.getElementById("PictureName").value;
   var F_Name_tmp = document.getElementById("FileName").value;
   var P_Height_tmp = document.getElementById("PictureHeight").value;
   var P_Width_tmp = document.getElementById("PictureWidth").value;

   var Main_Verse1_tmp = document.getElementById("MainVerse1").value;
   var Main_Verse2_tmp = document.getElementById("MainVerse2").value;
   var Main_Verse3_tmp = document.getElementById("MainVerse3").value;

   var Book_Picture_Count = 0;

   //Book_ChapNote_Count = await dbT2.ChapNote.where('name').startsWithIgnoreCase(Book_tmp).count();

   //let Verse = await dbT2.SermonNote.where('MainVerses').startsWithIgnoreCase(MainVerse_Search_Str).reverse().distinct().toArray(); // .distinct()

   //var str = "Hello world!";
   //var res = str.substr(1, 4);

   var Main_Verse1_tmp_3 = Main_Verse1_tmp.substr(0, 3);

   Book_Picture_Count = await dbT2.Pictures.where('MainVerses').startsWithIgnoreCase(Main_Verse1_tmp_3).distinct().count() + 1;

   if (Book_Picture_Count==1)
      Book_Picture_Count = '01';
   if (Book_Picture_Count==2)
      Book_Picture_Count = '02';
   if (Book_Picture_Count==3)
      Book_Picture_Count = '03';
   if (Book_Picture_Count==4)
      Book_Picture_Count = '04';
   if (Book_Picture_Count==5)
      Book_Picture_Count = '05';
   if (Book_Picture_Count==6)
      Book_Picture_Count = '06';
   if (Book_Picture_Count==7)
      Book_Picture_Count = '07';
   if (Book_Picture_Count==8)
      Book_Picture_Count = '08';
   if (Book_Picture_Count==9)
      Book_Picture_Count = '09';

   var ID_tmp = Main_Verse1_tmp_3 + Book_Picture_Count;

   //var ID_tmp = 'Eze05'; // first 3 letter of "MainVerse1" + (count_no + 1) 

   //let Verse = await dbT2.Pictures.get(ID);

   //let Verse = await dbT2.ChapNote.where('name').equals(VH_Name_tmp).toArray(); // 1_31  // startsWithIgnoreCase

   var Verse_Count = 0;

   var Picture_Exist = 'N';

   if (P_Name_tmp!='' && F_Name_tmp!='' && P_Height_tmp!='' && P_Width_tmp!='' && Main_Verse1_tmp!='') {

      let Verse = await dbT2.Pictures.where('P_Name').startsWithIgnoreCase(P_Name_tmp).toArray(); // check P_Name_tmp

      Verse_Count = Verse.length;

      if (Verse) {  // Exist

        for (i = 0; i < Verse.length; i++) {

           let Name_TMP = Verse[i].P_Name;   

           if ( Name_TMP == P_Name_tmp ) {

              Picture_Exist = 'Y';
              document.getElementById("Add_Picture_Message").innerHTML = '"' + Name_TMP + '"' + ' exist already';

           }
                
        } // End of for (i = 0; i < Verse.length; i++)

      }

      
      if (Picture_Exist == 'N') { 
         // Add new

         let ID = ID_tmp;
         let P_Name = P_Name_tmp; 
         let F_Name = F_Name_tmp; 
         let P_Height = P_Height_tmp;
         let P_Width = P_Width_tmp;

         try {

           //dbT2.SermonNote.add({Name,Speaker,Topic,Content,Verses,MainVerses: [M1_tmp, M2_tmp, M3_tmp, M4_tmp, M5_tmp],KeyWords: [K1_tmp, K2_tmp, K3_tmp, K4_tmp, K5_tmp] });

           dbT2.Pictures.add({ID,P_Name,F_Name,P_Height,P_Width, MainVerses: [Main_Verse1_tmp, Main_Verse2_tmp, Main_Verse3_tmp] });

           document.getElementById("Add_Picture_Message").innerHTML = '"' + P_Name + '"' + ' has been added ';

         } catch(err) {
           if (err.name == 'ConstraintError') {
             alert("Such Verse exists in indexedDB already");
           } else {
             throw err;
           }
         }

         // End of Add new      

      } // End of if (Verse)
   }
   else {

      document.getElementById("Add_Picture_Message").innerHTML = "Name, File, Height, Width and first Main Verses can't be Null";

   } // End of if (P_Name_tmp!='' && F_Name_tmp!='' && P_Height_tmp!='' && P_Width_tmp!='' && Main_Verse1_tmp!='') 


} // End of function Add_Picture_Info_To_DB()