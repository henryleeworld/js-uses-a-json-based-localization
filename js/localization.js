$(function() {
    updateText();
    $('.language').on('change keyup', updateText);
});

function updateText() {
    'use strict';
    var language = $('.language option:selected').val();
    $.i18n().load({
        'en': 'js/jquery.i18n/1.0.7/languages/en.json',
        'zh-cn': 'js/jquery.i18n/1.0.7/languages/zh-cn.json',
        'zh-tw': 'js/jquery.i18n/1.0.7/languages/zh-tw.json',
    }).done(function() {
        $.i18n().locale = language;
        // $('.dancing-robots').text($.i18n('article.dancing-robots'));
        // $('.over-20-robots-dance').text($.i18n('article.over-20-robots-dance'));
        $('.card').i18n();
    });
}