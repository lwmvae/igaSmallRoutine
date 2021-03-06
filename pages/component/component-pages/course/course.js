Component({
  data: {
    courseList: [
      {
        "id": 10000,
        "title": "实验室瓶装气体使用人员实验室瓶装气体使用人员",
        "avatar": "../../resourse/image/1.jpg",
        "price": 168,
        "purchase": 123,
        "myCourse": false,
        "type": 1,
        "info": "2017年是实施“十三五”规划的重要一年，是供给侧结构性改革的深化之年；同时今年是中国工业气体工业协会成立卅载，经研究决定，于2017年 10月28～31日在南京举办中国气体协会三十华诞庆祝大会暨中国工业气体工业协会二十七次会员代表大会。本次庆祝大会由中国气体协会联合协会八个分支机构、技术机构共同举办，并设有分支机构、技术机构主持的高端专场。",
        "file": [
          {
            "fileTilte": "学习指南",
            "fileContent": "课程学习指南.doc",
            "docSrc": "#",
            "state": true
          },
          {
            "fileTilte": "学习文档",
            "fileContent": "实验室瓶装气体使用人员文档.doc",
            "docSrc": "#",
            "state": false
          },
          {
            "fileTilte": "注意事项",
            "fileContent": "注意事项.doc",
            "docSrc": "#",
            "state": false
          }],
        "examDeadLine": 10,
        "moniTestTotalNum": 3,
        "moniTestNum": 2
      },
      {
        "id": 10001,
        "title": "瓶装气体运输人员",
        "avatar": "../../resourse/image/2.jpg",
        "price": 118,
        "purchase": 83,
        "myCourse": true,
        "type": 2,
        "info": "2017年是实施“十三五”规划的重要一年，是供给侧结构性改革的深化之年；同时今年是中国工业气体工业协会成立卅载，经研究决定，于2017年 10月28～31日在南京举办中国气体协会三十华诞庆祝大会暨中国工业气体工业协会二十七次会员代表大会。本次庆祝大会由中国气体协会联合协会八个分支机构、技术机构共同举办，并设有分支机构、技术机构主持的高端专场。",
        "file": [
          {
            "fileTilte": "学习指南",
            "fileContent": "课程学习指南.doc",
            "docSrc": "#",
            "state": true
          },
          {
            "fileTilte": "学习文档",
            "fileContent": "实验室瓶装气体使用人员文档.doc",
            "docSrc": "#",
            "state": false
          },
          {
            "fileTilte": "注意事项",
            "fileContent": "注意事项.doc",
            "docSrc": "#",
            "state": false
          }],
        "examDeadLine": 5,
        "moniTestTotalNum": 3,
        "moniTestNum": 0
      },
      {
        "id": 10002,
        "title": "气瓶充装企业人员",
        "avatar": "../../resourse/image/3.jpg",
        "price": 138,
        "purchase": 23,
        "myCourse": false,
        "type": 3,
        "info": "2017年是实施“十三五”规划的重要一年，是供给侧结构性改革的深化之年；同时今年是中国工业气体工业协会成立卅载，经研究决定，于2017年 10月28～31日在南京举办中国气体协会三十华诞庆祝大会暨中国工业气体工业协会二十七次会员代表大会。本次庆祝大会由中国气体协会联合协会八个分支机构、技术机构共同举办，并设有分支机构、技术机构主持的高端专场。",
        "file": [
          {
            "fileTilte": "学习指南",
            "fileContent": "课程学习指南.doc",
            "docSrc": "#",
            "state": true
          },
          {
            "fileTilte": "学习文档",
            "fileContent": "实验室瓶装气体使用人员文档.doc",
            "docSrc": "#",
            "state": false
          },
          {
            "fileTilte": "注意事项",
            "fileContent": "注意事项.doc",
            "docSrc": "#",
            "state": false
          }],
        "examDeadLine": 5,
        "moniTestTotalNum": 3,
        "moniTestNum": 0
      },
      {
        "id": 10003,
        "title": "瓶装气体经销企业人员",
        "avatar": "../../resourse/image/4.jpg",
        "price": 198,
        "purchase": 13,
        "myCourse": true,
        "type": 4,
        "info": "2017年是实施“十三五”规划的重要一年，是供给侧结构性改革的深化之年；同时今年是中国工业气体工业协会成立卅载，经研究决定，于2017年 10月28～31日在南京举办中国气体协会三十华诞庆祝大会暨中国工业气体工业协会二十七次会员代表大会。本次庆祝大会由中国气体协会联合协会八个分支机构、技术机构共同举办，并设有分支机构、技术机构主持的高端专场。",
        "file": [
          {
            "fileTilte": "学习指南",
            "fileContent": "课程学习指南.doc",
            "docSrc": "#",
            "state": true
          },
          {
            "fileTilte": "学习文档",
            "fileContent": "实验室瓶装气体使用人员文档.doc",
            "docSrc": "#",
            "state": false
          },
          {
            "fileTilte": "注意事项",
            "fileContent": "注意事项.doc",
            "docSrc": "#",
            "state": false
          }],
        "examDeadLine": 5,
        "moniTestTotalNum": 3,
        "moniTestNum": 0
      }]
  },
  methods: {
    onTab:function(e){
      // console.log(e.currentTarget.id);
      var myEventDetail = {
        id: e.currentTarget.id
      } // detail对象，提供给事件监听函数      
      this.triggerEvent('toDetail', myEventDetail)
    }
  }
})