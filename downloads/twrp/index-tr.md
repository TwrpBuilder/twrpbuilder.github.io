---
layout: post
title: TWRP Builder İndirmeleri
lang: tr
permalink: tr/downloads/twrp/
update: 11/02/2018
---
{% assign translate = site.data.translations.lang[page.lang] %}
<em style="color: #bbb">{{translate.hint}}</em>
<style> 
   p {
   margin: -2em 0 2em 0;
   }
</style>
<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
<script src="/login/index.js"></script>
<!-- Main -->
<section id="main" class="wrapper" style="padding: 1em 0">
   <div class="inner">
      <!-- Table -->
      <div class="table-wrapper">
         <table>
             <div id="tabs">
                <button id="tab_completed" onclick="table_completed()">{{translate.buildscompleted}}</button>
                <button id="tab_in-queue" onclick="table_inQueue()">{{translate.buildsinqueue}}</button>
                <button id="tab_running" onclick="table_running()">{{translate.buildsrunning}}</button>
                <button id="tab_rejected" onclick="table_rejected()">{{translate.buildsrejected}}</button>
             </div>
            <tbody id="table_completed">
               <tr>
                  <th>#</th>
                  <th>{{translate.brand}}</th>
                  <th>{{translate.model}}</th>
                  <th>{{translate.codename}}</th>
                  <th>{{translate.maintainer}}</th>
                  <th>{{translate.dateadded}}</th>
                  <th>{{translate.downloadlink}}</th>
               </tr>
               <script>
                  var userDataRef = firebase.database().ref("Builds").orderByKey();
                  var button = document.createElement("button");
                  button.innerHTML = "Do Something";
                  
                  userDataRef.once("value").then(function(snapshot) {
                      var content='';
                      content+='<tr>'
                      content+='<th>#</th>'
                      content+='<th>{{translate.brand}}</th>'
                      content+='<th>{{translate.model}}</th>'
                      content+='<th>{{translate.codename}}</th>'
                      content+='<th>{{translate.maintainer}}</th>'
                      content+='<th>{{translate.dateadded}}</th>'
                      content+='<th>{{translate.downloadlink}}</th>'
                      content+='</tr>'

                      snapshot = reverseSnapshot(snapshot);

                      snapshot.forEach(function(val){
                        var count="";
                        var brand=val.brand;
                        var model=val.model;
                        var codename=val.codeName;
                        var maintainer=val.developerEmail;
                        var date=val.date;
                        var suppliant=val.email;
                        var url=val.url;
                        var body = document.getElementsByTagName("body")[0];
                        content+='<tr>'
                        content +='<td class="count">'+count+'</td>'
                        content +='<td>'+brand+'</td>'
                        content +='<td>'+model+'</td>'
                        content +='<td>'+codename+'</td>'
                        content +='<td class="maintainer">'+maintainer+'</td>'
                        content +='<td>'+date+'</td>'
                        content+='<td><a href='+url+' target="_blank"> {{translate.download}} </a></td>'
                        content+='</tr>'
                      });
                      
                      document.getElementById("table_completed").innerHTML = content;

                      $('.maintainer').each(function(i) {
                          $(this).text($(this).text().replace('@gmail.com',''));
                          $(this).text($(this).text().replace('kirito9xda','kirito9'));
                          $(this).text($(this).text().replace('mnshereef','Sheref'));
                          $(this).text($(this).text().replace('ahmedhady6','AhmedHadyHassaan'));
                          $(this).text($(this).text().replace('sk2812283','Surendrajat'));
                      });

                      $('.count').each(function(i) {
                        var x = $(this).index()+1;
                        var y = i + 1;
                        $(this).text(x+i);
                        $(this).wrap($('<a>').attr('href','javascript:;'));
                        $(this).attr('id',x+i);

                        $(this).click(function() {
                            $('.count').parent().parent().css({'background-color':''});
                            $(this).parent().parent().css('background-color','rgba(197, 218, 4, 0.55)');
                            parent.location.href = href + '#' + y;
                        });
                      });

                      if (window.location.href.indexOf("#") > -1) {
                        var firstDigit = window.location.href[window.location.href.length -3];
                        var secondDigit = window.location.href[window.location.href.length -2];
                        var thirdDigit = window.location.href[window.location.href.length -1];
                        var id =  '';
                        if (firstDigit != '#' & secondDigit != '#') {
                            id = firstDigit + secondDigit + thirdDigit;
                        } else if (firstDigit == '#' & secondDigit != '#') {
                            id = secondDigit + thirdDigit;
                        } else {
                            id = thirdDigit;
                        };
                        var item = "#"+id;
                        $(item).parent().parent().css('background-color','rgba(197, 218, 4, 0.55)');
                      }
                  });
               </script>
               <style>
                  .load-bar {
                  position: relative;
                  width: 100%;
                  height: 4px;
                  background-color: #fdba2c;
                  }
                  .bar {
                  content: "";
                  display: inline;
                  position: absolute;
                  width: 0;
                  height: 100%;
                  left: 50%;
                  text-align: center;
                  }
                  .bar:nth-child(1) {
                  background-color: #da4733;
                  animation: loading 3s linear infinite;
                  }
                  .bar:nth-child(2) {
                  background-color: #3b78e7;
                  animation: loading 3s linear 1s infinite;
                  }
                  .bar:nth-child(3) {
                  background-color: #fdba2c;
                  animation: loading 3s linear 2s infinite;
                  }
                  @keyframes loading {
                  from {left: 50%; width: 0;z-index:100;}
                  33.3333% {left: 0; width: 100%;z-index: 10;}
                  to {left: 0; width: 100%;}
                  }
               </style>
            </tbody>
            
            <tbody id="table_in-queue">
               <tr>
                  <th>#</th>
                  <th>{{translate.brand}}</th>
                  <th>{{translate.model}}</th>
                  <th>{{translate.codename}}</th>
                  <th>{{translate.maintainer}}</th>
                  <th>{{translate.dateadded}}</th>
               </tr>
               <script>
                  var userDataRef = firebase.database().ref("InQueue").orderByKey();
                  var button = document.createElement("button");
                  button.innerHTML = "Do Something";
                  
                  userDataRef.once("value").then(function(snapshot) {
                      var content='';
                      content+='<tr>'
                      content+='<th>#</th>'
                      content+='<th>{{translate.brand}}</th>'
                      content+='<th>{{translate.model}}</th>'
                      content+='<th>{{translate.codename}}</th>'
                      content+='<th>{{translate.dateadded}}</th>'
                      content+='</tr>'

                      snapshot = reverseSnapshot(snapshot);

                      snapshot.forEach(function(val){
                        var count2="";
                        var brand=val.brand;
                        var model=val.model;
                        var codename=val.codeName;
                        var date=val.date;
                        var body = document.getElementsByTagName("body")[0];
                        content+='<tr>'
                        content +='<td class="count2">'+count2+'</td>'
                        content +='<td>'+brand+'</td>'
                        content +='<td>'+model+'</td>'
                        content +='<td>'+codename+'</td>'
                        content +='<td>'+date+'</td>'
                        content+='</tr>'
                      });
                      
                      document.getElementById("table_in-queue").innerHTML = content;

                      $('.count2').each(function(i) {
                        var x = $(this).index()+1;
                        var y = i + 1;
                        $(this).text(x+i);
                      });
                  });
               </script>
           </tbody>
           
           <tbody id="table_running">
               <tr>
                  <th>#</th>
                  <th>{{translate.brand}}</th>
                  <th>{{translate.model}}</th>
                  <th>{{translate.codename}}</th>
                  <th>{{translate.maintainer}}</th>
                  <th>{{translate.dateadded}}</th>
               </tr>
               <script>
                  var userDataRef = firebase.database().ref("RunningBuild").orderByKey();
                  var button = document.createElement("button");
                  button.innerHTML = "Do Something";
                  
                  userDataRef.once("value").then(function(snapshot) {
                      var content='';
                      content+='<tr>'
                      content+='<th>#</th>'
                      content+='<th>{{translate.brand}}</th>'
                      content+='<th>{{translate.model}}</th>'
                      content+='<th>{{translate.codename}}</th>'
                      content+='<th>{{translate.dateadded}}</th>'
                      content+='</tr>'

                      snapshot = reverseSnapshot(snapshot);

                      snapshot.forEach(function(val){
                        var count4="";
                        var brand=val.brand;
                        var model=val.model;
                        var codename=val.codeName;
                        var date=val.date;
                        var body = document.getElementsByTagName("body")[0];
                        content+='<tr>'
                        content +='<td class="count4">'+count4+'</td>'
                        content +='<td>'+brand+'</td>'
                        content +='<td>'+model+'</td>'
                        content +='<td>'+codename+'</td>'
                        content +='<td>'+date+'</td>'
                        content+='</tr>'
                      });
                      
                      document.getElementById("table_running").innerHTML = content;

                      $('.count4').each(function(i) {
                        var x = $(this).index()+1;
                        var y = i + 1;
                        $(this).text(x+i);
                      });
                  });
               </script>
           </tbody>
           
           <tbody id="table_rejected">
               <tr>
                  <th>#</th>
                  <th>{{translate.brand}}</th>
                  <th>{{translate.model}}</th>
                  <th>{{translate.dateadded}}</th>
                  <th>{{translate.rejector}}</th>
                  <th>{{translate.note}}</th>
               </tr>
               <script>
                  var userDataRef = firebase.database().ref("Rejected").orderByKey();
                  var button = document.createElement("button");
                  button.innerHTML = "Do Something";
                  
                  userDataRef.once("value").then(function(snapshot) {
                      var content='';
                      content+='<tr>'
                      content+='<th>#</th>'
                      content+='<th>{{translate.brand}}</th>'
                      content+='<th>{{translate.model}}</th>'
                      content+='<th>{{translate.dateadded}}</th>'
                      content+='<th>{{translate.rejector}}</th>'
                      content+='<th>{{translate.note}}</th>'
                      content+='</tr>'

                      snapshot = reverseSnapshot(snapshot);

                      snapshot.forEach(function(val){
                        var count3="";
                        var brand=val.brand;
                        var model=val.model;
                        var date=val.date;
                        var note=val.note;
                        var rejector=val.rejector;
                        var body = document.getElementsByTagName("body")[0];
                        content+='<tr>'
                        content +='<td class="count3">'+count3+'</td>'
                        content +='<td>'+brand+'</td>'
                        content +='<td>'+model+'</td>'
                        content +='<td>'+date+'</td>'
                        content +='<td class="rejector">'+rejector+'</td>'
                        content +='<td>'+note+'</td>'
                        content+='</tr>'
                      });
                      
                      document.getElementById("table_rejected").innerHTML = content;

                      $('.count3').each(function(i) {
                        var x = $(this).index()+1;
                        var y = i + 1;
                        $(this).text(x+i);
                      });
                      
                      $('.rejector').each(function(i) {
                          $(this).text($(this).text().replace('@gmail.com',''));
                          $(this).text($(this).text().replace('kirito9xda','kirito9'));
                          $(this).text($(this).text().replace('mnshereef','Sheref'));
                          $(this).text($(this).text().replace('ahmedhady6','AhmedHadyHassaan'));
                          $(this).text($(this).text().replace('sk2812283','Surendrajat'));
                          $(this).text($(this).text().replace('seanhoyt963','deadman96385'));
                      });
                  });
               </script>
           </tbody>
         </table>
         <div class="load-bar">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
         </div>
      </div>
   </div>
   <script>
        var href;
        function table_completed() {
            document.getElementById('table_completed').style.display = "table-row-group";
            document.getElementById('tab_completed').style.background ="#fff7";
            document.getElementById('table_in-queue').style.display = "none";
            document.getElementById('tab_in-queue').style.background ="#fff4";
            document.getElementById('table_running').style.display = "none";
            document.getElementById('tab_running').style.background ="#fff4";
            document.getElementById('table_rejected').style.display = "none";
            document.getElementById('tab_rejected').style.background ="#fff4";
            if (parent.location.hash.indexOf('completed') > -1) {
                parent.location.hash = parent.location.hash;
            } else {
                parent.location.hash = 'tab=completed';
            };
            href = "#tab=completed";
        };
        function table_inQueue() {
            document.getElementById('table_completed').style.display = "none";
            document.getElementById('tab_completed').style.background ="#fff4";
            document.getElementById('table_in-queue').style.display = "table-row-group";
            document.getElementById('tab_in-queue').style.background ="#fff7";
            document.getElementById('table_running').style.display = "none";
            document.getElementById('tab_running').style.background ="#fff4";
            document.getElementById('table_rejected').style.display = "none";
            document.getElementById('tab_rejected').style.background ="#fff4"
            parent.location.hash = 'tab=inQueue';
            href = "#tab=inQueue";
        };
        function table_running() {
            document.getElementById('table_completed').style.display = "none";
            document.getElementById('tab_completed').style.background ="#fff4";
            document.getElementById('table_in-queue').style.display = "none";
            document.getElementById('tab_in-queue').style.background ="#fff4";
            document.getElementById('table_running').style.display = "table-row-group";
            document.getElementById('tab_running').style.background ="#fff7";
            document.getElementById('table_rejected').style.display = "none";
            document.getElementById('tab_rejected').style.background ="#fff4";
            parent.location.hash = 'tab=running';
            href = "#tab=running";
        };
        function table_rejected() {
            document.getElementById('table_completed').style.display = "none";
            document.getElementById('tab_completed').style.background ="#fff4";
            document.getElementById('table_in-queue').style.display = "none";
            document.getElementById('tab_in-queue').style.background ="#fff4";
            document.getElementById('table_running').style.display = "none";
            document.getElementById('tab_running').style.background ="#fff4";
            document.getElementById('table_rejected').style.display = "table-row-group";
            document.getElementById('tab_rejected').style.background ="#fff7";
            parent.location.hash = 'tab=rejected';
            href = "#tab=rejected";
        };
   </script>
   <script>
        var href = window.location.href;
        if (href.indexOf('completed') > -1 ) {
            table_completed();
        } else if (href.indexOf('inQueue') > -1 ) {
            table_inQueue();
        } else if (href.indexOf('running') > -1 ) {
            table_running();
        } else if (href.indexOf('rejected') > -1 ) {
            table_rejected();
        }
    </script>
</section>