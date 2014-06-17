(function(module) {
    "use strict";

    var vexflow = {},
        embed = '<iframe src="http://static.vexflow.com/embed/$1" width="100%" height="1421" frameborder="0" scrolling="no"></iframe>';


    vexflow.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:http?:\/\/)?(?:my\.vexflow\.com)\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = vexflow;
}(module));
