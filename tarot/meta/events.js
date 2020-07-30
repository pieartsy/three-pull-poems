// events.min.js, for SugarCube 2, by Chapel
// v1.1.1, 2020-07-06, 92d87a1d979055f318ee94bcad96cb25ae2a23aa
;Macro.add("trigger",{handler:function(){var t;return this.args.length>2||0===this.args.length?this.error("incorrect number of arguments"):"string"!=typeof this.args[0]?this.error("first argument should be a string and a valid event type"):(t=this.args[0],void(1===this.args.length||this.args[1]&&"string"==typeof this.args[1]&&"document"===this.args[1].toLowerCase().trim()?$(document):$(this.args[1])).trigger(t))}}),Macro.add("event",{tags:["which"],handler:function(){var t,r,s=this.payload,e="",i="";return this.args.length>2||0===this.args.length?this.error("incorrect number of arguments"):"string"!=typeof this.args[0]?this.error("first argument should be a string and a valid event type"):(2===this.args.length&&"string"==typeof this.args[1]&&(e=this.args[1]),t=this.args[0],void $(document).on(t,e,(function(t){if(i=s[0].contents,s.length>1)for(r=1;r<s.length;r++)s[r].args.includes(t.which)&&(i+=s[r].contents);new Wikifier(null,i)})))}});
// end events.min.js