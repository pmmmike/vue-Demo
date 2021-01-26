// 报社类，发布者
class Baoshe {
    constructor(name) {
        this.name = name;
        // 发布者维护一个数组，是自己的订阅者
        this.duzhes = [];
    }
    jiaDuZhe(ren) {
        this.duzhes.push(ren);
    }
    fawenzhang(info) {
    	// 发消息的时候,会循环遍历所有的订阅者，调用它们的yuedu()方法
        for (let i = 0; i < this.duzhes.length; i++) {
            this.duzhes[i].yuedu(this.name, info);
        }
    }
}

// 人类，订阅者
class Ren {
    constructor(name) {
        this.name = name;
    }
    dingyue(baozhi) {
        baozhi.jiaDuZhe(this);
    }
    yuedu(baoshename, info) {
        console.log(`我是${this.name}，我收到了${baoshename}的新文章${info}`);
    }
}

var huanqiushibao = new Baoshe('环球时报');
var renminribao = new Baoshe('人民日报');

var xiaoming = new Ren('小明');
var xiaohong = new Ren('小红');
var xaioqiang = new Ren('小强');

xiaoming.dingyue(huanqiushibao);
xiaoming.dingyue(renminribao);

xiaohong.dingyue(renminribao);

xaioqiang.dingyue(renminribao);

huanqiushibao.fawenzhang('春节快乐！');
renminribao.fawenzhang('居家过年！');