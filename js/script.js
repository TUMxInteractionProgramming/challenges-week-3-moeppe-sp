console.log('app is alive')

function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName);
    document.getElementById('current-channel-name').innerHTML = channelName;
    document.getElementById('current-channel-location').innerHTML = '<a href="http://w3w.co/upgrading.never.helps" target="_blank">upgrading.never.helps</a>';
    unfillCurrentChannelStar();
}

function unfillCurrentChannelStar() {
    $('#star-current-channel').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function fillCurrentChannelStar() {
    $('#star-current-channel').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(tabId) {
    console.log('Changing to tab ' + tabId);
    $('#tab-bar').find('.selected').removeClass('selected');
    $('#' + tabId).addClass('selected');
}

function toggleEmojiBox(){
    $('#emojis').toggle();
}