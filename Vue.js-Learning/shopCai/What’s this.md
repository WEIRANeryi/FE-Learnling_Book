## What‘s this？
> 为了熟悉Vue.js框架的Ajax部分所写的练习。其中promise文件1到4都是对于promise的理解。最后基于promise封装了一个ajax函数，并测试取得了ajax
文件的信息
## objective
> 使用VUE框架和JSON文件，以模拟JD的购物车界面，具有“添加或删除”功能。

## shopCar’s data
> vm实例中的data存放的是初始化后的数据
- products是一个数组存放商品信息
- checkAll是复选框信息，默认不全选

## shopCar’s methods
> getData():Ajax方法来初始化数据
- 引入使用了基于promise的axios
- Axios获取数据后将数组的内容封装在data中，需要使用res.data拿到
- then方法拿到中第一个函数代表成功态后执行的逻辑代码，第二个函数代表失败态后的逻辑代码

> remove():删除商品方法
- 使用filter数组方法过滤取反来完成删除
- 原理是遍历products数组每一项，若点击项与遍历到的项地址相等，就完成删除操作
- 注意使用箭头函数的时候，添加{}后是一个封闭的代码块，需要添加return返回判断的布尔值

> change():商品全选方法
- 绑定的事件应该为change，而不是click
- forEach遍历数组，使每一项商品的isSelected(点击状态值)与全选框的状态相等

> checkOne():根据商品点击结果控制全选的状态方法
- 若一项未选，则全选状态取消
- 使用every方法，遍历数组每一项的isSelected值，如果有一项返回false，则整体返回false，使它和全选框状态相等
- 该方法还被使用在getData方法里，是为了初始化数据后给所有数据一个初始化的状态：全选
- ajax文件中的isSelected都是为true的

> sum():求总价方法
- 使用reduce迭代方法，前一项加后一项求总和得到总价，为了避免NaN，给默认第一次迭代的前一项为0
- 出现问题，这里的迭代不查看选取的状态，所以未选中的商品也会被计算价格
- 使用if判断isSelected的状态，如果被选中，值为true，取反不进入if的代码块，直接进行累加
- 如果未被选中，值为false，取反进入if的代码块，直接被返回进行下一次迭代,不进行累加

## HTML
- 使用v-for循环给值
- 使用指令效果看具体代码

