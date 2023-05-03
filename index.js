import myeditor from "./src/editor.js";
myeditor.create('editor');
myeditor.config({
    styles:{
        editor:{
            height:'100%',
            width:'100%',
            backgroundColor:'red',
            display:'block',
            margin:'0 auto'
        },
        toolbar:{
            height:'10vh',
            width:'90%',
            backgroundColor:'white',
            border:'2px solid grey',
            display:'block',
            margin:'0 auto'
        },
        textarea:{
            height:'70vh',
            width:'90%',
            backgroundColor:'brown',
            border:'2px solid grey',
            display:'block',
            margin:'0 auto'
        }
    },
    tools:{

    }
    });