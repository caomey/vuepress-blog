(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{568:function(_,v,l){"use strict";l.r(v);var t=l(59),i=Object(t.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h2",{attrs:{id:"封装-信息隐藏"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#封装-信息隐藏"}},[_._v("#")]),_._v(" 封装(信息隐藏)")]),_._v(" "),l("p",[_._v("1.好的组件设计应是……")]),_._v(" "),l("ul",[l("li",[_._v("解耦、专注于单一任务、测试良好")])]),_._v(" "),l("p",[_._v("2.坏的组件设计会是.……")]),_._v(" "),l("ul",[l("li",[_._v("规模庞大且职责繁多、紧耦合、没有测试")])]),_._v(" "),l("p",[_._v("3.开发应用程序时习惯问自己：")]),_._v(" "),l("ul",[l("li",[_._v("如何正确地设计组件的结构")]),_._v(" "),l("li",[_._v("如何决定将大组件拆分成"),l("strong",[_._v("小组件")]),_._v("的正确时机")]),_._v(" "),l("li",[_._v("如何正确设计组件间的"),l("strong",[_._v("通信")]),_._v("以避免紧耦合")])]),_._v(" "),l("h2",{attrs:{id:"_1-单一责任"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-单一责任"}},[_._v("#")]),_._v(" 1.单一责任")]),_._v(" "),l("ul",[l("li",[_._v("Single responsibility principle（ "),l("strong",[_._v("SRP")]),_._v("）要求组件修改的"),l("strong",[_._v("动因是唯一")]),_._v("的")]),_._v(" "),l("li",[_._v("为何唯一动因如此重要？因为这样才能让组件修改变得相对隔离和易于控制")]),_._v(" "),l("li",[_._v("关注于单一职责的组件将更容易编码，以及后期的修改、重用和测试")])]),_._v(" "),l("h2",{attrs:{id:"_2-封装"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-封装"}},[_._v("#")]),_._v(" 2.封装")]),_._v(" "),l("ul",[l("li",[_._v("组件在"),l("strong",[_._v("不暴露其内部结构")]),_._v("的情况下通过"),l("strong",[_._v("传参")]),_._v("来控制其行为")]),_._v(" "),l("li",[_._v("耦合是反应组件之间"),l("strong",[_._v("相互依赖程度")]),_._v("的系统特性")]),_._v(" "),l("li",[_._v("根据组件相互依赖的程度，大致可划分出两种耦合类别：\n"),l("ul",[l("li",[_._v("松耦合：即组件对其他组件知之甚少或者一无所知")]),_._v(" "),l("li",[_._v("紧耦合：即组件对其他组件的具体细节知道的太多")])])]),_._v(" "),l("li",[_._v("松耦合，或者说“解耦”是我们设计应用程序结构和组件之间关系的"),l("strong",[_._v("目标")])]),_._v(" "),l("li",[l("strong",[_._v("解耦")]),_._v("带来的好处：\n"),l("ul",[l("li",[_._v("使得在某个组件内作出变更不会影响到其他组件")]),_._v(" "),l("li",[_._v("任意组件都可以用一种替代实现来替换")]),_._v(" "),l("li",[_._v("使得组件可以在不同的应用程序之间复用，实现DRY(dont repeat yourself)原则")]),_._v(" "),l("li",[_._v("单个的组件都很容易测试，可以增加应用程序代码的测试覆盖率")])])]),_._v(" "),l("li",[_._v("封装，或者说“"),l("strong",[_._v("信息隐藏")]),_._v("”，是设计组件的"),l("strong",[_._v("基本原则")]),_._v("，也是解耦的关键")]),_._v(" "),l("li",[l("strong",[_._v("信息隐藏")]),_._v(" "),l("ul",[l("li",[_._v("信息隐藏就是把组件各自的实现细节隐藏起来，只暴露公共接口来控制其行为")]),_._v(" "),l("li",[_._v("组件可以是函数式也可以是对象，它（们）的属性、方法、状态、生命周期勾子..….等等这些都是实现细节，其他的组件不应该知道这些细节")]),_._v(" "),l("li",[_._v("隐藏信息做得很好的组件与其他组件的耦合性就很低")])])]),_._v(" "),l("li",[l("strong",[_._v("通信")]),_._v(" "),l("ul",[l("li",[_._v("尽管信息隐藏是对隔离组件的必要限制，但我们仍然需要组件之间相互通信的方式，也就是传参")]),_._v(" "),l("li",[_._v("尽可能使用"),l("strong",[_._v("原生类型")]),_._v("来传值（字符串、数字、布尔等）")]),_._v(" "),l("li",[_._v("必要的时候可以考虑使用复杂的数据结构（对象、数组等）")]),_._v(" "),l("li",[_._v("函数作为参数传递通常都是为了处理事件或异步行为")]),_._v(" "),l("li",[_._v("参数也可以是组件（HOC）,higher order component")]),_._v(" "),l("li",[_._v("为了避免破坏封装性，要特别小心谨慎的"),l("strong",[_._v("考虑传参的选择")]),_._v("，尽可能不要把组件内部的实现细节作为参数传递")])])])])])}),[],!1,null,null,null);v.default=i.exports}}]);