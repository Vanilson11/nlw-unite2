import { Modal } from "./Modal.js";

export class Events{
    static async formSubmit(){
        const form = document.querySelector('form');

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const dataForm = new FormData(event.target);
            const name = dataForm.get("name");
            const email = dataForm.get("email");

            new Modal().showModal(name, email, event.target);
        });
    }
}