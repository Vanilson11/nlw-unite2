import { DataParticipantes } from "./Data.js";

export class UpdateListHtml{
    #tbody = document.querySelector('tbody');

    async updateListHtml(participants){
        this.#tbody.innerHTML = "";

        participants.forEach(participant => {
            const dataInscricao = dayjs(Date.now()).to(participant.dataInscricao);
            const dataCheckIn = dayjs(Date.now()).to(participant.dataCheckIn);

            if(participant.dataCheckIn == null){
                this.#tbody.innerHTML += `
                <tr>
                    <td>
                        <strong>${participant.nome}</strong>
                        <br>
                        <small>${participant.email}</small>
                    </td>
                    <td>${dataInscricao}</td>
                    <td>
                        <div class="checkin-btns">
                            <button class="check-in" data-email="${participant.email}">Confirmar check-in</button>
                            <i class="ph ph-trash btn-delete" data-email="${participant.email}"></i>
                        </div>
                    </td>
                </tr>
                `

                return;
            }

            this.#tbody.innerHTML += `
                <tr>
                    <td>
                        <strong>${participant.nome}</strong>
                        <br>
                        <small>${participant.email}</small>
                    </td>
                    <td>${dataInscricao}</td>
                    <td>
                        <div class="checkin-btns">
                            ${dataCheckIn}
                            <i class="ph ph-trash btn-delete" data-email="${participant.email}"></i>
                        </div>
                    </td>
                </tr>
            `
        });

        this.confirmarCheckIn();
        this.deleteParticipants();
    }

    confirmarCheckIn(){
        const btnCheckIn = document.querySelectorAll(".check-in");

        btnCheckIn.forEach(btn => {
            btn.addEventListener("click", (event) => {
                event.preventDefault();

                const result = confirm("Tem certeza que deseja realizar o check-in?");

                if(!result) return;

                const email = event.target.dataset.email;

                const updateParticipant = new DataParticipantes().updateParticipant(email);
            });
        });
    }

    deleteParticipants(){
        const btnDelete = document.querySelectorAll(".btn-delete");

        btnDelete.forEach(btn => {
            btn.addEventListener("click", (event) => {
                const { email } = event.target.dataset;
                const data = DataParticipantes.getData();
                
                const participantIndex = data.findIndex(participant => participant.email === email);
                
                if(participantIndex === -1){
                    alert("Error: Participante não encontrado.");
                    return;
                };

                const result = confirm("Você tem certeza que deseja exluir esse participante da lista?");

                if(!result) return;

                data.splice(participantIndex, 1);

                localStorage.setItem("participantes", JSON.stringify(data));

                this.updateListHtml(data);
            });
        })
    }
}