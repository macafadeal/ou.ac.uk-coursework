const { defineCustomElement, createApp } = Vue;

const TM252Toolbar = defineCustomElement({
    methods: {
        slotChanged(ev) {
            const buttons = [];
            for (const assignedElement of ev.target.assignedElements()) {
                for (const button of assignedElement.querySelectorAll("button")) {
                    buttons.push(button);
                }
            }
            let focusButton = null;
            for (let idx = 0; idx < buttons.length; idx++) {
                const button = buttons[idx];
                if (idx === 0) {
                    button.setAttribute("tabindex", "0");
                    focusButton = button;
                } else {
                    button.setAttribute("tabindex", "-1");
                }
                button.addEventListener("keyup", (ev) => {
                    let newFocusButton = null;
                    if (ev.key === "ArrowLeft") {
                        if (idx === 0) {
                            newFocusButton = buttons[buttons.length - 1];
                        } else {
                            newFocusButton = buttons[idx - 1];
                        }
                    } else if (ev.key === "ArrowRight") {
                        if (idx < buttons.length - 1) {
                            newFocusButton = buttons[idx + 1];
                        } else {
                            newFocusButton = buttons[0];
                        }
                    } else if (ev.key === "Home") {
                        newFocusButton = buttons[0];
                    } else if (ev.key === "End") {
                        newFocusButton = buttons[buttons.length - 1];
                    }
                    if (newFocusButton !== null) {
                        if (focusButton !== null) {
                            focusButton.setAttribute("tabindex", "-1");
                        }
                        focusButton = newFocusButton;
                        focusButton.focus();
                        focusButton.setAttribute("tabindex", "0");
                    }
                });
                button.addEventListener("keydown", (ev) => {
                    if (ev.key === "Home" || ev.key === "End") {
                        ev.preventDefault();
                    }
                });
            }
        },
    },
    template: `<slot @slotchange="slotChanged"/>`,
});

customElements.define("tm252-toolbar", TM252Toolbar);

const app = createApp({
    data() {
        return {
            biting: false,
            caught: false,
            lost: false,
            playing: false,
            start: 0,
            value: "100",
        };
    },
    methods: {
        sliderMove() {
            if (!this.caught && !this.lost) {
                if (this.value === "0" && !this.playing) {
                    this.playing = true;
                    setTimeout(() => { this.biting = true; }, 3000 + Math.random() * 10000);
                } else if (this.biting) {
                    const timestamp = (new Date()).getTime();
                    if (this.start === null) {
                        this.start = timestamp;
                    } else {
                        const speed = (timestamp - this.start) / Number.parseInt(this.value)
                        if (speed < 40) {
                            this.lost = true;
                            this.biting = false;
                        }
                    }
                    if (this.value === "100" && !this.lost) {
                        this.caught = true;
                        this.biting = false;
                    }
                }
            }                   
        },
        replay() {
            this.biting = false;
            this.playing = false;
            this.caught = false;
            this.lost = false;
            this.start = null;
            this.value = "100";
        },
    },
    template: `<h2 class="text-end">Fishing</h2>
    <div class="d-flex flex-row">
        <input type="range" min="0" max="100" v-model="value" @input="sliderMove" style="writing-mode: vertical-lr;"/>
        <div class="flex-grow-1 ps-4" aria-live="assertive">
            <p v-if="!playing">Pull the slider to the top to throw your hook.</p>
            <p v-if="playing && !biting && !caught && !lost">Wait for a fish to bite.</p>
            <p v-if="biting">There's a fish biting! Gently and smoothly reel it in by moving the slider down.</p>
            <p v-if="caught">You caught the fish!</p>
            <p v-if="lost">You broke your fishing line.</p>
            <button v-if="caught || lost" @click="replay" class="btn btn-primary">Play again</button>
        </div>
    </div>`,
});


app.mount("#fishing");