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
               <tbody id="table">
				  <tr>
					<th>#</th>
					<th>{{translate.brand}}</th>
					<th>{{translate.model}}</th>
					<th>{{translate.codename}}</th>
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
					 content+='<th>{{translate.dateadded}}</th>'
                     content+='<th>{{translate.downloadlink}}</th>'
                     content+='</tr>'
                     
                     snapshot.forEach(function(data){
                     var val = data.val();
					 
				 var count="";
                     var brand=val.brand;
                     var model=val.model;
					 var codename=val.codeName;
					 var date=val.date;
                     var url=val.url;
                      var body = document.getElementsByTagName("body")[0];
                     content+='<tr>'
					 content +='<td class="count">'+count+'</td>'
                     content +='<td>'+brand+'</td>'
                     content +='<td>'+model+'</td>'
                     content +='<td>'+codename+'</td>'
					 content +='<td>'+date+'</td>'
                     content+='<td><a href='+url+' target="_blank"> {{translate.download}} </a></td>'
                     content+='</tr>'
                     
                     	});
                     document.getElementById("table").innerHTML = content;
					 
					 $('.count').each(function(i) {
						var x = $(this).index()+1;
						var y = i + 1;
						$(this).text(x+i);
						$(this).wrap($('<a>').attr('href','#'+y));
						$(this).attr('id',x+i);
						
						$(this).click(function() {
							$('.count').parent().parent().css({'background-color':''});
							$(this).parent().parent().css('background-color','rgba(197, 218, 4, 0.55)');
						});
					});
					
					if (window.location.href.indexOf("#") > -1) {
						var firstDigit = window.location.href[window.location.href.length -2];
						var secondDigit = window.location.href[window.location.href.length -1];
						var id =  '';
						if (firstDigit != '#') {
							id = firstDigit + secondDigit
						} else {
							id = secondDigit 
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
            </table>			
		  <div class="load-bar">
			  <div class="bar"></div>
			  <div class="bar"></div>
			  <div class="bar"></div>
		  </div>
      </div>
   </div>
</section>
