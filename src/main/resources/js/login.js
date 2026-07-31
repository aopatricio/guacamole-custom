(function () {

    "use strict";
    function init() {

        const form = document.querySelector(".login-form");

        if (!form)
            return false;

        if (document.querySelector(".raizen-sso"))
            return true;

        // Oculta o bloco original de SSO
        const sso = document.querySelector(".sso-providers");

        if (sso)
            sso.style.display = "none";

        // Adiciona o logo
        const dialog = document.querySelector(".login-dialog");

        if (dialog && !document.querySelector(".raizen-logo")) {

            const logo = document.createElement("img");

            // Se necessário, altere o caminho abaixo conforme seu ambiente
            logo.src = "/guacamole/app/ext/raizen-branding/images/logo.png";

            logo.className = "raizen-logo";

            dialog.insertBefore(logo, dialog.firstChild);

        }

        // Adiciona o divisor
        const divider = document.createElement("div");

        divider.className = "raizen-divider";

        divider.innerHTML = "<span>OU</span>";

        form.appendChild(divider);

        // Adiciona o botão Microsoft Entra ID
        const button = document.createElement("a");

        button.className = "raizen-sso";

        button.href = "api/ext/openid/login";

        button.innerHTML = "Raizen SSO";

        form.appendChild(button);

        console.log("RAIZEN SSO criado.");

        return true;

    }

    const timer = setInterval(function () {

        if (init())
            clearInterval(timer);

    }, 200);

})();
