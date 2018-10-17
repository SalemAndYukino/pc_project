//冒泡排序(从小到大)
function bubbleSortFromSmallToBig(arr){
	for(var i = 1;i < arr.length;i ++){
		for(var j = 0;j < arr.length - i;j ++){
			if(arr[j] > arr[j + 1]){
				var t = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = t;
			}
		}
	}
	return arr;
}
function bubbleSortFromBigToSmall(arr){
	for(var i = 1;i < arr.length;i ++){
		for(var j = 0;j < arr.length - i;j ++){
			if(arr[j] < arr[j + 1]){
				var t = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = t;
			}
		}
	}
	return arr;
}
//选择排序(从小到大)
function selectionSortFromSmallToBig(arr){
   for(var i = 0;i < arr.length - 1;i ++){
	   for(var j = i + 1;j < arr.length;j ++){
		   if(arr[i] > arr[j]){
			   var t = arr[i];
			   arr[i] = arr[j];
			   arr[j] = t;
		   }
	   }
   }
   return arr;
}
//选择排序(从大到小)
function selectionSortFromBigToSmall(arr){
   for(var i = 0;i < arr.length - 1;i ++){
	   for(var j = i + 1;j < arr.length;j ++){
		   if(arr[i] < arr[j]){
			   var t = arr[i];
			   arr[i] = arr[j];
			   arr[j] = t;
		   }
	   }
   }
   return arr;
}
//任意范围的随机整数
function randomInt(min,max){
	 if(min > max){
		 var t = min;
		 min = max;
		 max = t;
	 }
	 return Math.floor(Math.random() * (max - min + 1) + min);
 }
 //去除空白文本节点
 function removeSpace(node){
 	//获取所有子节点
 	var childs = node.childNodes;
 	//遍历所有的子节点
 	for(var i = 0;i < childs.length;i ++){
 		//找出文本节点且是空白文本
 		if(childs[i].nodeType === 3 && /^\s+$/.test(childs[i].nodeValue)){
 			node.removeChild(childs[i]); //删除子节点
 		}
 	}
 	return node;
 }
 //获取非行内样式
 function getStyle(obj,attr){
 	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
 }
 //拖拽
 function drag(id){
 	var obj = document.getElementById(id);
 	obj.onmousedown = function(evt){
 		var e = evt || window.event;
 		var disX = e.offsetX;
 		var disY = e.offsetY;
 		document.onmousemove = function(evt){
 			evt = evt || window.event;
 			obj.style.left = evt.pageX - disX + 'px';
 			obj.style.top = evt.pageY - disY + 'px';
 		}
 		document.onmouseup = function(){
 			document.onmousemove = null;
 		}
 		//阻止拖拽的默认行为
 		document.ondragstart = function(){
 			return false;
 		}
 	}
 }
 //数组去重
 function noRepeatArray(arr){
 	return [... new Set(arr)];
 }

 //面向对象图片轮播
 /*
	1. 获取所有的大图
	2. 求大图的数量
	3. ol li (小圆点)   左按钮   右按钮   文字信息的div
	4. 设置轮播   当前下标
	5. 添加事件
	6. 自动轮播
	
*/
function Slider(id){
	//属性
	this.bigBox = document.getElementById(id);
	//获取所有的大图
	this.ullis = this.bigBox.children[0].children;
	//数量
	this.num = this.ullis.length;
	//创建小圆点、左按钮、右按钮、文字信息的div
	this.ollis = this.createEle();
	this.indexA = 0; //当前下标
	this.div = document.getElementById("msg");
	this.slide();
	this.ltBtn = document.getElementById("ltBtn");
	this.rtBtn = document.getElementById("rtBtn");
	this.addEvent();
	this.timer = null;
	this.autoPlay();
}
Slider.prototype = {
	createEle : function(){
		//ol
		var ol = document.createElement('ol');
		var arr = [];
		for(var i = 0;i < this.num;i ++){
			var li = document.createElement('li');
			ol.appendChild(li);
			arr.push(li);
		}
		this.bigBox.appendChild(ol);
		//左
		var lspan = document.createElement('span');
		lspan.innerHTML = "&lt;";
		lspan.id = "ltBtn";
		this.bigBox.appendChild(lspan);
		//右
		var rspan = document.createElement('span');
		rspan.innerHTML = '&gt;';
		rspan.id = 'rtBtn';
		this.bigBox.appendChild(rspan);
		//div
		var div = document.createElement('div');
		div.id = 'msg';
		this.bigBox.appendChild(div);
		
		//返回所有的li
		return arr;
	},
	slide : function(){
		for(var i = 0;i < this.num;i ++){
			this.ullis[i].style.display = 'none';
			this.ollis[i].style.backgroundColor = 'red';
		}
		this.ullis[this.indexA].style.display = 'block';
		this.ollis[this.indexA].style.backgroundColor = 'blue';
		
		this.div.innerHTML = this.ullis[this.indexA].firstChild.firstChild.alt;
	},
	addEvent : function(){
		var that = this;
		//左
		this.ltBtn.onclick = function(){
			that.indexA --;
			if(that.indexA == -1){
				that.indexA = that.num - 1;
			}
			that.slide();
		}
		//右
		this.rtBtn.onclick = function(){
			that.indexA ++;
			if(that.indexA === that.num){
				that.indexA = 0;
			}
			that.slide();
		}
		
		//圆点
		for(var i = 0;i < this.num;i ++){
			//记录当前下标 
			this.ollis[i].index = i;
			this.ollis[i].onmouseenter = function(){
				that.indexA = this.index;
				that.slide();
			}
		}
	},
	autoPlay : function(){
		var that = this;
		this.timer = setInterval(function(){
			that.indexA ++;
			if(that.indexA === that.num){
				that.indexA = 0;
			}
			that.slide();
		},2000)
		this.bigBox.onmouseenter = function(){
			clearInterval(that.timer);
		}
		this.bigBox.onmouseleave = function(){
			that.autoPlay();
		}
	}
}