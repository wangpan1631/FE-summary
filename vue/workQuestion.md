# 190826
* Table表格动态列抛异常Error in render function: "TypeError: _self.$scopedSlots.default is not a function"
- 解决：我遇到的是el-table-column引起的，有重复的兄弟元素，用v-if控制显示， 都要带上 key。
```
<el-table-column v-if="isShowName" key="name" prop="name" label="姓名" width="120"></el-table-column>
```
- 另外一种方法，不用加key，把v-if改成v-show



