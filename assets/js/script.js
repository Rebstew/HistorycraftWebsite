$(document).ready(function(){

    function copyTextToClipboard(text){
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute("id", "dummy_id");
        document.getElementById("dummy_id").value=text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    $('.copy').click(function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        let attributes = event.target.attributes;
        if(attributes){
            let copyContentAttribute = attributes['data-copy-content'];
            if(copyContentAttribute){
                copyTextToClipboard(copyContentAttribute.value);
            }
        }
        
    });
});