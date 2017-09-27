# table
一个使&lt;table&gt;可编辑的jQuery插件

## how to use
1. 引入jQuery
1. 引入table.js
```
    $('table').table({
            inputCss: {padding: '0.75em'},//给输入框添加的样式
            cellType: 'td',//单元格是 td 还是 div
            select:{
                3:['A','B','C','D']//第三列是一个选择框，选项是a,b,c,d
            }
        })
```

## feature

1. 支持输入框和选择框两种输入方式


## demo
可以查看这个[demo](https://imgss.github.io/demo/tablefy/test/test.html)

## license
MIT
