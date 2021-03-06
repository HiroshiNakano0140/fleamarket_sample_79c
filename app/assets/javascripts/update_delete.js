$(function() {

  //***************『既存』画像差し替え***************//      
  $(document).on("click", `#FirstContent0`, function(){
    $('#product_images_attributes_0_image').click();    
    $('#product_product_images_attributes_0__destroy').prop('checked', false);
    $('#Delete_btn0').fadeIn(2000);
  })

  $(document).on("click", `#SecondContent1`, function(){
    $('#product_images_attributes_1_image').click();    
    $('#product_product_images_attributes_1__destroy').prop('checked', false);
    $('#Delete_btn1').fadeIn(2000);
  })

  $(document).on("click", `#SecondContent2`, function(){
    $('#product_images_attributes_2_image').click();    
    $('#product_product_images_attributes_2__destroy').prop('checked', false);
    $('#Delete_btn2').fadeIn(2000);
  })

  $(document).on("click", `#SecondContent3`, function(){    
    $('#product_images_attributes_3_image').click();   
    $('#product_product_images_attributes_3__destroy').prop('checked', false); 
    $('#Delete_btn3').fadeIn(2000);
  })


    //***************『既存』画像削除**************//
    $(document).on("click", `#Delete_btn0`, function(){
    $('#product_product_images_attributes_0__destroy').prop('checked', true);
    $('.LeftContents__FirstContent__img img').attr('src', '/assets/trading.png');
    $('#Delete_btn0').hide();
  })

    $(document).on("click", `#Delete_btn1`, function(){
      console.log(1)
      $('#product_product_images_attributes_1__destroy').prop('checked', true);
      $('#SecondContent1 img').attr('src', '/assets/icon_camera.gif');
      $('#Delete_btn1').hide();
    })

    $(document).on("click", `#Delete_btn2`, function(){
      $('#product_product_images_attributes_2__destroy').prop('checked', true);
      $('#SecondContent2 img').attr('src', '/assets/icon_camera.gif');
      $('#Delete_btn2').hide();
    })

    $(document).on("click", `#Delete_btn3`, function(){
      $('#product_product_images_attributes_3__destroy').prop('checked', true);
      $('#SecondContent3 img').attr('src', '/assets/icon_camera.gif');
      $('#Delete_btn3').hide();
    })



  //***************『新規』画像の登録***************//      

  $(document).on("click", `#FirstContent_nil0`, function(){
    //画像添付ボタンを押下 
    $('#product_images_attributes_0_image').click();    
   // 新規画像登録時にバツボタンを追加
   $('#image-box').append('<div class="LeftContents__FirstContent__Delete_btn" id="Delete_btn_replacement_nil0">x');
  })  

  $(document).on("click", `#SecondContent_nil1`, function(){
    //画像添付ボタンを押下 
    $('#product_images_attributes_1_image').click();    
   // 新規画像登録時にバツボタンを追加
   $('.LeftContents__SecondContent').append('<div class="LeftContents__SecondContent__Left__Delete_btn" id="Delete_btn_replacement_nil1">x');
  })

  $(document).on("click", `#SecondContent_nil2`, function(){
    //画像添付ボタンを押下 
    $('#product_images_attributes_2_image').click();    
   // 新規画像登録時にバツボタンを追加
   $('.LeftContents__SecondContent').append('<div class="LeftContents__SecondContent__Left__Delete_btn" id="Delete_btn_replacement_nil2">x');
  })

  $(document).on("click", `#SecondContent_nil3`, function(){
    //画像添付ボタンを押下 
    $('#product_images_attributes_3_image').click();   
    // 新規画像登録時にバツボタンを追加
    $('.LeftContents__SecondContent').append('<div class="LeftContents__SecondContent__Left__Delete_btn" id="Delete_btn_replacement_nil3">x');

  })

    //***************『新規』画像の削除**************//

    $(document).on("click", `#Delete_btn_replacement_nil0`, function(){

      //カメラアイコンに戻す
      $('#FirstContent_nil0 img').attr('src', '/assets/trading.png');
      //Inputボックスを削除
      $('#product_images_attributes_0_image').remove();
      //Inputボックスを再作成
      $('#image-box').append('<input name="product[product_images_attributes][0][image]" id="product_images_attributes_0_image" type="file">');
      //削除ボタンを削除する      
      $('#Delete_btn_replacement_nil0').remove();

    })       


    $(document).on("click", `#Delete_btn_replacement_nil1`, function(){

      //カメラアイコンに戻す
      $('#SecondContent_nil1 img').attr('src', '/assets/icon_camera.gif');
      //Inputボックスを削除
      $('#product_images_attributes_1_image').remove();
      //Inputボックスを再作成
      $('#image-box').append('<input name="product[product_images_attributes][1][image]" id="product_images_attributes_1_image" type="file">');
      //削除ボタンを削除する      
      $('#Delete_btn_replacement_nil1').remove();

    })   

    $(document).on("click", `#Delete_btn_replacement_nil2`, function(){

      //カメラアイコンに戻す
      $('#SecondContent_nil2 img').attr('src', '/assets/icon_camera.gif');
      //Inputボックスを削除
      $('#product_images_attributes_2_image').remove();
      //Inputボックスを再作成
      $('#image-box').append('<input name="product[product_images_attributes][2][image]" id="product_images_attributes_2_image" type="file">');
      //削除ボタンを削除する      
      $('#Delete_btn_replacement_nil2').remove();

    })   

    $(document).on("click", `#Delete_btn_replacement_nil3`, function(){

      //カメラアイコンに戻す
      $('#SecondContent_nil3 img').attr('src', '/assets/icon_camera.gif');
      //Inputボックスを削除
      $('#product_images_attributes_3_image').remove();
      //Inputボックスを再作成
      $('#image-box').append('<input name="product[product_images_attributes][3][image]" id="product_images_attributes_3_image" type="file">');
      //削除ボタンを削除する      
      $('#Delete_btn_replacement_nil3').remove();

    })    



});