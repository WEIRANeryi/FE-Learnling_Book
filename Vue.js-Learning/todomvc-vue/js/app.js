;(function () {
	// const todos = [
	// 	{
	// 		id:1,
	// 		title:"吃饭",
	// 		completed:true
	// 	},
	// 	{
	// 		id:2,
	// 		title:"睡觉",
	// 		completed:false
	// 	},
	// 	{
	// 		id:3,
	// 		title:"写代码",
	// 		completed:false
	// 	},
	// ];
	let vm = new Vue({
		el:'#app',
		data:{
			//从本地存储拿到localStorage的todos的列表
			//添加的时候，编辑的时候，删除的时候，以及状态都需要存储到localStorage中
			//这个时候我们最好有一个能监视todos状态并记录(存储到本地)的监视者
			todos:JSON.parse(window.localStorage.getItem('todos') || '[]'),
			currentEditing:null,
			filterText:'all',//使用hash改变事件，来修改这个值，这个值决定了列表渲染的todos是否被过滤
		},
		methods:{
			//添加内容方法
			handleNewTodoKeyDown(e){
				// 注册按下回车事件
				// 获取文本框的内容
				let target = e.target;
				let value = target.value.trim();
				// 数据校验
				if(!value.length){
					return
				}
				// 添加到todos列表
				this.todos.push({
					id:this.todos.length ? this.todos[this.todos.length-1].id+1 : 1,//防止最后删除完后没有length　就没法添加id
					title:value,
					completed:false
				});
				target.value = null;
			},
			//删除内容方法
			handleRemoveTodoClick(index){
				this.todos.splice(index,1);
			},
			//双击可编辑
			handleGetEditingDblclick(item){
				//把这个变量复制成当前双击的todo
				this.currentEditing = item.title;
				// console.log(this.currentEditing);
				// 若点击的项的内容和currentEditing相同，则让其样式变为可编辑
			},
			//回车保存编辑内容
			handleSaveEditKeydown(item,index,e){
				//校验数据，如果为空就删除该项
				// console.log(e.target.value);
				let target = e.target;
				let value = target.value.trim();
				if (!value.length) {//如果为空就删掉
					this.todos.splice(index, 1);
				} else {
					item.title = value;
					// 这时候让currentEditing 为空，使和任何一项内容都不相等，就去掉了可编辑样式
					this.currentEditing = null;
				}
			},
			//esc取消编辑
			handleCancelEditEsc(){
				this.currentEditing = null;
			},
			//清除所有已完成
			handleClearAllDoneClick(){
				// for (let i = 0;i<this.todos.length;i++){
				// 	if(this.todos[i].completed){
				// 		this.todos.splice(i,1);
				// 		//为防止数组索引坍塌，让步长累加减一，因为删除一个之后，之后的索引会往前挪动一位，但循环删除的索引是不会发生变化的
				// 		i--;
				// 	}
				// }
				this.todos = this.todos.filter(function (item) {
					return !item.completed
				})
			}
		},
		computed: {
			//使用计算属性来实现全选
			checkAll:{
				get() {
					return this.todos.every(item => item.completed)
				},
				set() {
					if(!this.checkAll){
						this.todos.forEach(item => item.completed = true);
					} else {
						this.todos.forEach(item => item.completed = false);
					}
				}
			},
			//过滤数组显示的计算属性
			filterTodos(){
				//如果all是return todos
				//	　active是todos.filter(t => !t.completed)
				//    completed是todos.filter(t => t.completed)
				// return this.todos
				switch (this.filterText) {
					case 'active':
						return this.todos.filter( t => !t.completed);
						break;
					case 'completed':
						return this.todos.filter(t => t.completed);
						break;
					default :
						return this.todos;
						break;
				}
			}
		},
		watch: {//监视成员改变，当监视的todos发生改变时做业务定制处理
			//但todos是引用类型，watch无法做到深度监视，只能监视一层,因此我们把todos写成对象，来做深度监视
			todos:{
				//当监视到todos改变时会自动调用handler方法(handler写法固定)
				handler(val,oldVal){
					// console.log("改变了");
					//监视到todos变化，把todos本次存储记录本次状态
					//val是新的值，oldVal是旧的值
					window.localStorage.setItem('todos',JSON.stringify(val));
				},
				deep:true//确定深度监视，只有这样才能监视到数组或者对象的深度改变
			}
		}
	});

	//让页面初始化的时候就根据filterText改变一次hash值,保持路由状态
	handleHashChange();
	//当页面hash值变化，就调用改变filterText
	window.onhashchange = handleHashChange;

	//注册hash的改变事件
	//而该方法只有在hash改变时才会触发，因此在加载进页面的时候不会触发，为了保持住页面的hash状态，就得在页面初始化的时候更新hash值
	function handleHashChange() {
		//但这里的this.filterText是拿不到值的，this的指向不对，因此我们需要获取vm(Vue实例)
		vm.filterText = window.location.hash.substr(2);
	}
})();
