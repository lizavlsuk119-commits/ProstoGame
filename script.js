/* =========================================================
   Prosto Games — інтерактивний магазин
   Кошик, список бажань, фільтри, пошук, сортування, модалки
   ========================================================= */

(() => {
    "use strict";

    /* ---------- Дані ---------- */

    const GAMES = [
        {
            id: "cyberpunk",
            title: "Cyberpunk 2077",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "action",
            genreLabel: "Екшн",
            price: 899,
            oldPrice: 1199,
            rating: 4.6,
            popularity: 95,
            isNew: false,
            image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
            description: "Відкритий світ Найт-Сіті, рольова система та вибір, що змінює фінал. Ключ активується в Steam."
        },
        {
            id: "gta5",
            title: "Grand Theft Auto V",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "action",
            genreLabel: "Екшн",
            price: 699,
            oldPrice: 999,
            rating: 4.7,
            popularity: 99,
            isNew: false,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQ-blHSqqdgk-6a_RVVbZ7zhJXh80TZ67nK78rPMdDA&s=10",
            description: "Лос-Сантос, три герої та режим GTA Online. Ключ для Steam, активація за 2 хвилини."
        },
        {
            id: "gow",
            title: "God of War Ragnarök",
            platform: "ps5",
            platformLabel: "PlayStation 5",
            genre: "action",
            genreLabel: "Екшн",
            price: 1999,
            oldPrice: null,
            rating: 4.9,
            popularity: 93,
            isNew: false,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeKjCHd1xNXw8J-5ZdHzvOSv1rDUFFpWDK1bNTf6Eaw&s=10",
            description: "Продовження саги Кратоса та Атрея. Фізичний диск для PlayStation 5, доставка Новою поштою."
        },
        {
            id: "stalker2",
            title: "S.T.A.L.K.E.R. 2",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "action",
            genreLabel: "Екшн",
            price: 1599,
            oldPrice: 1899,
            rating: 4.5,
            popularity: 98,
            isNew: true,
            image: "https://upload.wikimedia.org/wikipedia/ru/5/5c/S.T.A.L.K.E.R._2_Logo.png",
            description: "Зона відчуження, аномалії та виживання. Ліцензійний ключ Steam, миттєва видача після оплати."
        },
        {
            id: "eldenring",
            title: "Elden Ring",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "rpg",
            genreLabel: "RPG",
            price: 1299,
            oldPrice: 1599,
            rating: 4.8,
            popularity: 96,
            isNew: true,
            image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
            description: "Відкритий світ Міжзем'я від FromSoftware. Складна, але надзвичайно щедра рольова гра."
        },
        {
            id: "forza5",
            title: "Forza Horizon 5",
            platform: "xbox",
            platformLabel: "Xbox Series",
            genre: "racing",
            genreLabel: "Гонки",
            price: 1199,
            oldPrice: 1499,
            rating: 4.7,
            popularity: 90,
            isNew: false,
            image: "https://store-images.s-microsoft.com/image/apps.28758.13734397844529069.202e3fc9-37d6-4853-a58b-fabe504b71e8.4335e940-f927-4be4-af08-8e689a17bd7a",
            description: "Мексика, понад 500 авто та аркадні гонки без зайвих складнощів. Ключ Xbox / Windows."
        },
        {
            id: "witcher3",
            title: "The Witcher 3: Wild Hunt",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "rpg",
            genreLabel: "RPG",
            price: 499,
            oldPrice: 799,
            rating: 4.9,
            popularity: 92,
            isNew: false,
            image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
            description: "Ґеральт, Цірі та десятки годин сюжету. Видання Wild Hunt з усіма безкоштовними оновленнями."
        },
        {
            id: "rdr2",
            title: "Red Dead Redemption 2",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "action",
            genreLabel: "Екшн",
            price: 899,
            oldPrice: 1299,
            rating: 4.8,
            popularity: 94,
            isNew: false,
            image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
            description: "Дикий Захід, банда ван дер Лінде та найдетальніший відкритий світ у жанрі."
        },
        {
            id: "hogwarts",
            title: "Hogwarts Legacy",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "rpg",
            genreLabel: "RPG",
            price: 1299,
            oldPrice: 1699,
            rating: 4.7,
            popularity: 89,
            isNew: false,
            image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Hogwarts_legacyboxart.png",
            description: "Гоґвортс, магія та власна історія учня у XIX столітті. Ключ Steam, активація миттєва."
        },
        {
            id: "bg3",
            title: "Baldur's Gate 3",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "rpg",
            genreLabel: "RPG",
            price: 1499,
            oldPrice: 1799,
            rating: 4.9,
            popularity: 97,
            isNew: true,
            image: "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg",
            description: "Покрокова RPG з вибором, що справді змінює сюжет. Одна з найкращих ігор останніх років."
        },
        {
            id: "tlou2",
            title: "The Last of Us Part II",
            platform: "ps5",
            platformLabel: "PlayStation 5",
            genre: "action",
            genreLabel: "Екшн",
            price: 1699,
            oldPrice: 1999,
            rating: 4.8,
            popularity: 88,
            isNew: false,
            image: "https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU_P2_Box_Art_2.png",
            description: "Історія Еллі та Еббі, stealth та напружені сутички. Диск для PlayStation 5."
        },
        {
            id: "spiderman2",
            title: "Marvel's Spider-Man 2",
            platform: "ps5",
            platformLabel: "PlayStation 5",
            genre: "action",
            genreLabel: "Екшн",
            price: 1899,
            oldPrice: 2199,
            rating: 4.8,
            popularity: 91,
            isNew: true,
            image: "https://upload.wikimedia.org/wikipedia/en/0/0f/SpiderMan2PS5BoxArt.jpeg",
            description: "Пітер і Майлз у Нью-Йорку: швидкі бої, веб-свінг та кінематографічний сюжет."
        },
        {
            id: "re4",
            title: "Resident Evil 4",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "action",
            genreLabel: "Екшн",
            price: 1099,
            oldPrice: 1399,
            rating: 4.8,
            popularity: 87,
            isNew: true,
            image: "https://upload.wikimedia.org/wikipedia/en/d/df/Resident_Evil_4_remake_cover_art.jpg",
            description: "Ремейк класики: Леон, село, культисти та постійна нестача патронів. Ключ Steam."
        },
        {
            id: "acmirage",
            title: "Assassin's Creed Mirage",
            platform: "pc",
            platformLabel: "PC / Steam",
            genre: "action",
            genreLabel: "Екшн",
            price: 999,
            oldPrice: 1299,
            rating: 4.3,
            popularity: 84,
            isNew: false,
            image: "https://upload.wikimedia.org/wikipedia/en/2/23/Assassin%27s_Creed_Mirage_cover.jpeg",
            description: "Повернення до витоків серії: Багдад, паркур і стелс замість відкритого світу на сотні годин."
        },
        {
            id: "mk1",
            title: "Mortal Kombat 1",
            platform: "xbox",
            platformLabel: "Xbox Series",
            genre: "action",
            genreLabel: "Екшн",
            price: 1199,
            oldPrice: 1599,
            rating: 4.4,
            popularity: 83,
            isNew: false,
            image: "https://upload.wikimedia.org/wikipedia/en/5/5b/Mortal_Kombat_1_key_art.jpeg",
            description: "Файтинги, фаталіті та нова хронологія. Ключ для Xbox Series X|S."
        },
        {
            id: "nfs",
            title: "Need for Speed Unbound",
            platform: "xbox",
            platformLabel: "Xbox Series",
            genre: "racing",
            genreLabel: "Гонки",
            price: 899,
            oldPrice: 1199,
            rating: 4.2,
            popularity: 82,
            isNew: false,
            image: "https://upload.wikimedia.org/wikipedia/en/d/db/Need_for_Speed_Unbound.png",
            description: "Вуличні гонки, графіті-стиль та тюнінг. Ключ Xbox Series, гра англійською."
        }
    ];

    const STORAGE_KEYS = {
        cart: "prostoGames.cart.v1",
        wishlist: "prostoGames.wishlist.v1",
        layout: "prostoGames.layout.v1"
    };

    const PLACEHOLDER =
        "data:image/svg+xml," +
        encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480">' +
            '<rect width="400" height="480" fill="#181a20"/>' +
            '<text x="200" y="240" fill="#4f46e5" font-family="Segoe UI, sans-serif" ' +
            'font-size="26" font-weight="700" text-anchor="middle">PROSTO GAMES</text>' +
            '<text x="200" y="275" fill="#6b7280" font-family="Segoe UI, sans-serif" ' +
            'font-size="16" text-anchor="middle">no image</text></svg>'
        );

    /* ---------- Стан ---------- */

    const state = {
        query: "",
        genre: "all",
        platform: "all",
        mode: "all", // all | new | deals | wishlist
        sort: "popular",
        layout: loadJSON(STORAGE_KEYS.layout, "grid") === "slider" ? "slider" : "grid",
        cart: loadCart(),
        wishlist: new Set(loadJSON(STORAGE_KEYS.wishlist, []))
    };

    /* ---------- DOM ---------- */

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

    const dom = {
        grid: $("#catalogGrid"),
        empty: $("#emptyState"),
        resultCount: $("#resultCount"),
        catalogTitle: $("#catalogTitle"),
        searchForm: $("#searchForm"),
        searchInput: $("#searchInput"),
        genreSelect: $("#genreSelect"),
        sortSelect: $("#sortSelect"),
        resetBtn: $("#resetFilters"),
        emptyReset: $("#emptyReset"),
        layoutButtons: $$("[data-layout]"),
        sliderControls: $("#sliderControls"),
        slidePrev: $("#slidePrev"),
        slideNext: $("#slideNext"),
        sliderDots: $("#sliderDots"),
        cartBtn: $("#cartBtn"),
        cartCount: $("#cartCount"),
        cartDrawer: $("#cartDrawer"),
        cartItems: $("#cartItems"),
        cartTotal: $("#cartTotal"),
        cartClose: $("#cartClose"),
        checkoutBtn: $("#checkoutBtn"),
        overlay: $("#overlay"),
        modal: $("#modal"),
        modalContent: $("#modalContent"),
        modalClose: $("#modalClose"),
        toasts: $("#toasts"),
        wishlistLink: $("#wishlistLink"),
        wishlistCount: $("#wishlistCount"),
        cabinetLink: $("#cabinetLink"),
        heroBuy: $("#heroBuy")
    };

    let lastFocused = null;
    let searchTimer = null;

    /* ---------- Утиліти ---------- */

    function loadJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function saveJSON(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            /* приватний режим — просто ігноруємо */
        }
    }

    function loadCart() {
        const raw = loadJSON(STORAGE_KEYS.cart, {});
        const cart = {};
        if (raw && typeof raw === "object") {
            Object.entries(raw).forEach(([id, qty]) => {
                const amount = Number(qty);
                if (GAMES.some((game) => game.id === id) && Number.isFinite(amount) && amount > 0) {
                    cart[id] = Math.min(99, Math.floor(amount));
                }
            });
        }
        return cart;
    }

    function saveState() {
        saveJSON(STORAGE_KEYS.cart, state.cart);
        saveJSON(STORAGE_KEYS.wishlist, [...state.wishlist]);
    }

    function money(value) {
        return new Intl.NumberFormat("uk-UA").format(value) + " грн";
    }

    function plural(count, one, few, many) {
        const n10 = count % 10;
        const n100 = count % 100;
        if (n10 === 1 && n100 !== 11) return one;
        if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) return few;
        return many;
    }

    function escapeHTML(text) {
        return String(text).replace(/[&<>"']/g, (char) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char]));
    }

    function discountOf(game) {
        if (!game.oldPrice || game.oldPrice <= game.price) return 0;
        return Math.round((1 - game.price / game.oldPrice) * 100);
    }

    function cartQuantity() {
        return Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
    }

    function cartTotal() {
        return Object.entries(state.cart).reduce((sum, [id, qty]) => {
            const game = GAMES.find((item) => item.id === id);
            return game ? sum + game.price * qty : sum;
        }, 0);
    }

    function gameById(id) {
        return GAMES.find((game) => game.id === id);
    }

    /* ---------- Фільтри ---------- */

    function filteredGames() {
        const query = state.query.trim().toLowerCase();

        let list = GAMES.filter((game) => {
            if (state.mode === "wishlist" && !state.wishlist.has(game.id)) return false;
            if (state.mode === "new" && !game.isNew) return false;
            if (state.mode === "deals" && !game.oldPrice) return false;

            if (state.genre !== "all" && game.genre !== state.genre) return false;
            if (state.platform !== "all" && game.platform !== state.platform) return false;

            if (query) {
                const haystack = [
                    game.title,
                    game.platformLabel,
                    game.genreLabel,
                    game.description
                ].join(" ").toLowerCase();
                if (!haystack.includes(query)) return false;
            }

            return true;
        });

        const sorters = {
            popular: (a, b) => b.popularity - a.popularity,
            "price-asc": (a, b) => a.price - b.price,
            "price-desc": (a, b) => b.price - a.price,
            name: (a, b) => a.title.localeCompare(b.title, "uk")
        };

        list.sort(sorters[state.sort] || sorters.popular);
        return list;
    }

    function hasActiveFilters() {
        return (
            state.query !== "" ||
            state.genre !== "all" ||
            state.platform !== "all" ||
            state.mode !== "all" ||
            state.sort !== "popular"
        );
    }

    /* ---------- Рендер каталогу ---------- */

    function cardTemplate(game) {
        const discount = discountOf(game);
        const inWishlist = state.wishlist.has(game.id);
        const inCart = state.cart[game.id] || 0;

        return `
            <article class="game-card" data-id="${game.id}">
                <div class="game-card__media">
                    <button type="button" class="game-card__view" data-view="${game.id}" aria-label="Детальніше: ${escapeHTML(game.title)}">
                        <img src="${game.image}" alt="${escapeHTML(game.title)}" loading="lazy" width="400" height="480">
                    </button>
                    ${discount ? `<span class="discount-badge">−${discount}%</span>` : ""}
                    ${game.isNew ? '<span class="new-badge">Новинка</span>' : ""}
                    <button type="button" class="wish-btn${inWishlist ? " is-active" : ""}"
                            data-wish="${game.id}"
                            aria-pressed="${inWishlist}"
                            aria-label="${inWishlist ? "Прибрати зі списку бажань" : "Додати до списку бажань"}: ${escapeHTML(game.title)}">
                        ${inWishlist ? "♥" : "♡"}
                    </button>
                </div>

                <div class="game-details">
                    <div class="game-meta">
                        <span class="game-tag">${escapeHTML(game.platformLabel)}</span>
                        <span class="genre-tag">${escapeHTML(game.genreLabel)}</span>
                    </div>

                    <h3 class="game-title">
                        <button type="button" class="title-link" data-view="${game.id}">${escapeHTML(game.title)}</button>
                    </h3>

                    <div class="game-rating" aria-label="Рейтинг ${game.rating} з 5">
                        <span aria-hidden="true">★</span> ${game.rating.toFixed(1)}
                    </div>

                    <div class="game-price">
                        <span class="price-new">${money(game.price)}</span>
                        ${game.oldPrice ? `<span class="price-old">${money(game.oldPrice)}</span>` : ""}
                    </div>

                    <button type="button" class="btn-buy${inCart ? " in-cart" : ""}" data-add="${game.id}">
                        ${inCart ? `У кошику: ${inCart}` : (game.platform === "ps5" ? "Купити диск" : "Купити ключ")}
                    </button>
                </div>
            </article>
        `;
    }

    function renderCatalog() {
        const list = filteredGames();

        dom.grid.innerHTML = list.map(cardTemplate).join("");
        dom.grid.hidden = list.length === 0;
        dom.empty.hidden = list.length !== 0;

        const countText = list.length + " " + plural(list.length, "гра", "гри", "ігор");

        if (state.mode === "wishlist") {
            dom.catalogTitle.textContent = "Список бажань";
            dom.resultCount.textContent = "У списку: " + countText;
        } else if (state.mode === "new") {
            dom.catalogTitle.textContent = "Новинки";
            dom.resultCount.textContent = "Знайдено: " + countText;
        } else if (state.mode === "deals") {
            dom.catalogTitle.textContent = "Знижки";
            dom.resultCount.textContent = "Знайдено: " + countText;
        } else {
            dom.catalogTitle.textContent = "Каталог ігор";
            dom.resultCount.textContent = "Знайдено: " + countText;
        }

        dom.resetBtn.hidden = !hasActiveFilters();
        bindImageFallbacks();
        applyLayout();
    }

    /* ---------- Слайдер каталогу ---------- */

    function applyLayout() {
        const isSlider = state.layout === "slider";
        dom.grid.classList.toggle("is-slider", isSlider);
        dom.grid.tabIndex = isSlider ? 0 : -1;

        dom.layoutButtons.forEach((button) => {
            const active = button.dataset.layout === state.layout;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        updateSlider();
    }

    function sliderPages() {
        const width = dom.grid.clientWidth;
        if (!width) return 1;
        return Math.max(1, Math.ceil(dom.grid.scrollWidth / width - 0.05));
    }

    function updateSlider() {
        const isSlider = state.layout === "slider" && !dom.grid.hidden;
        dom.sliderControls.hidden = !isSlider;
        if (!isSlider) return;

        const pages = sliderPages();
        dom.sliderDots.innerHTML = Array.from({ length: pages }, (_, index) =>
            `<button type="button" class="slider-dot" data-slide="${index}" ` +
            `aria-label="Перейти до слайда ${index + 1}"></button>`
        ).join("");

        updateSliderState();
    }

    function updateSliderState() {
        if (state.layout !== "slider" || dom.grid.hidden) return;

        const width = dom.grid.clientWidth || 1;
        const maxScroll = Math.max(0, dom.grid.scrollWidth - width);
        const dots = $$(".slider-dot", dom.sliderDots);
        const ratio = maxScroll > 0 ? dom.grid.scrollLeft / maxScroll : 0;
        const index = Math.round(ratio * Math.max(0, dots.length - 1));

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("is-active", dotIndex === index);
        });

        dom.slidePrev.disabled = dom.grid.scrollLeft <= 2;
        dom.slideNext.disabled = dom.grid.scrollLeft >= maxScroll - 2;
    }

    function scrollSlider(direction) {
        const width = dom.grid.clientWidth || 300;
        dom.grid.scrollBy({ left: direction * width * 0.85, behavior: "smooth" });
    }

    function bindImageFallbacks() {
        $$("img", dom.grid).forEach((img) => {
            img.addEventListener("error", function onError() {
                img.removeEventListener("error", onError);
                img.src = PLACEHOLDER;
                img.classList.add("is-placeholder");
            });
        });
    }

    /* ---------- Кошик ---------- */

    function addToCart(id, quantity = 1) {
        const game = gameById(id);
        if (!game) return;

        state.cart[id] = Math.min(99, (state.cart[id] || 0) + quantity);
        saveState();
        renderCart();
        renderCatalog();
        toast(`«${game.title}» у кошику`, "success");
        bumpBadge(dom.cartCount);
    }

    function setQuantity(id, quantity) {
        if (quantity <= 0) {
            delete state.cart[id];
        } else {
            state.cart[id] = Math.min(99, quantity);
        }
        saveState();
        renderCart();
        renderCatalog();
    }

    function removeFromCart(id) {
        const game = gameById(id);
        delete state.cart[id];
        saveState();
        renderCart();
        renderCatalog();
        if (game) toast(`«${game.title}» видалено з кошика`, "info");
    }

    function renderCart() {
        const entries = Object.entries(state.cart)
            .map(([id, qty]) => ({ game: gameById(id), qty }))
            .filter((entry) => entry.game);

        const quantity = cartQuantity();
        dom.cartCount.textContent = String(quantity);

        if (!entries.length) {
            dom.cartItems.innerHTML = `
                <div class="cart-empty">
                    <div class="cart-empty__icon" aria-hidden="true">🛒</div>
                    <h3>Кошик порожній</h3>
                    <p>Додай гру з каталогу — і вона з'явиться тут.</p>
                </div>
            `;
            dom.cartTotal.textContent = "0 грн";
            dom.checkoutBtn.disabled = true;
            return;
        }

        dom.checkoutBtn.disabled = false;

        dom.cartItems.innerHTML = entries.map(({ game, qty }) => `
            <div class="cart-item" data-cart-item="${game.id}">
                <img src="${game.image}" alt="" class="cart-item__img" loading="lazy">
                <div class="cart-item__info">
                    <h3>${escapeHTML(game.title)}</h3>
                    <span>${escapeHTML(game.platformLabel)}</span>
                    <div class="cart-item__controls">
                        <button type="button" class="qty-btn" data-qty="dec" data-id="${game.id}" aria-label="Зменшити кількість">−</button>
                        <span class="qty-value">${qty}</span>
                        <button type="button" class="qty-btn" data-qty="inc" data-id="${game.id}" aria-label="Збільшити кількість">+</button>
                        <button type="button" class="remove-btn" data-remove="${game.id}">Видалити</button>
                    </div>
                </div>
                <div class="cart-item__price">${money(game.price * qty)}</div>
            </div>
        `).join("");

        dom.cartTotal.textContent = money(cartTotal());
    }

    function openCart() {
        lastFocused = document.activeElement;
        renderCart();
        dom.cartDrawer.inert = false;
        dom.cartDrawer.classList.add("is-open");
        dom.cartDrawer.setAttribute("aria-hidden", "false");
        dom.cartBtn.setAttribute("aria-expanded", "true");
        dom.overlay.hidden = false;
        document.body.classList.add("no-scroll");
        requestAnimationFrame(() => dom.cartClose.focus());
    }

    function closeCart() {
        dom.cartDrawer.classList.remove("is-open");
        dom.cartDrawer.setAttribute("aria-hidden", "true");
        dom.cartDrawer.inert = true;
        dom.cartBtn.setAttribute("aria-expanded", "false");
        dom.overlay.hidden = true;
        document.body.classList.remove("no-scroll");
        if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    function checkout() {
        const entries = Object.entries(state.cart).filter(([id]) => gameById(id));
        if (!entries.length) {
            toast("Кошик порожній", "error");
            return;
        }

        const total = cartTotal();
        const count = cartQuantity();
        const order = "PG-" + String(Date.now()).slice(-6);

        state.cart = {};
        saveState();
        renderCart();
        renderCatalog();
        closeCart();

        openModal(`
            <div class="modal-success">
                <div class="modal-success__icon" aria-hidden="true">✓</div>
                <h2 id="modalTitle">Замовлення прийнято</h2>
                <p>Номер замовлення: <strong>${order}</strong></p>
                <p>${count} ${plural(count, "товар", "товари", "товарів")} на суму <strong>${money(total)}</strong>.</p>
                <p class="modal-muted">Це демо: реальна оплата не списується, ключі не надсилаються.</p>
                <button type="button" class="btn-primary" data-close-modal>Продовжити покупки</button>
            </div>
        `);
    }

    /* ---------- Список бажань ---------- */

    function toggleWishlist(id) {
        const game = gameById(id);
        if (!game) return;

        if (state.wishlist.has(id)) {
            state.wishlist.delete(id);
            toast(`«${game.title}» прибрано зі списку бажань`, "info");
        } else {
            state.wishlist.add(id);
            toast(`«${game.title}» у списку бажань`, "success");
        }

        saveState();
        updateWishlistCount();
        renderCatalog();
        bumpBadge(dom.wishlistCount);
    }

    function updateWishlistCount() {
        dom.wishlistCount.textContent = String(state.wishlist.size);
    }

    /* ---------- Модальне вікно ---------- */

    function openModal(html) {
        lastFocused = document.activeElement;
        dom.modalContent.innerHTML = html;
        dom.modal.hidden = false;
        document.body.classList.add("no-scroll");
        requestAnimationFrame(() => {
            const focusTarget = dom.modal.querySelector("[data-close-modal], button, a");
            if (focusTarget) focusTarget.focus();
        });
    }

    function closeModal() {
        dom.modal.hidden = true;
        dom.modalContent.innerHTML = "";
        if (!dom.cartDrawer.classList.contains("is-open")) {
            document.body.classList.remove("no-scroll");
        }
        if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    function openGameModal(id) {
        const game = gameById(id);
        if (!game) return;

        const discount = discountOf(game);
        const inWishlist = state.wishlist.has(id);

        openModal(`
            <div class="game-modal">
                <div class="game-modal__media">
                    <img src="${game.image}" alt="${escapeHTML(game.title)}">
                </div>
                <div class="game-modal__info">
                    <div class="game-meta">
                        <span class="game-tag">${escapeHTML(game.platformLabel)}</span>
                        <span class="genre-tag">${escapeHTML(game.genreLabel)}</span>
                    </div>
                    <h2 id="modalTitle">${escapeHTML(game.title)}</h2>
                    <div class="game-rating"><span aria-hidden="true">★</span> ${game.rating.toFixed(1)} / 5</div>
                    <p>${escapeHTML(game.description)}</p>
                    <div class="game-price">
                        <span class="price-new">${money(game.price)}</span>
                        ${game.oldPrice ? `<span class="price-old">${money(game.oldPrice)}</span>` : ""}
                        ${discount ? `<span class="discount-badge discount-badge--inline">−${discount}%</span>` : ""}
                    </div>
                    <div class="game-modal__actions">
                        <button type="button" class="btn-buy" data-add="${game.id}">Додати в кошик</button>
                        <button type="button" class="btn-ghost" data-wish="${game.id}">
                            ${inWishlist ? "♥ У списку бажань" : "♡ У список бажань"}
                        </button>
                    </div>
                    <p class="modal-muted">Ліцензійний ключ надходить на email одразу після оплати.</p>
                </div>
            </div>
        `);
    }

    function openCabinet() {
        const quantity = cartQuantity();
        const total = cartTotal();
        openModal(`
            <div class="modal-cabinet">
                <h2 id="modalTitle">Особистий кабінет</h2>
                <p class="modal-muted">Демо-режим: дані зберігаються лише у цьому браузері.</p>
                <div class="cabinet-rows">
                    <div><span>Гравець</span><strong>Guest</strong></div>
                    <div><span>Товарів у кошику</span><strong>${quantity}</strong></div>
                    <div><span>Сума кошика</span><strong>${money(total)}</strong></div>
                    <div><span>У списку бажань</span><strong>${state.wishlist.size}</strong></div>
                </div>
                <button type="button" class="btn-primary" data-close-modal>Закрити</button>
            </div>
        `);
    }

    /* ---------- Повідомлення ---------- */

    function toast(message, type = "info") {
        const item = document.createElement("div");
        item.className = "toast toast--" + type;
        item.setAttribute("role", "status");
        item.innerHTML = `
            <span class="toast__icon" aria-hidden="true">${type === "success" ? "✓" : type === "error" ? "!" : "i"}</span>
            <span>${escapeHTML(message)}</span>
        `;
        dom.toasts.appendChild(item);

        requestAnimationFrame(() => item.classList.add("is-visible"));

        setTimeout(() => {
            item.classList.remove("is-visible");
            item.addEventListener("transitionend", () => item.remove(), { once: true });
            setTimeout(() => item.remove(), 400);
        }, 2600);
    }

    function bumpBadge(element) {
        element.classList.remove("is-bumping");
        void element.offsetWidth;
        element.classList.add("is-bumping");
    }

    /* ---------- Керування станом ---------- */

    function setMode(mode) {
        state.mode = mode;
        if (mode !== "all") {
            state.genre = "all";
            state.platform = "all";
            dom.genreSelect.value = "all";
        }
        updateActiveUI();
        renderCatalog();
    }

    function resetFilters() {
        state.query = "";
        state.genre = "all";
        state.platform = "all";
        state.mode = "all";
        state.sort = "popular";

        dom.searchInput.value = "";
        dom.genreSelect.value = "all";
        dom.sortSelect.value = "popular";

        updateActiveUI();
        renderCatalog();
    }

    function updateActiveUI() {
        $$("[data-nav]").forEach((link) => {
            const active = link.dataset.nav === state.mode;
            link.classList.toggle("active", active);
            if (active) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });

        $$("[data-platform]").forEach((link) => {
            link.classList.toggle("is-active", link.dataset.platform === state.platform && state.mode !== "wishlist");
        });

        $$("[data-genre]").forEach((link) => {
            link.classList.toggle("is-active", link.dataset.genre === state.genre && state.mode !== "wishlist");
        });
    }

    function scrollToCatalog() {
        const catalog = $("#catalog");
        if (catalog) catalog.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    /* ---------- Події ---------- */

    dom.searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        clearTimeout(searchTimer);
        state.query = dom.searchInput.value;
        renderCatalog();
        scrollToCatalog();
    });

    dom.searchInput.addEventListener("input", () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            state.query = dom.searchInput.value;
            renderCatalog();
        }, 180);
    });

    dom.genreSelect.addEventListener("change", () => {
        state.genre = dom.genreSelect.value;
        if (state.mode === "wishlist") state.mode = "all";
        updateActiveUI();
        renderCatalog();
    });

    dom.sortSelect.addEventListener("change", () => {
        state.sort = dom.sortSelect.value;
        renderCatalog();
    });

    dom.resetBtn.addEventListener("click", resetFilters);
    dom.emptyReset.addEventListener("click", resetFilters);

    dom.layoutButtons.forEach((button) => {
        button.addEventListener("click", () => {
            state.layout = button.dataset.layout;
            saveJSON(STORAGE_KEYS.layout, state.layout);
            applyLayout();
            if (state.layout === "slider") dom.grid.scrollLeft = 0;
        });
    });

    dom.slidePrev.addEventListener("click", () => scrollSlider(-1));
    dom.slideNext.addEventListener("click", () => scrollSlider(1));

    dom.sliderDots.addEventListener("click", (event) => {
        const dot = event.target.closest("[data-slide]");
        if (!dot) return;
        const dots = $$(".slider-dot", dom.sliderDots);
        const maxScroll = Math.max(0, dom.grid.scrollWidth - dom.grid.clientWidth);
        const step = dots.length > 1 ? maxScroll / (dots.length - 1) : 0;
        dom.grid.scrollTo({
            left: step * Number(dot.dataset.slide),
            behavior: "smooth"
        });
    });

    let sliderFrame = null;
    dom.grid.addEventListener("scroll", () => {
        if (sliderFrame !== null) return;
        sliderFrame = requestAnimationFrame(() => {
            sliderFrame = null;
            updateSliderState();
        });
    }, { passive: true });

    dom.grid.addEventListener("scrollend", updateSliderState);

    dom.grid.addEventListener("keydown", (event) => {
        if (state.layout !== "slider") return;
        if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollSlider(1);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollSlider(-1);
        }
    });

    let resizeTimer = null;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateSlider, 160);
    });

    dom.grid.addEventListener("click", (event) => {
        const wishButton = event.target.closest("[data-wish]");
        if (wishButton) {
            toggleWishlist(wishButton.dataset.wish);
            return;
        }

        const addButton = event.target.closest("[data-add]");
        if (addButton) {
            addToCart(addButton.dataset.add);
            return;
        }

        const viewButton = event.target.closest("[data-view]");
        if (viewButton) {
            openGameModal(viewButton.dataset.view);
        }
    });

    dom.cartBtn.addEventListener("click", openCart);
    dom.cartClose.addEventListener("click", closeCart);
    dom.overlay.addEventListener("click", closeCart);
    dom.checkoutBtn.addEventListener("click", checkout);

    dom.cartItems.addEventListener("click", (event) => {
        const qtyButton = event.target.closest("[data-qty]");
        if (qtyButton) {
            const id = qtyButton.dataset.id;
            const current = state.cart[id] || 0;
            setQuantity(id, qtyButton.dataset.qty === "inc" ? current + 1 : current - 1);
            return;
        }

        const removeButton = event.target.closest("[data-remove]");
        if (removeButton) {
            removeFromCart(removeButton.dataset.remove);
        }
    });

    dom.modalClose.addEventListener("click", closeModal);

    dom.modal.addEventListener("click", (event) => {
        if (event.target === dom.modal || event.target.closest("[data-close-modal]")) {
            closeModal();
            return;
        }

        const wishButton = event.target.closest("[data-wish]");
        if (wishButton) {
            toggleWishlist(wishButton.dataset.wish);
            openGameModal(wishButton.dataset.wish);
            return;
        }

        const addButton = event.target.closest("[data-add]");
        if (addButton) {
            addToCart(addButton.dataset.add);
            closeModal();
        }
    });

    dom.wishlistLink.addEventListener("click", (event) => {
        event.preventDefault();
        setMode("wishlist");
        renderCatalog();
        scrollToCatalog();
    });

    dom.cabinetLink.addEventListener("click", (event) => {
        event.preventDefault();
        openCabinet();
    });

    dom.heroBuy.addEventListener("click", () => addToCart("stalker2"));

    $$("[data-nav]").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            setMode(link.dataset.nav);
            if (link.dataset.nav !== "all") scrollToCatalog();
            else window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    $$("[data-platform]").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            state.platform = link.dataset.platform;
            if (state.mode === "wishlist") state.mode = "all";
            updateActiveUI();
            renderCatalog();
            scrollToCatalog();
        });
    });

    $$("[data-genre]").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            state.genre = link.dataset.genre;
            dom.genreSelect.value = link.dataset.genre;
            if (state.mode === "wishlist") state.mode = "all";
            updateActiveUI();
            renderCatalog();
            scrollToCatalog();
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        if (!dom.modal.hidden) closeModal();
        else if (dom.cartDrawer.classList.contains("is-open")) closeCart();
    });

    /* ---------- Старт ---------- */

    updateWishlistCount();
    renderCart();
    updateActiveUI();
    renderCatalog();

    if (location.hash === "#wishlist") {
        setMode("wishlist");
        scrollToCatalog();
    } else if (location.hash === "#cabinet") {
        openCabinet();
    }

    window.addEventListener("hashchange", () => {
        if (location.hash === "#wishlist") {
            setMode("wishlist");
            scrollToCatalog();
        } else if (location.hash === "#cabinet") {
            openCabinet();
        }
    });
})();
