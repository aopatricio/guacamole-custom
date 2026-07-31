/******************************************************************************
 *
 * RAIZEN BRANDING
 *
 ******************************************************************************/

(function () {

    "use strict";

    const TITLE = "Raizen Workspace";

    const FAVICON = "app/ext/raizen-branding/images/favicon.ico";

    function setTitle() {

        if (document.title !== TITLE)
            document.title = TITLE;

    }

    function setFavicon() {

        let icon = document.querySelector("link[rel*='icon']");

        if (!icon) {

            icon = document.createElement("link");

            icon.rel = "icon";

            document.head.appendChild(icon);

        }

        icon.type = "image/x-icon";

        icon.href = FAVICON + "?v=1";

    }

    function init() {

        setTitle();

        setFavicon();

        const title = document.querySelector("title");

        if (!title)
            return;

        new MutationObserver(function () {

            if (document.title !== TITLE)
                document.title = TITLE;

        }).observe(title, {

            childList: true

        });

        console.log("Raizen Branding carregado.");

    }

    if (document.readyState === "loading") {

        document.addEventListener("DOMContentLoaded", init);

    } else {

        init();

    }

})();
