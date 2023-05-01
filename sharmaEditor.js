const SHARMAEDITOR = {
    create:(i)=>{
        let id = document.getElementById(i);
        let ta = document.createElement('textarea');
        // set attribute to text area
        ta.setAttribute('id', 'tid');
        // text area styling
        let html = id.appendChild(ta);
    },
    config:(function(){let name='sachin';return name})(), // object goes here which we required to set configuration of texteditor
    
}

console.log(SHARMAEDITOR.config.editor);