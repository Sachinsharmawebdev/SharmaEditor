import conf from './configuration.js';
window.details = {};
const SHARMAEDITOR = {
    create:(div)=>{
        details.create = {};
        details.create['editorID'] = document.getElementById(div);
        details.create['editAreaID'] = document.createElement('div');
        details.create['toolbar'] = document.createElement('div');
        details.create['toolbar'].setAttribute('id', 'toolbar');
        details.create['editAreaID'].setAttribute('id', 'editfield');
        details.create['editAreaID'].setAttribute('contenteditable',true); //TO make edit area editable
        details.create['editorID'].appendChild(details.create['toolbar']);
        details.create['editorID'].appendChild(details.create['editAreaID']);
        
    },
    config:(obj)=>{
        details.config = {};
        Object.keys(obj).forEach(key => {
            details.config[key] = obj[key];
        });
        conf(details); 
    }
}

export default SHARMAEDITOR;