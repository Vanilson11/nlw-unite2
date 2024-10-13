import { DataParticipantes } from "./Data.js";

export class Modal{
    modalElement = document.querySelector(".modal");
    name;
    email

    showModal(name, email, form) {
        this.name = name;
        this.email = email;

        this.modalElement.classList.remove("hidden");
        this.modalElement.classList.add("open");

        this.modalElement.style.animation = "slideToLeft .3s ease-in-out forwards";

        this.createModal();

        const btnConfirm = this.modalElement.querySelector("#btn-confirm");
        const btnCancel = this.modalElement.querySelector("#btn-cancel");

        this.addParticipant(btnConfirm, btnCancel, form);
    }

    createModal(){
        const modalWrapper = this.modalElement.querySelector(".modal-wrapper");
        modalWrapper.innerHTML = `
            <h2>Confirmação de Inscrição</h2>
            <div class="user-infos">
                <p><strong>Nome</strong>: <span id="modal-name">${this.name}</span></p>
                <p><strong>E-mail</strong>: <span id="modal-email">${this.email}</span></p>
            </div>
            <div class="modal-btns">
                <button id="btn-confirm">Confirmar</button>
                <button id="btn-cancel">Cancelar</button>
            </div>
        `
    }

    addParticipant(btnConfirm, btnCancel, form) {
        btnConfirm.onclick = (event) => {
            event.preventDefault();
            const { id } = event.target;
                
            if(id === "btn-confirm"){
                const participante = new DataParticipantes().createParticipant(this.name, this.email);
                DataParticipantes.updateListData(participante);

                form.reset();

                this.modalElement.classList.remove("open");
                this.modalElement.classList.add("hidden");
                this.modalElement.style.animation = "";
            }
        }

        btnCancel.onclick = (event) => {
            event.preventDefault();
            const { id } = event.target;

            if(id === "btn-cancel"){
                this.modalElement.classList.remove("open");
                this.modalElement.classList.add("hidden");
                this.modalElement.style.animation = "";
            }
        }
    }
}