	$(document).ready(function(){


    $(document).on('click','#createbutton',function(){
      $('#myModal5').modal('toggle');
      $('#createmodal').replaceWith(
        '<div class="modal-body"  id="createmodal">'+
        '<div class="form-group">'+
        '<label>Select a table</label>'+
        '<select class="form-control" id="create">'+
        '<option disabled selected>Choisissez une table</option>'+
        '<option value="ad">Ads table</option>'+
        '<option value="comp">Company table</option>'+
        '<option value="people">People table</option>'+
        '<option value="apply">Apply table</option>'+
        '</select>'+
        '</div>'+
        '</div>'
        );
    });



    $(document).on('change','#create',function(){
      if (($(this).val()) === "ad"){
        $('#createmodal').replaceWith(
          '<div class="modal-body"  id="createmodal">'+
          '<div class="form-group" >'+
          '<label>Select a table</label>'+
          '<select class="form-control" id="create">'+
          '<option value="ad" selected>Ads table</option>'+
          '<option value="comp">Company table</option>'+
          '<option value="people">People table</option>'+
          '<option value="apply">Apply table</option>'+
          '</select>'+
          '</div>'+
          '<div class="form-group"><label>ad_comp_id</label><input type="text" id="create_ad_comp_id" class="form-control"></div>'+
          '<div class="form-group"><label>ad_description</label><input type="text-area" id="create_ad_description" class="form-control"></div><div class="form-group">'+
          '<label>ad_title</label>'+
          '<input type="text" id="create_ad_title" class="form-control">'+
          '</div>'+
          '</div>'
          );} 


        if (($(this).val()) === "comp")
        {
          $('#createmodal').replaceWith(
            '<div class="modal-body"  id="createmodal">'+
            '<div class="form-group" >'+
            '<label>Select a table</label>'+
            '<select class="form-control" id="create">'+
            '<option value="ad">Ads table</option>'+
            '<option value="comp" selected>Company table</option>'+
            '<option value="people">People table</option>'+
            '<option value="apply">Apply table</option>'+
            '</select>'+
            '</div>'+
            '<div class="form-group">'+
            '<label>comp_name</label>'+
            '<input type="text" id="create_comp_name" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>comp_address</label>'+
            '<input type="text" id="create_comp_address" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>comp_email</label>'+
            '<input type="text" id="create_comp_email" class="form-control">'+
            '</div>'+
            '</div>'
            );
        }

        if (($(this).val()) === "people")
        {
          $('#createmodal').replaceWith(
            '<div class="modal-body"  id="createmodal">'+
            '<div class="form-group" >'+
            '<label>Select a table</label>'+
            '<select class="form-control" id="create">'+
            '<option value="ad">Ads table</option>'+
            '<option value="comp">Company table</option>'+
            '<option value="people" selected>People table</option>'+
            '<option value="apply">Apply table</option>'+
            '</select>'+
            '</div>'+
            '<div class="form-group">'+
            '<label>people_username</label>'+
            '<input type="text" id="create_people_username" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>people_password</label>'+
            '<input type="text" id="create_people_password" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>people_lastname</label>'+
            '<input type="text" id="create_people_lastname" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>people_firstname</label>'+
            '<input type="text" id="create_people_firstname" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>people_email</label>'+
            '<input type="text" id="create_people_email" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>people_number</label>'+
            '<input type="text" id="create_people_number" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>people_admin</label>'+
            '<input type="text" id="create_people_admin" class="form-control">'+
            '</div>'+
            '</div>'
            );
        }
        if (($(this).val()) === "apply"){
          $('#createmodal').replaceWith(
            '<div class="modal-body"  id="createmodal">'+
            '<div class="form-group">'+
            '<label>Select a table</label>'+
            '<select class="form-control" id="create">'+
            '<option value="ad">Ads table</option>'+
            '<option value="comp">Company table</option>'+
            '<option value="people">People table</option>'+
            '<option value="apply" selected>Apply table</option>'+
            '</select>'+
            '</div>'+
            '<div class="form-group">'+
            '<label>apply_message</label>'+
            '<input type="text" id="create_apply_message" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>apply_comp_id</label>'+
            '<input type="text" id="create_apply_comp_id" class="form-control">'+
            '</div>'+
             '<div class="form-group">'+
            '<label>apply_ad_id</label>'+
            '<input type="text" id="create_apply_ad_id" class="form-control">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>apply_people_id</label>'+
            '<input type="text" id="create_apply_people_id" class="form-control">'+
            '</div>'+
            '</div>'
            );  
        }

      });



    //  append values in input fields
    $(document).on('click','a[data-role=update][att="ad"]',function(){
      console.log('1');
      // ADD
      var add_id  = 'ad'+$(this).data('id');
      var ad_id = $(this).data('id');

      var ad_comp_id  = $('#'+add_id).children('td[data-target=ad_comp_id]').text();
      var ad_description  = $('#'+add_id).children('td[data-target=ad_description]').text();
      var ad_title  = $('#'+add_id).children('td[data-target=ad_title]').text();

      $('#ad_comp_id').val(ad_comp_id);
      $('#ad_description').val(ad_description);
      $('#ad_title').val(ad_title);
      $('#ad_id').val(ad_id);
      $('#myModal1').modal('toggle');
    });
    $(document).on('click','a[data-role=delete][att="ad"]',function(){
            // ADD
      // var add_id  = 'ad'+$(this).data('id');
      var ad_id = $(this).data('id');
      var table='ad';
      console.log(ad_id);
      $.ajax({
        url : 'script/delete.php',
        type : 'POST',
        data : { id:ad_id , table:table},
        dataType : 'json',
        success : function(resultat, statut) {  
          console.log(resultat);
          console.log('success');
          M.toast({html: 'L\'annonce a bien été supprimée!',  completeCallback: function(){location.reload();location.hash = '#mytbody1';}, displayLength:500, classes: 'blue-grey white-text Heading h2'});

        },
        error : function(resultat, statut, erreur){
          console.log(resultat);
          M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});
        },
        complete : function(resultat, statut){
        }
      });

    });



        //  append values in input fields
        $(document).on('click','a[data-role=update][att="company"]',function(){
          console.log('2');

      // COMPANY
      var compp_id  = 'comp'+$(this).data('id');
      var comp_id  = $(this).data('id');

      var comp_name  = $('#'+compp_id).children('td[data-target=comp_name]').text();
      var comp_address  = $('#'+compp_id).children('td[data-target=comp_address]').text();
      var comp_email  = $('#'+compp_id).children('td[data-target=comp_email]').text();

      $('#comp_name').val(comp_name);
      $('#comp_address').val(comp_address);
      $('#comp_email').val(comp_email);
      $('#comp_id').val(comp_id);
      $('#myModal2').modal('toggle');
    });
        $(document).on('click','a[data-role=delete][att="company"]',function(){
      // ADD
      // var add_id  = 'ad'+$(this).data('id');
      var comp_id = $(this).data('id');
      var table ='comp';
      $.ajax({
        url : 'script/delete.php',
        type : 'POST',
        data : { id:comp_id , table:table},
        dataType : 'json',
        success : function(resultat, statut) {  
          console.log(resultat);
          console.log('success');
          M.toast({html: 'La compagnie a bien été supprimée!',  completeCallback: function(){location.reload();location.hash = '#mytbody2';}, displayLength:500, classes: 'blue-grey white-text Heading h2'});
        },
        error : function(resultat, statut, erreur){
          console.log(resultat);
          M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});

        },
        complete : function(resultat, statut){
        }
      });

    });



        //  append values in input fields
        $(document).on('click','a[data-role=update][att="people"]',function(){
          console.log('3');

      // PEOPLE
      var peoplee_id  = 'people'+$(this).data('id');
      var people_id  = $(this).data('id');

      var people_username  = $('#'+peoplee_id).children('td[data-target=people_username]').text();
      var people_password  = $('#'+peoplee_id).children('td[data-target=people_password]').text();
      var people_lastname  = $('#'+peoplee_id).children('td[data-target=people_lastname]').text();
      var people_firstname  = $('#'+peoplee_id).children('td[data-target=people_firstname]').text();
      var people_email  = $('#'+peoplee_id).children('td[data-target=people_email]').text();
      var people_number  = $('#'+peoplee_id).children('td[data-target=people_number]').text();
      var people_admin  = $('#'+peoplee_id).children('td[data-target=people_admin]').text();


      $('#people_username').val(people_username);
      $('#people_password').val(people_password);
      $('#people_lastname').val(people_lastname);
      $('#people_firstname').val(people_firstname);
      $('#people_email').val(people_email);
      $('#people_number').val(people_number);
      $('#people_admin').val(people_admin);

      $('#people_id').val(people_id);
      $('#myModal3').modal('toggle');
    });

        $(document).on('click','a[data-role=delete][att="people"]',function(){
      // ADD
      // var add_id  = 'ad'+$(this).data('id');
      var people_id = $(this).data('id');
      var table ='people';
      $.ajax({
        url : 'script/delete.php',
        type : 'POST',
        data : { id:people_id , table:table},
        dataType : 'json',
        success : function(resultat, statut) {  
          console.log(resultat);
          console.log('success');
          M.toast({html: 'L\'utilisateur a bien été supprimé!', completeCallback: function(){location.reload();location.hash = '#mytbody3';}, displayLength:'500', classes: 'blue-grey white-text Heading h2'});

        },
        error : function(resultat, statut, erreur){
          console.log(resultat);
          M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});
        },
        complete : function(resultat, statut){
        }
      });

    });



        //  append values in input fields
        $(document).on('click','a[data-role=update][att="apply"]',function(){
          console.log('4');

      // APPLY
      var applyy_id  = 'apply'+$(this).data('id');
      var apply_id  =  $(this).data('id');

      var apply_message  = $('#'+applyy_id).children('td[data-target=apply_message]').text();
      var apply_comp_id  = $('#'+applyy_id).children('td[data-target=apply_comp_id]').text();
      var apply_people_id  = $('#'+applyy_id).children('td[data-target=apply_people_id]').text();
      var apply_ad_id  = $('#'+applyy_id).children('td[data-target=apply_ad_id]').text();

      $('#apply_id').val(apply_id);
      $('#apply_message').val(apply_message);
      $('#apply_comp_id').val(apply_comp_id);
      $('#apply_people_id').val(apply_people_id);
      $('#apply_ad_id').val(apply_ad_id);
      $('#myModal4').modal('toggle');
    });
        $(document).on('click','a[data-role=delete][att="apply"]',function(){
      // ADD
      // var add_id  = 'ad'+$(this).data('id');
      var apply_id = $(this).data('id');
      var table ='apply';
      $.ajax({
        url : 'script/delete.php',
        type : 'POST',
        data : { id:apply_id , table:table},
        dataType : 'json',
        success : function(resultat, statut) {  
          console.log(resultat);
          console.log('success');
          M.toast({html: 'La candidature a bien été supprimée!',  completeCallback: function(){location.reload();location.hash = '#mytbody4';}, displayLength:500, classes: 'blue-grey white-text Heading h2'});
        },
        error : function(resultat, statut, erreur){
          console.log(resultat);
          M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});
        },
        complete : function(resultat, statut){
        }
      });

    });



      // now create event to get data from fields and update in database 

      $('#save1').click(function(){
      	var ad_id  = $('#ad_id').val(); 
        var ad_comp_id  = $('#ad_comp_id').val(); 
        var ad_description =  $('#ad_description').val();
        var ad_title =  $('#ad_title').val();
        var mymodal = "1";

        $.ajax({
          url      : 'script/admincrud.php',
          method   : 'post', 
          data     : {mymodal : mymodal, ad_id : ad_id , ad_comp_id: ad_comp_id , ad_description : ad_description , ad_title : ad_title},
          success  : function(response){
            console.log(response);
              // now update user record in table 
              $('#'+ad_id).children('td[data-target=ad_comp_id]').text(ad_comp_id);
              $('#'+ad_id).children('td[data-target=ad_description]').text(ad_description);
              $('#'+ad_id).children('td[data-target=ad_title]').text(ad_title);
              $('#myModal1').modal('toggle'); 
              M.toast({html: 'L\'annonce a bien été mise à jour!',  completeCallback: function(){location.reload();location.hash = '#mytbody1';}, displayLength:500, classes: 'blue-grey white-text Heading h2'});

            },
            error  : function(response){
             console.log(response);
             M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});

           }

         });

      });



      $('#save2').click(function(){
        var comp_id  = $('#comp_id').val(); 
        var comp_name =  $('#comp_name').val();
        var comp_address =  $('#comp_address').val();
        var comp_email =   $('#comp_email').val();
        var mymodal = "2";

        $.ajax({
          url      : 'script/admincrud.php',
          method   : 'post', 
          data     : {mymodal : mymodal, comp_id : comp_id , comp_name: comp_name , comp_address : comp_address , comp_email : comp_email},
          success  : function(response){
           console.log(response);
            // now update user record in table 
            $('#'+comp_id).children('td[data-target=comp_name]').text(comp_name);
            $('#'+comp_id).children('td[data-target=comp_address]').text(comp_address);
            $('#'+comp_id).children('td[data-target=comp_email]').text(comp_email);
            $('#myModal2').modal('toggle'); 
            M.toast({html: 'La compagnie a bien été mise à jour!',  completeCallback: function(){location.reload();location.hash = '#mytbody2';}, displayLength:500, classes: 'blue-grey white-text Heading h2'});

          },
          error  : function(response){
           console.log(response);
           M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});

         }

       });

      });


      $('#save3').click(function(){
        var people_id  = $('#people_id').val(); 
        var people_username =  $('#people_username').val();
        var people_password =  $('#people_password').val();
        var people_lastname =   $('#people_lastname').val();
        var people_firstname =   $('#people_firstname').val();
        var people_email =   $('#people_email').val();
        var people_number =   $('#people_number').val();
        var people_admin =   $('#people_admin').val();

        var mymodal = "3";

        $.ajax({
          url      : 'script/admincrud.php',
          method   : 'post', 
          data     : {mymodal : mymodal, people_id : people_id , people_username: people_username , people_password : people_password , people_lastname : people_lastname ,people_firstname : people_firstname ,people_email : people_email , people_number: people_number, people_admin : people_admin},


          // console.log("LOL");
          success  : function(response){
           console.log(response);
           $('#'+people_id).children('td[data-target=people_username]').text(people_username);
           $('#'+people_id).children('td[data-target=people_password]').text(people_password);
           $('#'+people_id).children('td[data-target=people_lastname]').text(people_lastname);
           $('#'+people_id).children('td[data-target=people_firstname]').text(people_firstname);
           $('#'+people_id).children('td[data-target=people_email]').text(people_email);
           $('#'+people_id).children('td[data-target=people_number]').text(people_number);
           $('#'+people_id).children('td[data-target=people_admin]').text(people_admin);
           $('#myModa3l').modal('toggle');
           M.toast({html: 'L\'utilisateur a bien été mis à jour!',  completeCallback: function(){location.reload();location.hash = '#mytbody3';}, displayLength:500, classes: 'blue-grey white-text Heading h2'});

         },
         error  : function(response){
           console.log(response);
           M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});

         }

       });

      });



      $('#save4').click(function(){
        var apply_id  = $('#apply_id').val(); 
        var apply_message =  $('#apply_message').val();
        var apply_comp_id =  $('#apply_comp_id').val();
        var apply_people_id =   $('#apply_people_id').val();
        var apply_ad_id =   $('#apply_ad_id').val();
        var mymodal = "4";

        $.ajax({
          url      : 'script/admincrud.php',
          method   : 'post', 
          data     : {mymodal : mymodal, apply_id : apply_id , apply_message: apply_message , apply_comp_id : apply_comp_id , apply_people_id : apply_people_id , apply_ad_id:apply_ad_id},
          success  : function(response){
           console.log(response);
            // now update user record in table 
            $('#'+apply_id).children('td[data-target=apply_message]').text(apply_message);
            $('#'+apply_id).children('td[data-target=apply_comp_id]').text(apply_comp_id);
            $('#'+apply_id).children('td[data-target=apply_people_id]').text(apply_people_id);
            $('#'+apply_id).children('td[data-target=apply_ad_id]').text(apply_ad_id);
            $('#myModal4').modal('toggle'); 
            M.toast({html: 'La candidature a bien été mise à jour!',  completeCallback: function(){location.reload();location.hash = '#mytbody4';}, displayLength:500, classes: 'blue-grey white-text Heading h2'});

          },
          error  : function(response){
           console.log(response);
           M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});

         }

       });
      });

      $('#createbutton2').click(function(){
        var mymodal = "5";
        var create  = $('#create').val(); 
        console.log(create);
        if(create==='ad'){
          var ad_comp_id  = $('#create_ad_comp_id').val(); 
          var ad_description =  $('#create_ad_description').val();
          var ad_title =  $('#create_ad_title').val();
          var data= {create : create, mymodal : mymodal , ad_comp_id: ad_comp_id , ad_description : ad_description , ad_title : ad_title};
        }
        else if(create==='comp'){
          var comp_name =  $('#create_comp_name').val();
          var comp_address =  $('#create_comp_address').val();
          var comp_email =   $('#create_comp_email').val();
          var data= { create : create, mymodal : mymodal , comp_name: comp_name , comp_address : comp_address , comp_email : comp_email};

        }
        else if(create==='people'){
          var people_username =  $('#create_people_username').val();
          var people_password =  $('#create_people_password').val();
          var people_lastname =   $('#create_people_lastname').val();
          var people_firstname =   $('#create_people_firstname').val();
          var people_email =   $('#create_people_email').val();
          var people_number =   $('#create_people_number').val();
          var people_admin =   $('#create_people_admin').val();
          var data= { create : create, mymodal : mymodal , people_username: people_username , people_password : people_password , people_lastname : people_lastname, people_firstname : people_firstname, people_email : people_email, people_number : people_number, people_admin : people_admin};

        }
        else if(create==='apply'){
          var apply_message =  $('#create_apply_message').val();
          var apply_comp_id =  $('#create_apply_comp_id').val();
          var apply_people_id =  $('#create_apply_people_id').val();
          var apply_ad_id =  $('#create_apply_ad_id').val();
          var data= { create : create, mymodal : mymodal , apply_message: apply_message , apply_comp_id : apply_comp_id , apply_people_id : apply_people_id, apply_ad_id:apply_ad_id};

        }

        
        $.ajax({
          url      : 'script/admincrud.php',
          method   : 'post', 
          data     : data,
          success  : function(response){
           console.log(response);
           $('#myModal5').modal('toggle'); 
           M.toast({html: 'La ligne de la table : '+create+' a bien été créee!',  completeCallback: function(){location.reload()}, displayLength:500,  classes: 'blue-grey white-text Heading h2'});


         },
         error  : function(response){
          console.log(data);
          console.log(response);
          M.toast({html: 'Une erreur s\'est produite, veuillez réessayer !',  classes: 'blue-grey white-text Heading h2'});

        }

      });
      });
    });