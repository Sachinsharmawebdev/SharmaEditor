
const SHARMAEDITOR = {
    create:(i)=>{
        let id = document.getElementById(i);
        let ta = document.createElement('textarea');
        // set attribute to text area
        ta.setAttribute('id', 'tid');
        // text area styling
        let html = id.appendChild(ta);
    },
    // object goes here which we required to set configuration of texteditor
    config:(obj)=>{
        // validate user input in cofig file
        if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
            throw new TypeError('Expected an object as the argument');
        }
        // object has been setuped below
        const conf = obj;
        if(!conf.toolbar)
        {
            return 'toolbar not setup';
        }
        else{
            return'toolbar setuped';
        }
    } 
}