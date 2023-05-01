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
    config:(function({}){
        // object has been setuped here
        const conf = {};
        if(!conf.toolbar)
        {
            return 'toolbar not setup';
        }
        else{
            return'toolbar setuped';
        }
    })(), 
    
}

console.log(SHARMAEDITOR.config.editor);