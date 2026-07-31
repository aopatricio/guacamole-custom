(function () {

    "use strict";

    const RAIZEN = {

        initialized: false,

        start: function () {

            if (this.initialized)
                return;

            const login = document.querySelector(".login-ui");

            if (!login)
                return;

            const loginButtons = document.querySelector(".login-buttons");

            if (!loginButtons)
                return;

            this.hideOriginalSSO();

            this.createDivider(loginButtons);

            this.createMicrosoftButton(loginButtons);

            this.initialized = true;

            console.log("Raizen Branding carregado.");

        },

        hideOriginalSSO: function () {

            const sso = document.querySelector(".sso-providers");

            if (!sso)
                return;

            sso.style.display = "none";

        },

        createDivider: function (loginButtons) {

            if (document.querySelector(".raizen-divider"))
                return;

            const divider = document.createElement("div");

            divider.className = "raizen-divider";

            divider.innerHTML = "<span>OU</span>";

            loginButtons.parentNode.insertBefore(
                divider,
                loginButtons.nextSibling
            );

        },

        createMicrosoftButton: function (loginButtons) {

            if (document.querySelector(".raizen-sso"))
                return;

            const button = document.createElement("a");

            button.className = "raizen-sso";

            button.href = "api/ext/openid/login";

            button.innerHTML = "Entrar com Microsoft Entra ID";

            loginButtons.parentNode.insertBefore(
                button,
                loginButtons.nextSibling.nextSibling
            );

        }

    };

    function waitLogin() {

        const timer = setInterval(function () {

            if (document.querySelector(".login-ui") &&
                document.querySelector(".login-buttons")) {

                clearInterval(timer);

                RAIZEN.start();

            }

        }, 300);

    }

    if (document.readyState === "loading") {

        document.addEventListener("DOMContentLoaded", waitLogin);

    } else {

        waitLogin();

    }

})();
