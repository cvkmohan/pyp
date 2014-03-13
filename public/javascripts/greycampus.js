var Player = function(options){
  var vars = {
    player_name: 'Player Name',
    content_url: '/player/content'
  }
   
  var root = this;
   
  this.construct = function(options){
    $.extend(vars , options);
    this.sub_navigation();
  }
   
  this.play = function(index){
    options = {
      url: vars.content_url,
      leaf_id: index
    }

    this.doajaxcall(options);
  }
   
  this.nextLeaf = function(index){
    this.play(index);
  }

  this.backToLeaf = function(index){
    this.play(index);
  }

  this.doajaxcall = function(options){
    $.ajax({
      url: options.url,
      type: 'GET',
      data: "id="+options.leaf_id,
      success: function(data) {
        //called when successful
        $('#player').html(data);
      },
      error: function(e) {
        //called when there is an error
        console.log(e.message);
      }
    }).done(function(){
      var p = new Player()

      p.enable_sub_nav(options)
      index_val = options.leaf_id;
      prev_index = ( index_val > 0 ) ? index_val - 1 : index_val;
      var c_type = $("#c_type").val();
      
      p.navigation({
        content_type: c_type,
        next: options.leaf_id +1,
        leaf_id: index_val
      });
    });
  }
  
  this.solve = function(index){
    q_id = index+1;
    answer = $('input[type="radio"]:checked').val();
    if( typeof answer == "undefined" ){$("#optionsRadios1").focus(); return false;} 
    $.ajax({
      url: "/player/solve",
      type: 'POST',
      data: "answer="+answer+"&id="+index,
      success: function(data) {
        //called when successful
        $("#"+q_id).attr('readonly', 'readonly');
        html_solution = '<div class="alert alert-info"><strong>Answer: </strong>'
        +data.correct+'</div>';

        if(data.status == "true"){
          message = "<strong>Well done!</strong>You got it right.";
          html = '<div class="alert alert-success">'+message+'</div>';
          $('#q_answer').html(html+html_solution);

          next_index = index+1;
          $("#next_p").html(data.button_success+ "&nbsp;<i class='fa fa-chevron-right'></i>");
          $("#next_p").attr("onclick", "playerObj.nextLeaf("+next_index+")");

        }else{
          message = "<strong>Sorry!</strong>That is not correct.";
          html = '<div class="alert alert-danger">'+message+'</div>';
          
          $('#q_answer').html(html+html_solution);

          prev_index = index-1;
          $("#next_p").html("<i class='fa fa-chevron-left'></i>&nbsp;"+data.button_error);
          $("#next_p").attr("onclick", "playerObj.nextLeaf("+prev_index+")");
        }
      },
      error: function(e) {
        //called when there is an error
        console.log(e.message);
      }
    }).done(function(){
      //console.log('success');
    });
  }

  this.navigation = function(options){
    $("#next_p_v").hide();
    if(options.content_type == 'question'){
      //$("#prev").html("Solve");
      $("#lang_bar").hide();
      $("#next_p").html("Submit your answer <i class='fa fa-chevron-right'></i>");
      $("#next_p").attr("onclick", "playerObj.solve("+options.leaf_id+")")
      //$("#prev").attr("onclick", "playerObj.solve("+options.prev+")")
    }else if(options.content_type == 'video'){
      //$("#prev").html("Previous");
      $("#lang_bar").show();
      $("#next_p").html("Proceed to quiz <i class='fa fa-chevron-right'></i>");
      $("#next_p").attr("onclick", "playerObj.nextLeaf("+options.next+")")
      //$("#prev").attr("onclick", "playerObj.backToLeaf("+options.prev+")")
    }else if(options.content_type == 'info'){
      $("#lang_bar").hide();
      $("#next_p").html("Proceed to session summary <i class='fa fa-chevron-right'></i>");
      $("#next_p").attr("onclick", "playerObj.nextLeaf("+options.next+")")
    }else if(options.content_type == 'summary'){
      $("#lang_bar").hide();
      $("#next_p").html("Start again <i class='fa fa-chevron-right'></i>");
      $("#next_p").attr("onclick", "playerObj.nextLeaf(0)")
    }else{
      $("#lang_bar").hide();
      $("#next_p").html("Move on to next challenge <i class='fa fa-chevron-right'></i>");
      $("#next_p").attr("onclick", "playerObj.nextLeaf("+options.next+")")
    }
  }

  this.sub_navigation = function(){
    for ( var i = 0; i < vars.total; i++ ) {

      if(vars.content_types[i] == "video"){
        icon = "fa-play-circle ";
      }else if(vars.content_types[i] == "question"){
        icon = "fa-question-circle";
      }else if(vars.content_types[i] == "simulation"){
        icon = "fa-puzzle-piece";
      }else if(vars.content_types[i] == "flashcards"){
        icon = "fa-bolt";
      }else if(vars.content_types[i] == "summary"){
        icon = "fa-list-alt";
      }else{
        icon = "fa-lightbulb-o";
      }

      html = "<a title='"+vars.leaf_title[i]+"' id='sub_nav_"+i+"' style='cursor: pointer'><span class='badge_pl text-center'><i class='fa "+icon+" fa-2x icon-color'></i></span></a>";

      $("#sub_nav").append(html);
    }
  }
  
  this.enable_sub_nav = function(options){


    leaf_id = options.leaf_id;
    if(leaf_id > 1){
      ck_leaf_id = leaf_id - 1;
      attr = $("#sub_nav_"+ck_leaf_id).attr('onclick');

      // For some browsers, `attr` is undefined; for others,
      // `attr` is false.  Check for both.
      if (typeof attr === 'undefined' || attr === false) {
        //$("#sub_nav_"+ck_leaf_id+" span i ").removeClass('icon-color'); 
        $("#sub_nav_"+ck_leaf_id).attr('onclick', "playerObj.play("+ck_leaf_id+")");          
      }
    }

    if($("#sub_nav a").hasClass('current')){
      //this.addClass('visited');
      id = $("#sub_nav a.current").prop("id");
      $("#"+id).addClass('visited');
      $("#"+id).removeClass('current');
    }

    // if(leaf_id > 0){
    //   visited = leaf_id - 1;
    //   $("#sub_nav_"+visited).addClass('visited');
    // }
    $("#sub_nav_"+leaf_id+" span i ").removeClass('icon-color'); 
    $("#sub_nav_"+leaf_id).addClass('current');

    if($("#sub_nav_"+leaf_id).is('.visited, .current')){
      $("#sub_nav_"+leaf_id).addClass('current');
      $("#sub_nav_"+leaf_id).removeClass('visited');
    }

    $("#sub_nav_"+leaf_id).attr('onclick', "playerObj.play("+leaf_id+")");    
  }


  this.construct(options);
}





 

