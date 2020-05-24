import Vue from 'vue';
import MessageBox from './MessageBox';
 
export var messageBox = (function(){
    var defaults = {
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handleCancel:null,
        handleOk:null
    };
    return function(opts){
        for(var arr in opts){
            defaults[attr] = opts[attr];
        }
        var Mycomponent = Vue.extend(MessageBox);
        var vm = new Mycomponent({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.bind(this);
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.bind(this);
                }
            }
        })
    }
})