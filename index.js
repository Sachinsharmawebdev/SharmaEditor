import myeditor from "./src/editor.js";
myeditor.create('editor');
myeditor.config({
    styles:{
        editor:{
            height:'100%',
            width:'100%'
        },
        toolbar:{
            height:'10vh',
            width:'90%',
            'background-color':'#f8f8f8a8',
            border:'1px solid grey',
            'border-radius':'5px'
        },
        textarea:{
            width:'90%',
            'background-color':'#f1f1f1e6',
            border:'1px solid grey'
        }
    },
    tools:{

    }
    });