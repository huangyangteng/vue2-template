class Utils{
    constructor(){
        this.d=new Date();//date对象
        this.instance=null;
    }
    static getInstance(){//单例模式
        if(!this.instance){
            this.instance = new Utils();
        }
        return this.instance;
    }

    pick(obj,arr){//pick({ a: 1, b: '2', 'c': 3 }, ['a', 'c'])  =>{a:1,c:3}
       return arr.reduce((acc,curr)=>{
            return (curr in obj && (acc[curr] = obj[curr]), acc)
        },{})
    }

    dateFormat(datetime,pattern=""){
        let vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
        let dt=new Date(datetime);
        let y=dt.getFullYear();
        let m=(dt.getMonth()+1).toString().padStart(2,'0');
        let d=dt.getDate().toString().padStart(2,'0');
        let hh=dt.getHours().toString().padStart(2,'0');
        let mm=dt.getMinutes().toString().padStart(2,'0');
        let ss=dt.getSeconds().toString().padStart(2,'0');
        let vWeek_s = dt.getDay();//星期
        if(pattern.toLowerCase() === 'yyyy-mm-dd'){
            return `${y}-${m}-${d}`
        }else if(pattern.toLowerCase() === 'mm-dd'){
            return `${m}-${d}`
        }else if(pattern.toLowerCase() === 'yyyymmddhhmmss'){
            return `${y}${m}${d}${hh}${mm}${ss}`
        }else {
            return `${y}-${m}-${d} ${hh}:${mm}:${ss} ${vWeek[vWeek_s]}`
        }

    }

}

const UTIL = Utils.getInstance();

// console.log(UTIL.dateFormat(new Date(),'yyyymmddhhmmss')) //=>20190312110722
// console.log(UTIL.dateFormat(new Date()))//=>2019-03-12 11:07:22 星期二
// console.log(UTIL.pick({ a: 1, b: '2', 'c': 3 }, ['a', 'c']))//=>{a:1,c:3}

export default UTIL;
