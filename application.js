window.onload=function(){
	/*
	* contentEditale属性
	* 使页面内容可以编辑
      */
	//document.body.contentEditable='true';
      /*
      * 解析a的url
      */
      var a = document.createElement('a');
      a.href = 'http://www.cnblogs.com/wayou/p/';
      var host=a.hostname;
      //alert(host);
}
       /*
       * DOM的增删改查
      */
      function append(){
            //dom增加
            //获取目标节点
             var parent=document.getElementById("parent");
             //创造节点
            var node=document.createElement("div");
             node.innerHTML="HELLO JAVASCRIPT!";  
             parent.appendChild(node);   
      }
      /*
      *  DOM的删除
      */
      function removeNode(){
           var child=document.getElementById("delete");
            child.remove();
      }
      /*
      *  DOM查询
      */
      //getELementById
      function selectid(){
        var myid=document.getElementById("myid");
        myid.style.background="red";
      }
      /*
      * DOM修改
      */
      function update(){
         var update=document.getElementById("update");
         update.innerHTML="HELLO WORLD !";
      }
      /********************************BOM操作****************************************/
      //Browser 的宽度
      var width=document.getElementById("width");
      var bomWidth=document.body.clientWidth;
      width.innerHTML="整个body的宽："+bomWidth;
      //Browser 的高度
      var height=document.getElementById("height");
      var browserHeight="整个body的高："+document.body.clientHeight;
      height.innerHTML=browserHeight;
      //Borwser 不包含滑动条的宽
      var bwidth=document.getElementById("bwidth");
      var browserWidth="不包含滑动条的宽（窗口）:"+window.innerWidth;
      bwidth.innerHTML=browserWidth;      
     //Borwser 不包含滑动条的高
      var bheight=document.getElementById("bheight");
      var browserHeight=window.innerHeight;
      bheight.innerHTML="不包含滑动条的高（窗口）:"+browserHeight;
      /**********************************navigator学习**********************************************/
      var naviname=document.getElementById("naviName");
      naviname.innerHTML="浏览器名称为："+navigator.appCodeName ;
   
      
