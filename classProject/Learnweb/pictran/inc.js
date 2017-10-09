kao.add('index', {path : 'site/index/v1/index14121101.js', requires : ['jquery']});

messagebus.subscribe('core.loaded_nav', function(){    
    kao( 'nav-v1' );    
}, null, null, {cache:true});

kao('index');