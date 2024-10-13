import { UpdateListHtml } from "./UpdateListHtml.js";

export class DataParticipantes{
    static #data = JSON.parse(localStorage.getItem("participantes")) || [];
    static getData(){
        return this.#data;
    };

    static updateListData(participante){
        const participantEmailExists = this.#data.find(p => p.email === participante.email);

        if(participantEmailExists){
            Toastify({
                text: "Já existe um participante com esse e-mail.",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "#C62E2E",
                },
            }).showToast();
            return;
        };

        this.#data = [participante, ...this.#data];

        Toastify({
            text: "Participante cadastrado com sucesso!.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#F48F56",
            },
        }).showToast();

        new UpdateListHtml().updateListHtml(DataParticipantes.#data);

        localStorage.setItem("participantes", JSON.stringify(this.#data));
    }

    createParticipant(nome, email){
        const participant = {
            nome: nome,
            email: email,
            dataInscricao: new Date(),
            dataCheckIn: null
        }
        return participant;
    }

    updateParticipant(email){
        const participantAlter = DataParticipantes.#data.find(p => p.email === email);
        
        participantAlter.dataCheckIn = new Date();

        localStorage.setItem("participantes", JSON.stringify(DataParticipantes.#data));
        
        new UpdateListHtml().updateListHtml(DataParticipantes.#data);
    }
}