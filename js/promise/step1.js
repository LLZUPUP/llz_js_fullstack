class Promise {
    constructor(executor) {
        this.status = 'pending'
        this.value = undefined;
        this.reason = undefined;
        this.onResolveCallbacks=[]
        this.onRejectedCallbacks=[]
        let resolve = (value) => {
            if(this.status == 'pending') {
                this.status = 'resolved';
                this.value = value
                this.onResolveCallbacks.forEach(fn=>fn())
            }
        }
        let reject = (reason)=> {
            if(this.status == 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn=>fn())
            }
        }
        executor(resolve,reject)
    }
    then(onFullFilled,onRejected) {
        console.log(this.status)
        if(this.status == 'resolved') {
            onFullFilled(this.value);
        }
        if(this.status == 'rejected') {
            onRejected(this.reason);
        }
        if(this.status == 'pending') {
            this.onResolveCallbacks.push(()=>{
                onFullFilled(this.value);
            })
            this.onRejectedCallbacks.push(()=>{
                onRejected(this.reason);
            })
        }
    }

}

const p = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve('hello world');
    },1000)
})

p.then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err)
})
module.exports = Promise