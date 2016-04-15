
function menuScroll(fn) {
    var beforeScrollTop = document.body.scrollTop,
            fn = fn || function () {
            };
    window.addEventListener("scroll", function () {
        var afterScrollTop = document.body.scrollTop,
                delta = afterScrollTop - beforeScrollTop;
        if (delta === 0)
            return false;
        fn(delta > 0 ? "down" : "up");
        beforeScrollTop = afterScrollTop;
    }, false);
}

function timer() {
    var time = new Date();
    var Milliseconds = time.getMilliseconds();
    if (10 > Milliseconds) {
        Milliseconds = '00' + Milliseconds;
    } else if (100 > Milliseconds) {
        Milliseconds = '0' + Milliseconds;
    }
    document.getElementById("time").innerHTML = "当前时间:" + time.toLocaleString() + ':' + Milliseconds;
}
//setInterval(timer, 99);

function randomQuotes() {
    randomQuoteNode = document.getElementById('random-qoute');
    randomQuoteNode.innerHTML = '123';
    //指定条目数
    items = new Array(40);
//条目内容
    items[0] = '人生应该如蜡烛一样，从顶燃到底，一直都是光明的。 —— 萧楚女';
    items[1] = '人生的价值，即以其人对于当代所做的工作为尺度。 —— 徐玮';
    items[2] = '路是脚踏出来的，历史是人写出来的。人的每一步行动都在书写自己的历史。 —— 吉鸿昌';
    items[3] = '春蚕到死丝方尽，人至期颐亦不休。一息尚存须努力，留作青年好范畴。 —— 吴玉章';
    items[4] = '但愿每次回忆，对生活都不感到负疚 —— 郭小川';
    items[5] = '你若要喜爱你自己的价值，你就得给世界创造价值。 —— 歌德';
    items[6] = '社会犹如一条船，每个人都要有掌舵的准备。 —— 易卜生';
    items[7] = '人生的价值，并不是用时间，而是用深度去衡量的。 —— 列夫·托尔斯泰';
    items[8] = '生活只有在平淡无味的人看来才是空虚而平淡无味的。 —— 车尔尼雪夫斯基';
    items[9] = '芸芸众生，孰不爱生？爱生之极，进而爱群。 —— 秋瑾';
    items[10] = '生活真象这杯浓酒，不经三番五次的提炼呵，就不会这样可口！ —— 郭小川';
    items[11] = '充满着欢乐与斗争精神的人们，永远带着欢乐，欢迎雷霆与阳光。 —— 赫胥黎';
    items[12] = '春风吹柳,雨润大地。';
    items[13] = '为了生活中努力发挥自己的作用，热爱人生吧。 —— 罗丹';
    items[14] = '希望是附丽于存在的，有存在，便有希望，有希望，便是光明。 —— 鲁迅';
    items[15] = '沉沉的黑夜都是白天的前奏。 —— 郭小川';
    items[16] = '当一个人用工作去迎接光明，光明很快就会来照耀着他。 —— 冯学峰';
    items[17] = '冬天已经到来，春天还会远吗？ —— 雪莱';
    items[18] = '过去属于死神，未来属于你自己。 —— 雪莱';
    items[19] = '世间的活动，缺点虽多，但仍是美好的。 —— 罗丹';
    items[20] = '辛勤的蜜蜂永没有时间悲哀。 —— 布莱克';
    items[21] = '希望是厄运的忠实的姐妹。 —— 普希金';
    items[22] = '当你的希望一个个落空，你也要坚定，要沉着！ —— 朗费罗';
    items[23] = '先相信你自己，然后别人才会相信你。 —— 屠格涅夫';
    items[24] = '不要慨叹生活底痛苦！---慨叹是弱者...... —— 高尔基';
    items[25] = '宿命论是那些缺乏意志力的弱者的借口。 —— 罗曼·罗兰';
    items[26] = '私心胜者，可以灭公。 —— 林逋';
    items[27] = '人人好公，则天下太平；人人营私，则天下大乱。 —— 刘鹗';
    items[28] = '自私自利之心，是立人达人之障。 —— 吕坤';
    items[29] = '如烟往事俱忘却，心底无私天地宽。 —— 陶铸';
    items[30] = '常求有利别人，不求有利自己。 —— 谢觉哉';
    items[31] = '一切利己的生活，都是非理性的，动物的生活。 —— 列夫·托尔斯泰';
    items[32] = '人的理性粉碎了迷信，而人的感情也将摧毁利己主义。 —— 海涅';
    items[33] = '无私是稀有的道德，因为从它身上是无利可图的。 —— 布莱希特';
    items[34] = '君子喻于义，小人喻于利。 —— 孔丘';
    items[35] = '不戚戚于贫贱，不汲汲于富贵。 —— 陶渊明';
    items[36] = '富贵不淫贫贱乐，男儿到此是豪雄。 —— 程颢';
    items[37] = '清贫，洁白朴素的生活，正是我们革命者能够战胜许多困难的地方！ —— 方志敏';
    items[38] = '三军可夺帅也,匹夫不可夺志也。 —— 孔丘';
    items[39] = '志不强者智不达。 —— 墨翟';
    items[40] = '燕雀安知鸿鹄之志哉！ —— 陈涉';
    randomQuote = Math.floor(Math.random() * items.length);
    randomQuoteNode.innerHTML = items[randomQuote];
    setTimeout(randomQuotes, 5000);
}